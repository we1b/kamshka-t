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
const MAX_GALLERY_IMAGES = 1000;   // الحد الأقصى 1000 صورة

let visibleCoursesCount = 6;      
const COURSES_INCREMENT = 6;      

// -------------------------------------------------------------------------
// قاموس الترجمة
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
        btn_share: "مشاركة",
        share_msg: "تم نسخ رابط الكورس! شاركه مع أصحابك.",
        no_courses: "مفيش كورسات بالاسم ده 🤷‍♂️",

        gallery_title: "معرض التصميمات",
        gallery_subtitle: "إبداع متجدد . لمسة فنية",
        btn_download: "تحميل الصورة",
        btn_zoom: "تكبير",
        btn_load_more_gallery: "عرض المزيد من التصميمات",

        library_title: "مكتبة كمشكاة",
        library_soon_title: "بنرص الكتب في الرفوف... 📚",
        library_soon_desc: "جاري تجميع ورفع أفضل الكتب والمصادر المجانية اللي هتساعدك تطور من نفسك ومهاراتك.\nالمكتبة هتكون متاحة قريباً جداً.",
        btn_check_courses: "شوف الكورسات عقبال ما نخلص",
        btn_home: "الرئيسية",

        articles_title: "مدونة كمشكاة",
        articles_soon_title: "قريباً جداً... 🔥",
        articles_soon_desc: "شغالين دلوقتي على تجهيز مقالات دسمة، نسأل الله التوفيق.\nالمحتوى اللي جاي هيفرق معاك جداً، خليك متابع!",
        btn_back_home: "رجوع للرئيسية",
        
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
        cat_languages: "لغات",

        chat_title: "مساعد كمشكاة الذكي",
        chat_placeholder: "اكتب سؤالك هنا...",
        chat_welcome: "أهلاً بك في كمشكاة! 👋\nأنا مساعد ذكي تحت أمرك، اسألني عن الكورسات أو التصميمات."
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
        btn_share: "Share",
        share_msg: "Course link copied! Share it with friends.",
        no_courses: "No courses found 🤷‍♂️",

        gallery_title: "Design Gallery",
        gallery_subtitle: "Renewed Creativity . Artistic Touch",
        btn_download: "Download",
        btn_zoom: "Zoom",
        btn_load_more_gallery: "Load More Designs",

        library_title: "Kamshkat Library",
        library_soon_title: "Stocking the shelves... 📚",
        library_soon_desc: "We are currently gathering and uploading the best free books and resources to help you develop your skills.\nThe library will be available very soon.",
        btn_check_courses: "Check Courses Meanwhile",
        btn_home: "Home",

        articles_title: "Kamshkat Blog",
        articles_soon_title: "Coming Very Soon... 🔥",
        articles_soon_desc: "We are working on preparing rich articles, we ask Allah for success.\nThe upcoming content will make a difference, stay tuned!",
        btn_back_home: "Back to Home",

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
        cat_languages: "Languages",

        chat_title: "Kamshkat AI Assistant",
        chat_placeholder: "Type your question...",
        chat_welcome: "Welcome to Kamshkat! 👋\nI'm an AI assistant. Ask me about courses or designs."
    }
};

let currentLang = localStorage.getItem('kamshkat_lang') || 'ar';

// -------------------------------------------------------------------------
// التشغيل الرئيسي
// -------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    preventCopying(); 

    try {
        if (typeof firebase !== 'undefined') {
            firebase.initializeApp(firebaseConfig);
            db = firebase.database();
            analytics = firebase.analytics();
            if(document.getElementById('gallery-grid')) listenToLikes();
        }
    } catch (e) { console.error("Firebase Error", e); }

    loadComponents();
    
    // تشغيل الشات بوت
    (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="pzJqEYo1jgjQMK7rX1iuu";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();

    if(document.getElementById('courses-grid')) initCoursesPage();
    if(document.getElementById('articles-grid')) initArticlesPage();
    if(document.getElementById('gallery-grid')) initGalleryPage(); 
    if(document.getElementById('library-grid')) initLibraryPage();
    if(document.body.dataset.page === 'home') initHomePage();
});

// --- وظيفة منع النسخ واللصق ---
function preventCopying() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function(e) {
        if(e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117 || e.keyCode === 83 || e.keyCode === 80)) {
            return false;
        } else {
            return true;
        }
    };
}

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
// بيانات الكورسات (جميع الكورسات)
// -------------------------------------------------------------------------
const coursesData = [
    { 
        id: 246, 
        titleAr: "احتراف Power Automate Desktop: من الصفر للخبير (ج2)", 
        titleEn: "Microsoft Power Automate Desktop - Zero to Expert : Part 2", 
        desc: "الجزء الثاني من سلسلة احتراف الأتمتة باستخدام مايكروسوفت.", 
        cat: "tech", 
        img: "images/c246.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-power-automate-desktop-course-zero-to-expert-2/?couponCode=DEC2025" 
    },
    { 
        id: 247, 
        titleAr: "الإدارة المالية لصناع القرار والقادة", 
        titleEn: "Financial Stewardship for Decision Makers and Leaders", 
        desc: "كيف تدير الأمور المالية بحكمة كقائد أو مدير.", 
        cat: "business", 
        img: "images/c247.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/financial-stewardship-for-decision-makers-and-leaders/?couponCode=2NDDEC" 
    },
    { 
        id: 248, 
        titleAr: "دورة شاملة في Java و C++ و PHP للمبتدئين", 
        titleEn: "Java And C++ And PHP Crash Course All in One For Beginners", 
        desc: "تعلم 3 لغات برمجة قوية في كورس واحد مكثف.", 
        cat: "programming", 
        img: "images/c248.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/java-and-c-and-php-crash-course-for-beginners/?couponCode=77B2AC89A5EBBD8DD7D4" 
    },
    { 
        id: 249, 
        titleAr: "RPA المتقدم: Power Automate مع AI Builder", 
        titleEn: "Advanced RPA - Microsoft Power Automate With AI Builder", 
        desc: "دمج الذكاء الاصطناعي مع الأتمتة لزيادة الإنتاجية.", 
        cat: "tech", 
        img: "images/c249.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-power-automate-with-ai-builder/?couponCode=DEC2025" 
    },
    { 
        id: 250, 
        titleAr: "الدليل الكامل لهندسة حلول RPA", 
        titleEn: "Complete Guide to RPA Solution Architecture", 
        desc: "كيف تصمم حلول أتمتة روبوتية للعمليات بكفاءة.", 
        cat: "tech", 
        img: "images/c250.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/become-rpa-solution-architect-in-30-days/?couponCode=DEC2025" 
    },
    { 
        id: 251, 
        titleAr: "ماجستير تصميم الويب بالذكاء الاصطناعي 2025", 
        titleEn: "Máster en Diseño Web con Inteligencia Artificial 2025", 
        desc: "استخدام أدوات الـ AI لتصميم مواقع ويب احترافية بسرعة.", 
        cat: "graphic", 
        img: "images/c251.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/master-en-diseno-web-con-inteligencia-artificial/?couponCode=MASTER-DIA77" 
    },
    { 
        id: 252, 
        titleAr: "الخدمات المالية: أساسيات الأعمال والخدمات المصرفية", 
        titleEn: "Financial Services - Basics of Business & Corporate Banking", 
        desc: "فهم عميق للخدمات البنكية للشركات والأعمال.", 
        cat: "business", 
        img: "images/c252.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/financial-services-basics-of-business-corporate-banking/?couponCode=2NDDEC" 
    },
    { 
        id: 253, 
        titleAr: "الخدمات المالية: نظرة عامة على البنوك المركزية", 
        titleEn: "Financial Services - Overview of Central Banks", 
        desc: "كيف تعمل البنوك المركزية وتأثيرها على الاقتصاد.", 
        cat: "business", 
        img: "images/c253.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/financial-services-overview-of-central-banks/?couponCode=2NDDEC" 
    },
    { 
        id: 254, 
        titleAr: "الأتمتة الذكية: Power Automate Desktop", 
        titleEn: "RPA:Microsoft Power Automate Desktop:Intelligent Automation", 
        desc: "كورس آخر قوي في مجال الـ RPA والأتمتة المكتبية.", 
        cat: "tech", 
        img: "images/c254.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/power-automate-desktop-course-intelligent-automation/?couponCode=DEC2025" 
    },
    { 
        id: 255, 
        titleAr: "دبلومة متقدمة في استشارات الاكتئاب", 
        titleEn: "Advanced Diploma in Depression Counselling", 
        desc: "دورة متخصصة في الصحة النفسية والإرشاد.", 
        cat: "development", 
        img: "images/c255.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/depressioncounselling/?couponCode=3710CC5EC576685A2424" 
    },
    { 
        id: 256, 
        titleAr: "تعلم بناء مصادر دخل متعددة", 
        titleEn: "Learn How to Build Multiple Income Streams", 
        desc: "استراتيجيات لتنويع مصادر الدخل وتحقيق الاستقلال المالي.", 
        cat: "business", 
        img: "images/c256.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/build-multiple-income-streams-to-10000-usd-per-month/?couponCode=DEC_FREE_AI" 
    },
    { 
        id: 257, 
        titleAr: "الدبلومة المهنية في الإعلانات وإدارتها", 
        titleEn: "Professional Diploma in Advertising & Advertising Management", 
        desc: "احتراف مجال الإعلانات وإدارة الحملات الإعلانية.", 
        cat: "marketing", 
        img: "images/c257.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/professional-diploma-in-advertising-management/?couponCode=C862CD87D9D9EAF92BE4" 
    },
    { 
        id: 258, 
        titleAr: "تخلص من إدمان الهاتف للأطفال: تحدي 7 أيام", 
        titleEn: "Smartphone Detox for Kids: A 7-Day Family Challenge", 
        desc: "خطة عملية لمساعدة الأطفال على تقليل استخدام الهواتف.", 
        cat: "development", 
        img: "images/c258.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/smartphone-detox-for-kids/?couponCode=5541A41D907BB9488B06" 
    },
    { 
        id: 259, 
        titleAr: "كورس برمجة C الكامل: من الأساسيات للخبير", 
        titleEn: "The Complete C Programming Course for Basic to Expert", 
        desc: "تعلم لغة C العريقة من البداية وحتى الاحتراف.", 
        cat: "programming", 
        img: "images/c259.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-complete-c-programming-course-for-basic-to-expert/?couponCode=DD404303F8428F793744" 
    },
    { 
        id: 260, 
        titleAr: "PHP مع MySQL: بناء 7 مشاريع كاملة", 
        titleEn: "PHP with MySQL: Build 7 PHP and MySQL Projects", 
        desc: "تطوير مهاراتك في الويب عبر بناء 7 مشاريع حقيقية.", 
        cat: "programming", 
        img: "images/c260.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/php-with-mysql-2023-build-7-php-and-mysql-projects/?couponCode=PHP7PROJECTS68" 
    },
    { 
        id: 261, 
        titleAr: "الكورس الكامل لتحليل البيانات بـ Excel", 
        titleEn: "The Complete Excel Data Analysis Course: Step by Step Guide", 
        desc: "دليل خطوة بخطوة لاحتراف تحليل البيانات باستخدام إكسل.", 
        cat: "business", 
        img: "images/c261.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-complete-excel-data-analysis-course-step-by-step-guide/?couponCode=1B9848E9F06694CAE37A" 
    },
    { 
        id: 262, 
        titleAr: "رؤى بيانات إكسل: Power Query و Pivot", 
        titleEn: "Excel Data Insights: Power Query Pivot Analysis and Visuals", 
        desc: "استخدام الأدوات المتقدمة في إكسل لتحليل البيانات.", 
        cat: "business", 
        img: "images/c262.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/excel-data-insights-power-query-pivot-analysis-and-visuals/?couponCode=8A71273150E20F8E7830" 
    },
    { 
        id: 263, 
        titleAr: "ماجستير علوم البيانات والذكاء الاصطناعي 2025", 
        titleEn: "Data Science & AI Masters 2025 - From Python To Gen AI", 
        desc: "مسار كامل من بايثون إلى الذكاء الاصطناعي التوليدي.", 
        cat: "ai", 
        img: "images/c263.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/data-science-ai-masters-from-python-to-gen-ai/?couponCode=KEEPLEARNING" 
    },
    { 
        id: 264, 
        titleAr: "تعلم APIs الجافاسكريبت بطريقة ممتعة", 
        titleEn: "GIFs, Jokes & More – Learn JavaScript APIs the Fun Way!", 
        desc: "طريقة مسلية لتعلم التعامل مع الـ APIs في الويب.", 
        cat: "programming", 
        img: "images/c264.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/gifs-jokes-more-learn-javascript-apis-the-fun-way/?couponCode=1AE68E69F6A063E27A64" 
    },
    { 
        id: 265, 
        titleAr: "ماستر كلاس Excel الحديث و Google Sheets مع AI", 
        titleEn: "Modern Excel MasterClass and Google Sheets with AI ChatGPT", 
        desc: "دمج الذكاء الاصطناعي مع جداول البيانات لزيادة الإنتاجية.", 
        cat: "business", 
        img: "images/c265.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/modern-microsoft-excel-masterclass-and-google-sheets-with-ai-chatgpt/?couponCode=KEEPLEARNING" 
    },
    { 
        id: 266, 
        titleAr: "كيف تبدأ بيزنس أونلاين وتكسب عملاء في 30 يوم", 
        titleEn: "How To Start An Online Business And Win Clients In 30 Days", 
        desc: "خطة عملية لبدء عملك الحر أو مشروعك الخاص.", 
        cat: "freelance", 
        img: "images/c266.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/howtostartmyownbusiness/?couponCode=NEWFOUNDER14" 
    },
    { 
        id: 267, 
        titleAr: "الدبلومة المهنية في الإنجليزية للأعمال", 
        titleEn: "Professional Diploma in Business English and Communications", 
        desc: "تحسين مهارات التواصل باللغة الإنجليزية في بيئة العمل.", 
        cat: "languages", 
        img: "images/c267.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/professional-diploma-in-business-english-and-communications/?couponCode=B0910A67B52B3AFE7CCB" 
    },
    { 
        id: 268, 
        titleAr: "GCP DevOps: Terraform و Azure DevOps", 
        titleEn: "GCP DevOps: Terraform IaC & Azure DevOps CI/CD Masterclass", 
        desc: "احتراف عمليات التطوير (DevOps) على منصة جوجل كلاود.", 
        cat: "tech", 
        img: "images/c268.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/gcp-devops-terraform-iac-azure-devops-cicd-masterclass/?couponCode=KEEPLEARNING" 
    },
    { 
        id: 269, 
        titleAr: "احتراف مجموعة أوفيس وجوجل دوكس", 
        titleEn: "Master MS Word Excel PowerPoint and Google Doc Google Sheets", 
        desc: "دورة شاملة لكل أدوات المكتب الأساسية.", 
        cat: "business", 
        img: "images/c269.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/master-ms-word-excel-powerpoint-and-google-doc-google-sheets/?couponCode=6159E361972E78F8F05C" 
    },
    { 
        id: 270, 
        titleAr: "تحليل البيانات بـ Excel: من الأساسيات للمتقدم", 
        titleEn: "The Complete Microsoft Excel Data Analysis Basic to Advanced", 
        desc: "كل ما يخص تحليل البيانات باستخدام إكسل.", 
        cat: "business", 
        img: "images/c270.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-complete-microsoft-excel-data-analysis-basic-to-advanced/?couponCode=F660890AD2F451928D95" 
    },
    { 
        id: 271, 
        titleAr: "ماستر كلاس الرقابة الداخلية واختبار المخاطر", 
        titleEn: "Internal Controls Masterclass: Design & Risk-Based Testing", 
        desc: "تصميم أنظمة الرقابة الداخلية وإدارة المخاطر.", 
        cat: "business", 
        img: "images/c271.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/internal-controls-masterclass-design-risk-based-testing/?couponCode=EE1987517B8065DEB16B" 
    },
    { 
        id: 272, 
        titleAr: "احتراف مكافحة غسيل الأموال القائم على التجارة (TBML)", 
        titleEn: "Mastering Trade-Based Money Laundering (TBML)", 
        desc: "فهم وكشف عمليات غسيل الأموال في التجارة الدولية.", 
        cat: "business", 
        img: "images/c272.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/mastering-trade-based-money-laundering-tbml/?couponCode=D22C7691C70A9F421FC8" 
    },
    { 
        id: 273, 
        titleAr: "الاختراق الأخلاقي بلغة بايثون", 
        titleEn: "Python Ethical Hacking Pentest for Hackers Scripting Basics", 
        desc: "تعلم أساسيات السكريبتينج للاختراق الأخلاقي ببايثون.", 
        cat: "tech", 
        img: "images/c273.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/python-ethical-hacking-pentest-for-hackers-scripting-basics/?couponCode=86D9ADB0B4753928FAA8" 
    },
    { 
        id: 274, 
        titleAr: "الدبلومة التنفيذية في إدارة الأعمال", 
        titleEn: "Executive Diploma in Business Management and Administration", 
        desc: "دبلومة شاملة للمديرين والمسؤولين التنفيذيين.", 
        cat: "business", 
        img: "images/c274.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/executive-diploma-in-business-management-and-administration/?couponCode=3B6B6395B4AB003BAF71" 
    },
    { 
        id: 275, 
        titleAr: "HTML و CSS للمبتدئين: من الأساسيات للمتقدم", 
        titleEn: "HTML and CSS for Beginners From Basic to Advance", 
        desc: "ابني مواقع الويب من الصفر باستخدام HTML و CSS.", 
        cat: "programming", 
        img: "images/c275.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/html-and-css-for-beginners-from-basic-to-advance/?couponCode=EE916B96276976B66264" 
    },
    { 
        id: 276, 
        titleAr: "احتراف Tableau Desktop: من الأساسيات للمتقدم", 
        titleEn: "Master Tableau Desktop - From Basics to Advanced", 
        desc: "تعلم تحليل البيانات وتصورها باستخدام تابلوه.", 
        cat: "business", 
        img: "images/c276.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/master-tableau-desktop/?couponCode=15800BDC4991D7F0424F" 
    },
    { 
        id: 277, 
        titleAr: "جافاسكريبت: 10 مشاريع في 10 أيام", 
        titleEn: "JavaScript 10 Projects in 10 Days Course for Beginners", 
        desc: "تطبيق عملي مكثف لتعلم جافاسكريبت عبر المشاريع.", 
        cat: "programming", 
        img: "images/c277.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/javascript-10-projects-in-10-days-course-for-beginners-w/?couponCode=3B6077152793CDF02031" 
    },
    { 
        id: 278, 
        titleAr: "الدبلومة المهنية في الكوتشينج والإرشاد", 
        titleEn: "Professional Diploma in Life Coaching & Business Mentorship", 
        desc: "كيف تصبح لايف كوتش وموجه أعمال محترف.", 
        cat: "development", 
        img: "images/c278.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/professional-diploma-in-life-coaching-business-mentorship/?couponCode=A47C63693B1613F8942E" 
    },
    { 
        id: 279, 
        titleAr: "إتقان مسابقات الابتكار والهاكاثون", 
        titleEn: "Mastering Innovation Competitions, Hackathon & Crowdsourcing", 
        desc: "دليل شامل للمشاركة والفوز في مسابقات الابتكار.", 
        cat: "business", 
        img: "images/c279.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/mastering-innovation-competitions-hackathon-crowdsourcing/?couponCode=D3B612E370AF75025A53" 
    },
    { 
        id: 280, 
        titleAr: "نمو الأعمال الاستشارية: احصل على عملاء أكثر", 
        titleEn: "Consulting Business Growth with Dekker: Get More Clients!", 
        desc: "استراتيجيات لزيادة مبيعات وعملاء شركتك الاستشارية.", 
        cat: "business", 
        img: "images/c280.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/consulting-business/?couponCode=2A7C49892A91C19CCD13" 
    },
    { 
        id: 281, 
        titleAr: "كورس بايثون الكامل مع Flask و HTML", 
        titleEn: "Python Complete Course And Flask Framework, HTML Essentials", 
        desc: "تعلم بايثون وإطار عمل Flask لتطوير الويب.", 
        cat: "programming", 
        img: "images/c281.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/python-complete-course-and-flask-framework-html-2024-edition/?couponCode=8983E1647A67D6E3B28E" 
    },
    { 
        id: 282, 
        titleAr: "نجاح مقابلات جافاسكريبت: دليل شامل", 
        titleEn: "JavaScript Interview Success: Comprehensive Practice Guide", 
        desc: "تحضير قوي لأسئلة مقابلات العمل لمطوري جافاسكريبت.", 
        cat: "programming", 
        img: "images/c282.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/javascript-interview-success/?couponCode=DISCUDEMY.COM" 
    },
    { 
        id: 283, 
        titleAr: "الذكاء الاصطناعي التوليدي لإنتاج المحتوى", 
        titleEn: "Generative AI for Content Production & Multimedia Campaigns", 
        desc: "استخدام الـ GenAI في صناعة المحتوى والحملات الإعلانية.", 
        cat: "ai", 
        img: "images/c283.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/best-generative-ai/?couponCode=021225_FREE" 
    },
    { 
        id: 284, 
        titleAr: "كورس CSS و JavaScript و PHP للمبتدئين", 
        titleEn: "CSS, JavaScript And PHP Complete Course For Beginners", 
        desc: "دورة تأسيسية في أهم لغات الويب.", 
        cat: "programming", 
        img: "images/c284.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/css-javascript-and-php-complete-course-for-beginners/?couponCode=7C5613FD0507A04EE93A" },
    { 
        id: 285, 
        titleAr: "ChatGPT لإدارة المنتجات والابتكار", 
        titleEn: "ChatGPT for Product Management & Innovation", 
        desc: "كيف تستخدم ChatGPT في إدارة المنتجات وتوليد الأفكار.", 
        cat: "ai", 
        img: "images/c285.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/chatgpt-for-product-management-innovation-aec/?couponCode=7D9A80174B028EAF71C2" 
    },
    { 
        id: 286, 
        titleAr: "Active Directory: المواقع والنسخ المتماثل", 
        titleEn: "Active Directory: Sites and Replication with a Lab", 
        desc: "شرح عملي لإدارة الـ Active Directory في الشبكات.", 
        cat: "tech", 
        img: "images/c286.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/active-directory-sites-and-replication/?couponCode=268C470A1C4EAB4EE0B3" 
    },
    { 
        id: 287, 
        titleAr: "مايكروسوفت بوربوينت: من المدرسة للشركات", 
        titleEn: "Microsoft PowerPoint School to Corporate : Basic to Advance", 
        desc: "انتقل بمهارات العروض التقديمية من المستوى الدراسي للمهني.", 
        cat: "business", 
        img: "images/c287.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-powerpoint-from-beginner-to-advanced-with-project/?couponCode=14A7D47CE5F966E7D4BA" 
    },
    { 
        id: 288, 
        titleAr: "شهادة PCEP بايثون للمبتدئين", 
        titleEn: "Complete PCEP Python Certification Course Beginner Friendly", 
        desc: "كورس تحضيري لشهادة بايثون PCEP للمبتدئين.", 
        cat: "programming", 
        img: "images/c288.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/complete-pcep-python-certification-course-beginner-friendly/?couponCode=C9C449C5C2533D6A73B8" 
    },
    { 
        id: 289, 
        titleAr: "ماستر كلاس تطوير الألعاب والتطبيقات ببايثون", 
        titleEn: "Python Game Development and App Programming Masterclass", 
        desc: "تعلم برمجة الألعاب والتطبيقات باستخدام بايثون.", 
        cat: "programming", 
        img: "images/c289.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/python-game-development-and-app-programming-masterclass/?couponCode=8EEA1F1520502EA23E9E" 
    },
    { 
        id: 290, 
        titleAr: "أتمتة إكسل باستخدام بايثون", 
        titleEn: "Excel Automation with Python From Basics to Advanced Tasks", 
        desc: "كيف تستخدم بايثون لأتمتة مهام إكسل المملة.", 
        cat: "programming", 
        img: "images/c290.jpg", 
        date: "06 ديسمبر 2025 | 15 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/excel-automation-with-python-from-basics-to-advanced-tasks/?couponCode=7F34337C8FEF2033B0E9" 
    }
];