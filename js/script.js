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
// بيانات الكورسات (26 كورس بتاريخ 07 ديسمبر)
// -------------------------------------------------------------------------
const coursesData = [
    // --- المجموعة الأولى (الجديدة جداً) ---
    { 
        id: 417, 
        titleAr: "احتراف لغة Go: بناء تطبيقات ويب قابلة للتوسع", 
        titleEn: "Master Go (Golang): Build Scalable Web Applications", 
        desc: "تعلم لغة جوجل القوية Go لبناء تطبيقات ويب عالية الأداء.", 
        cat: "programming", 
        img: "images/c417.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/master-go-golang-build-scalable-web-applications/?couponCode=A137FBFB43730430C44C" 
    },
    { 
        id: 418, 
        titleAr: "الدبلومة المهنية في عمليات الدمج والاستحواذ (M&A)", 
        titleEn: "Professional Diploma in M&A Business Mergers & Acquisitions", 
        desc: "فهم عميق لعمليات دمج الشركات والاستحواذ عليها في عالم الأعمال.", 
        cat: "business", 
        img: "images/c418.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/professional-diploma-in-ma-business-mergers-acquisitions/?couponCode=2C903806CD444F47FD75" 
    },
    { 
        id: 419, 
        titleAr: "احتراف مايكروسوفت بوربوينت: عروض تقديمية مذهلة", 
        titleEn: "Mastering Microsoft PowerPoint: Create Stunning Presentation", 
        desc: "كيف تصمم عروضاً تقديمية احترافية تجذب الانتباه.", 
        cat: "business", 
        img: "images/c419.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/mastering-microsoft-powerpoint-create-stunning-presentation/?couponCode=C7A89639D6142CBDC7C2" 
    },
    { 
        id: 420, 
        titleAr: "مايكروسوفت وورد وجوجل دوكس: احتراف إنشاء المستندات", 
        titleEn: "Microsoft Word & Google Docs: Master Document Creation", 
        desc: "إتقان كتابة وتنسيق المستندات باستخدام أشهر الأدوات.", 
        cat: "business", 
        img: "images/c420.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-word-google-docs-master-document-creation/?couponCode=EC0B49268790441F9B57" 
    },
    { 
        id: 421, 
        titleAr: "كن خبيراً في معادلات ودوال إكسل وجوجل شيت", 
        titleEn: "Become an Expert in Excel & Google Sheet Formula & Functions", 
        desc: "شرح شامل لأهم الدوال والمعادلات في جداول البيانات.", 
        cat: "business", 
        img: "images/c421.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/become-an-expert-in-excel-google-sheet-formula-functions/?couponCode=865450A6B1DF3F462308" 
    },
    { 
        id: 422, 
        titleAr: "كورس كامل في أوتوكاد: 2D و 3D", 
        titleEn: "Complete course in AutoCAD : 2D and 3D", 
        desc: "تعلم الرسم الهندسي والتصميم باستخدام AutoCAD.", 
        cat: "graphic", 
        img: "images/c422.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/autocad-2020-for-designers-a-problem-solving-approach/?couponCode=AUTOCAD_DEC" 
    },
    { 
        id: 423, 
        titleAr: "احتراف Azure DevOps: من المبتدئ للمتقدم", 
        titleEn: "Mastering Azure DevOps: From Beginner to Advanced", 
        desc: "دليل شامل لإدارة عمليات التطوير والنشر على منصة Azure.", 
        cat: "tech", 
        img: "images/c423.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/mastering-azure-devops-from-beginner-to-advanced/?couponCode=DEC2025" 
    },
    { 
        id: 424, 
        titleAr: "تكتيكات واستراتيجيات الشطرنج من مستوى جراند ماستر", 
        titleEn: "Elite Chess Tactics & Chess Strategies from 2700+ Elo", 
        desc: "طور مهاراتك في الشطرنج وتعلم من المحترفين.", 
        cat: "development", 
        img: "images/c424.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/grandmaster-chess-strategies-tactics-to-win-more-games/?couponCode=BECOMECHAMPIONFAST" 
    },
    { 
        id: 425, 
        titleAr: "كورس تصميم الجرافيك بكانفا للمبتدئين", 
        titleEn: "Canva Graphics Design Course For Beginners & Non Designers", 
        desc: "تعلم التصميم بسهولة وبدون خبرة سابقة باستخدام Canva.", 
        cat: "graphic", 
        img: "images/c425.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/canva-graphics-design-course-for-beginners-non-designers/?couponCode=8A47BF59EFDC067A2D00" 
    },
    { 
        id: 426, 
        titleAr: "تصميم الجرافيك بالذكاء الاصطناعي: كورس كامل", 
        titleEn: "Graphic Design AI: Graphic Design With AI Complete Course", 
        desc: "ادمج أدوات الذكاء الاصطناعي في عملية التصميم الخاصة بك.", 
        cat: "graphic", 
        img: "images/c426.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/graphic-design-ai-graphic-design-with-ai-complete-course/?couponCode=8E5DCB570E0391BE3B4A" 
    },

    // --- المجموعة الثانية (من الرد السابق) ---
    { 
        id: 401, 
        titleAr: "تعلم مايكروسوفت أوفيس مع ChatGPT و Gemini و Copilot", 
        titleEn: "Learn Microsoft Office with ChatGPT Gemini and Copilot", 
        desc: "كيفية استخدام أدوات الذكاء الاصطناعي لزيادة إنتاجيتك في برامج الأوفيس.", 
        cat: "ai", 
        img: "images/c401.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/learn-microsoft-office-with-chatgpt-gemini-and-copilot/?couponCode=8EEDF197D9F63D3D4BE1" 
    },
    { 
        id: 402, 
        titleAr: "اختبار ممارسة تصميم تجربة المستخدم (UX Design) الشامل", 
        titleEn: "Complete UX Design Practice Exam: Foundations to Advanced", 
        desc: "مجموعة اختبارات شاملة لاحتراف تصميم تجربة المستخدم من الأساسيات للمتقدم.", 
        cat: "graphic", 
        img: "images/c402.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/complete-ux-design-practice-exam-foundations-to-advanced/?couponCode=2BDDB7E34BCC221A787B" 
    },
    { 
        id: 403, 
        titleAr: "اختبار ممارسة مايكروسوفت إكسل: 1500 سؤال معتمد", 
        titleEn: "Microsoft Excel Practice Test: 1500 Certified Questions", 
        desc: "اختبارات عملية مكثفة لاحتراف مايكروسوفت إكسل.", 
        cat: "business", 
        img: "images/c403.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/microsoft-excel-practice-test-1500-certified-questions/?couponCode=98F1DD1127A20CAA817D" 
    },
    { 
        id: 404, 
        titleAr: "أساسيات إدارة المشاريع + PMBOK", 
        titleEn: "Project Management Fundamentals + PMBOK", 
        desc: "تعلم أساسيات إدارة المشاريع ومنهجية PMBOK العالمية.", 
        cat: "business", 
        img: "images/c404.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/project-management-fundamentals-pmbok/?couponCode=PROJECTMANAGEMENT" 
    },
    { 
        id: 405, 
        titleAr: "دورة 3C: إتقان التواصل والثقة والشجاعة", 
        titleEn: "3C Course: Master Communication, Confidence & Courage", 
        desc: "طور مهاراتك الشخصية في التواصل وبناء الثقة بالنفس.", 
        cat: "development", 
        img: "images/c405.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/3c-course-master-communication-confidence-courage/?couponCode=9C3BB071F176915DEE2F" 
    },
    { 
        id: 406, 
        titleAr: "الذكاء الاصطناعي التوليدي للقادة", 
        titleEn: "Generative AI for Leaders", 
        desc: "كيف يمكن للقادة والمديرين الاستفادة من الذكاء الاصطناعي التوليدي.", 
        cat: "ai", 
        img: "images/c406.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/generative-ai-for-leaders-h/?couponCode=6A228453DF88FF6314F5" 
    },
    { 
        id: 407, 
        titleAr: "احتراف تصميم الويب والموبايل: Figma و UI/UX", 
        titleEn: "Master Web & Mobile Design: Figma, UI/UX Essentials, +More", 
        desc: "دورة شاملة لتعلم تصميم واجهات المواقع والتطبيقات باستخدام Figma.", 
        cat: "graphic", 
        img: "images/c407.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/master-web-mobile-design-figma-uiux-essentials-more/?couponCode=89641B4A40AF39BD50B6" 
    },
    { 
        id: 408, 
        titleAr: "انتشر بسرعة بدون مايك: ElevenLabs AI للسوشيال ميديا", 
        titleEn: "Go Viral Without a Mic: ElevenLabs AI for Social Media", 
        desc: "كيفية صناعة محتوى صوتي احترافي للسوشيال ميديا باستخدام الذكاء الاصطناعي.", 
        cat: "marketing", 
        img: "images/c408.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/go-viral-without-a-mic-elevenlabs-ai-for-social-media/?couponCode=EDF739083D0127F2F4F5" 
    },
    { 
        id: 409, 
        titleAr: "احتراف Notion: بناء نظام إنتاجية شامل", 
        titleEn: "Master Notion: Build Your All-in-One Productivity System.", 
        desc: "تعلم كيفية استخدام Notion لتنظيم حياتك وعملك وزيادة إنتاجيتك.", 
        cat: "development", 
        img: "images/c409.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/master-notion-build-your-all-in-one-productivity-system/?couponCode=AA01C8D62B1F79C0B320" 
    },
    { 
        id: 410, 
        titleAr: "كيفية إنشاء موقع ويب بالذكاء الاصطناعي 2025", 
        titleEn: "Cómo Crear una Página Web con Inteligencia Artificial 2025", 
        desc: "طريقة سهلة وسريعة لإنشاء مواقع ويب احترافية باستخدام أدوات الـ AI.", 
        cat: "tech", 
        img: "images/c410.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/como-crear-una-pagina-web-con-inteligencia-artificial/?couponCode=PAGINA-IA82" 
    },
    { 
        id: 411, 
        titleAr: "كيفية إنشاء صفحة مبيعات لـ Hotmart 2025", 
        titleEn: "Cómo Crear una Página de Ventas Para Hotmart 2025", 
        desc: "تعلم تصميم صفحات هبوط وصفحات مبيعات فعالة لمنصة Hotmart.", 
        cat: "marketing", 
        img: "images/c411.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/como-crear-una-pagina-de-ventas-para-hotmart/?couponCode=HOT-GR87" 
    },
    { 
        id: 412, 
        titleAr: "أدوبي فوتوشوب CC من المبتدئ للمتقدم", 
        titleEn: "Adobe Photoshop CC For Absolute Beginner to Advanced", 
        desc: "كورس شامل لاحتراف برنامج الفوتوشوب من الصفر.", 
        cat: "graphic", 
        img: "images/c412.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/adobe-photoshop-cc-for-absolute-beginner-to-advanced/?couponCode=916154B7955592E435E5" 
    },
    { 
        id: 413, 
        titleAr: "ماستر كلاس تطوير الألعاب والتطبيقات ببايثون", 
        titleEn: "Python Game Development and App Programming Masterclass", 
        desc: "تعلم برمجة الألعاب والتطبيقات باستخدام لغة بايثون.", 
        cat: "programming", 
        img: "images/c413.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/python-game-development-and-app-programming-masterclass/?couponCode=8EEA1F1520502EA23E9E" 
    },
    { 
        id: 414, 
        titleAr: "تسويق منتجات الذكاء الاصطناعي واستراتيجية السوق", 
        titleEn: "AI Product Marketing & Go to Market Strategy", 
        desc: "كيف تسوق لمنتجات الذكاء الاصطناعي وتضع استراتيجية دخول السوق.", 
        cat: "marketing", 
        img: "images/c414.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ai-product-marketing/?couponCode=234E691E322C48816126" 
    },
    { 
        id: 415, 
        titleAr: "تحرير الصور بالذكاء الاصطناعي: من المبتدئ للمحترف", 
        titleEn: "AI-Enhanced Photo Editing: From Beginner to Pro", 
        desc: "استخدام أدوات الذكاء الاصطناعي لتعديل وتحسين الصور باحترافية.", 
        cat: "graphic", 
        img: "images/c415.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ai-enhanced-photo-editing/?couponCode=05DECEMBER2025" 
    },
    { 
        id: 416, 
        titleAr: "أتمتة إكسل باستخدام بايثون: من الأساسيات للمتقدم", 
        titleEn: "Excel Automation with Python From Basics to Advanced Tasks", 
        desc: "كيف تستخدم بايثون لأتمتة مهام إكسل وتوفير الوقت والمجهود.", 
        cat: "programming", 
        img: "images/c416.jpg", 
        date: "07 ديسمبر 2025 | 16 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/excel-automation-with-python-from-basics-to-advanced-tasks/?couponCode=7F34337C8FEF2033B0E9" 
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