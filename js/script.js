/* المسار: js/script.js */

// -------------------------------------------------------------------------
// إعدادات Firebase (بيانات مشروعك الحقيقية)
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

// تشغيل Firebase
let db;
let analytics;

document.addEventListener('DOMContentLoaded', () => {
    try {
        if (typeof firebase !== 'undefined') {
            firebase.initializeApp(firebaseConfig);
            db = firebase.database();
            analytics = firebase.analytics();
            console.log("Firebase Connected Successfully ✅");
            
            if(document.getElementById('gallery-grid')) {
                listenToLikes();
            }
        } else {
            console.error("Firebase SDK not loaded");
        }
    } catch (e) {
        console.error("Firebase Connection Failed ❌", e);
    }

    loadComponents();
    
    if(document.getElementById('courses-grid')) initCoursesPage();
    if(document.getElementById('articles-grid')) initArticlesPage();
    if(document.getElementById('gallery-grid')) initGalleryPage();
    if(document.body.dataset.page === 'home') initHomePage();
});

// --- 1. بيانات الكورسات (تحديث 2 ديسمبر - 20 كورس) ---
const coursesData = [
    { 
        id: 1, 
        titleAr: "ChatGPT لإدارة المنتجات والابتكار", 
        titleEn: "ChatGPT for Product Management", 
        desc: "استخدام ChatGPT في إدارة المنتجات وتطوير الأفكار المبتكرة.",
        cat: "ai", 
        img: "images/c1.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/chatgpt-for-product-management/?couponCode=2025DECEMBERFIRST" 
    },
    { 
        id: 2, 
        titleAr: "ChatGPT لمالكي المنتجات (Product Owners)", 
        titleEn: "ChatGPT for Product Owners", 
        desc: "دليل شامل لمالكي المنتجات لاستخدام ChatGPT في تحسين سير العمل.",
        cat: "ai", 
        img: "images/c2.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/chatgpt-for-product-management-innovation-h/?couponCode=2025DECEMBERFIRST" 
    },
    { 
        id: 3, 
        titleAr: "العروض التقديمية باستخدام ChatGPT", 
        titleEn: "Presentations with ChatGPT", 
        desc: "كيفية إنشاء عروض تقديمية احترافية بسرعة باستخدام ChatGPT.",
        cat: "ai", 
        img: "images/c3.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/presentations-with-chatgpt/?couponCode=2025DECEMBERFIRST" 
    },
    { 
        id: 4, 
        titleAr: "أساسيات الذكاء الاصطناعي التوليدي و LLMs", 
        titleEn: "Generative AI & LLMs Foundations", 
        desc: "من الأساسيات إلى التطبيقات العملية في الذكاء الاصطناعي التوليدي.",
        cat: "ai", 
        img: "images/c4.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/generative-ai-llms-foundations-from-basics-to-application/?couponCode=2A6A101C9D7490BC6B54" 
    },
    { 
        id: 5, 
        titleAr: "مخطط الوضوح الوظيفي مع خبير HR", 
        titleEn: "Career Clarity Blueprint", 
        desc: "درس تعليمي مجاني لتطوير مسارك الوظيفي بوضوح.",
        cat: "development", 
        img: "images/c5.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/rachelsparkes-discoverit/" 
    },
    { 
        id: 6, 
        titleAr: "إدارة البيانات السريرية", 
        titleEn: "Clinical Data Management Course", 
        desc: "تعلم كيفية إدارة البيانات الطبية والسريرية بشكل احترافي.",
        cat: "science", 
        img: "images/c6.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/clinical-data-management-course/?couponCode=5E189C9EA670AEF9FB2D" 
    },
    { 
        id: 7, 
        titleAr: "التسويق الرقمي لرواد الأعمال", 
        titleEn: "Digital Marketing For Entrepreneurs", 
        desc: "كورس شامل في التسويق الرقمي لزيادة نمو الشركات الناشئة.",
        cat: "marketing", 
        img: "images/c7.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/digital-marketing-for-entrepreneurs-a-complete-course/?couponCode=527CDE75A26DE9605490" 
    },
    { 
        id: 8, 
        titleAr: "تحليل البيانات بالإكسل: الماستر كلاس", 
        titleEn: "Excel Data Analysis Masterclass", 
        desc: "إتقان تحليل البيانات باستخدام أدوات Excel المتقدمة.",
        cat: "business", 
        img: "images/c8.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/excel-data-analysis-the-complete-analysis-masterclass/?couponCode=1DCEAC508201A4C37094" 
    },
    { 
        id: 9, 
        titleAr: "كورس برمجة جافا الشامل (عملي)", 
        titleEn: "The Ultimate Java Programming Course", 
        desc: "تعلم لغة Java من خلال تدريب عملي ومشاريع حقيقية.",
        cat: "programming", 
        img: "images/c9.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/the-ultimate-java-programming-course-hands-on-training/?couponCode=5C9CCDFACAE608FD4A7B" 
    },
    { 
        id: 10, 
        titleAr: "أكثر من 100 سؤال لمقابلات JavaScript", 
        titleEn: "100+ JavaScript Coding Test Questions", 
        desc: "تحضير شامل لمقابلات العمل البرمجية في لغة JavaScript.",
        cat: "programming", 
        img: "images/c10.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/javascript-coding-interview-questions-with-solutions/?couponCode=0D8E049EEF8C12066F37" 
    },
    { 
        id: 11, 
        titleAr: "مخطط تحويل المهارات إلى أرباح", 
        titleEn: "Skills Monetization Blueprint", 
        desc: "كيفية تحويل مهاراتك وخبراتك إلى مصدر دخل ومبيعات.",
        cat: "business", 
        img: "images/c11.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/skills-monetization-500k-income-stream/?couponCode=01D358F8E419DB276C26" 
    },
    { 
        id: 12, 
        titleAr: "أكثر من 100 سؤال لمقابلات Python", 
        titleEn: "100+ Python Coding Practice Test", 
        desc: "اختبارات وأسئلة عملية لإتقان لغة Python ومقابلاتها.",
        cat: "programming", 
        img: "images/c12.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/python-interview-questions-answers-coding/?couponCode=0B92A35B70599D5BCB2C" 
    },
    { 
        id: 13, 
        titleAr: "تعلم Excel VBA والماكرو من الصفر", 
        titleEn: "Excel VBA - Learn Visual Basic Macros", 
        desc: "أتمتة المهام في إكسل باستخدام لغة VBA والماكرو.",
        cat: "business", 
        img: "images/c13.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/excel-vba-learn-visual-basic-macros-beginner-to-advanced/?couponCode=7E5CF4D984CE99D12D90" 
    },
    { 
        id: 14, 
        titleAr: "احتراف التصميم الداخلي بـ SketchUp", 
        titleEn: "Interior Design using SketchUp Pro", 
        desc: "كن مصمم ديكور محترف باستخدام برنامج SketchUp Pro.",
        cat: "graphic", 
        img: "images/c14.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/become-a-professional-interior-designer-using-sketch-up-pro/?couponCode=BBNNJJ2233" 
    },
    { 
        id: 15, 
        titleAr: "الكورس الكامل في لغة C و C++", 
        titleEn: "The Complete C & C++ Programming", 
        desc: "إتقان لغات البرمجة C و C++ من البداية للاحتراف.",
        cat: "programming", 
        img: "images/c15.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/the-complete-c-and-c-plus-programming-course-mastering-c-and-c-plus/?couponCode=FE776B381DA48B926B0E" 
    },
    { 
        id: 16, 
        titleAr: "تحليل بيانات إكسل بالمعادلات و VBA", 
        titleEn: "Excel Data Analysis with Formulas & VBA", 
        desc: "دمج قوة المعادلات مع برمجة VBA لتحليل بيانات متقدم.",
        cat: "business", 
        img: "images/c16.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/microsoft-excel-data-analysis-with-formulas-and-vba/?couponCode=03248BDBC0731836F881" 
    },
    { 
        id: 17, 
        titleAr: "تقنيات تحليل بيانات إكسل المتقدمة", 
        titleEn: "Mastering Excel Data Analysis Techniques", 
        desc: "استخراج رؤى قيمة من البيانات باستخدام تقنيات إكسل.",
        cat: "business", 
        img: "images/c17.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/mastering-excel-data-analysis-techniques-unlock-insights/?couponCode=7C2325D3D2074BE415F4" 
    },
    { 
        id: 18, 
        titleAr: "تحليل البقاء (Survival Analysis) بلغة R", 
        titleEn: "Survival Analysis Course in R", 
        desc: "كورس متخصص في تحليل البقاء والإحصاء باستخدام لغة R.",
        cat: "science", 
        img: "images/c18.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/the-complete-survival-analysis-course-in-r/?couponCode=2025DEC9.99" 
    },
    { 
        id: 19, 
        titleAr: "مايكروسوفت أوفيس للمحترفين", 
        titleEn: "Microsoft Office for Pro", 
        desc: "إتقان Excel, Word, PowerPoint و Teams للعمل الاحترافي.",
        cat: "business", 
        img: "images/c19.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/microsoft-office-excel-word-powerpoint-and-teams-for-pro/?couponCode=E76E11DA99B71BC56B1E" 
    },
    { 
        id: 20, 
        titleAr: "الدليل النهائي لإكسل: تحليل و ماكرو", 
        titleEn: "Ultimate Excel With Data Analysis & VBA", 
        desc: "الكورس الشامل لكل ما يخص إكسل من تحليل وبرمجة ماكرو.",
        cat: "business", 
        img: "images/c20.jpg", 
        date: "02 Dec 2025", 
        url: "https://www.udemy.com/course/ultimate-microsoft-excel-with-data-analysis-vba-macros/?couponCode=C0F6B592241BC16B7821" 
    }
];

// --- 2. بيانات المقالات ---
const articlesData = [
    { id: 1, title: "فكك من جو التنين المجنح", excerpt: "يا صاحبي، السوشيال ميديا هرتنا كلام عن إنك لازم تكون سوبر مان..", content: "...", img: "images/a1.jpg", cat: "development", date: "28 Nov 2025" },
    { id: 2, title: "الذكاء الاصطناعي والمستقبل", excerpt: "هل الـ AI هياخد مكاننا؟ تعال نشوف..", content: "...", img: "images/a2.jpg", cat: "tech", date: "2025/11/29" },
    { id: 3, title: "إزاي تبدأ فري لانس صح؟", excerpt: "خطوات عملية عشان تبدأ شغلك الحر من غير تشتت.", content: "...", img: "images/a3.jpg", cat: "freelance", date: "30 Nov 2025" },
    { id: 4, title: "أهمية البراندينج الشخصي", excerpt: "أنت براند ماشي على الأرض، استغل ده لصالحك.", content: "...", img: "images/a4.jpg", cat: "marketing", date: "01 Dec 2025" },
    { id: 5, title: "نصائح لتعلم الإنجليزية", excerpt: "بلاش تحفظ كلمات، احفظ جمل ومواقف.", content: "...", img: "images/a5.jpg", cat: "languages", date: "02 Dec 2025" }
];

// --- 3. تحميل الهيدر والفوتر ---
function loadComponents() {
    const header = `
    <nav class="fixed top-0 w-full glass-panel z-50 !bg-white/60 !border-0 !rounded-none backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-3 font-bold text-2xl text-emerald-800 hover:text-emerald-600 transition group">
                <img src="images/logo.png" class="w-10 h-10 bg-white rounded-lg p-1 shadow-sm group-hover:rotate-12 transition" alt="L"> كمشكاة
            </a>
            
            <div class="hidden md:flex gap-1 bg-white/40 p-1 rounded-full border border-white/60 shadow-sm">
                <a href="index.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="home">الرئيسية</a>
                <a href="courses.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="courses">كورسات</a>
                <a href="gallery.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="gallery">المعرض</a>
                <a href="articles.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="articles">مقالات</a>
                <a href="library.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="library">مكتبة</a>
                <a href="contact.html" class="px-5 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="contact">تواصل</a>
            </div>

            <button class="md:hidden text-emerald-800 p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                <i data-lucide="menu" class="w-7 h-7"></i>
            </button>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-white/95 border-t border-emerald-100 p-4 absolute w-full shadow-xl">
            <div class="flex flex-col gap-2">
                <a href="index.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">الرئيسية</a>
                <a href="courses.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">كورسات</a>
                <a href="gallery.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">المعرض</a>
                <a href="articles.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">مقالات</a>
                <a href="contact.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">تواصل</a>
            </div>
        </div>
    </nav>`;
    
    const footer = `<footer class="text-center py-8 glass-panel !bg-white/40 !border-0 mt-10 relative z-10"><p class="text-emerald-800 font-bold">جميع الحقوق محفوظة © مصطفى كمشكاة 2025</p></footer>`;

    if(document.getElementById('header-ph')) document.getElementById('header-ph').innerHTML = header;
    if(document.getElementById('footer-ph')) document.getElementById('footer-ph').innerHTML = footer;

    const page = document.body.dataset.page;
    if(page) document.querySelector(`[data-page="${page}"]`)?.classList.add('!bg-emerald-500', '!text-white', 'shadow-md');
    
    // تشغيل الأيقونات
    if(typeof lucide !== 'undefined') lucide.createIcons();
}

// --- 4. منطق الكورسات (ديناميكي) ---
let currentCat = 'all';
let searchText = '';
let visibleCoursesCount = 10;

function renderFilters() {
    const filterContainer = document.getElementById('course-filters');
    if (!filterContainer) return;

    const categories = ['all', ...new Set(coursesData.map(course => course.cat))];

    filterContainer.innerHTML = categories.map(cat => {
        const displayName = cat === 'all' ? 'الكل' : getCatName(cat);
        const isActive = cat === currentCat ? 'active bg-emerald-600 text-white border border-white/10' : 'bg-white/60 hover:bg-white/90 text-emerald-900';
        return `<button class="filter-btn px-6 py-2 rounded-full font-bold transition-all shadow-sm ${isActive}" data-cat="${cat}">${displayName}</button>`;
    }).join('');

    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentCat = e.target.dataset.cat;
            visibleCoursesCount = 10;
            renderFilters();
            renderCourses();
        });
    });
}

function renderCourses() {
    const grid = document.getElementById('courses-grid');
    const loadMoreBtn = document.getElementById('load-more-courses');
    if(!grid) return;

    const filtered = coursesData.filter(c => {
        const matchCat = currentCat === 'all' || c.cat === currentCat;
        const matchSearch = c.titleAr.includes(searchText) || c.titleEn.toLowerCase().includes(searchText.toLowerCase());
        return matchCat && matchSearch;
    });

    if(filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-500 font-bold">مفيش كورسات بالاسم ده يا درش 🤷‍♂️</div>`;
        if(loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }

    const visibleItems = filtered.slice(0, visibleCoursesCount);

    grid.innerHTML = visibleItems.map((c, index) => `
        <div class="glass-panel rounded-2xl overflow-hidden group hover:-translate-y-2 transition duration-300 flex flex-col fade-in bg-white/60" style="animation-delay: ${index * 50}ms">
            <div class="relative h-48 overflow-hidden">
                <img src="${c.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" onerror="this.src='https://placehold.co/600x400/10b981/FFF?text=Kameshkah+Course'">
                <div class="absolute top-2 right-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs text-emerald-800 font-bold shadow-sm">
                    ${getCatName(c.cat)}
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <div class="text-xs text-slate-500 mb-2 flex items-center gap-1 font-bold"><i data-lucide="calendar" class="w-3 h-3 text-emerald-500"></i> ${c.date}</div>
                <h3 class="text-xl font-bold mb-1 text-emerald-900">${c.titleAr}</h3>
                <h4 class="text-sm font-semibold text-slate-500 mb-3">${c.titleEn}</h4>
                <p class="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">${c.desc}</p>
                
                <div class="mt-auto flex gap-2">
                    <a href="${c.url}" target="_blank" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-center font-bold transition shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                         اشتراك <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                    <button onclick="shareContent('${c.titleAr}', '${c.url}')" class="bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 rounded-xl transition">
                        <i data-lucide="share-2" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();

    if (loadMoreBtn) {
        if (visibleCoursesCount >= filtered.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

function getCatName(cat) {
    const names = { 
        'graphic': 'جرافيك', 
        'programming': 'برمجة', 
        'accounting': 'محاسبة', 
        'languages': 'لغات', 
        'business': 'إدارة أعمال', 
        'marketing': 'تسويق',
        'science': 'علوم',
        'freelance': 'عمل حر',
        'development': 'تطوير ذات',
        'tech': 'تكنولوجيا',
        'ai': 'ذكاء اصطناعي'
    };
    return names[cat] || cat;
}

// --- 5. منطق المقالات ---
let currentArticleCat = 'all';
let searchArticleText = '';

function renderArticles() {
    const grid = document.getElementById('articles-grid');
    if(!grid) return;

    const filtered = articlesData.filter(a => {
        const matchCat = currentArticleCat === 'all' || a.cat === currentArticleCat;
        const matchSearch = a.title.includes(searchArticleText) || a.excerpt.includes(searchArticleText);
        return matchCat && matchSearch;
    });

    if(filtered.length === 0) {
        grid.innerHTML = `<div class="text-center py-10 text-slate-500 font-bold">مفيش مقالات بالاسم ده يا فنان 🤷‍♂️</div>`;
        return;
    }

    grid.innerHTML = filtered.map(a => `
        <div class="glass-panel p-5 rounded-2xl flex flex-col md:flex-row gap-5 items-center hover:bg-white/60 transition group border border-white/60">
            <img src="${a.img}" class="w-full md:w-48 h-32 rounded-xl object-cover shadow-sm group-hover:scale-105 transition" onerror="this.src='https://placehold.co/400x300/dcfce7/065f46?text=Article'">
            <div class="text-center md:text-right flex-1">
                <div class="flex items-center gap-2 mb-2 justify-center md:justify-start">
                    <span class="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-bold">${getArticleCatName(a.cat)}</span>
                    <span class="text-slate-500 text-xs font-semibold">${a.date}</span>
                </div>
                <h3 class="text-xl font-bold mb-2 text-emerald-950">${a.title}</h3>
                <p class="text-slate-600 text-sm mb-3 line-clamp-2 leading-relaxed">${a.excerpt}</p>
                <a href="article-view.html?id=${a.id}" class="text-emerald-600 font-bold text-sm inline-flex items-center gap-1 hover:text-emerald-800">اقرأ المزيد <i data-lucide="arrow-left" class="w-4"></i></a>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function getArticleCatName(cat) {
    return getCatName(cat);
}

// --- 6. منطق المعرض (اللايكات الحقيقية) ---
let visibleGalleryCount = 10;
const totalGalleryImages = 2000;

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more-gallery');
    if(!grid) return;

    let html = '';
    for(let i=1; i<=visibleGalleryCount && i<=totalGalleryImages; i++) {
        const height = [300, 400, 500][Math.floor(Math.random() * 3)]; 
        
        html += `
            <div class="glass-panel rounded-2xl overflow-hidden break-inside-avoid mb-6 group relative fade-in border-0 shadow-sm">
                <div class="relative cursor-pointer" onclick="openLightbox('images/${i}.jpg')">
                    <img src="images/${i}.jpg" class="w-full h-auto object-cover" 
                         loading="lazy"
                         onerror="this.src='https://placehold.co/400x${height}/dcfce7/065f46?text=Design+${i}'">
                    
                    <div class="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-3">
                        <div class="bg-white text-emerald-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition shadow-xl">
                            <i data-lucide="zoom-in" class="w-4 h-4"></i> تكبير
                        </div>
                    </div>

                    <div class="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition duration-300 z-10" onclick="event.stopPropagation()">
                        <button onclick="shareContent('تصميم رقم ${i} من كمشكاة', 'https://kameshkah.com/gallery?img=${i}')" class="bg-white hover:bg-emerald-50 text-emerald-800 p-2 rounded-full shadow-lg transition transform hover:scale-110"><i data-lucide="share-2" class="w-5 h-5"></i></button>
                    </div>

                    <div class="absolute bottom-3 right-3 z-10" onclick="event.stopPropagation()">
                        <button id="like-btn-${i}" onclick="toggleLike(${i})" class="bg-white/90 hover:bg-white text-slate-400 p-2 px-3 rounded-full shadow-lg transition flex items-center gap-1 group/like">
                            <i data-lucide="heart" class="w-5 h-5 transition-colors group-hover/like:text-red-500" id="heart-icon-${i}"></i>
                            <span id="like-count-${i}" class="text-sm font-bold text-slate-700">0</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    grid.innerHTML = html;
    lucide.createIcons();
    
    // تفعيل استماع اللايكات لو Firebase شغال
    if(db) listenToLikes();

    if (loadMoreBtn) {
        if (visibleGalleryCount >= totalGalleryImages) { loadMoreBtn.style.display = 'none'; } else { loadMoreBtn.style.display = 'inline-flex'; loadMoreBtn.innerHTML = `عرض المزيد (فاضل ${totalGalleryImages - visibleGalleryCount})`; }
    }
}

// دالة اللايك
window.toggleLike = function(imgId) {
    if (!db) { alert("جاري الاتصال بالسيرفر.. تأكد من الإنترنت!"); return; }
    const likeRef = db.ref('likes/' + imgId);
    const isLiked = localStorage.getItem(`liked_${imgId}`);

    likeRef.transaction((currentLikes) => {
        if (currentLikes === null) currentLikes = 0;
        if (isLiked) {
            localStorage.removeItem(`liked_${imgId}`);
            updateHeartUI(imgId, false);
            return currentLikes - 1;
        } else {
            localStorage.setItem(`liked_${imgId}`, 'true');
            updateHeartUI(imgId, true);
            return currentLikes + 1;
        }
    });
};

function listenToLikes() {
    if (!db) return;
    for(let i=1; i<=visibleGalleryCount; i++) {
        const likeRef = db.ref('likes/' + i);
        likeRef.on('value', (snapshot) => {
            const count = snapshot.val() || 0;
            const countEl = document.getElementById(`like-count-${i}`);
            if(countEl) countEl.innerText = count;
            const isLiked = localStorage.getItem(`liked_${i}`);
            updateHeartUI(i, !!isLiked);
        });
    }
}

function updateHeartUI(imgId, isLiked) {
    const icon = document.getElementById(`heart-icon-${imgId}`);
    if(!icon) return;
    if (isLiked) {
        icon.classList.add('fill-red-500', 'text-red-500');
        icon.classList.remove('text-slate-400');
    } else {
        icon.classList.remove('fill-red-500', 'text-red-500');
        icon.classList.add('text-slate-400');
    }
}

// --- 7. Helper Functions ---
async function shareContent(title, url) {
    if (navigator.share) {
        try {
            await navigator.share({ title: 'كمشكاة', text: `شوف المحتوى ده من موقع كمشكاة: ${title}`, url: url });
        } catch (err) { console.log('Share canceled'); }
    } else {
        navigator.clipboard.writeText(url);
        alert('تم نسخ الرابط! شاركه براحتك 😉');
    }
}

function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-download').href = src;
    lb.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function initHomePage() {
    const counters = document.querySelectorAll('.counter-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        animateValue(counter, 0, target, 2000);
    });
}

function initCoursesPage() {
    renderFilters();
    renderCourses();
    document.getElementById('search-input')?.addEventListener('keyup', (e) => {
        searchText = e.target.value;
        visibleCoursesCount = 10;
        renderCourses();
    });
    document.getElementById('load-more-courses')?.addEventListener('click', () => {
        visibleCoursesCount += 10;
        renderCourses();
    });
}

function initArticlesPage() {
    renderArticles();
    document.querySelectorAll('.article-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.article-filter-btn').forEach(b => b.classList.remove('active', 'bg-emerald-600', 'text-white'));
            e.target.classList.add('active', 'bg-emerald-600', 'text-white');
            currentArticleCat = e.target.dataset.cat;
            renderArticles();
        });
    });
    document.getElementById('article-search-input')?.addEventListener('keyup', (e) => {
        searchArticleText = e.target.value;
        renderArticles();
    });
}

function initGalleryPage() {
    renderGallery();
    document.getElementById('load-more-gallery')?.addEventListener('click', () => {
        visibleGalleryCount += 10;
        renderGallery();
    });
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) { window.requestAnimationFrame(step); }
    };
    window.requestAnimationFrame(step);
}