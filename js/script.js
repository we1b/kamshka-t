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
// بيانات الكورسات (58 كورس بتاريخ 08 ديسمبر)
// -------------------------------------------------------------------------
const coursesData = [
    // --- المجموعة الأولى ---
    { 
        id: 501, 
        titleAr: "الاختراق الأخلاقي بلغة بايثون", 
        titleEn: "Python Ethical Hacking Pentest for Hackers Scripting Basics", 
        desc: "تعلم أساسيات السكريبتينج للاختراق الأخلاقي ببايثون.", 
        cat: "tech", 
        img: "images/c501.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/python-ethical-hacking-pentest-for-hackers-scripting-basics/?couponCode=86D9ADB0B4753928FAA8" 
    },
    { 
        id: 502, 
        titleAr: "الدبلومة التنفيذية في إدارة الأعمال", 
        titleEn: "Executive Diploma in Business Management and Administration", 
        desc: "دبلومة شاملة للمديرين والمسؤولين التنفيذيين.", 
        cat: "business", 
        img: "images/c502.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/executive-diploma-in-business-management-and-administration/?couponCode=3B6B6395B4AB003BAF71" 
    },
    { 
        id: 503, 
        titleAr: "HTML و CSS للمبتدئين: من الأساسيات للمتقدم", 
        titleEn: "HTML and CSS for Beginners From Basic to Advance", 
        desc: "ابني مواقع الويب من الصفر باستخدام HTML و CSS.", 
        cat: "programming", 
        img: "images/c503.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/html-and-css-for-beginners-from-basic-to-advance/?couponCode=EE916B96276976B66264" 
    },
    { 
        id: 504, 
        titleAr: "احتراف Tableau Desktop: من الأساسيات للمتقدم", 
        titleEn: "Master Tableau Desktop - From Basics to Advanced", 
        desc: "تعلم تحليل البيانات وتصورها باستخدام تابلوه.", 
        cat: "business", 
        img: "images/c504.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/master-tableau-desktop/?couponCode=15800BDC4991D7F0424F" 
    },
    { 
        id: 505, 
        titleAr: "جافاسكريبت: 10 مشاريع في 10 أيام", 
        titleEn: "JavaScript 10 Projects in 10 Days Course for Beginners", 
        desc: "تطبيق عملي مكثف لتعلم جافاسكريبت عبر المشاريع.", 
        cat: "programming", 
        img: "images/c505.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/javascript-10-projects-in-10-days-course-for-beginners-w/?couponCode=3B6077152793CDF02031" 
    },
    { 
        id: 506, 
        titleAr: "دورة شاملة في Java و C++ و PHP للمبتدئين", 
        titleEn: "Java And C++ And PHP Crash Course All in One For Beginners", 
        desc: "تعلم 3 لغات برمجة قوية في كورس واحد مكثف.", 
        cat: "programming", 
        img: "images/c506.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/java-and-c-and-php-crash-course-for-beginners/?couponCode=77B2AC89A5EBBD8DD7D4" 
    },
    { 
        id: 507, 
        titleAr: "الدبلومة المهنية في الكوتشينج والإرشاد", 
        titleEn: "Professional Diploma in Life Coaching & Business Mentorship", 
        desc: "كيف تصبح لايف كوتش وموجه أعمال محترف.", 
        cat: "development", 
        img: "images/c507.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/professional-diploma-in-life-coaching-business-mentorship/?couponCode=A47C63693B1613F8942E" 
    },
    { 
        id: 508, 
        titleAr: "إتقان مسابقات الابتكار والهاكاثون", 
        titleEn: "Mastering Innovation Competitions, Hackathon & Crowdsourcing", 
        desc: "دليل شامل للمشاركة والفوز في مسابقات الابتكار.", 
        cat: "business", 
        img: "images/c508.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/mastering-innovation-competitions-hackathon-crowdsourcing/?couponCode=D3B612E370AF75025A53" 
    },
    { 
        id: 509, 
        titleAr: "نمو الأعمال الاستشارية: احصل على عملاء أكثر", 
        titleEn: "Consulting Business Growth with Dekker: Get More Clients!", 
        desc: "استراتيجيات لزيادة مبيعات وعملاء شركتك الاستشارية.", 
        cat: "business", 
        img: "images/c509.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/consulting-business/?couponCode=2A7C49892A91C19CCD13" 
    },
    { 
        id: 510, 
        titleAr: "كورس بايثون الكامل مع Flask و HTML", 
        titleEn: "Python Complete Course And Flask Framework, HTML Essentials", 
        desc: "تعلم بايثون وإطار عمل Flask لتطوير الويب.", 
        cat: "programming", 
        img: "images/c510.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/python-complete-course-and-flask-framework-html-2024-edition/?couponCode=8983E1647A67D6E3B28E" 
    },
    { 
        id: 511, 
        titleAr: "نجاح مقابلات جافاسكريبت: دليل شامل", 
        titleEn: "JavaScript Interview Success: Comprehensive Practice Guide", 
        desc: "تحضير قوي لأسئلة مقابلات العمل لمطوري جافاسكريبت.", 
        cat: "programming", 
        img: "images/c511.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/javascript-interview-success/?couponCode=DISCUDEMY.COM" 
    },
    { 
        id: 512, 
        titleAr: "الذكاء الاصطناعي التوليدي لإنتاج المحتوى", 
        titleEn: "Generative AI for Content Production & Multimedia Campaigns", 
        desc: "استخدام الـ GenAI في صناعة المحتوى والحملات الإعلانية.", 
        cat: "ai", 
        img: "images/c512.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/best-generative-ai/?couponCode=021225_FREE" 
    },
    { 
        id: 513, 
        titleAr: "كورس CSS و JavaScript و PHP للمبتدئين", 
        titleEn: "CSS, JavaScript And PHP Complete Course For Beginners", 
        desc: "دورة تأسيسية في أهم لغات الويب.", 
        cat: "programming", 
        img: "images/c513.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/css-javascript-and-php-complete-course-for-beginners/?couponCode=7C5613FD0507A04EE93A" },
    { 
        id: 514, 
        titleAr: "ChatGPT لإدارة المنتجات والابتكار", 
        titleEn: "ChatGPT for Product Management & Innovation", 
        desc: "كيف تستخدم ChatGPT في إدارة المنتجات وتوليد الأفكار.", 
        cat: "ai", 
        img: "images/c514.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/chatgpt-for-product-management-innovation-aec/?couponCode=7D9A80174B028EAF71C2" 
    },
    { 
        id: 515, 
        titleAr: "Active Directory: المواقع والنسخ المتماثل", 
        titleEn: "Active Directory: Sites and Replication with a Lab", 
        desc: "شرح عملي لإدارة الـ Active Directory في الشبكات.", 
        cat: "tech", 
        img: "images/c515.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/active-directory-sites-and-replication/?couponCode=268C470A1C4EAB4EE0B3" 
    },
    { 
        id: 516, 
        titleAr: "مايكروسوفت بوربوينت: من المدرسة للشركات", 
        titleEn: "Microsoft PowerPoint School to Corporate : Basic to Advance", 
        desc: "انتقل بمهارات العروض التقديمية من المستوى الدراسي للمهني.", 
        cat: "business", 
        img: "images/c516.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-powerpoint-from-beginner-to-advanced-with-project/?couponCode=14A7D47CE5F966E7D4BA" 
    },
    { 
        id: 517, 
        titleAr: "شهادة PCEP بايثون للمبتدئين", 
        titleEn: "Complete PCEP Python Certification Course Beginner Friendly", 
        desc: "كورس تحضيري لشهادة بايثون PCEP للمبتدئين.", 
        cat: "programming", 
        img: "images/c517.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/complete-pcep-python-certification-course-beginner-friendly/?couponCode=C9C449C5C2533D6A73B8" 
    },
    { 
        id: 518, 
        titleAr: "ماستر كلاس تطوير الألعاب والتطبيقات ببايثون", 
        titleEn: "Python Game Development and App Programming Masterclass", 
        desc: "تعلم برمجة الألعاب والتطبيقات باستخدام بايثون.", 
        cat: "programming", 
        img: "images/c518.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/python-game-development-and-app-programming-masterclass/?couponCode=8EEA1F1520502EA23E9E" 
    },
    { 
        id: 519, 
        titleAr: "أتمتة إكسل باستخدام بايثون", 
        titleEn: "Excel Automation with Python From Basics to Advanced Tasks", 
        desc: "كيف تستخدم بايثون لأتمتة مهام إكسل المملة.", 
        cat: "programming", 
        img: "images/c519.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/excel-automation-with-python-from-basics-to-advanced-tasks/?couponCode=7F34337C8FEF2033B0E9" 
    },

    // --- المجموعة الثانية ---
    { 
        id: 520, 
        titleAr: "معادلات ودوال إكسل: من الأساسيات للخبير", 
        titleEn: "Microsoft Excel Formulas and Functions For Basic to Expert", 
        desc: "احتراف دوال إكسل من البداية وحتى المستوى المتقدم.", 
        cat: "business", 
        img: "images/c520.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-excel-formulas-and-functions-for-basic-to-expert/?couponCode=75E949C1C30BFB11BF41" 
    },
    { 
        id: 521, 
        titleAr: "تحليل البيانات بـ Microsoft Copilot", 
        titleEn: "Data Analysis and Data Visualization with Microsoft Copilot", 
        desc: "استخدام الذكاء الاصطناعي Copilot في تحليل البيانات.", 
        cat: "ai", 
        img: "images/c521.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/data-analysis-and-data-visualization-with-microsoft-copilot/?couponCode=08DECEMBER2025" 
    },
    { 
        id: 522, 
        titleAr: "الشهادة المهنية في التسويق والإعلان", 
        titleEn: "Professional Certificate in Marketing and Advertising", 
        desc: "دورة شاملة لاحتراف مجال التسويق والإعلانات.", 
        cat: "marketing", 
        img: "images/c522.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/professional-certificate-in-marketing-and-advertising/?couponCode=FEA25181F164F03DFBFC" 
    },
    { 
        id: 523, 
        titleAr: "الأمن السيبراني ومخاطر الذكاء الاصطناعي", 
        titleEn: "Cyber security and Artificial Intelligence Risk Course", 
        desc: "فهم المخاطر الأمنية المتعلقة بالذكاء الاصطناعي.", 
        cat: "tech", 
        img: "images/c523.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/cyber-security-and-artificial-intelligence-risk-course/?couponCode=CHRISTMASSALE" 
    },
    { 
        id: 524, 
        titleAr: "PHP للمبتدئين: الدورة الكاملة مع MySQL و PDO", 
        titleEn: "PHP for Beginners: The Complete PHP MySQL PDO Course", 
        desc: "تعلم PHP من الصفر حتى بناء قواعد البيانات.", 
        cat: "programming", 
        img: "images/c524.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/php-for-beginners-2021-the-complete-php-mysql-pdo-course/?couponCode=FULLSTACK116" 
    },
    { 
        id: 525, 
        titleAr: "احتراف تصور البيانات في إكسل (Charts & Graphs)", 
        titleEn: "Mastering Excel Data Visualization with Design Chart & Graph", 
        desc: "تصميم رسوم بيانية احترافية لعرض البيانات في إكسل.", 
        cat: "business", 
        img: "images/c525.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/mastering-excel-data-visualization-with-design-chart-graph/?couponCode=D73AD49558BDC7ADB552" 
    },
    { 
        id: 526, 
        titleAr: "مايكروسوفت بوربوينت: من مبتدئ لمحترف", 
        titleEn: "Microsoft PowerPoint: From Beginner to Presentation Pro", 
        desc: "تعلم تصميم عروض تقديمية احترافية ببرنامج بوربوينت.", 
        cat: "business", 
        img: "images/c526.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-powerpoint-from-beginner-to-presentation-pro/?couponCode=AE66F65734D0038B57AB" 
    },
    { 
        id: 527, 
        titleAr: "أوتوكاد للتصميم الميكانيكي: مشاريع عملية", 
        titleEn: "AutoCAD for Mechanical Design– Quick & Practical Projects", 
        desc: "تطبيق عملي على الأوتوكاد من خلال مشاريع ميكانيكية.", 
        cat: "graphic", 
        img: "images/c527.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/autocad-2d-for-mechanical-design-20-quick-projects/?couponCode=138892EAADB757BD6435" 
    },
    { 
        id: 528, 
        titleAr: "كورس قواعد البيانات الشامل: SQL, MySQL, Mongo", 
        titleEn: "SQL, MYSQL, POSTGRESQL & MONGODB: All-in-One Database Course", 
        desc: "تعلم كل أنواع قواعد البيانات في كورس واحد.", 
        cat: "programming", 
        img: "images/c528.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/sql-mysql-postgresql-mongodb-all-in-one-database-course/?couponCode=A5464974D595B364D473" 
    },
    { 
        id: 529, 
        titleAr: "أدوبي إليستريتور: من الصفر للبطل", 
        titleEn: "Adobe Illustrator Complete Course: From Zero to Hero", 
        desc: "احتراف تصميم الفيكتور والرسومات باستخدام إليستريتور.", 
        cat: "graphic", 
        img: "images/c529.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/adobe-illustrator-cc-masterclass-zero-to-hero-full-course/?couponCode=8F21788BF24419BA9433" 
    },
    { 
        id: 530, 
        titleAr: "كورس إكسل الكامل: من المبتدئ للمتقدم", 
        titleEn: "The Complete Microsoft Excel Course: Beginner to Advanced", 
        desc: "الدليل الشامل لتعلم كل خبايا مايكروسوفت إكسل.", 
        cat: "business", 
        img: "images/c530.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-complete-microsoft-excel-course-beginner-to-advanced/?couponCode=AF0E36FD9328D501E29C" 
    },
    { 
        id: 531, 
        titleAr: "ماستر كلاس كتابة السيرة الذاتية (CV)", 
        titleEn: "The Complete CV Writing & Tailoring Masterclass", 
        desc: "كيف تكتب سيرة ذاتية احترافية تضمن لك الوظيفة.", 
        cat: "development", 
        img: "images/c531.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-complete-cv-writing-tailoring-masterclass/?couponCode=620651AF8FE98EDB7295" 
    },
    { 
        id: 532, 
        titleAr: "اكتب كل يوم: بناء عادة الكتابة في 2025", 
        titleEn: "Write Every Day: Building a Consistent Writing Habit in 2025", 
        desc: "كيف تلتزم بعادة الكتابة اليومية وتطور مهاراتك.", 
        cat: "development", 
        img: "images/c532.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/write-every-day-building-a-consistent-writing-habit/?couponCode=1B1B9857638ACDC4C96E" 
    },
    { 
        id: 533, 
        titleAr: "بوت كامب برمجة الجافا الكامل", 
        titleEn: "Complete Java Programming Bootcamp: Learn to Code in Java", 
        desc: "معسكر تدريبي مكثف لتعلم لغة البرمجة جافا.", 
        cat: "programming", 
        img: "images/c533.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/complete-java-programming-bootcamp-learn-to-code-in-java/?couponCode=3EDAA2DF2F360CC146C7" 
    },
    { 
        id: 534, 
        titleAr: "الذكاء الاصطناعي للبنية التحتية السحابية (AWS)", 
        titleEn: "AI for Cloud Infrastructure: Automating AWS with StationOps", 
        desc: "أتمتة خدمات أمازون السحابية باستخدام الذكاء الاصطناعي.", 
        cat: "tech", 
        img: "images/c534.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ai-for-cloud-infrastructure-automating-aws-with-stationops/?couponCode=08DECEMBER2025" 
    },
    { 
        id: 535, 
        titleAr: "كورس Vue.JS الكامل للمبتدئين", 
        titleEn: "The Complete Vue.JS Course for Beginners: Zero to Mastery", 
        desc: "تعلم إطار عمل Vue.JS لتطوير واجهات المستخدم.", 
        cat: "programming", 
        img: "images/c535.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-complete-vuejs-course-for-beginners-zero-to-mastery/?couponCode=FROSTED-FUN-2025" 
    },
    { 
        id: 536, 
        titleAr: "برمجة Full Stack: HTML, CSS, Java, JS", 
        titleEn: "HTML, CSS, Java, & JavaScript: Full Stack Programming Course", 
        desc: "دورة شاملة لتصبح مطور ويب Full Stack.", 
        cat: "programming", 
        img: "images/c536.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/html-css-java-javascript-full-stack-programming-course/?couponCode=486DB506F96486098458" 
    },
    { 
        id: 537, 
        titleAr: "إكسل للمبتدئين: للاستخدام اليومي", 
        titleEn: "Microsoft Excel for Beginners: Excel for Everyday Use", 
        desc: "أساسيات إكسل للاستخدامات اليومية البسيطة.", 
        cat: "business", 
        img: "images/c537.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-excel-for-beginners-excel-for-everyday-use/?couponCode=992B1B4C00340BC913FD" 
    },
    { 
        id: 538, 
        titleAr: "دليل تحليل البيانات ببايثون (مشاريع حقيقية)", 
        titleEn: "Complete Guide to Python Data Analysis with Real Datasets", 
        desc: "تطبيق عملي لتحليل البيانات باستخدام لغة بايثون.", 
        cat: "programming", 
        img: "images/c538.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/complete-guide-to-python-data-analysis-with-real-datasets/?couponCode=B83FEF2D1C57C125C487" 
    },
    { 
        id: 539, 
        titleAr: "تحضير امتحان AZ-900 السريع", 
        titleEn: "NEW! AZ-900 Lightning Exam Prep Course", 
        desc: "كورس مكثف للتحضير لشهادة مايكروسوفت أزور AZ-900.", 
        cat: "tech", 
        img: "images/c539.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/az-900-lightning-exam-prep-course/?couponCode=CAE73316333033ABC4E8" 
    },
    { 
        id: 540, 
        titleAr: "إنشاء المواقع الإلكترونية من البداية", 
        titleEn: "Website Creation - Start learning from the beginning", 
        desc: "كيف تبدأ في إنشاء موقعك الإلكتروني الخاص.", 
        cat: "programming", 
        img: "images/c540.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/website-creation-start-learning-from-the-beginning/?couponCode=MYRRHMASTER" 
    },
    { 
        id: 541, 
        titleAr: "لغة R: من المبتدئ للمحترف", 
        titleEn: "R Programming - R Programming Language Beginners to Pro", 
        desc: "تعلم لغة البرمجة R المستخدمة في التحليل الإحصائي.", 
        cat: "programming", 
        img: "images/c541.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/r-programming-r-programming-language-beginners-to-pro/?couponCode=B014F62EA94DFCDA97CD" 
    },
    { 
        id: 542, 
        titleAr: "بوت كامب بايثون الكامل: من الصفر للخبير", 
        titleEn: "The Complete Python Bootcamp from Zero to Expert", 
        desc: "الدورة الأقوى لتعلم بايثون بالكامل.", 
        cat: "programming", 
        img: "images/c542.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-complete-python-bootcamp-from-zero-to-expert/?couponCode=CCDDA771F09B2709E958" 
    },
    { 
        id: 543, 
        titleAr: "دليل شامل لمعادلات ودوال إكسل", 
        titleEn: "Microsoft Excel Formulas and Functions: Comprehensive Guide", 
        desc: "كل ما يخص معادلات إكسل في كورس واحد.", 
        cat: "business", 
        img: "images/c543.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-excel-formulas-and-functions-comprehensive-guide/?couponCode=01CDEBC8A1CB00783707" 
    },
    { 
        id: 544, 
        titleAr: "كورس مايكروسوفت وورد الكامل", 
        titleEn: "The Complete Microsoft Word Course: Learn Word Step by Step", 
        desc: "احتراف برنامج الكتابة وورد خطوة بخطوة.", 
        cat: "business", 
        img: "images/c544.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-complete-microsoft-word-course-learn-word-step-by-step/?couponCode=33E707C6313EE35AB588" 
    },
    { 
        id: 545, 
        titleAr: "تحليل البيانات بـ Excel (الكورس الكامل)", 
        titleEn: "Microsoft Excel - The Complete Excel Data Analysis Course", 
        desc: "استخدام إكسل كأداة قوية لتحليل البيانات.", 
        cat: "business", 
        img: "images/c545.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-excel-the-complete-excel-data-analysis-course/?couponCode=BISMILLAH-23" 
    },
    { 
        id: 546, 
        titleAr: "تصور بيانات التسويق ولوحات التحكم", 
        titleEn: "Master Marketing Data Visualization & Insights Dashboard", 
        desc: "إنشاء لوحات تحكم تسويقية احترافية.", 
        cat: "marketing", 
        img: "images/c546.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/data-visualization-for-marketing-insights-digital-marketing/?couponCode=AKS-DEV-1205" 
    },
    { 
        id: 547, 
        titleAr: "تعلم برمجة بايثون 3 في 2025", 
        titleEn: "Learn Python Programming Masterclass: Python 3 in 2025", 
        desc: "أحدث دورة لتعلم بايثون 3.", 
        cat: "programming", 
        img: "images/c547.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/learn-python-programming-quick-beginner/?couponCode=TIDINGS2025" 
    },
    { 
        id: 548, 
        titleAr: "التجميع والتعلم غير الخاضع للإشراف ببايثون", 
        titleEn: "Clustering & Unsupervised Learning in Python", 
        desc: "تقنيات متقدمة في الذكاء الاصطناعي وتعلم الآلة.", 
        cat: "ai", 
        img: "images/c548.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/clustering-unsupervised-learning-in-python/?couponCode=JINGLE-CODE-1205" 
    },
    { 
        id: 549, 
        titleAr: "نشر نماذج ML بـ FastAPI و Docker", 
        titleEn: "Deploy ML Model in Production with FastAPI and Docker", 
        desc: "كيفية نشر نماذج الذكاء الاصطناعي وجعلها متاحة للاستخدام.", 
        cat: "ai", 
        img: "images/c549.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/deploy-ml-model-in-production-with-fastapi-and-docker/?couponCode=WINTER-WONDER-25" 
    },
    { 
        id: 550, 
        titleAr: "أدوبي بريمير برو: مونتاج الفيديو من الصفر", 
        titleEn: "Adobe Premiere Pro CC Essential Video Editing Zero To Hero", 
        desc: "تعلم مونتاج الفيديو باحترافية.", 
        cat: "graphic", 
        img: "images/c550.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/adobe-premiere-pro-cc-essential-video-editing-zero-to-hero/?couponCode=D85B851D6461F0461C20" 
    },
    { 
        id: 551, 
        titleAr: "فوتوشوب ماستر كلاس: من الأساسيات للمتقدم", 
        titleEn: "Ultimate Adobe Photoshop CC Masterclass Basics To Advanced", 
        desc: "الكورس الشامل لاحتراف الفوتوشوب.", 
        cat: "graphic", 
        img: "images/c551.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ultimate-adobe-photoshop-cc-masterclass-basics-to-advanced/?couponCode=9DDD48709735E77DF525" 
    },
    { 
        id: 552, 
        titleAr: "دليل المبتدئين لأدوبي بريمير برو", 
        titleEn: "The Beginner's Guide to Adobe Premiere Pro: Edit Like a Pro", 
        desc: "أساسيات المونتاج ببريمير برو.", 
        cat: "graphic", 
        img: "images/c552.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-beginners-guide-to-adobe-premiere-pro-edit-like-a-pro/?couponCode=4695C90BF96186938EFC" 
    },
    { 
        id: 553, 
        titleAr: "تحرير الفيديو الاحترافي (بريمير برو - برتغالي)", 
        titleEn: "Adobe Premiere Pro: Edição de Vídeo Profissional Completa", 
        desc: "كورس مونتاج شامل (باللغة البرتغالية).", 
        cat: "graphic", 
        img: "images/c553.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/adobe-premiere-edicao-de-video/?couponCode=KEEPLEARNING" 
    },
    { 
        id: 554, 
        titleAr: "كورس فوتوشوب الاحترافي مع تدريب متقدم", 
        titleEn: "Professional Adobe Photoshop CC Course With Advance Training", 
        desc: "تقنيات متقدمة في الفوتوشوب.", 
        cat: "graphic", 
        img: "images/c554.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/professional-adobe-photoshop-cc-course-with-advance-training/?couponCode=12031C0AF9C94B7B88F0" 
    },
    { 
        id: 555, 
        titleAr: "أساسيات أدوبي فوتوشوب", 
        titleEn: "Adobe Photoshop CC Fundamentals and Essentials Training", 
        desc: "تعلم الأدوات الأساسية في فوتوشوب.", 
        cat: "graphic", 
        img: "images/c555.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/adobe-photoshop-cc-principal-essential-course-for-beginners/?couponCode=8DFC8543D3547DE5FE52" 
    },
    { 
        id: 556, 
        titleAr: "مشاريع إليستريتور: ابنِ معرض أعمالك", 
        titleEn: "Mastering Adobe Illustrator Projects: Build Your Portfolio", 
        desc: "مشاريع عملية في إليستريتور لبناء بورتفوليو قوي.", 
        cat: "graphic", 
        img: "images/c556.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/mastering-adobe-illustrator-projects-build-your-portfolio/?couponCode=84EF4DCF5685ECDEE062" 
    },
    { 
        id: 557, 
        titleAr: "كورس فيجما الكامل: تصميم ويب وموبايل من الصفر", 
        titleEn: "Complete Figma Course: Web & Mobile Projects from Scratch", 
        desc: "تعلم تصميم واجهات المستخدم باستخدام Figma.", 
        cat: "graphic", 
        img: "images/c557.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/figma-practical-design/?couponCode=05DECEMBER2025" 
    },
    { 
        id: 558, 
        titleAr: "Perplexity AI: حول طريقة بحثك وكتابتك", 
        titleEn: "Perplexity AI: Transform Your Research and Writing Workflow", 
        desc: "استخدام أداة Perplexity AI للبحث والكتابة الأكاديمية.", 
        cat: "ai", 
        img: "images/c558.jpg", 
        date: "08 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/perplexity-ai-transform-your-research-and-writing-workflow/?couponCode=2FF334C5992867A2BC9F" 
    }
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
        loadMoreBtn.onclick = function(e) {
            e.preventDefault(); 
            window.visibleGalleryCount += GALLERY_INCREMENT;
            renderGallery();
        };
        loadMoreBtn.type = 'button';
    }
}

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more-gallery');
    if(!grid) return;

    let html = '';
    const cacheBuster = new Date().getTime(); 
    const placeHolders = ['600x400', '600x800', '600x600'];

    for(let i=1; i <= window.visibleGalleryCount; i++) {
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