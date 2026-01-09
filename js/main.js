/* Path: js/main.js */

// 1. إعدادات الترجمة
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_courses: "الكورسات",
        nav_gallery: "المعرض",
        nav_articles: "المقالات",
        nav_library: "المكتبة",
        nav_contact: "تواصل",
        nav_login: "دخول",
        nav_account: "حسابي",
        footer_rights: "جميع الحقوق محفوظة © مصطفى كمشكاة 2025",
        home_welcome: "كمشكاة",
        btn_start_learning: "ابدأ رحلة التعلم",
        btn_view_gallery: "شوف الإبداع",
        stat_followers: "زائر للموقع",
        stat_courses: "كورس متاح",
        stat_ambition: "طموح بلا حدود",
        gallery_title: "معرض التصميمات",
        btn_download: "تحميل",
        btn_share_img: "مشاركة",
        share_msg: "تم نسخ الرابط! شاركه مع أصحابك.",
        login_welcome: "أهلاً بيك تاني! 👋",
    },
    en: {
        nav_home: "Home",
        nav_courses: "Courses",
        nav_gallery: "Gallery",
        nav_articles: "Articles",
        nav_library: "Library",
        nav_contact: "Contact",
        nav_login: "Login",
        nav_account: "My Account",
        footer_rights: "All Rights Reserved © Mostafa Kamshkat 2025",
        home_welcome: "Kamshkat",
        btn_start_learning: "Start Learning",
        btn_view_gallery: "View Gallery",
        stat_followers: "Visitors",
        stat_courses: "Courses Available",
        stat_ambition: "Limitless Ambition",
        gallery_title: "Design Gallery",
        btn_download: "Download",
        btn_share_img: "Share",
        share_msg: "Link copied! Share it with friends.",
    }
};

let currentLang = localStorage.getItem('kamshkat_lang') || 'ar';

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang); 
    loadNavbarFooter();       
    initProtection();         
    
    // تشغيل الأيقونات فوراً
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    // إعادة محاولة تشغيل الأيقونات للتأكيد
    setTimeout(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); }, 500);
    setTimeout(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); }, 1500);

    initCounters();
    injectLightboxStyles(); 

    if(document.body.dataset.page === 'gallery') {
        initGalleryPage();
    }
});

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('kamshkat_lang', currentLang);
    setLanguage(currentLang);
    loadNavbarFooter(); 
    location.reload(); 
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if(translations[lang][key]) {
            if(el.tagName === 'INPUT') el.placeholder = translations[lang][key];
            else el.innerText = translations[lang][key];
        }
    });
}

function t(key) { return translations[currentLang][key] || key; }

function loadNavbarFooter() {
    const langBtnText = currentLang === 'ar' ? 'En' : 'عربي';
    
    const navbarHTML = `
    <nav class="fixed top-0 w-full glass-panel z-50 !bg-white/90 backdrop-blur-md border-b border-white/50 h-20 flex items-center shadow-sm transition-all duration-300">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-2 font-black text-2xl text-emerald-800 hover:scale-105 transition">
                <img src="images/ui/logo.png" class="w-10 h-10 drop-shadow-sm object-contain" alt="Logo" onerror="this.style.display='none'"> 
                <span data-i18n="home_welcome">${t('home_welcome')}</span>
            </a>
            
            <div class="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200">
                <a href="index.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_home">${t('nav_home')}</a>
                <a href="courses.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_courses">${t('nav_courses')}</a>
                <a href="gallery.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_gallery">${t('nav_gallery')}</a>
                <a href="articles.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_articles">${t('nav_articles')}</a>
                <a href="library.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_library">${t('nav_library')}</a>
                <a href="contact.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_contact">${t('nav_contact')}</a>
            </div>

            <div class="flex items-center gap-2">
                <button onclick="toggleLanguage()" class="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition border border-emerald-200">
                    ${langBtnText}
                </button>
                
                <div id="auth-area" class="hidden md:block">
                    <a href="login.html" class="bg-emerald-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 text-sm" data-i18n="nav_login">${t('nav_login')}</a>
                </div>

                <button id="mobile-menu-btn" onclick="toggleMobileMenu()" class="md:hidden p-2 rounded-lg bg-slate-100 text-emerald-800 hover:bg-emerald-100 transition border border-slate-200">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <div id="mobile-menu" class="hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 p-4 shadow-xl flex flex-col gap-2 md:hidden animate-fade-in-down origin-top">
            <a href="index.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="home" class="w-5 h-5 text-emerald-600"></i> ${t('nav_home')}</a>
            <a href="courses.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="zap" class="w-5 h-5 text-emerald-600"></i> ${t('nav_courses')}</a>
            <a href="gallery.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="image" class="w-5 h-5 text-emerald-600"></i> ${t('nav_gallery')}</a>
            <a href="articles.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="pen-tool" class="w-5 h-5 text-emerald-600"></i> ${t('nav_articles')}</a>
            <a href="library.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="library" class="w-5 h-5 text-emerald-600"></i> ${t('nav_library')}</a>
            <a href="contact.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="phone" class="w-5 h-5 text-emerald-600"></i> ${t('nav_contact')}</a>
            <div class="h-px bg-slate-100 my-1"></div>
            <a href="login.html" class="p-3 rounded-xl bg-emerald-600 text-white font-bold text-center shadow-lg" id="mobile-auth-btn">${t('nav_login')}</a>
        </div>
    </nav>`;

    const footerHTML = `
    <footer class="text-center py-8 mt-auto relative z-10">
        <div class="glass-panel inline-block px-8 py-4 rounded-full bg-white/50 backdrop-blur-md border border-white">
            <p class="text-emerald-800 font-bold text-sm" data-i18n="footer_rights">${t('footer_rights')}</p>
        </div>
    </footer>`;

    if(document.getElementById('header-ph')) document.getElementById('header-ph').innerHTML = navbarHTML;
    if(document.getElementById('footer-ph')) document.getElementById('footer-ph').innerHTML = footerHTML;
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

window.enrollInCourse = function(courseId, courseType) {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert("🔒 لازم تسجل دخول الأول يا بطل عشان تقدر تشترك!");
        window.location.href = "login.html";
        return;
    }

    const sCourseId = String(courseId);
    let course = null;
    if (courseType === 'udemy' && typeof window.udemyData !== 'undefined') {
        course = window.udemyData.find(c => String(c.id) === sCourseId);
    } else if (courseType === 'academy' && typeof window.kameshkahData !== 'undefined') {
        course = window.kameshkahData.find(c => String(c.id) === sCourseId);
    }

    if (!course) { 
        alert("بيانات الكورس غير متاحة حالياً."); 
        return; 
    }

    const btn = document.getElementById('c-action-btn');
    if(btn) {
        btn.innerHTML = `<i class="animate-spin" data-lucide="loader-2"></i> جاري التسجيل...`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        btn.disabled = true;
    }

    const db = firebase.database();
    const enrollmentRef = db.ref('users/' + user.uid + '/enrolledCourses/' + sCourseId);

    enrollmentRef.once('value', (snapshot) => {
        if (snapshot.exists()) {
            if(confirm("أنت مشترك بالفعل في هذا الكورس! هل تريد الذهاب للمشاهدة؟")) {
                 window.location.href = `watch.html?id=${sCourseId}`;
            } else {
                if(btn) { btn.innerHTML = "أنت مشترك بالفعل"; btn.disabled = false; }
            }
        } else {
            if(confirm("هل تريد الاشتراك في هذا الكورس وإضافته للوحة التحكم؟")) {
                enrollmentRef.set({
                    id: sCourseId,
                    type: courseType,
                    title: course.titleAr,
                    img: course.img,
                    progress: 0,
                    status: 'active',
                    completedLessons: [],
                    enrolledAt: new Date().toISOString()
                }).then(() => {
                    alert("تم الاشتراك بنجاح! 🎉\nتمت إضافة الكورس للوحة التحكم.");
                    window.location.href = "dashboard.html";
                }).catch((error) => {
                    console.error(error);
                    alert("حصلت مشكلة في الاشتراك، حاول تاني.");
                    if(btn) { btn.innerText = "اشترك وابدأ التعلم"; btn.disabled = false; }
                });
            } else {
                if(btn) { btn.innerText = "اشترك وابدأ التعلم"; btn.disabled = false; }
            }
        }
    });
}

// -------------------------------------------------------------------------
// 6. وظائف المعرض (تحديث هام جداً للصور)
// -------------------------------------------------------------------------
let visibleGalleryCount = 0;
const GALLERY_INCREMENT = 10;
const MAX_IMAGES = 100;

function initGalleryPage() {
    const grid = document.getElementById('gallery-grid');
    if(grid) grid.innerHTML = '';
    loadGalleryImages();
    const btn = document.getElementById('load-more-gallery');
    if(btn) { btn.addEventListener('click', loadGalleryImages); }
}

function loadGalleryImages() {
    const grid = document.getElementById('gallery-grid');
    const btn = document.getElementById('load-more-gallery');
    if(!grid) return;
    
    let start = visibleGalleryCount + 1;
    let end = start + GALLERY_INCREMENT - 1;

    if (start > MAX_IMAGES) {
        if(btn) btn.style.display = 'none';
        return;
    }

    let html = '';
    for(let i=start; i<=end; i++) {
        // محاولة تحميل الصورة من المسار الصحيح
        const imgSrc = `images/gallery/${i}.jpg`; 
        // صورة احتياطية (Placeholder) تظهر لو صورتك الأصلية مش موجودة
        const fallbackLogic = `this.onerror=null; this.src='https://placehold.co/600x800/dcfce7/065f46?text=صورة+${i}';`;

        html += `
        <div class="break-inside-avoid mb-6 glass-panel rounded-2xl overflow-hidden group relative bg-white/40 border border-white hover:shadow-xl transition duration-300">
            <div class="cursor-pointer relative" onclick="openLightbox(this.querySelector('img').src)">
                <img src="${imgSrc}" loading="lazy" class="w-full h-auto block transform transition duration-500 group-hover:scale-105" onerror="${fallbackLogic}">
                
                <div class="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div class="bg-white/90 text-emerald-900 p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition">
                        <i data-lucide="zoom-in" class="w-6 h-6"></i>
                    </div>
                </div>
            </div>
            
            <div class="p-3 flex justify-between items-center bg-white/80 backdrop-blur-md border-t border-white/50">
                <div class="flex gap-2">
                    <button onclick="toggleLike(${i})" class="flex items-center gap-1.5 text-slate-500 hover:text-red-500 transition group/like">
                        <i data-lucide="heart" class="w-5 h-5 transition transform group-active/like:scale-125" id="heart-${i}"></i>
                        <span id="likes-count-${i}" class="text-xs font-bold font-sans mt-0.5">0</span>
                    </button>
                </div>

                <div class="flex gap-2">
                    <button onclick="downloadImage(this.closest('.break-inside-avoid').querySelector('img').src)" class="text-emerald-600 hover:bg-emerald-50 p-2 rounded-lg transition" title="تحميل">
                        <i data-lucide="download" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>`;
    }

    grid.insertAdjacentHTML('beforeend', html);
    visibleGalleryCount = end;
    
    // تشغيل الأيقونات فوراً للعناصر الجديدة
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    if(typeof firebase !== 'undefined') listenToLikes(visibleGalleryCount);
}

// دالة التحميل
window.downloadImage = function(src) {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.substring(src.lastIndexOf('/') + 1) || 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دالة فتح اللايت بوكس
window.openLightbox = function(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if(!lb || !img) return;
    img.src = src;
    lb.classList.remove('hidden');
    lb.classList.add('flex');
}

window.closeLightbox = function() {
    const lb = document.getElementById('lightbox');
    lb.classList.add('hidden');
    lb.classList.remove('flex');
}

// التفاعل مع اللايكات
window.toggleLike = function(id) {
    if(typeof firebase === 'undefined') return;
    const db = firebase.database();
    const likeRef = db.ref('likes/' + id);
    const storageKey = `liked_${id}`;
    const isLiked = localStorage.getItem(storageKey);

    likeRef.transaction((currentLikes) => {
        if (currentLikes === null) currentLikes = 0;
        if (isLiked) {
            localStorage.removeItem(storageKey);
            updateHeartUI(id, false);
            return currentLikes - 1;
        } else {
            localStorage.setItem(storageKey, 'true');
            updateHeartUI(id, true);
            return currentLikes + 1;
        }
    });
}

window.listenToLikes = function(limit) {
    if(typeof firebase === 'undefined') return;
    const db = firebase.database();
    for(let i=1; i<=limit; i++) {
        db.ref('likes/' + i).on('value', (snapshot) => {
            const countEl = document.getElementById(`likes-count-${i}`);
            if(countEl) countEl.innerText = snapshot.val() || 0;
            updateHeartUI(i, localStorage.getItem(`liked_${i}`));
        });
    }
}

function updateHeartUI(id, isLiked) {
    const icon = document.getElementById(`heart-${id}`);
    if(icon) {
        if(isLiked) {
            icon.classList.add('fill-red-500', 'text-red-500');
            icon.classList.remove('text-slate-400');
        } else {
            icon.classList.remove('fill-red-500', 'text-red-500');
            icon.classList.add('text-slate-400');
        }
    }
}

function initCounters() {
    const counters = document.querySelectorAll('.counter-number');
    if(counters.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const el = entry.target;
                const target = +el.dataset.target || 0;
                animateValue(el, 0, target, 2500); 
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.2 });
    counters.forEach(c => observer.observe(c));
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

function initProtection() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('dragstart', function(e) { e.preventDefault(); });
}

function injectLightboxStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        #lightbox-img { max-height: 85vh; max-width: 90vw; border-radius: 12px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
        .masonry-grid { column-count: 1; column-gap: 1.5rem; }
        @media (min-width: 640px) { .masonry-grid { column-count: 2; } }
        @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
        .animate-fade-in-down { animation: fadeInDown 0.3s ease-out forwards; }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.appendChild(style);
}