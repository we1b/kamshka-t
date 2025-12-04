/* المسار: js/script.js */

// -------------------------------------------------------------------------
// إعدادات Firebase
// -------------------------------------------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCTRm9XNvVgmP-h_7qHZyQy-dEAqnTIrY4",
    authDomain: "kameshkah-8c9ed.firebaseapp.com",
    projectId: "kameshkah-8c9ed",
    storageBucket: "kameshkah-8c9ed.firebasestorage.app",
    messagingSenderId: "221923589082",
    appId: "1:221923589082:web:098b2152a227e93acbdee3",
    measurementId: "G-199GK5EH3K",
    databaseURL: "https://kameshkah-8c9ed-default-rtdb.firebaseio.com"
};

let db;
let analytics;

// -------------------------------------------------------------------------
// إعدادات العرض (Pagination)
// -------------------------------------------------------------------------
const GALLERY_INITIAL_COUNT = 10; 
const GALLERY_INCREMENT = 6;      
const MAX_GALLERY_IMAGES = 100;   

let visibleCoursesCount = 6;      
const COURSES_INCREMENT = 6;      

// -------------------------------------------------------------------------
// قاموس الترجمة (عربي / إنجليزي)
// -------------------------------------------------------------------------
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_courses: "كورسات",
        nav_gallery: "المعرض",
        nav_articles: "مقالات",
        nav_library: "مكتبة",
        nav_contact: "تواصل",
        footer_rights: "جميع الحقوق محفوظة © مصطفى كمشكاة 2025",
        
        home_welcome: "كمشكاة",
        home_slogan: "\"استعن بالله ولا تعجز\"",
        btn_start_learning: "ابدأ رحلة التعلم",
        btn_view_gallery: "شوف الإبداع",
        stat_followers: "متابع شغوف",
        stat_courses: "كورس احترافي",
        stat_ambition: "طموح بلا حدود",

        courses_title: "الكورسات التعليمية",
        search_placeholder: "ابحث عن كورس...",
        filter_all: "الكل",
        btn_load_more: "عرض المزيد",
        btn_subscribe: "اشتراك",
        no_courses: "مفيش كورسات بالاسم ده 🤷‍♂️",

        gallery_title: "معرض التصميمات",
        gallery_subtitle: "إبداع متجدد . لمسة فنية",
        btn_download: "تحميل الصورة",
        btn_zoom: "تكبير",

        library_title: "مكتبة كمشكاة",
        library_subtitle: "جاري رفع الكتب والملفات.. انتظرونا قريباً!",
        btn_download_book: "تحميل الكتاب",
        search_book_placeholder: "ابحث عن كتاب...",

        articles_title: "مدونة كمشكاة",
        search_article_placeholder: "ابحث في المقالات...",
        read_more: "اقرأ المزيد",
        
        contact_me_name: "مصطفى عبد الناصر",
        contact_role_gd: "Graphic Designer",
        contact_role_cc: "Content Creator",
        contact_behance: "معرض أعمالي علي Behance",
        contact_community_title: "كمشكاة",
        contact_community_desc: "المجتمع الرسمي والمحتوى الحصري",
        
        cat_graphic: "جرافيك",
        cat_programming: "برمجة",
        cat_business: "أعمال",
        cat_marketing: "تسويق",
        cat_ai: "ذكاء اصطناعي",
        cat_science: "علوم",
        cat_development: "تطوير ذات",
        cat_tech: "تكنولوجيا",
        cat_freelance: "عمل حر",
        cat_languages: "لغات"
    },
    en: {
        nav_home: "Home",
        nav_courses: "Courses",
        nav_gallery: "Gallery",
        nav_articles: "Articles",
        nav_library: "Library",
        nav_contact: "Contact",
        footer_rights: "All Rights Reserved © Mostafa Kamshkat 2025",

        home_welcome: "Kamshkat",
        home_slogan: "\"Seek help from Allah and do not lose heart\"",
        btn_start_learning: "Start Learning",
        btn_view_gallery: "View Gallery",
        stat_followers: "Followers",
        stat_courses: "Pro Courses",
        stat_ambition: "Limitless Ambition",

        courses_title: "Educational Courses",
        search_placeholder: "Search for a course...",
        filter_all: "All",
        btn_load_more: "Load More",
        btn_subscribe: "Enroll",
        no_courses: "No courses found 🤷‍♂️",

        gallery_title: "Design Gallery",
        gallery_subtitle: "Renewed Creativity . Artistic Touch",
        btn_download: "Download",
        btn_zoom: "Zoom",

        library_title: "Kamshkat Library",
        library_subtitle: "Uploading books soon.. Stay tuned!",
        btn_download_book: "Download",
        search_book_placeholder: "Search for a book...",

        articles_title: "Kamshkat Blog",
        search_article_placeholder: "Search articles...",
        read_more: "Read More",

        contact_me_name: "Mostafa Abdelnasser",
        contact_role_gd: "Graphic Designer",
        contact_role_cc: "Content Creator",
        contact_behance: "My Behance Portfolio",
        contact_community_title: "Kamshkat",
        contact_community_desc: "Official Community & Exclusive Content",

        cat_graphic: "Graphic",
        cat_programming: "Coding",
        cat_business: "Business",
        cat_marketing: "Marketing",
        cat_ai: "AI",
        cat_science: "Science",
        cat_development: "Self Dev",
        cat_tech: "Tech",
        cat_freelance: "Freelance",
        cat_languages: "Languages"
    }
};

let currentLang = localStorage.getItem('kamshkat_lang') || 'ar';

// -------------------------------------------------------------------------
// التشغيل الرئيسي
// -------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    try {
        if (typeof firebase !== 'undefined') {
            firebase.initializeApp(firebaseConfig);
            db = firebase.database();
            analytics = firebase.analytics();
            if(document.getElementById('gallery-grid')) listenToLikes();
        }
    } catch (e) { console.error("Firebase Error", e); }

    loadComponents();
    
    if(document.getElementById('courses-grid')) initCoursesPage();
    if(document.getElementById('articles-grid')) initArticlesPage();
    if(document.getElementById('gallery-grid')) initGalleryPage();
    if(document.getElementById('library-grid')) initLibraryPage();
    if(document.body.dataset.page === 'home') initHomePage();
});

// دالة تغيير اللغة
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('kamshkat_lang', currentLang);
    setLanguage(currentLang);
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
// بيانات الكورسات
// -------------------------------------------------------------------------
const coursesData = [
    // الكورسات القديمة
    { id: 101, titleAr: "بناء 3 تطبيقات أندرويد من الصفر بجافا", titleEn: "Android: Build 3 Apps from Scratch with Java", desc: "كورس عملي لتعلم برمجة تطبيقات الأندرويد.", cat: "programming", img: "images/c101.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/android-course-build-3-applications-from-scratch-with-java/?couponCode=9139A2FB926F1B55432C" },
    { id: 102, titleAr: "معسكر PostgreSQL من المبتدئ للمتقدم", titleEn: "PostgreSQL Bootcamp: Beginner to Advanced", desc: "احترف قواعد البيانات PostgreSQL.", cat: "programming", img: "images/c102.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/postgresql-bootcamp-complete-beginner-to-advanced-course/?couponCode=A84C9E26F61196AC0782" },
    { id: 1, titleAr: "ChatGPT لإدارة المنتجات", titleEn: "ChatGPT for Product Management", desc: "استخدام AI في إدارة المنتجات.", cat: "ai", img: "images/c1.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/chatgpt-for-product-management/?couponCode=2025DECEMBERFIRST" },
    
    // الكورسات الجديدة (بالتاريخ العربي والهجري)
    { 
        id: 201, 
        titleAr: "الذكاء الاصطناعي Full-Stack باستخدام Ollama", 
        titleEn: "[FR] IA Full-Stack avec Ollama: Llama, Deepseek, Mistral", 
        desc: "تعلم بناء تطبيقات ذكاء اصطناعي كاملة باستخدام نماذج Llama و Deepseek.", 
        cat: "ai", 
        img: "images/c201.jpg", 
        date: "03 ديسمبر 2025 | 12 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ia-full-stack-avec-ollama-llama-deepseek-mistral-qwq/?couponCode=AI_NOV_03" 
    },
    { 
        id: 202, 
        titleAr: "الذكاء الاصطناعي في العمل: الاستخدام القانوني والأخلاقي", 
        titleEn: "AI in the Workplace: Legal & Ethical Use", 
        desc: "دليل شامل للاستخدام الأخلاقي والقانوني للذكاء الاصطناعي في بيئة العمل.", 
        cat: "ai", 
        img: "images/c202.jpg", 
        date: "03 ديسمبر 2025 | 12 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ai-in-the-workplace-legal-ethical-use/?couponCode=F610DF605FF2CB4E3CA0" 
    },
    { 
        id: 203, 
        titleAr: "إطار عمل اقتصاد الدونات (Doughnut Economics)", 
        titleEn: "The Doughnut Economics Framework", 
        desc: "فهم إطار عمل الاقتصاد المستدام ونموذج الدونات.", 
        cat: "business", 
        img: "images/c203.jpg", 
        date: "03 ديسمبر 2025 | 12 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/doughnut-economics-framework/?couponCode=E571A56ACB2064F8443F" 
    },
    { 
        id: 204, 
        titleAr: "قوة التسويق عبر الاختبارات (Quiz Marketing)", 
        titleEn: "Quiz Marketing Power: Generate Leads", 
        desc: "كيفية توليد عملاء محتملين (Leads) بقوة باستخدام مسابقات التسويق.", 
        cat: "marketing", 
        img: "images/c204.jpg", 
        date: "03 ديسمبر 2025 | 12 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/quiz-marketing-power-generate-leads-with-boosting-lead/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 205, 
        titleAr: "بداية تطوير تطبيقات iOS باستخدام SwiftUI", 
        titleEn: "iOS Development Kickstart: Craft Your First App With SwiftUI", 
        desc: "ابدأ رحلتك في برمجة تطبيقات الآيفون باستخدام SwiftUI.", 
        cat: "programming", 
        img: "images/c205.jpg", 
        date: "03 ديسمبر 2025 | 12 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ios-development-craft-your-first-app-with-swiftui/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 206, 
        titleAr: "تحسين إعلانات فيسبوك: اجعل إعلاناتك مذهلة", 
        titleEn: "Facebook Ads Improvement: Make Your Ads Breathtaking", 
        desc: "استراتيجيات عملية لتحسين أداء إعلانات فيسبوك وزيادة النتائج.", 
        cat: "marketing", 
        img: "images/c206.jpg", 
        date: "03 ديسمبر 2025 | 12 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/facebook-ads-improvement-make-your-ads-breathtaking/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 207, 
        titleAr: "خطة الإنقاذ الرقمي: مواجهة الهجمات السيبرانية", 
        titleEn: "Plan de Rescate Digital: Cómo Actuar Frente a un Ciberataque", 
        desc: "كيف تتصرف وتنقذ بياناتك في حالة التعرض لهجوم سيبراني.", 
        cat: "tech", 
        img: "images/c207.jpg", 
        date: "03 ديسمبر 2025 | 12 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/plan-de-rescate-digital-como-actuar-frente-a-un-ciberataque/?couponCode=UPGRADE02223" 
    },
    { 
        id: 208, 
        titleAr: "أساسيات C#: من الصفر حتى أول تطبيق", 
        titleEn: "C# Basics: From Zero to First Applications", 
        desc: "تعلم أساسيات لغة C# وابني تطبيقاتك الأولى.", 
        cat: "programming", 
        img: "images/c208.jpg", 
        date: "03 ديسمبر 2025 | 12 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/c-basics-from-zero-to-first-applications/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 209, 
        titleAr: "الدبلومة المهنية في إدارة اللوجستيات", 
        titleEn: "Professional Diploma in Logistics Management", 
        desc: "دبلومة شاملة في إدارة اللوجستيات وسلاسل الإمداد.", 
        cat: "business", 
        img: "images/c209.jpg", 
        date: "03 ديسمبر 2025 | 12 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/logisticsmanagement/?couponCode=3E8A13C71DFF705DFA8E" 
    }
];

const booksData = [
    { id: 1, title: "أبي غني أبي فقير", author: "روبرت كيوساكي", cat: "finance", img: "images/b1.jpg", url: "#" },
    { id: 2, title: "العادات الذرية", author: "جيمس كلير", cat: "self", img: "images/b2.jpg", url: "#" },
    { id: 3, title: "فن اللامبالاة", author: "مارك مانسون", cat: "self", img: "images/b3.jpg", url: "#" }
];

const articlesData = [
    { id: 1, title: "فكك من جو التنين المجنح", excerpt: "يا صاحبي، السوشيال ميديا هرتنا كلام..", content: "...", img: "images/a1.jpg", cat: "development", date: "28 Nov 2025" }
];

// --- المكونات ---
function loadComponents() {
    const btnText = currentLang === 'ar' ? 'English' : 'عربي';
    const btnIcon = currentLang === 'ar' ? 'En' : 'ع';

    const header = `
    <nav class="fixed top-0 w-full glass-panel z-50 !bg-white/60 !border-0 !rounded-none backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-3 font-bold text-2xl text-emerald-800 hover:text-emerald-600 transition group">
                <img src="images/logo.png" class="w-10 h-10 bg-white rounded-lg p-1 shadow-sm group-hover:rotate-12 transition" alt="L"> ${t('home_welcome')}
            </a>
            
            <div class="hidden md:flex items-center gap-1 bg-white/40 p-1 rounded-full border border-white/60 shadow-sm">
                <a href="index.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="home">${t('nav_home')}</a>
                <a href="courses.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="courses">${t('nav_courses')}</a>
                <a href="gallery.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="gallery">${t('nav_gallery')}</a>
                <a href="articles.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="articles">${t('nav_articles')}</a>
                <a href="library.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="library">${t('nav_library')}</a>
                <a href="contact.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="contact">${t('nav_contact')}</a>
                
                <button onclick="toggleLanguage()" class="mr-2 ml-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs hover:bg-emerald-200 transition border border-emerald-200 flex items-center gap-1">
                    <i data-lucide="languages" class="w-3 h-3"></i> ${btnText}
                </button>
            </div>

            <div class="md:hidden flex items-center gap-3">
                <button onclick="toggleLanguage()" class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs hover:bg-emerald-200 transition border border-emerald-200">
                    ${btnIcon}
                </button>
                <button class="text-emerald-800 p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                    <i data-lucide="menu" class="w-7 h-7"></i>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-white/95 border-t border-emerald-100 p-4 absolute w-full shadow-xl">
            <div class="flex flex-col gap-2">
                <a href="index.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav_home')}</a>
                <a href="courses.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav_courses')}</a>
                <a href="gallery.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav_gallery')}</a>
                <a href="articles.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav_articles')}</a>
                <a href="library.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav_library')}</a>
                <a href="contact.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav_contact')}</a>
            </div>
        </div>
    </nav>`;
    
    const footer = `<footer class="text-center py-8 glass-panel !bg-white/40 !border-0 mt-10 relative z-10"><p class="text-emerald-800 font-bold">${t('footer_rights')}</p></footer>`;

    if(document.getElementById('header-ph')) document.getElementById('header-ph').innerHTML = header;
    if(document.getElementById('footer-ph')) document.getElementById('footer-ph').innerHTML = footer;
    
    const page = document.body.dataset.page;
    if(page) document.querySelector(`[data-page="${page}"]`)?.classList.add('!bg-emerald-500', '!text-white', 'shadow-md');
    
    lucide.createIcons();
}

// -------------------------------------------------------------------------
// صفحة الكورسات (Courses Logic)
// -------------------------------------------------------------------------
let currentCat = 'all';
let searchText = '';

function initCoursesPage() {
    renderFilters();
    renderCourses();
    
    // البحث
    document.getElementById('search-input')?.addEventListener('keyup', (e) => {
        searchText = e.target.value;
        visibleCoursesCount = COURSES_INCREMENT; // إعادة تعيين العدد عند البحث
        renderCourses();
    });

    // زرار عرض المزيد
    document.getElementById('load-more-courses')?.addEventListener('click', () => {
        visibleCoursesCount += COURSES_INCREMENT;
        renderCourses();
    });
}

function renderFilters() {
    const filterContainer = document.getElementById('course-filters');
    if (!filterContainer) return;
    const categories = ['all', ...new Set(coursesData.map(c => c.cat))];
    filterContainer.innerHTML = categories.map(cat => {
        const name = cat === 'all' ? t('filter_all') : t('cat_' + cat) || cat;
        const active = cat === currentCat ? 'active bg-emerald-600 text-white' : 'bg-white/60 hover:bg-white/90 text-emerald-900';
        return `<button class="filter-btn px-6 py-2 rounded-full font-bold transition shadow-sm ${active}" data-cat="${cat}">${name}</button>`;
    }).join('');
    filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', (e) => {
        currentCat = e.target.dataset.cat;
        visibleCoursesCount = COURSES_INCREMENT; // ريست عند تغيير الفلتر
        renderFilters();
        renderCourses();
    }));
}

function renderCourses() {
    const grid = document.getElementById('courses-grid');
    const loadMoreBtn = document.getElementById('load-more-courses');
    if(!grid) return;

    const filtered = coursesData.filter(c => {
        const matchCat = currentCat === 'all' || c.cat === currentCat;
        const title = currentLang === 'ar' ? c.titleAr : c.titleEn;
        const matchSearch = title.toLowerCase().includes(searchText.toLowerCase());
        return matchCat && matchSearch;
    });

    if(filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-500 font-bold">${t('no_courses')}</div>`;
        if(loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }

    // عرض جزء فقط من الكورسات بناءً على العداد
    const coursesToShow = filtered.slice(0, visibleCoursesCount);

    grid.innerHTML = coursesToShow.map((c, i) => {
        const title = currentLang === 'ar' ? c.titleAr : c.titleEn;
        const subTitle = currentLang === 'ar' ? c.titleEn : c.titleAr;
        const catName = t('cat_' + c.cat);
        
        return `
        <div class="glass-panel rounded-2xl overflow-hidden group hover:-translate-y-2 transition duration-300 flex flex-col fade-in bg-white/60" style="animation-delay: ${i * 50}ms">
            <div class="relative h-48 overflow-hidden">
                <img src="${c.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" onerror="this.src='https://placehold.co/600x400/10b981/FFF?text=Kamshkat'">
                <div class="absolute top-3 start-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs text-emerald-800 font-bold shadow-sm">${catName}</div>
            </div>
            <div class="p-5 flex-1 flex flex-col text-start">
                <div class="text-xs text-slate-500 mb-2 font-bold">${c.date}</div>
                <h3 class="text-xl font-bold mb-1 text-emerald-900">${title}</h3>
                <h4 class="text-sm font-semibold text-slate-500 mb-3">${subTitle}</h4>
                <p class="text-slate-600 text-sm mb-4 line-clamp-2">${c.desc}</p>
                <a href="${c.url}" target="_blank" class="mt-auto bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-center font-bold transition shadow-lg flex items-center justify-center gap-2">${t('btn_subscribe')} <i data-lucide="external-link" class="w-4 h-4"></i></a>
            </div>
        </div>`;
    }).join('');
    
    lucide.createIcons();

    // إخفاء الزر لو عرضنا كل الكورسات المتاحة
    if(loadMoreBtn) {
        loadMoreBtn.style.display = visibleCoursesCount >= filtered.length ? 'none' : 'inline-flex';
    }
}

// -------------------------------------------------------------------------
// صفحة المكتبة (Library)
// -------------------------------------------------------------------------
function initLibraryPage() { renderBooks(); }
function renderBooks(search = '') {
    const grid = document.getElementById('library-grid');
    if(!grid) return;
    const filtered = booksData.filter(b => b.title.includes(search));
    grid.innerHTML = filtered.map(b => `
        <div class="glass-panel p-4 rounded-2xl flex gap-4 hover:bg-white/60 transition group border border-white/60 text-start">
            <img src="${b.img}" class="w-24 h-32 rounded-lg object-cover shadow-md" onerror="this.src='https://placehold.co/300x400/10b981/FFF?text=Book'">
            <div class="flex-1">
                <h3 class="text-lg font-bold text-emerald-900 mb-1">${b.title}</h3>
                <p class="text-sm text-emerald-600 font-semibold mb-2">${b.author}</p>
                <a href="${b.url}" class="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold hover:bg-emerald-200 transition">${t('btn_download_book')}</a>
            </div>
        </div>
    `).join('');
}

// -------------------------------------------------------------------------
// صفحة المعرض (Gallery Logic - معدلة)
// -------------------------------------------------------------------------
function initGalleryPage() { 
    // تعيين القيمة الابتدائية لو مش موجودة
    if (typeof window.visibleGalleryCount === 'undefined') {
        window.visibleGalleryCount = GALLERY_INITIAL_COUNT;
    }
    
    renderGallery(); 

    // إضافة مستمع الحدث لزرار المعرض
    const loadMoreBtn = document.getElementById('load-more-gallery');
    if(loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            window.visibleGalleryCount += GALLERY_INCREMENT;
            renderGallery();
        });
    }
}

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more-gallery');
    if(!grid) return;

    let html = '';
    
    // حلقة تكرار تعرض الصور لحد العدد المسموح بيه حالياً
    // بنعمل check بسيط إننا منعديش الحد الأقصى المتوقع للصور
    const limit = Math.min(window.visibleGalleryCount, MAX_GALLERY_IMAGES);

    for(let i=1; i<=limit; i++) {
        html += `
        <div class="glass-panel rounded-2xl overflow-hidden break-inside-avoid mb-6 group relative fade-in border-0 shadow-sm">
            <div class="relative cursor-pointer" onclick="openLightbox('images/${i}.jpg')">
                <img src="images/${i}.jpg" class="w-full h-auto object-cover" loading="lazy" onerror="this.parentElement.parentElement.style.display='none'"> 
                <div class="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                    <div class="bg-white text-emerald-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition shadow-xl">
                        <i data-lucide="zoom-in" class="w-4 h-4"></i> ${t('btn_zoom')}
                    </div>
                </div>
                <div class="absolute bottom-3 end-3 z-10" onclick="event.stopPropagation()">
                    <button id="like-btn-${i}" onclick="toggleLike(${i})" class="bg-white/90 hover:bg-white text-slate-400 p-2 px-3 rounded-full shadow-lg transition flex items-center gap-1">
                        <i data-lucide="heart" class="w-5 h-5" id="heart-icon-${i}"></i>
                        <span id="like-count-${i}" class="text-sm font-bold text-slate-700">0</span>
                    </button>
                </div>
            </div>
        </div>`;
    }
    grid.innerHTML = html;
    lucide.createIcons();
    listenToLikes();

    // التحكم في ظهور الزرار
    if(loadMoreBtn) {
        // لو وصلنا للحد الأقصى نخفي الزرار
        if (window.visibleGalleryCount >= MAX_GALLERY_IMAGES) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

// -------------------------------------------------------------------------
// الصفحة الرئيسية (Home)
// -------------------------------------------------------------------------
function initHomePage() {
    document.querySelectorAll('.counter-number').forEach(c => animateValue(c, 0, +c.dataset.target, 2000));
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

// -------------------------------------------------------------------------
// وظائف اللايكات (Likes) واللايت بوكس (Lightbox)
// -------------------------------------------------------------------------
window.toggleLike = function(imgId) {
    if (!db) return;
    const likeRef = db.ref('likes/' + imgId);
    const isLiked = localStorage.getItem(`liked_${imgId}`);
    likeRef.transaction((c) => {
        if (c === null) c = 0;
        if (isLiked) {
            localStorage.removeItem(`liked_${imgId}`);
            updateHeartUI(imgId, false);
            return c - 1;
        } else {
            localStorage.setItem(`liked_${imgId}`, 'true');
            updateHeartUI(imgId, true);
            return c + 1;
        }
    });
};

function listenToLikes() {
    if (!db) return;
    // بنسمع للايكات لكل الصور اللي ظاهرة دلوقتي
    const limit = Math.min(window.visibleGalleryCount || GALLERY_INITIAL_COUNT, MAX_GALLERY_IMAGES);
    for(let i=1; i<=limit; i++) {
        db.ref('likes/' + i).on('value', (s) => {
            const count = document.getElementById(`like-count-${i}`);
            if(count) count.innerText = s.val() || 0;
            updateHeartUI(i, !!localStorage.getItem(`liked_${i}`));
        });
    }
}

function updateHeartUI(id, liked) {
    const icon = document.getElementById(`heart-icon-${id}`);
    if(icon) {
        if(liked) { icon.classList.add('fill-red-500', 'text-red-500'); icon.classList.remove('text-slate-400'); }
        else { icon.classList.remove('fill-red-500', 'text-red-500'); icon.classList.add('text-slate-400'); }
    }
}

function openLightbox(src) { 
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const dlBtn = document.getElementById('lightbox-download');
    
    if(lb && lbImg) {
        lb.classList.add('active'); 
        lbImg.src = src;
        if(dlBtn) dlBtn.href = src; // تحديث رابط التحميل
    }
}

function closeLightbox() { 
    document.getElementById('lightbox')?.classList.remove('active'); 
}

// -------------------------------------------------------------------------
// المقالات (Articles)
// -------------------------------------------------------------------------
function initArticlesPage() { renderArticles(); }
function renderArticles() { 
    // كود عرض المقالات هنا (بناءً على طلبك، الكود ده مكانش كامل في النسخة اللي فاتت، بس الهيكل جاهز)
    // ممكن تزود هنا render زي الكورسات
}