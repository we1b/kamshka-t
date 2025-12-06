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
const MAX_GALLERY_IMAGES = 2000;   

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
        cat_languages: "Languages"
    }
};

let currentLang = localStorage.getItem('kamshkat_lang') || 'ar';

// -------------------------------------------------------------------------
// التشغيل الرئيسي
// -------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    preventCopying(); // تفعيل الحماية

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
    // منع القائمة المنسدلة (Right Click)
    document.addEventListener('contextmenu', event => event.preventDefault());
    
    // منع اختصارات لوحة المفاتيح الشائعة للنسخ والطباعة
    document.onkeydown = function(e) {
        if(e.ctrlKey && 
           (e.keyCode === 67 || // C (Copy)
            e.keyCode === 86 || // V (Paste)
            e.keyCode === 85 || // U (View Source)
            e.keyCode === 117 || // F6 (sometimes used)
            e.keyCode === 83 || // S (Save)
            e.keyCode === 80)) { // P (Print)
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
// بيانات الكورسات
// -------------------------------------------------------------------------
const coursesData = [
    // --- المجموعة القديمة (أمس 04 ديسمبر) ---
    { 
        id: 201, 
        titleAr: "الذكاء الاصطناعي Full-Stack باستخدام Ollama", 
        titleEn: "[FR] IA Full-Stack avec Ollama: Llama, Deepseek, Mistral", 
        desc: "تعلم بناء تطبيقات ذكاء اصطناعي كاملة باستخدام نماذج Llama و Deepseek.", 
        cat: "ai", 
        img: "images/c201.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ia-full-stack-avec-ollama-llama-deepseek-mistral-qwq/?couponCode=AI_NOV_03" 
    },
    { id: 202, titleAr: "الذكاء الاصطناعي في العمل: الاستخدام القانوني والأخلاقي", titleEn: "AI in the Workplace: Legal & Ethical Use", desc: "دليل شامل للاستخدام الأخلاقي.", cat: "ai", img: "images/c202.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/ai-in-the-workplace-legal-ethical-use/?couponCode=F610DF605FF2CB4E3CA0" },
    { id: 203, titleAr: "إطار عمل اقتصاد الدونات", titleEn: "The Doughnut Economics Framework", desc: "الاقتصاد المستدام.", cat: "business", img: "images/c203.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/doughnut-economics-framework/?couponCode=E571A56ACB2064F8443F" },
    { id: 204, titleAr: "قوة التسويق عبر الاختبارات", titleEn: "Quiz Marketing Power", desc: "توليد عملاء محتملين.", cat: "marketing", img: "images/c204.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/quiz-marketing-power-generate-leads-with-boosting-lead/?couponCode=03DECEMBER2025" },
    { id: 205, titleAr: "تطوير تطبيقات iOS بـ SwiftUI", titleEn: "iOS Development Kickstart", desc: "برمجة تطبيقات الآيفون.", cat: "programming", img: "images/c205.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/ios-development-craft-your-first-app-with-swiftui/?couponCode=03DECEMBER2025" },
    { id: 206, titleAr: "تحسين إعلانات فيسبوك", titleEn: "Facebook Ads Improvement", desc: "إعلانات فيسبوك احترافية.", cat: "marketing", img: "images/c206.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/facebook-ads-improvement-make-your-ads-breathtaking/?couponCode=03DECEMBER2025" },
    { id: 207, titleAr: "خطة الإنقاذ الرقمي", titleEn: "Plan de Rescate Digital", desc: "الأمن السيبراني.", cat: "tech", img: "images/c207.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/plan-de-rescate-digital-como-actuar-frente-a-un-ciberataque/?couponCode=UPGRADE02223" },
    { id: 208, titleAr: "أساسيات C#", titleEn: "C# Basics", desc: "تعلم لغة C#.", cat: "programming", img: "images/c208.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/c-basics-from-zero-to-first-applications/?couponCode=03DECEMBER2025" },
    { id: 209, titleAr: "دبلومة إدارة اللوجستيات", titleEn: "Diploma in Logistics Management", desc: "سلاسل الإمداد.", cat: "business", img: "images/c209.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/logisticsmanagement/?couponCode=3E8A13C71DFF705DFA8E" },
    { id: 210, titleAr: "برمجة JavaScript و PHP", titleEn: "JS & PHP Complete Course", desc: "تطوير الويب الشامل.", cat: "programming", img: "images/c210.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/javascript-and-php-programming-complete-course/?couponCode=154E96DD4DC2C8AADA3A" },
    { id: 211, titleAr: "إعلانات LinkedIn 2025", titleEn: "LinkedIn Ads MasterClass", desc: "التسويق عبر لينكد إن.", cat: "marketing", img: "images/c211.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/linkedin-ads-masterclass-2023-all-campaigns-features/?couponCode=E958EDAF04C3CAEA59A4" },
    { id: 212, titleAr: "مايكروسوفت بوربوينت", titleEn: "Microsoft PowerPoint", desc: "تصميم العروض التقديمية.", cat: "business", img: "images/c212.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/powerpoint-microsoft-powerpoint-from-basic-to-advanced/?couponCode=EB3630BABE05CAF4BE51" },
    { id: 213, titleAr: "احتراف Linux LPIC-1", titleEn: "Linux Mastery", desc: "نظام لينكس.", cat: "tech", img: "images/c213.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/lpic-1-ultimate-prep/?couponCode=413CEE0A0B1F0A9C93C5" },
    { id: 214, titleAr: "احتراف IPv6", titleEn: "IPv6 Mastery", desc: "شبكات.", cat: "tech", img: "images/c214.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/ipv6-mastery/?couponCode=3DE6E59D900812F4DAC0" },
    { id: 215, titleAr: "كورس Google Sheets", titleEn: "Google Sheets Course", desc: "جداول البيانات.", cat: "business", img: "images/c215.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/google-sheets-the-complete-google-sheets-course/?couponCode=77F25401BDDE72A9DAA8" },
    { id: 216, titleAr: "Adobe Firefly AI", titleEn: "Adobe Firefly AI Art", desc: "توليد الصور بالذكاء الاصطناعي.", cat: "ai", img: "images/c216.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/master-generative-ai-with-adobe-firefly-genai/?couponCode=9714287C16673675CBFB" },
    { id: 217, titleAr: "احتراف Google Forms", titleEn: "Google Forms Course", desc: "النماذج والاستبيانات.", cat: "business", img: "images/c217.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-google-forms-course-mastering-google-forms/?couponCode=3E403E3545A55933596D" },
    { id: 218, titleAr: "Python OOP", titleEn: "Python OOP", desc: "البرمجة كائنية التوجه.", cat: "programming", img: "images/c218.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/python-oop-a-complete-course-in-object-oriented-programming/?couponCode=535F90F6AA3B3CA172E8" },
    { id: 219, titleAr: "دليل CSS للمبتدئين", titleEn: "CSS Guide", desc: "تنسيق المواقع.", cat: "programming", img: "images/c219.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/css-the-complete-guide-to-css-zero-to-hero/?couponCode=82C830F6867A73183D3B" },
    { id: 220, titleAr: "بايثون للمبتدئين", titleEn: "Python For Beginners", desc: "أساسيات بايثون.", cat: "programming", img: "images/c220.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/?couponCode=30CE6DC6706A3E2730D6" },
    { id: 221, titleAr: "احتراف Kotlin", titleEn: "Kotlin Mastering", desc: "تطوير الويب.", cat: "programming", img: "images/c221.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/kotlin-mastering-complete-kotlin-web-development-course/?couponCode=17ED1E10AC12F5447788" },
    { id: 222, titleAr: "تداول Ichimoku", titleEn: "Ichimoku Trading", desc: "استراتيجيات تداول.", cat: "business", img: "images/c222.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/ichimoku-trading/?couponCode=1DEC25" },
    { id: 223, titleAr: "التقدير واستشارات الأعمال", titleEn: "Guesstimate & Consulting", desc: "حل قضايا الأعمال.", cat: "business", img: "images/c223.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/guesstimates-and-case-interviews-excellence/?couponCode=ABC9D910ACE26A7A268B" },
    { id: 224, titleAr: "جافا للمبتدئين", titleEn: "Java Masterclass", desc: "تعلم جافا.", cat: "programming", img: "images/c224.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/java-masterclass-for-absolute-beginners/?couponCode=DEC-FREE" },
    { id: 225, titleAr: "إدارة مخاطر الطرف الثالث", titleEn: "Third-Party Risk Mgmt", desc: "أمن سيبراني.", cat: "tech", img: "images/c225.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/thirdparty-risk-management-for-cybersecurity-compliance/?couponCode=B0770D203D3544A3681F" },
    { id: 226, titleAr: "بحث جوجل المتقدم", titleEn: "Google Advanced Search", desc: "تقنيات البحث.", cat: "tech", img: "images/c226.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/google-search-mastering-google-advance-search-techniques/?couponCode=51A76F3C1E8299C71E53" },
    { id: 227, titleAr: "دوال إكسل للمبتدئين", titleEn: "Excel Formulas", desc: "معادلات إكسل.", cat: "business", img: "images/c227.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/excel-microsoft-excel-formulas-and-functions-for-beginners/?couponCode=9F55AD5D7D53C9807E06" },
    { id: 228, titleAr: "هندسة الخدمات المصغرة", titleEn: "Microservices Architecture", desc: "Spring & Temporal.", cat: "programming", img: "images/c228.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/microservices-architecture-temporal-orchestration-spring/?couponCode=5739BF69A3E59DBDF3A6" },
    { id: 229, titleAr: "التحول القيادي", titleEn: "Leadership Transformation", desc: "مهارات القيادة.", cat: "business", img: "images/c229.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/from-manager-to-leader-leadership-transformation-program/?couponCode=207EDC3840D144A26F6F" },
    { id: 230, titleAr: "Git و Jenkins للمختبرين", titleEn: "Git & Jenkins for Testers", desc: "CI/CD للتيسترز.", cat: "programming", img: "images/c230.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/mastering-git-github-jenkins-for-software-testers/?couponCode=9DED4E307C83067F5B6A" },
    { id: 231, titleAr: "مشاريع PHP و MySQL", titleEn: "PHP & MySQL Projects", desc: "بناء 5 مشاريع.", cat: "programming", img: "images/c231.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/php-with-mysql-2022-build-5-php-and-mysql-projects/?couponCode=PHPWITHMYSQL72" },
    { id: 232, titleAr: "TensorFlow للشبكات العصبية", titleEn: "TensorFlow Course", desc: "ذكاء اصطناعي.", cat: "ai", img: "images/c232.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/tensorflow-course-basic-to-advanced-neural-network-beyond/?couponCode=71DD1DE8B4F70AFBB2F0" },
    { id: 233, titleAr: "تحليل البيانات بـ Excel", titleEn: "Excel Data Analysis", desc: "تصور البيانات.", cat: "business", img: "images/c233.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/microsoft-excel-data-visualization-with-management-technique/?couponCode=97F084CBE477E468EE0F" },
    { id: 234, titleAr: "مطور بايثون الشامل", titleEn: "Python Developer Course", desc: "من الصفر.", cat: "programming", img: "images/c234.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/the-ultimate-python-developer-course-learn-step-by-step/?couponCode=0AA338F7F0A7F5E62AA9" },
    { id: 235, titleAr: "استراتيجية فوركس Pumping", titleEn: "Forex Strategy", desc: "تداول العملات.", cat: "business", img: "images/c235.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/forex-strategy-pumping-station/?couponCode=EEDA1795CB14B069C6B1" },
    { id: 236, titleAr: "سكالبينج فوركس M15", titleEn: "Forex Scalping", desc: "استراتيجيات تداول.", cat: "business", img: "images/c236.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/forex-scalping-on-m15-grabber-trading-software-as-a-gift/?couponCode=99744107F25C95481117" },
    { id: 237, titleAr: "نماذج التعلم العميق", titleEn: "Deep Learning Models", desc: "ذكاء اصطناعي.", cat: "ai", img: "images/c237.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/deep-learning-all-models-explained-for-beginners/?couponCode=949EF31BB4E1348F419A" },
    { id: 238, titleAr: "SQLite 2025", titleEn: "SQLite Ultimate Course", desc: "قواعد بيانات.", cat: "programming", img: "images/c238.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/complete-sqlite-crash-course-from-zero-to-hero/?couponCode=42FF323A8284D9E8C1C3" },
    { id: 239, titleAr: "أساسيات CSS", titleEn: "CSS Fundamentals", desc: "تصميم ويب.", cat: "programming", img: "images/c239.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/css-fundamentals-comprehensive-training-for-web-developers/?couponCode=70FD0830C29C97DE5794" },
    { id: 240, titleAr: "تداول آلي MT5", titleEn: "Automated Trading MT5", desc: "بوتات تداول.", cat: "business", img: "images/c240.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/automated-trading-on-mt5-step-by-step/?couponCode=50FA091D65FABED0DBC9" },
    { id: 241, titleAr: "كورس مايكروسوفت وورد", titleEn: "Microsoft Word Course", desc: "تعلم وورد.", cat: "business", img: "images/c241.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-microsoft-word-course-learn-word-step-by-step/?couponCode=DFBFC1F0E9091FD263CC" },
    { id: 242, titleAr: "إكسل من المبتدئ للخبير", titleEn: "Excel Expert Course", desc: "احتراف إكسل.", cat: "business", img: "images/c242.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-microsoft-excel-from-beginners-to-expert/?couponCode=0154E9FA71C876716ABF" },
    { id: 243, titleAr: "احتراف جافاسكريبت 2025", titleEn: "JS Mastery 2025", desc: "برمجة ويب.", cat: "programming", img: "images/c243.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/javascript-mastery-from-basics-to-advanced/?couponCode=6548B475618CCD43C938" },
    { id: 244, titleAr: "تداول فوركس Divergence", titleEn: "Forex Divergence", desc: "استراتيجيات.", cat: "business", img: "images/c244.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/divergence-bomber/?couponCode=3FB1E0DEAF84E720CD01" },
    { id: 245, titleAr: "كورس SQL الكامل", titleEn: "SQL Complete Course", desc: "تحليل بيانات.", cat: "programming", img: "images/c245.jpg", date: "04 ديسمبر 2025", url: "https://www.udemy.com/course/the-complete-sql-course-from-zero-to-data-analyst/?couponCode=071B376D99B325F28003" },

    // --- كورسات النهاردة (06 ديسمبر 2025) ---
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

    // إخفاء الزر لو عرضنا كل الكورسات المتاحة
    if(loadMoreBtn) {
        loadMoreBtn.style.display = visibleCoursesCount >= filtered.length ? 'none' : 'inline-flex';
    }
}

// دالة المشاركة
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
        // Fallback للنسخ
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
function renderBooks(search = '') {
    // الكود القديم هنا مش محتاجينه لأن الصفحة بقت "قريباً" وثابتة
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
        // تحديث نص الزر
        loadMoreBtn.innerHTML = `<span>${t('btn_load_more_gallery')}</span> <i data-lucide="arrow-down" class="w-5 h-5"></i>`;
        
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