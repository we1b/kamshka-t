/* Path: js/main.js */

// -------------------------------------------------------------------------
// 1. إعدادات الترجمة
// -------------------------------------------------------------------------
const translations = {
    ar: {
        // ... (نفس الترجمات السابقة) ...
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
        home_slogan: "\"استعن بالله ولا تعجز\"",
        btn_start_learning: "ابدأ رحلة التعلم",
        btn_view_gallery: "شوف الإبداع",
        stat_followers: "زائر للموقع",
        stat_courses: "كورس متاح",
        stat_ambition: "طموح بلا حدود",

        gallery_title: "معرض التصميمات",
        gallery_subtitle: "إبداع متجدد . لمسة فنية",
        btn_download: "تحميل",
        btn_share_img: "مشاركة",
        btn_zoom: "تكبير",
        btn_load_more: "عرض المزيد",
        
        share_msg: "تم نسخ الرابط! شاركه مع أصحابك.",
        login_welcome: "أهلاً بيك تاني! 👋",
    },
    en: {
        // ... (Translations) ...
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
        home_slogan: "\"Seek help from Allah and do not lose heart\"",
        btn_start_learning: "Start Learning",
        btn_view_gallery: "View Gallery",
        stat_followers: "Visitors",
        stat_courses: "Courses Available",
        stat_ambition: "Limitless Ambition",

        gallery_title: "Design Gallery",
        gallery_subtitle: "Renewed Creativity . Artistic Touch",
        btn_download: "Download",
        btn_share_img: "Share",
        btn_zoom: "Zoom",
        btn_load_more: "Load More",

        share_msg: "Link copied! Share it with friends.",
        login_welcome: "Welcome Back! 👋",
    }
};

let currentLang = localStorage.getItem('kamshkat_lang') || 'ar';

// -------------------------------------------------------------------------
// 2. التشغيل الرئيسي
// -------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang); 
    loadNavbarFooter();       
    initProtection();         
    lucide.createIcons();     
    initChatbot(); 
    initCounters(); 

    if(document.body.dataset.page === 'gallery') {
        initGalleryPage();
    }
});

// -------------------------------------------------------------------------
// 3. وظائف الترجمة (كما هي)
// -------------------------------------------------------------------------
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

// -------------------------------------------------------------------------
// 4. بناء القائمة (كما هي)
// -------------------------------------------------------------------------
function loadNavbarFooter() {
    const langBtnText = currentLang === 'ar' ? 'En' : 'عربي';
    const navbarHTML = `
    <nav class="fixed top-0 w-full glass-panel z-50 !bg-white/80 backdrop-blur-md border-b border-white/50 h-20 flex items-center">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-2 font-black text-2xl text-emerald-800 hover:scale-105 transition">
                <img src="images/ui/logo.png" class="w-10 h-10 drop-shadow-sm" alt="Logo"> <span data-i18n="home_welcome">${t('home_welcome')}</span>
            </a>
            <div class="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200">
                <a href="index.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_home">${t('nav_home')}</a>
                <a href="courses.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_courses">${t('nav_courses')}</a>
                <a href="gallery.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_gallery">${t('nav_gallery')}</a>
                <a href="articles.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_articles">${t('nav_articles')}</a>
                <a href="library.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_library">${t('nav_library')}</a>
                <a href="contact.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_contact">${t('nav_contact')}</a>
            </div>
            <div class="flex items-center gap-3">
                <button onclick="toggleLanguage()" class="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition border border-emerald-200">${langBtnText}</button>
                <div id="auth-area"><a href="login.html" class="bg-emerald-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 text-sm" data-i18n="nav_login">${t('nav_login')}</a></div>
            </div>
        </div>
    </nav>`;
    const footerHTML = `<footer class="text-center py-8 mt-auto relative z-10"><div class="glass-panel inline-block px-8 py-4 rounded-full"><p class="text-emerald-800 font-bold text-sm" data-i18n="footer_rights">${t('footer_rights')}</p></div></footer>`;
    if(document.getElementById('header-ph')) document.getElementById('header-ph').innerHTML = navbarHTML;
    if(document.getElementById('footer-ph')) document.getElementById('footer-ph').innerHTML = footerHTML;
    lucide.createIcons();
}

// -------------------------------------------------------------------------
// 5. وظائف المعرض (تحديث: 5 صور فقط + زر المشاركة)
// -------------------------------------------------------------------------
let currentGalleryCount = 0; // الكاونتر الحالي
const GALLERY_BATCH_SIZE = 5; // عدد الصور في كل مرة
const MAX_GALLERY_IMAGES = 100; // أقصى عدد صور ممكن يقراه (مثال)

function initGalleryPage() {
    loadGalleryBatch(); // حمل أول 5
    
    const btn = document.getElementById('load-more-gallery');
    if(btn) {
        btn.addEventListener('click', () => {
            loadGalleryBatch(); // حمل الـ 5 اللي بعدهم
        });
    }
}

function loadGalleryBatch() {
    const grid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more-gallery');
    if(!grid) return;
    
    // بنبدأ من آخر رقم وقفنا عنده
    let start = currentGalleryCount + 1;
    let end = start + GALLERY_BATCH_SIZE - 1;
    
    // لو وصلنا للحد الأقصى نخفي الزرار
    if (end >= MAX_GALLERY_IMAGES) {
        if(loadMoreBtn) loadMoreBtn.style.display = 'none';
        end = MAX_GALLERY_IMAGES;
    }

    let html = '';
    for(let i=start; i<=end; i++) {
        const imgSrc = `images/gallery/${i}.jpg`; // المسار الديناميكي
        
        html += `
        <div class="break-inside-avoid mb-6 glass-panel rounded-2xl overflow-hidden group relative fade-in">
            <div class="cursor-pointer" onclick="openLightbox('${imgSrc}')">
                <img src="${imgSrc}" loading="lazy" class="w-full h-auto group-hover:scale-105 transition duration-500"
                     onerror="this.parentElement.parentElement.style.display='none'"> <!-- اخفاء الكارت لو الصورة مش موجودة -->
                
                <div class="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center pointer-events-none">
                    <div class="bg-white text-emerald-800 px-4 py-2 rounded-full font-bold flex gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition">
                        <i data-lucide="zoom-in"></i> <span data-i18n="btn_zoom">${t('btn_zoom')}</span>
                    </div>
                </div>
            </div>
            
            <!-- أزرار التفاعل (لايك + مشاركة) -->
            <div class="absolute bottom-3 right-3 left-3 z-10 flex justify-between items-center px-2">
                <!-- زر اللايك -->
                <button onclick="toggleLike(${i})" class="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition flex items-center gap-1 group/like backdrop-blur-sm">
                    <i data-lucide="heart" class="w-5 h-5 text-slate-400 group-hover/like:text-red-500 transition" id="heart-${i}"></i>
                    <span id="likes-count-${i}" class="text-xs font-bold text-slate-700">0</span>
                </button>

                <!-- زر المشاركة (الجديد) -->
                <button onclick="shareImage('${imgSrc}')" class="bg-emerald-600 hover:bg-emerald-700 text-white p-2 px-3 rounded-full shadow-lg transition flex items-center gap-2 backdrop-blur-sm border border-white/20">
                    <span class="text-xs font-bold" data-i18n="btn_share_img">${t('btn_share_img')}</span>
                    <i data-lucide="share-2" class="w-4 h-4"></i>
                </button>
            </div>
        </div>`;
    }
    
    // إضافة الصور الجديدة للشبكة (مش مسح القديم)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    while (tempDiv.firstChild) {
        grid.appendChild(tempDiv.firstChild);
    }
    
    currentGalleryCount += GALLERY_BATCH_SIZE;
    lucide.createIcons();
    
    if(typeof firebase !== 'undefined') {
        listenToLikes(currentGalleryCount);
    }
}

// دالة مشاركة الصورة (للكمبيوتر والموبايل)
window.shareImage = function(imgSrc) {
    const fullUrl = window.location.origin + window.location.pathname.replace('gallery.html', '') + imgSrc;
    
    if (navigator.share) {
        navigator.share({
            title: 'شوف التصميم ده من كمشكاة',
            text: 'تصميم إبداعي من معرض كمشكاة',
            url: fullUrl
        }).catch(console.error);
    } else {
        // Fallback للكمبيوتر
        navigator.clipboard.writeText(fullUrl);
        alert(t('share_msg'));
    }
}

// (باقي الدوال: Lightbox, Likes, Chatbot, Protection زي ما هي في الملف السابق)
window.openLightbox = function(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const dl = document.getElementById('lightbox-download');
    if(lb && img) {
        img.src = src;
        if(dl) {
            dl.href = src;
            dl.innerHTML = `<i data-lucide="download"></i> ${t('btn_download')}`;
        }
        lb.classList.add('active');
    }
    lucide.createIcons();
}
window.closeLightbox = function() { document.getElementById('lightbox')?.classList.remove('active'); }
// ... (Likes logic remains same) ...
window.toggleLike = function(id) { /* ... */ } // (Use previous code)
function listenToLikes(limit) { /* ... */ } // (Use previous code)
function updateHeartUI(id, isLiked) { /* ... */ } // (Use previous code)
function initChatbot() { /* ... */ } // (Use previous code)
function initCounters() { /* ... */ } // (Use previous code)
function initProtection() { /* ... */ } // (Use previous code)