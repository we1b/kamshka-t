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
    
    // معالجة الروابط المشاركة
    if(window.location.hash.startsWith('#course-')) {
        setTimeout(() => {
            const el = document.querySelector(window.location.hash);
            if(el) {
                el.scrollIntoView({behavior: 'smooth', block: 'center'});
                el.classList.add('ring-4', 'ring-emerald-400');
                setTimeout(() => el.classList.remove('ring-4', 'ring-emerald-400'), 2000);
            }
        }, 1000);
    }
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
// بيانات الكورسات (67 كورس بتاريخ 09 ديسمبر 2025)
// -------------------------------------------------------------------------
const coursesData = [
    // --- دفعة 1 ---
    { id: 601, titleAr: "معادلات ودوال إكسل من الأساسيات للخبير", titleEn: "Microsoft Excel Formulas and Functions For Basic to Expert", desc: "دورة شاملة لاحتراف دوال إكسل.", cat: "business", img: "images/c601.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/microsoft-excel-formulas-and-functions-for-basic-to-expert/?couponCode=75E949C1C30BFB11BF41" },
    { id: 602, titleAr: "تحليل وتصور البيانات مع Microsoft Copilot", titleEn: "Data Analysis and Data Visualization with Microsoft Copilot", desc: "استخدام الذكاء الاصطناعي في تحليل البيانات.", cat: "ai", img: "images/c602.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/data-analysis-and-data-visualization-with-microsoft-copilot/?couponCode=08DECEMBER2025" },
    { id: 603, titleAr: "الشهادة المهنية في التسويق والإعلان", titleEn: "Professional Certificate in Marketing and Advertising", desc: "كورس كامل في التسويق والإعلانات.", cat: "marketing", img: "images/c603.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/professional-certificate-in-marketing-and-advertising/?couponCode=FEA25181F164F03DFBFC" },
    { id: 604, titleAr: "الأمن السيبراني ومخاطر الذكاء الاصطناعي", titleEn: "Cyber security and Artificial Intelligence Risk Course", desc: "تعلم حماية الأنظمة من مخاطر الـ AI.", cat: "tech", img: "images/c604.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/cyber-security-and-artificial-intelligence-risk-course/?couponCode=CHRISTMASSALE" },
    { id: 605, titleAr: "PHP للمبتدئين: الدورة الكاملة مع MySQL", titleEn: "PHP for Beginners: The Complete PHP MySQL PDO Course", desc: "برمجة المواقع باستخدام PHP وقواعد البيانات.", cat: "programming", img: "images/c605.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/php-for-beginners-2021-the-complete-php-mysql-pdo-course/?couponCode=FULLSTACK116" },
    { id: 606, titleAr: "احتراف تصور البيانات في إكسل (Charts)", titleEn: "Mastering Excel Data Visualization with Design Chart & Graph", desc: "إنشاء رسوم بيانية احترافية في إكسل.", cat: "business", img: "images/c606.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/mastering-excel-data-visualization-with-design-chart-graph/?couponCode=D73AD49558BDC7ADB552" },
    { id: 607, titleAr: "مايكروسوفت بوربوينت: من المبتدئ للمحترف", titleEn: "Microsoft PowerPoint: From Beginner to Presentation Pro", desc: "تصميم عروض تقديمية مبهرة.", cat: "business", img: "images/c607.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/microsoft-powerpoint-from-beginner-to-presentation-pro/?couponCode=AE66F65734D0038B57AB" },
    { id: 608, titleAr: "أوتوكاد للتصميم الميكانيكي: مشاريع عملية", titleEn: "AutoCAD for Mechanical Design– Quick & Practical Projects", desc: "تعلم الرسم الهندسي الميكانيكي ببرنامج أوتوكاد.", cat: "graphic", img: "images/c608.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/autocad-2d-for-mechanical-design-20-quick-projects/?couponCode=138892EAADB757BD6435" },
    { id: 609, titleAr: "قواعد البيانات الشاملة: SQL, MySQL, Mongo", titleEn: "SQL, MYSQL, POSTGRESQL & MONGODB: All-in-One Database Course", desc: "تعلم أهم قواعد البيانات في كورس واحد.", cat: "programming", img: "images/c609.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/sql-mysql-postgresql-mongodb-all-in-one-database-course/?couponCode=A5464974D595B364D473" },
    { id: 610, titleAr: "أدوبي إليستريتور: من الصفر للبطل", titleEn: "Adobe Illustrator Complete Course: From Zero to Hero", desc: "احتراف التصميم والفيكتور.", cat: "graphic", img: "images/c610.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/adobe-illustrator-cc-masterclass-zero-to-hero-full-course/?couponCode=8F21788BF24419BA9433" },
    { id: 611, titleAr: "كورس إكسل الكامل: من المبتدئ للمتقدم", titleEn: "The Complete Microsoft Excel Course: Beginner to Advanced", desc: "دليلك الشامل لتعلم إكسل.", cat: "business", img: "images/c611.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-microsoft-excel-course-beginner-to-advanced/?couponCode=AF0E36FD9328D501E29C" },
    { id: 612, titleAr: "ماستر كلاس كتابة السيرة الذاتية (CV)", titleEn: "The Complete CV Writing & Tailoring Masterclass", desc: "كيف تكتب CV احترافي.", cat: "development", img: "images/c612.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-cv-writing-tailoring-masterclass/?couponCode=620651AF8FE98EDB7295" },
    { id: 613, titleAr: "اكتب كل يوم: بناء عادة الكتابة", titleEn: "Write Every Day: Building a Consistent Writing Habit in 2025", desc: "تطوير مهارة الكتابة اليومية.", cat: "development", img: "images/c613.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/write-every-day-building-a-consistent-writing-habit/?couponCode=1B1B9857638ACDC4C96E" },
    { id: 614, titleAr: "بوت كامب برمجة الجافا الكامل", titleEn: "Complete Java Programming Bootcamp: Learn to Code in Java", desc: "تعلم لغة جافا من الصفر.", cat: "programming", img: "images/c614.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/complete-java-programming-bootcamp-learn-to-code-in-java/?couponCode=3EDAA2DF2F360CC146C7" },
    { id: 615, titleAr: "الذكاء الاصطناعي للبنية التحتية السحابية", titleEn: "AI for Cloud Infrastructure: Automating AWS with StationOps", desc: "أتمتة AWS باستخدام AI.", cat: "tech", img: "images/c615.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/ai-for-cloud-infrastructure-automating-aws-with-stationops/?couponCode=08DECEMBER2025" },
    { id: 616, titleAr: "كورس Vue.JS الكامل للمبتدئين", titleEn: "The Complete Vue.JS Course for Beginners: Zero to Mastery", desc: "تعلم إطار عمل Vue.js.", cat: "programming", img: "images/c616.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-vuejs-course-for-beginners-zero-to-mastery/?couponCode=FROSTED-FUN-2025" },
    { id: 617, titleAr: "برمجة Full Stack: HTML, CSS, Java, JS", titleEn: "HTML, CSS, Java, & JavaScript: Full Stack Programming Course", desc: "مسار مطور الويب المتكامل.", cat: "programming", img: "images/c617.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/html-css-java-javascript-full-stack-programming-course/?couponCode=486DB506F96486098458" },
    { id: 618, titleAr: "إكسل للمبتدئين: للاستخدام اليومي", titleEn: "Microsoft Excel for Beginners: Excel for Everyday Use", desc: "أساسيات إكسل.", cat: "business", img: "images/c618.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/microsoft-excel-for-beginners-excel-for-everyday-use/?couponCode=992B1B4C00340BC913FD" },
    { id: 619, titleAr: "تحليل البيانات ببايثون (مشاريع حقيقية)", titleEn: "Complete Guide to Python Data Analysis with Real Datasets", desc: "تحليل البيانات باستخدام بايثون.", cat: "programming", img: "images/c619.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/complete-guide-to-python-data-analysis-with-real-datasets/?couponCode=B83FEF2D1C57C125C487" },
    { id: 620, titleAr: "تحضير امتحان AZ-900 السريع", titleEn: "NEW! AZ-900 Lightning Exam Prep Course", desc: "التحضير لشهادة مايكروسوفت أزور.", cat: "tech", img: "images/c620.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/az-900-lightning-exam-prep-course/?couponCode=CAE73316333033ABC4E8" },
    { id: 621, titleAr: "إنشاء المواقع الإلكترونية من البداية", titleEn: "Website Creation - Start learning from the beginning", desc: "كيف تبدأ موقعك الخاص.", cat: "programming", img: "images/c621.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/website-creation-start-learning-from-the-beginning/?couponCode=MYRRHMASTER" },
    { id: 622, titleAr: "لغة R: من المبتدئ للمحترف", titleEn: "R Programming - R Programming Language Beginners to Pro", desc: "تعلم لغة R للتحليل الإحصائي.", cat: "programming", img: "images/c622.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/r-programming-r-programming-language-beginners-to-pro/?couponCode=B014F62EA94DFCDA97CD" },
    { id: 623, titleAr: "بوت كامب بايثون الكامل", titleEn: "The Complete Python Bootcamp from Zero to Expert", desc: "كورس بايثون شامل.", cat: "programming", img: "images/c623.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-python-bootcamp-from-zero-to-expert/?couponCode=CCDDA771F09B2709E958" },
    { id: 624, titleAr: "دليل شامل لمعادلات إكسل", titleEn: "Microsoft Excel Formulas and Functions: Comprehensive Guide", desc: "احتراف معادلات إكسل.", cat: "business", img: "images/c624.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/microsoft-excel-formulas-and-functions-comprehensive-guide/?couponCode=01CDEBC8A1CB00783707" },
    { id: 625, titleAr: "كورس مايكروسوفت وورد الكامل", titleEn: "The Complete Microsoft Word Course: Learn Word Step by Step", desc: "احتراف برنامج الوورد.", cat: "business", img: "images/c625.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-microsoft-word-course-learn-word-step-by-step/?couponCode=33E707C6313EE35AB588" },
    { id: 626, titleAr: "تحليل البيانات بـ Excel", titleEn: "Microsoft Excel - The Complete Excel Data Analysis Course", desc: "استخدام إكسل في تحليل البيانات.", cat: "business", img: "images/c626.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/microsoft-excel-the-complete-excel-data-analysis-course/?couponCode=BISMILLAH-23" },
    { id: 627, titleAr: "لوحات تحكم وتصور بيانات التسويق", titleEn: "Master Marketing Data Visualization & Insights Dashboard", desc: "تصميم داشبورد للتسويق.", cat: "marketing", img: "images/c627.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/data-visualization-for-marketing-insights-digital-marketing/?couponCode=AKS-DEV-1205" },
    { id: 628, titleAr: "تعلم بايثون 3 في 2025", titleEn: "Learn Python Programming Masterclass: Python 3 in 2025", desc: "دورة حديثة لتعلم بايثون.", cat: "programming", img: "images/c628.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/learn-python-programming-quick-beginner/?couponCode=TIDINGS2025" },
    { id: 629, titleAr: "التجميع والتعلم غير الخاضع للإشراف ببايثون", titleEn: "Clustering & Unsupervised Learning in Python", desc: "تقنيات الذكاء الاصطناعي المتقدمة.", cat: "ai", img: "images/c629.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/clustering-unsupervised-learning-in-python/?couponCode=JINGLE-CODE-1205" },
    { id: 630, titleAr: "نشر نماذج ML بـ FastAPI و Docker", titleEn: "Deploy ML Model in Production with FastAPI and Docker", desc: "كيفية نشر نماذج الذكاء الاصطناعي.", cat: "ai", img: "images/c630.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/deploy-ml-model-in-production-with-fastapi-and-docker/?couponCode=WINTER-WONDER-25" },
    { id: 631, titleAr: "أدوبي بريمير برو: من الصفر", titleEn: "Adobe Premiere Pro CC Essential Video Editing Zero To Hero", desc: "مونتاج الفيديو ببريمير.", cat: "graphic", img: "images/c631.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/adobe-premiere-pro-cc-essential-video-editing-zero-to-hero/?couponCode=D85B851D6461F0461C20" },
    { id: 632, titleAr: "فوتوشوب ماستر كلاس", titleEn: "Ultimate Adobe Photoshop CC Masterclass Basics To Advanced", desc: "احتراف الفوتوشوب.", cat: "graphic", img: "images/c632.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/ultimate-adobe-photoshop-cc-masterclass-basics-to-advanced/?couponCode=9DDD48709735E77DF525" },
    { id: 633, titleAr: "دليل المبتدئين لأدوبي بريمير", titleEn: "The Beginner's Guide to Adobe Premiere Pro: Edit Like a Pro", desc: "مونتاج فيديو احترافي.", cat: "graphic", img: "images/c633.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/the-beginners-guide-to-adobe-premiere-pro-edit-like-a-pro/?couponCode=4695C90BF96186938EFC" },
    { id: 634, titleAr: "تحرير الفيديو الاحترافي (برتغالي)", titleEn: "Adobe Premiere Pro: Edição de Vídeo Profissional Completa", desc: "كورس مونتاج شامل.", cat: "graphic", img: "images/c634.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/adobe-premiere-edicao-de-video/?couponCode=KEEPLEARNING" },
    { id: 635, titleAr: "كورس فوتوشوب الاحترافي", titleEn: "Professional Adobe Photoshop CC Course With Advance Training", desc: "تدريب متقدم في الفوتوشوب.", cat: "graphic", img: "images/c635.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/professional-adobe-photoshop-cc-course-with-advance-training/?couponCode=12031C0AF9C94B7B88F0" },
    { id: 636, titleAr: "أساسيات أدوبي فوتوشوب", titleEn: "Adobe Photoshop CC Fundamentals and Essentials Training", desc: "أدوات الفوتوشوب الأساسية.", cat: "graphic", img: "images/c636.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/adobe-photoshop-cc-principal-essential-course-for-beginners/?couponCode=8DFC8543D3547DE5FE52" },
    { id: 637, titleAr: "مشاريع إليستريتور", titleEn: "Mastering Adobe Illustrator Projects: Build Your Portfolio", desc: "مشاريع عملية في التصميم.", cat: "graphic", img: "images/c637.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/mastering-adobe-illustrator-projects-build-your-portfolio/?couponCode=84EF4DCF5685ECDEE062" },
    { id: 638, titleAr: "كورس فيجما الكامل", titleEn: "Complete Figma Course: Web & Mobile Projects from Scratch", desc: "تصميم واجهات المستخدم بفيجما.", cat: "graphic", img: "images/c638.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/figma-practical-design/?couponCode=05DECEMBER2025" },
    { id: 639, titleAr: "Perplexity AI: للبحث والكتابة", titleEn: "Perplexity AI: Transform Your Research and Writing Workflow", desc: "استخدام Perplexity AI في البحث العلمي.", cat: "ai", img: "images/c639.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/perplexity-ai-transform-your-research-and-writing-workflow/?couponCode=2FF334C5992867A2BC9F" },
    
    // --- دفعة 2 ---
    { id: 640, titleAr: "احتراف Power Automate Desktop (ج2)", titleEn: "Microsoft Power Automate Desktop - Zero to Expert : Part 2", desc: "أتمتة سطح المكتب المتقدمة.", cat: "tech", img: "images/c640.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/microsoft-power-automate-desktop-course-zero-to-expert-2/?couponCode=DEC2025" },
    { id: 641, titleAr: "الإدارة المالية للقادة", titleEn: "Financial Stewardship for Decision Makers and Leaders", desc: "الإدارة المالية لصناع القرار.", cat: "business", img: "images/c641.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/financial-stewardship-for-decision-makers-and-leaders/?couponCode=2NDDEC" },
    { id: 642, titleAr: "دورة Java و C++ و PHP", titleEn: "Java And C++ And PHP Crash Course All in One For Beginners", desc: "تعلم 3 لغات برمجة في كورس واحد.", cat: "programming", img: "images/c642.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/java-and-c-and-php-crash-course-for-beginners/?couponCode=77B2AC89A5EBBD8DD7D4" },
    { id: 643, titleAr: "RPA المتقدم: Power Automate و AI Builder", titleEn: "Advanced RPA - Microsoft Power Automate With AI Builder", desc: "الذكاء الاصطناعي في الأتمتة.", cat: "tech", img: "images/c643.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/microsoft-power-automate-with-ai-builder/?couponCode=DEC2025" },
    { id: 644, titleAr: "دليل هندسة حلول RPA", titleEn: "Complete Guide to RPA Solution Architecture", desc: "تصميم حلول الأتمتة.", cat: "tech", img: "images/c644.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/become-rpa-solution-architect-in-30-days/?couponCode=DEC2025" },
    { id: 645, titleAr: "ماجستير تصميم الويب بالذكاء الاصطناعي 2025", titleEn: "Máster en Diseño Web con Inteligencia Artificial 2025", desc: "تصميم المواقع باستخدام AI.", cat: "graphic", img: "images/c645.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/master-en-diseno-web-con-inteligencia-artificial/?couponCode=MASTER-DIA77" },
    { id: 646, titleAr: "الخدمات المالية والمصرفية للشركات", titleEn: "Financial Services - Basics of Business & Corporate Banking", desc: "أساسيات الخدمات البنكية للشركات.", cat: "business", img: "images/c646.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/financial-services-basics-of-business-corporate-banking/?couponCode=2NDDEC" },
    { id: 647, titleAr: "نظرة عامة على البنوك المركزية", titleEn: "Financial Services - Overview of Central Banks", desc: "فهم عمل البنوك المركزية.", cat: "business", img: "images/c647.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/financial-services-overview-of-central-banks/?couponCode=2NDDEC" },
    { id: 648, titleAr: "الأتمتة الذكية Power Automate Desktop", titleEn: "RPA:Microsoft Power Automate Desktop:Intelligent Automation", desc: "احتراف الأتمتة المكتبية.", cat: "tech", img: "images/c648.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/power-automate-desktop-course-intelligent-automation/?couponCode=DEC2025" },
    { id: 649, titleAr: "دبلومة استشارات الاكتئاب", titleEn: "Advanced Diploma in Depression Counselling", desc: "إرشاد الصحة النفسية.", cat: "development", img: "images/c649.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/depressioncounselling/?couponCode=3710CC5EC576685A2424" },
    { id: 650, titleAr: "بناء مصادر دخل متعددة", titleEn: "Learn How to Build Multiple Income Streams", desc: "تحقيق دخل إضافي.", cat: "business", img: "images/c650.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/build-multiple-income-streams-to-10000-usd-per-month/?couponCode=DEC_FREE_AI" },
    { id: 651, titleAr: "الدبلومة المهنية في الإعلانات", titleEn: "Professional Diploma in Advertising & Advertising Management", desc: "إدارة الحملات الإعلانية.", cat: "marketing", img: "images/c651.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/professional-diploma-in-advertising-management/?couponCode=C862CD87D9D9EAF92BE4" },
    { id: 652, titleAr: "تخلص من إدمان الهاتف للأطفال", titleEn: "Smartphone Detox for Kids: A 7-Day Family Challenge", desc: "تحدي 7 أيام لتقليل استخدام الهاتف.", cat: "development", img: "images/c652.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/smartphone-detox-for-kids/?couponCode=5541A41D907BB9488B06" },
    { id: 653, titleAr: "كورس برمجة C الكامل", titleEn: "The Complete C Programming Course for Basic to Expert", desc: "تعلم لغة C.", cat: "programming", img: "images/c653.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-c-programming-course-for-basic-to-expert/?couponCode=DD404303F8428F793744" },
    { id: 654, titleAr: "مشاريع PHP و MySQL", titleEn: "PHP with MySQL: Build 7 PHP and MySQL Projects", desc: "بناء مشاريع ويب عملية.", cat: "programming", img: "images/c654.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/php-with-mysql-2023-build-7-php-and-mysql-projects/?couponCode=PHP7PROJECTS68" },
    { id: 655, titleAr: "تحليل البيانات بـ Excel: خطوة بخطوة", titleEn: "The Complete Excel Data Analysis Course: Step by Step Guide", desc: "دليل تحليل البيانات.", cat: "business", img: "images/c655.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-excel-data-analysis-course-step-by-step-guide/?couponCode=1B9848E9F06694CAE37A" },
    { id: 656, titleAr: "رؤى بيانات إكسل: Power Query", titleEn: "Excel Data Insights: Power Query Pivot Analysis and Visuals", desc: "أدوات إكسل المتقدمة.", cat: "business", img: "images/c656.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/excel-data-insights-power-query-pivot-analysis-and-visuals/?couponCode=8A71273150E20F8E7830" },
    { id: 657, titleAr: "ماجستير علوم البيانات والذكاء الاصطناعي", titleEn: "Data Science & AI Masters 2025 - From Python To Gen AI", desc: "من بايثون إلى الذكاء الاصطناعي التوليدي.", cat: "ai", img: "images/c657.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/data-science-ai-masters-from-python-to-gen-ai/?couponCode=KEEPLEARNING" },
    { id: 658, titleAr: "تعلم JavaScript APIs بمرح", titleEn: "GIFs, Jokes & More – Learn JavaScript APIs the Fun Way!", desc: "طريقة ممتعة لتعلم البرمجة.", cat: "programming", img: "images/c658.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/gifs-jokes-more-learn-javascript-apis-the-fun-way/?couponCode=1AE68E69F6A063E27A64" },
    { id: 659, titleAr: "إكسل وجوجل شيتس مع AI", titleEn: "Modern Excel MasterClass and Google Sheets with AI ChatGPT", desc: "استخدام الذكاء الاصطناعي في الجداول.", cat: "business", img: "images/c659.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/modern-microsoft-excel-masterclass-and-google-sheets-with-ai-chatgpt/?couponCode=KEEPLEARNING" },
    { id: 660, titleAr: "ابدأ بيزنس أونلاين في 30 يوم", titleEn: "How To Start An Online Business And Win Clients In 30 Days", desc: "خطة لبدء العمل الحر.", cat: "freelance", img: "images/c660.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/howtostartmyownbusiness/?couponCode=NEWFOUNDER14" },
    { id: 661, titleAr: "دبلومة الإنجليزية للأعمال", titleEn: "Professional Diploma in Business English and Communications", desc: "الإنجليزية في بيئة العمل.", cat: "languages", img: "images/c661.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/professional-diploma-in-business-english-and-communications/?couponCode=B0910A67B52B3AFE7CCB" },
    { id: 662, titleAr: "GCP DevOps: Terraform و Azure", titleEn: "GCP DevOps: Terraform IaC & Azure DevOps CI/CD Masterclass", desc: "عمليات التطوير على السحابة.", cat: "tech", img: "images/c662.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/gcp-devops-terraform-iac-azure-devops-cicd-masterclass/?couponCode=KEEPLEARNING" },
    { id: 663, titleAr: "احتراف أوفيس وجوجل دوكس", titleEn: "Master MS Word Excel PowerPoint and Google Doc Google Sheets", desc: "دورة شاملة للبرامج المكتبية.", cat: "business", img: "images/c663.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/master-ms-word-excel-powerpoint-and-google-doc-google-sheets/?couponCode=6159E361972E78F8F05C" },
    { id: 664, titleAr: "تحليل البيانات بـ Excel المتقدم", titleEn: "The Complete Microsoft Excel Data Analysis Basic to Advanced", desc: "احتراف تحليل البيانات.", cat: "business", img: "images/c664.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-microsoft-excel-data-analysis-basic-to-advanced/?couponCode=F660890AD2F451928D95" },
    { id: 665, titleAr: "الرقابة الداخلية وإدارة المخاطر", titleEn: "Internal Controls Masterclass: Design & Risk-Based Testing", desc: "تصميم أنظمة الرقابة.", cat: "business", img: "images/c665.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/internal-controls-masterclass-design-risk-based-testing/?couponCode=EE1987517B8065DEB16B" },
    { id: 666, titleAr: "تحليل البيانات بـ Excel (نسخة ثانية)", titleEn: "The Complete Microsoft Excel Data Analysis Basic to Advanced", desc: "دورة إضافية لتحليل البيانات.", cat: "business", img: "images/c666.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-microsoft-excel-data-analysis-basic-to-advanced/?couponCode=F660890AD2F451928D95" },
    { id: 667, titleAr: "مكافحة غسيل الأموال في التجارة", titleEn: "Mastering Trade-Based Money Laundering (TBML)", desc: "كشف الجرائم المالية.", cat: "business", img: "images/c667.jpg", date: "09 ديسمبر 2025", url: "https://www.udemy.com/course/mastering-trade-based-money-laundering-tbml/?couponCode=D22C7691C70A9F421FC8" }
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
    
    document.getElementById('search-input')?.addEventListener('keyup', (e) => {
        searchText = e.target.value;
        visibleCoursesCount = COURSES_INCREMENT;
        renderCourses();
    });

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
        visibleCoursesCount = COURSES_INCREMENT;
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

    const coursesToShow = filtered.slice(0, visibleCoursesCount);

    grid.innerHTML = coursesToShow.map((c, i) => {
        const title = currentLang === 'ar' ? c.titleAr : c.titleEn;
        const subTitle = currentLang === 'ar' ? c.titleEn : c.titleAr;
        const catName = t('cat_' + c.cat);
        
        return `
        <div class="glass-panel rounded-2xl overflow-hidden group hover:-translate-y-2 transition duration-300 flex flex-col fade-in bg-white/60" id="course-${c.id}" style="animation-delay: ${i * 50}ms">
            <div class="relative h-48 overflow-hidden">
                <img src="${c.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" onerror="this.src='https://placehold.co/600x400/10b981/FFF?text=Kamshkat'">
                <div class="absolute top-3 start-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs text-emerald-800 font-bold shadow-sm">${catName}</div>
            </div>
            <div class="p-5 flex-1 flex flex-col text-start">
                <div class="text-xs text-slate-500 mb-2 font-bold">${c.date}</div>
                <h3 class="text-xl font-bold mb-1 text-emerald-900">${title}</h3>
                <h4 class="text-sm font-semibold text-slate-500 mb-3">${subTitle}</h4>
                <p class="text-slate-600 text-sm mb-4 line-clamp-2">${c.desc}</p>
                <div class="mt-auto flex gap-2">
                    <a href="${c.url}" target="_blank" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-center font-bold transition shadow-lg flex items-center justify-center gap-2">
                        ${t('btn_subscribe')} <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                    <button onclick="shareCourse(${c.id}, '${title.replace(/'/g, "\\'")}')" class="bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 rounded-xl transition flex items-center justify-center shadow-sm" title="${t('btn_share')}">
                        <i data-lucide="share-2" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');
    
    lucide.createIcons();

    if(loadMoreBtn) {
        loadMoreBtn.style.display = visibleCoursesCount >= filtered.length ? 'none' : 'inline-flex';
    }
}

function shareCourse(id, title) {
    const url = window.location.origin + window.location.pathname + '#course-' + id;
    const shareData = {
        title: title,
        text: 'شوف الكورس ده على موقع كمشكاة 👇',
        url: url
    };

    if (navigator.share) {
        navigator.share(shareData).catch((err) => console.log('Share failed', err));
    } else {
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = url;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert(t('share_msg'));
    }
}

// -------------------------------------------------------------------------
// صفحة المكتبة (Library)
// -------------------------------------------------------------------------
function initLibraryPage() { renderBooks(); }
function renderBooks(search = '') { }

// -------------------------------------------------------------------------
// صفحة المعرض (Gallery Logic - Smart Auto Discovery)
// -------------------------------------------------------------------------
function initGalleryPage() { 
    if (typeof window.visibleGalleryCount === 'undefined') {
        window.visibleGalleryCount = 10;
    }
    
    renderGallery(); 

    const loadMoreBtn = document.getElementById('load-more-gallery');
    if(loadMoreBtn) {
        // نستخدم onclick لمنع التكرار ومنع الريفريش
        loadMoreBtn.onclick = function(e) {
            e.preventDefault(); // منع الريفريش
            window.visibleGalleryCount += GALLERY_INCREMENT;
            renderGallery();
        };
        // تأكيد نوع الزرار عشان ميعملش submit
        loadMoreBtn.type = 'button';
    }
}

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more-gallery');
    if(!grid) return;

    let html = '';
    const cacheBuster = new Date().getTime(); 
    
    // تعريف 3 مقاسات مختلفة للصور (placeholder) عشان الشكل يبقى متنوع
    // 600x400 (مستطيل عرضي), 600x800 (طويل/بوستر), 600x600 (مربع)
    const placeHolders = ['600x400', '600x800', '600x600'];

    for(let i=1; i <= window.visibleGalleryCount; i++) {
        // اختيار مقاس بالدور (0, 1, 2, 0, 1, 2...)
        const dim = placeHolders[i % 3];

        html += `
        <div class="glass-panel rounded-2xl overflow-hidden break-inside-avoid mb-6 group relative fade-in border-0 shadow-sm" id="img-container-${i}">
            <div class="relative cursor-pointer" onclick="openLightbox('images/${i}.jpg')">
                <img 
                    src="images/${i}.jpg?v=${cacheBuster}" 
                    class="w-full h-auto object-cover rounded-2xl"
                    loading="lazy" 
                    onload="this.parentElement.parentElement.classList.remove('animate-pulse'); this.parentElement.parentElement.style.display='block';"
                    onerror="this.parentElement.parentElement.style.display='none'"
                >
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

    if(loadMoreBtn) {
        loadMoreBtn.innerHTML = `<span>${t('btn_load_more_gallery')}</span> <i data-lucide="arrow-down" class="w-5 h-5"></i>`;
        
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
    const limit = window.visibleGalleryCount || GALLERY_INITIAL_COUNT;
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
        if(dlBtn) {
            dlBtn.href = src;
            dlBtn.innerHTML = `<i data-lucide="download"></i> ${t('btn_download')}`;
        }
    }
    lucide.createIcons();
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

// -------------------------------------------------------------------------
// Chatbase Script
// -------------------------------------------------------------------------
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="pzJqEYo1jgjQMK7rX1iuu";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();