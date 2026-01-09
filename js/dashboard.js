/* Path: js/dashboard.js */

// ... (نفس المتغيرات العامة والقوالب) ...

let currentUserData = null;
let currentFirebaseUser = null;
let selectedRamadanDay = 1;

// القوالب الثابتة
const PRAYERS_TEMPLATE = [
    { id: 'fajr', name: 'الفجر', time: '04:50 ص' },
    { id: 'dhuhr', name: 'الظهر', time: '12:05 م' },
    { id: 'asr', name: 'العصر', time: '03:15 م' },
    { id: 'maghrib', name: 'المغرب', time: '05:45 م' },
    { id: 'isha', name: 'العشاء', time: '07:15 م' }
];

const HABITS_TEMPLATE = [
    { id: 'sunan_rawatib', name: 'السنن الرواتب', icon: 'layers' },
    { id: 'duha', name: 'صلاة الضحى', icon: 'sun' },
    { id: 'witr', name: 'الوتر', icon: 'moon' },
    { id: 'morning_adhkar', name: 'أذكار الصباح', icon: 'sunrise' },
    { id: 'evening_adhkar', name: 'أذكار المساء', icon: 'sunset' },
    { id: 'tarawih', name: 'التراويح', icon: 'star' }
];

// ... (نفس كود الحالة الحالية) ...
let currentDayData = {
    prayers: {},
    habits: {},
    quran: false
};
let userSettings = {};

document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            currentFirebaseUser = user;
            fetchUserData(user);
            initRamadanApp(user); 
        } else {
            window.location.href = 'login.html';
        }
    });

    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            saveProfileChanges();
        });
    }
});

// ... (نفس دالة showSection و fetchUserData و updateDashboardUI) ...
window.showSection = function(sectionId) {
    document.querySelectorAll('.content-section').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById('section-' + sectionId);
    if (target) {
        target.classList.remove('hidden');
        if (sectionId === 'ramadan') {
            loadRamadanDayData(selectedRamadanDay);
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}

function fetchUserData(user) {
    const db = firebase.database();
    db.ref('users/' + user.uid).on('value', (snapshot) => {
        const data = snapshot.val();
        currentUserData = data;
        if (data) {
            updateDashboardUI(data, user);
        }
    });
}

function updateDashboardUI(data, user) {
    document.getElementById('user-name-display').innerText = data.username || user.displayName || "مستخدم كمشكاة";
    document.getElementById('user-email-display').innerText = data.email || user.email;
    document.getElementById('user-avatar').src = data.photoURL || user.photoURL || "images/ui/logo.png";
    
    // تحميل الكورسات (الحقيقية فقط)
    loadEnrolledCourses(data.enrolledCourses);
}


// دالة حذف الكورس (إلغاء الاشتراك)
window.unsubscribeCourse = function(courseId) {
    if (!currentFirebaseUser) return;
    
    if (confirm("هل أنت متأكد أنك تريد إلغاء الاشتراك في هذا الكورس؟ 😢")) {
        const db = firebase.database();
        db.ref('users/' + currentFirebaseUser.uid + '/enrolledCourses/' + courseId).remove()
        .then(() => {
            alert("تم حذف الكورس من لوحة التحكم بنجاح.");
        })
        .catch((error) => {
            console.error("Error removing course: ", error);
            alert("حدث خطأ أثناء حذف الكورس.");
        });
    }
}

function loadEnrolledCourses(enrolledCoursesData) {
    const list = document.getElementById('my-courses-list');
    if(!list) return;
    list.innerHTML = '';

    // تحويل البيانات لمصفوفة
    let myCourses = enrolledCoursesData ? Object.values(enrolledCoursesData) : [];

    // إزالة الكورسات الوهمية القديمة (اختياري، لكن يفضل الاعتماد على الداتا الحقيقية فقط)
    // myCourses = myCourses.filter(c => c.id !== 'kameshkah-freelance' && c.id !== 'udemy-autocad');

    if (myCourses.length === 0) {
        list.innerHTML = `<div class="text-center py-10 text-slate-500">لسه مفيش كورسات.. اشترك في كورس وابدأ!</div>`;
        return;
    }

    list.innerHTML = myCourses.map(c => {
        const isCompleted = c.status === 'completed';
        const progress = isCompleted ? 100 : (c.progress || 0);
        return `
        <div class="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 shadow-sm relative group">
            <!-- زر حذف الكورس -->
            <button onclick="unsubscribeCourse('${c.id}')" class="absolute top-2 left-2 text-red-400 hover:text-red-600 hover:bg-red-50 p-1 rounded-full transition opacity-0 group-hover:opacity-100" title="إلغاء الاشتراك">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>

            <div class="w-full md:w-32 h-20 rounded-xl overflow-hidden relative shrink-0">
                <img src="${c.img}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 flex flex-col justify-center">
                <h3 class="font-bold text-slate-800">${c.title}</h3>
                <div class="w-full bg-slate-100 rounded-full h-2 my-2"><div class="bg-emerald-500 h-2 rounded-full" style="width: ${progress}%"></div></div>
                <div class="flex justify-between items-center">
                    <a href="watch.html?id=${c.id}" class="text-xs font-bold text-emerald-600 hover:underline">استكمال المشاهدة</a>
                    <span class="text-xs text-slate-400">${progress}% مكتمل</span>
                </div>
            </div>
        </div>`;
    }).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ... (باقي دوال رمضان والإعدادات والشهادة كما هي في الكود السابق) ...
// (اختصاراً للمساحة، سأضع الدوال الأساسية فقط، يرجى التأكد من وجودها)

function initRamadanApp(user) { initRamadanDays(); /* ... */ }
function initRamadanDays() { /* ... */ }
// ... وهكذا لباقي الدوال