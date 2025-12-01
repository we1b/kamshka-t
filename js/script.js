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

// --- 1. بيانات الكورسات (تحديث 1 ديسمبر - 19 كورس) ---
const coursesData = [
    { 
        id: 1, 
        titleAr: "التسويق القائم على الحسابات (ABM) للشركات", 
        titleEn: "Account-Based Marketing - ABM B2B", 
        desc: "تعلم استراتيجيات التسويق الموجه للشركات لزيادة الكفاءة والأرباح.",
        cat: "marketing", 
        img: "images/c1.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/account-based-marketing-increase-your-b2b-efficiency/?couponCode=01DECEMBER2025" 
    },
    { 
        id: 2, 
        titleAr: "إنشاء حملات التواصل المثالية على لينكد إن", 
        titleEn: "Perfect LinkedIn Outreach Campaign", 
        desc: "كيفية الوصول للعملاء والشركات وبناء شبكة علاقات قوية على LinkedIn.",
        cat: "marketing", 
        img: "images/c2.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/how-to-create-your-perfect-linkedin-outreach-campaign/?couponCode=01DECEMBER2025" 
    },
    { 
        id: 3, 
        titleAr: "الدليل الشامل لزيادة مبيعات متجر Etsy", 
        titleEn: "Etsy: Guide to Boosting Business", 
        desc: "أسرار وطرق الترويج لمنتجاتك وزيادة مبيعاتك على منصة إتسي.",
        cat: "business", 
        img: "images/c3.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/etsy-promotion/?couponCode=01DECEMBER2025" 
    },
    { 
        id: 4, 
        titleAr: "إعلانات جوجل 2025: زيادة المبيعات بالنقرات", 
        titleEn: "Google Ads 2025: Drive Sales With PPC", 
        desc: "تعلم كيفية إنشاء وإدارة حملات إعلانية ناجحة على جوجل.",
        cat: "marketing", 
        img: "images/c4.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/google-ads-for-beginners-how-to-drive-sales-with-ppc/?couponCode=01DECEMBER2025" 
    },
    { 
        id: 5, 
        titleAr: "نظرة عامة على إطار عمل SAFe أجايل", 
        titleEn: "SAFe (Scaled Agile Framework) Overview", 
        desc: "فهم مبادئ العمل المرن (Agile) على مستوى المؤسسات الكبيرة.",
        cat: "business", 
        img: "images/c5.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/safe-scaled-agile-framework/?couponCode=2025DECEMBERFIRST" 
    },
    { 
        id: 6, 
        titleAr: "شهادة مالك المنتج (Product Owner)", 
        titleEn: "Product Owner Certification", 
        desc: "دليل شامل لتصبح Product Owner معتمد وناجح في إدارة المنتجات.",
        cat: "business", 
        img: "images/c6.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/a-csm-advanced-certified-scrum-master/?couponCode=2025DECEMBERFIRST" 
    },
    { 
        id: 7, 
        titleAr: "احتراف الأمن السيبراني: المعرفة والتقنيات", 
        titleEn: "Mastering Cybersecurity Essentials", 
        desc: "المعارف الأساسية والتقنيات الضرورية لحماية الأنظمة والبيانات.",
        cat: "tech", 
        img: "images/c7.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/mastering-cybersecurity-essential-knowledge-and-techniques/?couponCode=2025DECEMBERFIRST" 
    },
    { 
        id: 8, 
        titleAr: "اختبارات سطر أوامر لينكس (+90 أمر)", 
        titleEn: "Linux Commands Line Certification Test", 
        desc: "تدريب عملي واختبارات لإتقان سطر الأوامر في نظام Linux.",
        cat: "programming", 
        img: "images/c8.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/linux-commands-line-certification-prac-test-90-commands/?couponCode=NOV27FREE" 
    },
    { 
        id: 9, 
        titleAr: "ماستر كلاس تعديل الصور بـ لايت روم موبايل", 
        titleEn: "Adobe Lightroom Mobile Masterclass", 
        desc: "احترف تعديل الصور الفوتوغرافية باستخدام هاتفك وتطبيق لايت روم.",
        cat: "graphic", 
        img: "images/c9.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/lightroom-mobile-course/?couponCode=9E15D948A610675D1A79" 
    },
    { 
        id: 10, 
        titleAr: "احتراف Claude Pro للأعمال والتسويق", 
        titleEn: "Claude Pro Mastery: AI for Business", 
        desc: "استخدام الذكاء الاصطناعي Claude Pro في التسويق والأتمتة.",
        cat: "ai", 
        img: "images/c10.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/claude-pro-mastery-ai-for-business-marketing-automation/?couponCode=01DECEMBER2025" 
    },
    { 
        id: 11, 
        titleAr: "كورس البرمجة الشامل (HTML, CSS, Java)", 
        titleEn: "Full Stack Programming Course", 
        desc: "تعلم أساسيات الويب والبرمجة باستخدام Java و JavaScript.",
        cat: "programming", 
        img: "images/c11.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/html-css-java-javascript-full-stack-programming-course/?couponCode=2C530EFECD00848D3F84" 
    },
    { 
        id: 12, 
        titleAr: "البرمجة كائنية التوجه C++ ومقابلات العمل", 
        titleEn: "OOP in C++ & Interview Prep", 
        desc: "إتقان مفاهيم OOP بلغة C++ والتحضير للأسئلة التقنية في المقابلات.",
        cat: "programming", 
        img: "images/c12.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/cracking-cpp-interview/?couponCode=D3F99F70C58797AC5864" 
    },
    { 
        id: 13, 
        titleAr: "معسكر بايثون الكامل من الصفر للاحتراف", 
        titleEn: "The Complete Python Bootcamp", 
        desc: "ابدأ رحلتك في تعلم لغة بايثون من الأساسيات حتى المستوى المتقدم.",
        cat: "programming", 
        img: "images/c13.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/the-complete-python-bootcamp-from-zero-to-expert/?couponCode=6BAFE17DEF20BEBDDE73" 
    },
    { 
        id: 14, 
        titleAr: "كورس قواعد البيانات الشامل (SQL & NoSQL)", 
        titleEn: "SQL, MYSQL, POSTGRESQL & MONGODB", 
        desc: "تعلم إدارة قواعد البيانات المختلفة في كورس واحد شامل.",
        cat: "programming", 
        img: "images/c14.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/sql-mysql-postgresql-mongodb-all-in-one-database-course/?couponCode=370F0C34BF8BBC4672E9" 
    },
    { 
        id: 15, 
        titleAr: "برمجة بايثون: الكورس الكامل للنجاح", 
        titleEn: "Python Programming: Complete Course", 
        desc: "شرح وافي وعملي للغة بايثون وتطبيقاتها المختلفة.",
        cat: "programming", 
        img: "images/c15.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/python-programming-the-complete-course-for-success/?couponCode=0D7303A8F49D6D25DBF9" 
    },
    { 
        id: 16, 
        titleAr: "معسكر تحليل البيانات باستخدام إكسل", 
        titleEn: "Excel Data Analysis Bootcamp", 
        desc: "تعلم كيفية تحليل البيانات الضخمة واستخراج النتائج باستخدام Excel.",
        cat: "business", 
        img: "images/c16.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/the-complete-microsoft-excel-data-analysis-bootcamp/?couponCode=9962B5F78821BCE50159" 
    },
    { 
        id: 17, 
        titleAr: "خبير تحليل البيانات ببرنامج إكسل", 
        titleEn: "Become a Data Analysis Expert", 
        desc: "خطوات عملية لتصبح خبيراً في التعامل مع البيانات في مايكروسوفت إكسل.",
        cat: "business", 
        img: "images/c17.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/microsoft-excel-data-analysis-become-a-data-analysis-expert/?couponCode=940C7B87F04BFBBD3F0A" 
    },
    { 
        id: 18, 
        titleAr: "لغة البرمجة R من المبتدئ للمحترف", 
        titleEn: "R Programming Language Pro", 
        desc: "تعلم لغة R المستخدمة بقوة في الإحصاء وتحليل البيانات.",
        cat: "programming", 
        img: "images/c18.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/r-programming-r-programming-language-beginners-to-pro/?couponCode=B85F222239ECDB367519" 
    },
    { 
        id: 19, 
        titleAr: "إتقان تحليل بيانات إكسل بالدوال", 
        titleEn: "Mastering Excel Analysis with Functions", 
        desc: "استخدام الدوال والمعادلات المتقدمة لتحليل البيانات بدقة.",
        cat: "business", 
        img: "images/c19.jpg", 
        date: "01 Dec 2025", 
        url: "https://www.udemy.com/course/mastering-microsoft-excel-data-analysis-with-functions/?couponCode=0D58CDD4105F4CC23868" 
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
    lucide.createIcons();
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
    listenToLikes();

    if (loadMoreBtn) {
        if (visibleGalleryCount >= totalGalleryImages) { loadMoreBtn.style.display = 'none'; } else { loadMoreBtn.style.display = 'inline-flex'; loadMoreBtn.innerHTML = `عرض المزيد (فاضل ${totalGalleryImages - visibleGalleryCount})`; }
    }
}

// دالة اللايك
window.toggleLike = function(imgId) {
    if (!db) { alert("جاري الاتصال بالسيرفر.. انتظر لحظة!"); return; }
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