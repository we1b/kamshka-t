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
        currentUserData = data; // تخزين البيانات محلياً
        
        if (data) {
            updateDashboardUI(data, user);
        } else {
            // بيانات افتراضية
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
    // تحديث السايد بار
    document.getElementById('user-name-display').innerText = data.username || user.displayName || "مستخدم كمشكاة";
    document.getElementById('user-email-display').innerText = data.email || user.email;
    document.getElementById('user-avatar').src = data.photoURL || user.photoURL || "images/users/avatar-placeholder.png";

    // ملء فورم الإعدادات بالبيانات الحالية
    const editNameInput = document.getElementById('edit-name');
    const editPhoneInput = document.getElementById('edit-phone');
    
    if(editNameInput) editNameInput.value = data.username || user.displayName || "";
    if(editPhoneInput) editPhoneInput.value = data.phone || "";
}

// دالة حفظ التغييرات (جديد)
function saveProfileChanges() {
    if (!currentFirebaseUser) return;

    const newName = document.getElementById('edit-name').value;
    const newPhone = document.getElementById('edit-phone').value;
    const btn = document.querySelector('#profile-form button');

    // تأثير التحميل
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
        // تحديث البروفايل في فايربيس نفسه كمان (اختياري بس مستحسن)
        currentFirebaseUser.updateProfile({ displayName: newName });
    }).catch((error) => {
        console.error(error);
        alert("حصلت مشكلة في الحفظ، حاول تاني.");
    }).finally(() => {
        btn.innerText = originalBtnText;
        btn.disabled = false;
    });
}