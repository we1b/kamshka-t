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
    initProtection(); // تشغيل الحماية المطورة

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

// --- (NEW) نظام الحماية المطور ---
function initProtection() {
    // 1. منع القائمة المنسدلة (Right Click)
    document.addEventListener('contextmenu', event => event.preventDefault());

    // 2. منع اختصارات الكيبورد (Ctrl+C, Ctrl+V, F12, Ctrl+U, etc.)
    document.onkeydown = function(e) {
        if(e.keyCode == 123) { // F12
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
            return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
            return false;
        }
        if(e.ctrlKey && 
           (e.keyCode === 67 || // C (Copy)
            e.keyCode === 86 || // V (Paste)
            e.keyCode === 83 || // S (Save)
            e.keyCode === 80)) { // P (Print)
            return false;
        }
    };

    // 3. منع سحب الصور (Drag & Drop)
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
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
// بيانات الكورسات (27 كورس بتاريخ 09 ديسمبر 2025)
// -------------------------------------------------------------------------
const coursesData = [
    { 
        id: 701, 
        titleAr: "تدريب السلامة الكهربائية للفنيين المبتدئين", 
        titleEn: "Electrical Safety Training for Beginner Technicians", 
        desc: "أساسيات السلامة والوقاية عند التعامل مع الكهرباء.", 
        cat: "tech", 
        img: "images/c701.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/electrical-safety-training-for-beginner-technicians/?couponCode=FBE5BCCB4DD26BF77FA9" 
    },
    { 
        id: 702, 
        titleAr: "كيف تبيع على أمازون FBA: الدليل الكامل (سوق أمريكا)", 
        titleEn: "How to Sell on Amazon FBA | Complete A–Z Guide (US Market)", 
        desc: "ابدأ مشروعك في البيع على أمازون وحقق دخل سلبي.", 
        cat: "business", 
        img: "images/c702.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/amazon-fba-wholesale-usa-zero-to-full-time-income/?couponCode=3E14CD9B6C16DEE3D84C" 
    },
    { 
        id: 703, 
        titleAr: "تعلم تصميم التيشيرتات بـ Adobe Illustrator", 
        titleEn: "Learn T-Shirt Design with Adobe Illustrator", 
        desc: "كيف تصمم تيشيرتات احترافية للطباعة والبيع.", 
        cat: "graphic", 
        img: "images/c703.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/learn-t-shirt-design-with-adobe-photoshop-and-illustrator/?couponCode=F4E8F3F9B3ECF290D7E8" 
    },
    { 
        id: 704, 
        titleAr: "Apache Hive لمهندسي البيانات (تطبيق عملي)", 
        titleEn: "Apache Hive for Data Engineers (Hands On) with 2 Projects", 
        desc: "تعلم معالجة البيانات الكبيرة باستخدام Hive.", 
        cat: "tech", 
        img: "images/c704.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/apache-hive-for-data-engineers-hands-on/?couponCode=EC17C80440A808DA6EC1" 
    },
    { 
        id: 705, 
        titleAr: "مشروع احترافي في الجرافيك ومونتاج الفيديو", 
        titleEn: "Professional Project Based Graphics Design & Video Editing", 
        desc: "تطبيق عملي كامل لتعلم التصميم والمونتاج.", 
        cat: "graphic", 
        img: "images/c705.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/professional-graphics-design-video-editing-course-with-project/?couponCode=D88D6CE56505CC43E2C2" 
    },
    { 
        id: 706, 
        titleAr: "تعلم PHP و MySQL لتطبيقات الويب", 
        titleEn: "Learn PHP and MySQL for Web Application and Web Development", 
        desc: "دورة شاملة لبناء مواقع ديناميكية.", 
        cat: "programming", 
        img: "images/c706.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/learn-php-and-mysql-for-web-application-and-web-development/?couponCode=B63964106FD84772AD88" 
    },
    { 
        id: 707, 
        titleAr: "تعلم HTML و CSS من البداية للاحتراف", 
        titleEn: "Learn HTML and CSS from Beginning to Advanced", 
        desc: "حجر الأساس لأي مطور ويب.", 
        cat: "programming", 
        img: "images/c707.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/learn-html-and-css-from-beginning-to-advanced/?couponCode=F2CC8CA1429B12273141" 
    },
    { 
        id: 708, 
        titleAr: "كورس فوتوشوب للجرافيك: من الأساسي للمتقدم", 
        titleEn: "Adobe Photoshop Course from Basic to Advacned for Graphics", 
        desc: "كل أدوات وتقنيات الفوتوشوب للمصممين.", 
        cat: "graphic", 
        img: "images/c708.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/adobe-photoshop-course-from-basic-to-advacned-for-graphics/?couponCode=4BEC73F9D2805CEC011F" 
    },
    { 
        id: 709, 
        titleAr: "كورس ووردبريس المتقدم للمحترفين", 
        titleEn: "Advanced Wordpress Course for Professionals", 
        desc: "احتراف إدارة وتطوير مواقع الووردبريس.", 
        cat: "programming", 
        img: "images/c709.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/advanced-wordpress-course-for-professionals/?couponCode=FC18A664462B6BE0639F" 
    },
    { 
        id: 710, 
        titleAr: "تعلم UI/UX ببرنامج Adobe XD", 
        titleEn: "Learn UI UX Design Adobe XD : Learn User Experience Design", 
        desc: "تصميم واجهات المستخدم وتجربة المستخدم بـ XD.", 
        cat: "graphic", 
        img: "images/c710.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/learn-ui-ux-design-adobe-xd-figma-uiuxdesign/?couponCode=491BA5F9CE85A5159806" 
    },
    { 
        id: 711, 
        titleAr: "كورس مايكروسوفت بوربوينت الأساسي للجميع", 
        titleEn: "Essential Microsoft PowerPoint Course for Everyone", 
        desc: "مهارات العروض التقديمية الأساسية.", 
        cat: "business", 
        img: "images/c711.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/essential-microsoft-powerpoint-course-for-everyone/?couponCode=D8BFD59647AC51B5DFC1" 
    },
    { 
        id: 712, 
        titleAr: "مشاريع فوتوشوب احترافية للإبداع", 
        titleEn: "Creative Brilliance Project Based Professional Photoshop", 
        desc: "تطبيق عملي على مشاريع إبداعية في الفوتوشوب.", 
        cat: "graphic", 
        img: "images/c712.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/project-based-professional-photoshop/?couponCode=9A83260A36AFE1559A45" 
    },
    { 
        id: 713, 
        titleAr: "تحفة أدوبي إليستريتور CC: أطلق عنان إبداعك", 
        titleEn: "Adobe Illustrator CC Masterpiece: Unleashing Creative Magic", 
        desc: "تعلم الرسم الفيكتور والإبداع ببرنامج إليستريتور.", 
        cat: "graphic", 
        img: "images/c713.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/adobe-illustrator-cc-masterpiece-unleashing-creative-magic/?couponCode=2A7532205F9988A35950" 
    },
    { 
        id: 714, 
        titleAr: "صنع القرار للقادة والمديرين", 
        titleEn: "Decision Making for Leaders and Managers", 
        desc: "كيف تتخذ قرارات صائبة في بيئة العمل.", 
        cat: "business", 
        img: "images/c714.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/decision-making-for-leaders-and-managers/?couponCode=F154B98E8B9E0FC9972E" 
    },
    { 
        id: 715, 
        titleAr: "كورس أدوبي بريمير برو المتقدم للمونتاج", 
        titleEn: "Adobe Premiere Pro Advanced Video Editing Course", 
        desc: "تقنيات متقدمة في تحرير الفيديو والمونتاج.", 
        cat: "graphic", 
        img: "images/c715.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/adobe-premiere-pro-advanced-video-editing-course/?couponCode=35662C9C596104AA3368" 
    },
    { 
        id: 716, 
        titleAr: "لغة الجسد والتواصل غير اللفظي للقادة", 
        titleEn: "Body Language & Non-Verbal Communication for Leaders", 
        desc: "فهم لغة الجسد وتأثيرها في القيادة.", 
        cat: "development", 
        img: "images/c716.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/body-language-non-verbal-communication-for-leaders-y/?couponCode=3FE09E2CA0A177ADF429" 
    },
    { 
        id: 717, 
        titleAr: "ماستر كلاس إكسل الحديث وجوجل شيتس مع AI", 
        titleEn: "Modern Excel MasterClass and Google Sheets with AI ChatGPT", 
        desc: "دمج الذكاء الاصطناعي مع جداول البيانات.", 
        cat: "business", 
        img: "images/c717.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/modern-microsoft-excel-masterclass-and-google-sheets-with-ai-chatgpt/?couponCode=4C13FC6253D71F243284" 
    },
    { 
        id: 718, 
        titleAr: "دليل مايكروسوفت إكسل الشامل", 
        titleEn: "Microsoft Excel Comprehensive Guide", 
        desc: "مرجع كامل لكل خصائص إكسل.", 
        cat: "business", 
        img: "images/c718.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/excel-guide/?couponCode=05DECEMBER2025" 
    },
    { 
        id: 719, 
        titleAr: "الشهادة المهنية في إدارة تجربة العملاء", 
        titleEn: "Professional Certificate in Customer Experience Management", 
        desc: "كيف تحسن تجربة العميل وتزيد ولاءه.", 
        cat: "marketing", 
        img: "images/c719.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/professional-certificate-in-customer-experience-management/?couponCode=3C251668EAA9E84AE737" 
    },
    { 
        id: 720, 
        titleAr: "بايثون وإطار عمل Django للمبتدئين", 
        titleEn: "Python And Django Framework For Beginners Complete Course", 
        desc: "بناء تطبيقات ويب قوية باستخدام بايثون وجانغو.", 
        cat: "programming", 
        img: "images/c720.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/python-and-django-for-beginners/?couponCode=2F6AF26AFBEC66CFF666" 
    },
    { 
        id: 721, 
        titleAr: "كورس بايثون الكامل: تعلم بالتطبيق 2025", 
        titleEn: "The Complete Python Course | Learn Python by Doing in 2025", 
        desc: "تعلم البرمجة من خلال بناء مشاريع عملية.", 
        cat: "programming", 
        img: "images/c721.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-complete-python-course/?couponCode=8774E6E04D02019DC588" 
    },
    { 
        id: 722, 
        titleAr: "كورس شامل: CSS, JS, PHP, Python", 
        titleEn: "CSS, JavaScript,PHP And Python Programming All in One Course", 
        desc: "حزمة لغات برمجة الويب والباك إند في كورس واحد.", 
        cat: "programming", 
        img: "images/c722.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/css-javascriptphp-and-python-programming-all-in-one-course/?couponCode=3DAE93D6C0CA977E9A50" 
    },
    { 
        id: 723, 
        titleAr: "الدبلومة المهنية في إدارة المشتريات", 
        titleEn: "Professional Diploma in Procurement Management", 
        desc: "إدارة عمليات الشراء والتوريد في الشركات.", 
        cat: "business", 
        img: "images/c723.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/professional-diploma-in-procurement-management/?couponCode=C8E560902315D8B95D0C" 
    },
    { 
        id: 724, 
        titleAr: "أوتوكاد 3D: من الأساسيات للنمذجة المتقدمة", 
        titleEn: "AutoCAD 3D: From Basics to Advanced Modelling", 
        desc: "رسم وتصميم ثلاثي الأبعاد ببرنامج أوتوكاد.", 
        cat: "graphic", 
        img: "images/c724.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/autocad-3d-from-basics-to-advanced-modelling/?couponCode=LONGEST-NIGHT-1205" 
    },
    { 
        id: 725, 
        titleAr: "احتراف Cinema 4D 2024: سلسلة كاملة", 
        titleEn: "Mastering Maxon Cinema 4D 2024: Complete Tutorial Series", 
        desc: "تعلم التصميم ثلاثي الأبعاد والأنيميشن ببرنامج Cinema 4D.", 
        cat: "graphic", 
        img: "images/c725.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/mastering-maxon-cinema-4d-2024-complete-tutorial-series/?couponCode=C4D2024_DEC" 
    },
    { 
        id: 726, 
        titleAr: "تعلم SOLIDWORKS للطلاب والمهندسين", 
        titleEn: "Learning SOLIDWORKS : For Students, Engineers, and Designers", 
        desc: "تصميم هندسي وميكانيكي ببرنامج سوليدووركس.", 
        cat: "graphic", 
        img: "images/c726.jpg", 
        date: "09 ديسمبر 2025 | 17 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/learning-solidworks-for-students-engineers-and-designers/?couponCode=SOLI_COMP1" 
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