/* Path: js/dashboard.js */

document.addEventListener('DOMContentLoaded', () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            fetchUserData(user);
        } else {
            window.location.href = 'login.html';
        }
    });

    // ربط فورم التعديل
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            saveProfileChanges();
        });
    }
});

let currentUserData = null;
let currentFirebaseUser = null;

function fetchUserData(user) {
    currentFirebaseUser = user;
    const db = firebase.database();
    const userRef = db.ref('users/' + user.uid);

    userRef.on('value', (snapshot) => {
        const data = snapshot.val();
        currentUserData = data;
        
        if (data) {
            updateDashboardUI(data, user);
        } else {
            const defaultData = {
                username: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                phone: ""
            };
            updateDashboardUI(defaultData, user);
        }
    });
}

function updateDashboardUI(data, user) {
    document.getElementById('user-name-display').innerText = data.username || user.displayName || "مستخدم كمشكاة";
    document.getElementById('user-email-display').innerText = data.email || user.email;
    document.getElementById('user-avatar').src = data.photoURL || user.photoURL || "images/users/avatar-placeholder.png";

    const editNameInput = document.getElementById('edit-name');
    const editPhoneInput = document.getElementById('edit-phone');
    
    if(editNameInput) editNameInput.value = data.username || user.displayName || "";
    if(editPhoneInput) editPhoneInput.value = data.phone || "";

    // تحميل الكورسات بشريط التقدم
    loadEnrolledCourses();
}

function saveProfileChanges() {
    if (!currentFirebaseUser) return;

    const newName = document.getElementById('edit-name').value;
    const newPhone = document.getElementById('edit-phone').value;
    const btn = document.querySelector('#profile-form button');

    const originalBtnText = btn.innerText;
    btn.innerText = "جاري الحفظ...";
    btn.disabled = true;

    const db = firebase.database();
    const userRef = db.ref('users/' + currentFirebaseUser.uid);

    userRef.update({
        username: newName,
        phone: newPhone
    }).then(() => {
        alert("تم تحديث بياناتك بنجاح! 🎉");
        currentFirebaseUser.updateProfile({ displayName: newName });
    }).catch((error) => {
        console.error(error);
        alert("حصلت مشكلة في الحفظ، حاول تاني.");
    }).finally(() => {
        btn.innerText = originalBtnText;
        btn.disabled = false;
    });
}

// --- دالة عرض الكورسات بشريط التقدم (الجديدة) ---
function loadEnrolledCourses() {
    const list = document.getElementById('my-courses-list');
    if(!list) return;

    // بيانات وهمية للكورسات المشترك فيها (عشان التجربة)
    // في المستقبل هتيجي من Firebase
    const myCourses = [
        {
            title: "أساسيات العمل الحر (Freelancing 101)",
            progress: 75, // النسبة المئوية
            lastLesson: "كيفية كتابة البروبوزال",
            img: "images/courses-covers/kameshkah/freelance-master.webp",
            url: "course-details.html?id=k-02&type=academy"
        },
        {
            title: "أوتوكاد 3D والنمذجة المتقدمة",
            progress: 30,
            lastLesson: "واجهة البرنامج والأدوات",
            img: "images/courses-covers/udemy/c724.jpg",
            url: "course-details.html?id=724&type=udemy"
        }
    ];

    if (myCourses.length > 0) {
        list.innerHTML = myCourses.map(c => `
            <div class="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition group">
                <!-- صورة الكورس -->
                <div class="w-full md:w-48 h-32 rounded-xl overflow-hidden relative shrink-0">
                    <img src="${c.img}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/300x200/e2e8f0/64748b?text=Course'">
                    <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
                </div>

                <!-- تفاصيل التقدم -->
                <div class="flex-1 flex flex-col justify-center">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-bold text-lg text-slate-800">${c.title}</h3>
                        <span class="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-lg">${c.progress}%</span>
                    </div>
                    
                    <p class="text-xs text-slate-500 font-bold mb-3 flex items-center gap-1">
                        <i data-lucide="play-circle" class="w-3 h-3"></i> توقفت عند: ${c.lastLesson}
                    </p>

                    <!-- شريط التقدم -->
                    <div class="w-full bg-slate-100 rounded-full h-2.5 mb-4 overflow-hidden">
                        <div class="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style="width: ${c.progress}%"></div>
                    </div>

                    <a href="${c.url}" class="self-end text-sm font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 transition">
                        استكمال المشاهدة <i data-lucide="arrow-left" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>
        `).join('');
    } else {
        // لو مفيش كورسات
        list.innerHTML = `
            <div class="text-center py-10 border-2 border-dashed border-emerald-100 rounded-3xl bg-white/40">
                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm animate-bounce">
                    <i data-lucide="book-open" class="text-emerald-500 w-8 h-8"></i>
                </div>
                <h3 class="text-xl font-bold text-emerald-900 mb-2">لسه مبدأتش كورسات؟ 🤔</h3>
                <p class="text-slate-600 mb-6 text-sm font-medium">تصفح الكورسات وابدأ رحلة التعلم دلوقتي!</p>
                <a href="courses.html" class="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200">
                    تصفح الكورسات 🚀
                </a>
            </div>
        `;
    }
    lucide.createIcons();
}