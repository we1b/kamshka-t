/* Path: js/dashboard.js */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            fetchUserData(user);
            initRamadanTracker(user); 
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

// التبديل بين الأقسام
window.showSection = function(sectionId) {
    document.querySelectorAll('.content-section').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById('section-' + sectionId);
    if (target) {
        target.classList.remove('hidden');
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}

let currentUserData = null;
let currentFirebaseUser = null;
let selectedRamadanDay = 1; 

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
            // بيانات افتراضية لو المستخدم جديد
            const defaultData = {
                username: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                phone: "",
                points: 0 
            };
            updateDashboardUI(defaultData, user);
        }
    });
}

function updateDashboardUI(data, user) {
    const nameEl = document.getElementById('user-name-display');
    const emailEl = document.getElementById('user-email-display');
    const avatarEl = document.getElementById('user-avatar');
    
    if(nameEl) nameEl.innerText = data.username || user.displayName || "مستخدم كمشكاة";
    if(emailEl) emailEl.innerText = data.email || user.email;
    if(avatarEl) avatarEl.src = data.photoURL || user.photoURL || "images/ui/logo.png";
    
    const pointsEl = document.getElementById('user-points');
    if(pointsEl) pointsEl.innerText = data.points || 0;

    const editNameInput = document.getElementById('edit-name');
    const editPhoneInput = document.getElementById('edit-phone');
    if(editNameInput) editNameInput.value = data.username || user.displayName || "";
    if(editPhoneInput) editPhoneInput.value = data.phone || "";

    // تحميل الكورسات الحقيقية فقط
    loadEnrolledCourses(data.enrolledCourses);
}

// دالة حذف الكورس (إلغاء الاشتراك)
window.unsubscribeCourse = function(courseId) {
    if (!currentFirebaseUser) return;
    if (confirm("متأكد إنك عايز تحذف الكورس ده من لوحتك؟ 🗑️")) {
        const db = firebase.database();
        db.ref('users/' + currentFirebaseUser.uid + '/enrolledCourses/' + courseId).remove()
        .then(() => {
            alert("تم حذف الكورس.");
        })
        .catch((error) => {
            console.error(error);
            alert("حصلت مشكلة في الحذف.");
        });
    }
}

function loadEnrolledCourses(enrolledCoursesData) {
    const list = document.getElementById('my-courses-list');
    if(!list) return;

    list.innerHTML = ''; // مسح القديم

    let myCourses = [];
    if (enrolledCoursesData) {
        myCourses = Object.values(enrolledCoursesData);
    }

    if (myCourses.length === 0) {
        list.innerHTML = `
            <div class="text-center py-12 border-2 border-dashed border-emerald-100 rounded-3xl bg-white/40">
                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm animate-bounce">
                    <i data-lucide="book-open" class="text-emerald-500 w-8 h-8"></i>
                </div>
                <p class="text-slate-500 font-bold mb-2">لسه مفيش كورسات.. الساحة فاضية!</p>
                <a href="courses.html" class="inline-block bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-emerald-700 transition shadow-lg">تصفح الكورسات</a>
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    list.innerHTML = myCourses.map(c => {
        const isCompleted = c.status === 'completed';
        const progress = isCompleted ? 100 : (c.progress || 0);
        
        let actionButtons = '';
        if (isCompleted) {
            actionButtons = `
                <button onclick="generateCertificate('${c.title}')" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition flex items-center gap-2 shadow-md">
                    <i data-lucide="award" class="w-4 h-4"></i> الشهادة
                </button>
            `;
        } else {
            actionButtons = `
                <a href="watch.html?id=${c.id}" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition flex items-center gap-2 shadow-md">
                    <i data-lucide="play" class="w-4 h-4"></i> استكمال
                </a>
            `;
        }

        return `
        <div class="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition group relative">
            <!-- زر الحذف -->
            <button onclick="unsubscribeCourse('${c.id}')" class="absolute top-3 left-3 text-slate-300 hover:text-red-500 transition" title="حذف الكورس">
                <i data-lucide="trash-2" class="w-5 h-5"></i>
            </button>

            <div class="w-full md:w-48 h-32 rounded-xl overflow-hidden relative shrink-0">
                <img src="${c.img}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='images/ui/logo.png'">
                ${isCompleted ? '<div class="absolute inset-0 bg-black/50 flex items-center justify-center"><i data-lucide="check" class="text-white w-10 h-10"></i></div>' : ''}
            </div>

            <div class="flex-1 flex flex-col justify-center">
                <div class="flex justify-between items-start mb-2 pr-2">
                    <h3 class="font-bold text-lg text-slate-800 line-clamp-1">${c.title}</h3>
                </div>
                <div class="flex items-center gap-2 mb-3">
                    <div class="w-full bg-slate-100 rounded-full h-2"><div class="bg-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out" style="width: ${progress}%"></div></div>
                    <span class="text-xs font-bold text-slate-500">${progress}%</span>
                </div>
                <div class="self-end flex gap-2">
                    ${actionButtons}
                </div>
            </div>
        </div>
    `}).join('');
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
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
    userRef.update({ username: newName, phone: newPhone }).then(() => {
        alert("تم تحديث بياناتك بنجاح! 🎉");
        currentFirebaseUser.updateProfile({ displayName: newName });
    }).catch((error) => {
        console.error(error);
        alert("حصلت مشكلة في الحفظ.");
    }).finally(() => {
        btn.innerText = originalBtnText;
        btn.disabled = false;
    });
}

window.generateCertificate = function(courseName) {
    let defaultName = document.getElementById('user-name-display').innerText;
    let userName = prompt("اكتب الاسم اللي عايزه يظهر في الشهادة:", defaultName);
    if (!userName) return; 

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'images/ui/certificate-template.jpg'; 
    const btn = event.target.closest('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'جاري...';
    btn.disabled = true;

    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.font = 'bold 80px "Cairo", sans-serif'; 
        ctx.fillStyle = '#1e293b'; 
        ctx.textAlign = 'center';
        ctx.fillText(userName, canvas.width / 2, canvas.height / 2);
        ctx.font = '50px "Cairo", sans-serif';
        ctx.fillStyle = '#059669'; 
        ctx.fillText(courseName, canvas.width / 2, canvas.height / 2 + 120);
        const link = document.createElement('a');
        link.download = `Certificate-${courseName}.png`;
        link.href = canvas.toDataURL();
        link.click();
        btn.innerHTML = originalText;
        btn.disabled = false;
    };
    img.onerror = () => {
        alert("صورة قالب الشهادة مش موجودة!");
        btn.innerHTML = originalText;
        btn.disabled = false;
    };
}

// ... (تحدي رمضان زي ما هو في الكود السابق) ...
// (منعاً لتكرار الكود الطويل، استخدم نفس دالة initRamadanTracker من الرد السابق)
function initRamadanTracker(user) { /* ... */ }
function selectRamadanDay(day, user) { /* ... */ }
window.saveRamadanDay = function() { /* ... */ }