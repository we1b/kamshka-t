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
        no_courses: "مفيش كورسات بالاسم ده 🤷‍♂️",

        // ترجمات المعرض
        gallery_title: "معرض التصميمات",
        gallery_subtitle: "إبداع متجدد . لمسة فنية",
        btn_download: "تحميل الصورة",
        btn_zoom: "تكبير",
        btn_load_more_gallery: "عرض المزيد من التصميمات",

        // ترجمات صفحة المكتبة (قريباً)
        library_title: "مكتبة كمشكاة",
        library_soon_title: "بنرص الكتب في الرفوف... 📚",
        library_soon_desc: "جاري تجميع ورفع أفضل الكتب والمصادر المجانية اللي هتساعدك تطور من نفسك ومهاراتك.\nالمكتبة هتكون متاحة قريباً جداً.",
        btn_check_courses: "شوف الكورسات عقبال ما نخلص",
        btn_home: "الرئيسية",

        // ترجمات صفحة المقالات (قريباً)
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
        no_courses: "No courses found 🤷‍♂️",

        // Gallery Translations
        gallery_title: "Design Gallery",
        gallery_subtitle: "Renewed Creativity . Artistic Touch",
        btn_download: "Download",
        btn_zoom: "Zoom",
        btn_load_more_gallery: "Load More Designs",

        // Library Page (Coming Soon)
        library_title: "Kamshkat Library",
        library_soon_title: "Stocking the shelves... 📚",
        library_soon_desc: "We are currently gathering and uploading the best free books and resources to help you develop your skills.\nThe library will be available very soon.",
        btn_check_courses: "Check Courses Meanwhile",
        btn_home: "Home",

        // Articles Page (Coming Soon)
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
    // --- المجموعة الأولى (الذكاء الاصطناعي والبيزنس) ---
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
    { 
        id: 202, 
        titleAr: "الذكاء الاصطناعي في العمل: الاستخدام القانوني والأخلاقي", 
        titleEn: "AI in the Workplace: Legal & Ethical Use", 
        desc: "دليل شامل للاستخدام الأخلاقي والقانوني للذكاء الاصطناعي في بيئة العمل.", 
        cat: "ai", 
        img: "images/c202.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ai-in-the-workplace-legal-ethical-use/?couponCode=F610DF605FF2CB4E3CA0" 
    },
    { 
        id: 203, 
        titleAr: "إطار عمل اقتصاد الدونات (Doughnut Economics)", 
        titleEn: "The Doughnut Economics Framework", 
        desc: "فهم إطار عمل الاقتصاد المستدام ونموذج الدونات.", 
        cat: "business", 
        img: "images/c203.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/doughnut-economics-framework/?couponCode=E571A56ACB2064F8443F" 
    },
    { 
        id: 204, 
        titleAr: "قوة التسويق عبر الاختبارات (Quiz Marketing)", 
        titleEn: "Quiz Marketing Power: Generate Leads", 
        desc: "كيفية توليد عملاء محتملين (Leads) بقوة باستخدام مسابقات التسويق.", 
        cat: "marketing", 
        img: "images/c204.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/quiz-marketing-power-generate-leads-with-boosting-lead/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 205, 
        titleAr: "بداية تطوير تطبيقات iOS باستخدام SwiftUI", 
        titleEn: "iOS Development Kickstart: Craft Your First App With SwiftUI", 
        desc: "ابدأ رحلتك في برمجة تطبيقات الآيفون باستخدام SwiftUI.", 
        cat: "programming", 
        img: "images/c205.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ios-development-craft-your-first-app-with-swiftui/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 206, 
        titleAr: "تحسين إعلانات فيسبوك: اجعل إعلاناتك مذهلة", 
        titleEn: "Facebook Ads Improvement: Make Your Ads Breathtaking", 
        desc: "استراتيجيات عملية لتحسين أداء إعلانات فيسبوك وزيادة النتائج.", 
        cat: "marketing", 
        img: "images/c206.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/facebook-ads-improvement-make-your-ads-breathtaking/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 207, 
        titleAr: "خطة الإنقاذ الرقمي: مواجهة الهجمات السيبرانية", 
        titleEn: "Plan de Rescate Digital: Cómo Actuar Frente a un Ciberataque", 
        desc: "كيف تتصرف وتنقذ بياناتك في حالة التعرض لهجوم سيبراني.", 
        cat: "tech", 
        img: "images/c207.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/plan-de-rescate-digital-como-actuar-frente-a-un-ciberataque/?couponCode=UPGRADE02223" 
    },
    { 
        id: 208, 
        titleAr: "أساسيات C#: من الصفر حتى أول تطبيق", 
        titleEn: "C# Basics: From Zero to First Applications", 
        desc: "تعلم أساسيات لغة C# وابني تطبيقاتك الأولى.", 
        cat: "programming", 
        img: "images/c208.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/c-basics-from-zero-to-first-applications/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 209, 
        titleAr: "الدبلومة المهنية في إدارة اللوجستيات", 
        titleEn: "Professional Diploma in Logistics Management", 
        desc: "دبلومة شاملة في إدارة اللوجستيات وسلاسل الإمداد.", 
        cat: "business", 
        img: "images/c209.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/logisticsmanagement/?couponCode=3E8A13C71DFF705DFA8E" 
    },

    // --- المجموعة الثانية (الدفعة الجديدة) ---
    { 
        id: 210, 
        titleAr: "دورة شاملة في برمجة JavaScript و PHP", 
        titleEn: "JavaScript And PHP Programming Complete Course", 
        desc: "تعلم لغات الويب الأساسية JavaScript و PHP في كورس واحد شامل.", 
        cat: "programming", 
        img: "images/c210.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/javascript-and-php-programming-complete-course/?couponCode=154E96DD4DC2C8AADA3A" 
    },
    { 
        id: 211, 
        titleAr: "ماستر كلاس إعلانات LinkedIn 2025", 
        titleEn: "LinkedIn Ads MasterClass 2025 - All Campaigns & Features", 
        desc: "احترف إعلانات لينكد إن وتعلم كل أنواع الحملات الإعلانية.", 
        cat: "marketing", 
        img: "images/c211.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/linkedin-ads-masterclass-2023-all-campaigns-features/?couponCode=E958EDAF04C3CAEA59A4" 
    },
    { 
        id: 212, 
        titleAr: "مايكروسوفت بوربوينت من البداية للاحتراف", 
        titleEn: "PowerPoint - Microsoft PowerPoint From Basic to Advanced", 
        desc: "تعلم تصميم عروض تقديمية احترافية باستخدام بوربوينت.", 
        cat: "business", 
        img: "images/c212.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/powerpoint-microsoft-powerpoint-from-basic-to-advanced/?couponCode=EB3630BABE05CAF4BE51" 
    },
    { 
        id: 213, 
        titleAr: "احتراف نظام Linux: إعداد لشهادة LPIC-1", 
        titleEn: "Linux Mastery: LPIC-1 (101-500 and 102-500) Ultimate Prep", 
        desc: "دورة شاملة لتعلم نظام لينكس والتحضير لشهادة LPIC-1.", 
        cat: "tech", 
        img: "images/c213.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/lpic-1-ultimate-prep/?couponCode=413CEE0A0B1F0A9C93C5" 
    },
    { 
        id: 214, 
        titleAr: "احتراف بروتوكول IPv6: نشر وإعداد وترحيل", 
        titleEn: "IPv6 Mastery: Deploy, Configure & Migrate with Confidence", 
        desc: "فهم عميق لبروتوكول IPv6 وكيفية التعامل معه في الشبكات.", 
        cat: "tech", 
        img: "images/c214.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ipv6-mastery/?couponCode=3DE6E59D900812F4DAC0" 
    },
    { 
        id: 215, 
        titleAr: "الدورة الكاملة لتعلم Google Sheets", 
        titleEn: "Google Sheets - The Complete Google Sheets Course", 
        desc: "احترف جداول بيانات جوجل (Google Sheets) من الصفر.", 
        cat: "business", 
        img: "images/c215.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/google-sheets-the-complete-google-sheets-course/?couponCode=77F25401BDDE72A9DAA8" 
    },
    { 
        id: 216, 
        titleAr: "احتراف الذكاء الاصطناعي التوليدي مع Adobe Firefly", 
        titleEn: "Adobe Firefly - Master Generative AI Art Content Creation", 
        desc: "تعلم إنشاء صور وتصميمات مذهلة باستخدام أدوبي فايرفلاي.", 
        cat: "ai", 
        img: "images/c216.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/master-generative-ai-with-adobe-firefly-genai/?couponCode=9714287C16673675CBFB" 
    },
    { 
        id: 217, 
        titleAr: "احتراف نماذج جوجل Google Forms", 
        titleEn: "The Complete Google Forms Course - Mastering Google Forms", 
        desc: "كل ما تحتاج معرفته لإنشاء وإدارة النماذج والاستبيانات.", 
        cat: "business", 
        img: "images/c217.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/the-complete-google-forms-course-mastering-google-forms/?couponCode=3E403E3545A55933596D" 
    },
    { 
        id: 218, 
        titleAr: "البرمجة كائنية التوجه (OOP) في بايثون", 
        titleEn: "Python OOP: A Complete Course in Object Oriented Programming", 
        desc: "فهم وتطبيق مفاهيم الـ OOP باستخدام لغة بايثون.", 
        cat: "programming", 
        img: "images/c218.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/python-oop-a-complete-course-in-object-oriented-programming/?couponCode=535F90F6AA3B3CA172E8" 
    },
    { 
        id: 219, 
        titleAr: "الدليل الكامل لتعلم CSS للمبتدئين", 
        titleEn: "CSS - The Complete Guide to CSS for Beginners", 
        desc: "تعلم تنسيق صفحات الويب باستخدام CSS من الصفر.", 
        cat: "programming", 
        img: "images/c219.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/css-the-complete-guide-to-css-zero-to-hero/?couponCode=82C830F6867A73183D3B" 
    },
    { 
        id: 220, 
        titleAr: "دورة بايثون للمبتدئين بتعمق", 
        titleEn: "Python For Beginners Course In-Depth", 
        desc: "دورة تأسيسية قوية لتعلم لغة البرمجة بايثون.", 
        cat: "programming", 
        img: "images/c220.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/?couponCode=30CE6DC6706A3E2730D6" 
    },
    { 
        id: 221, 
        titleAr: "احتراف لغة Kotlin: دورة كاملة لتطوير الويب", 
        titleEn: "Kotlin Mastering: Complete Kotlin Web Development Course", 
        desc: "تعلم لغة كوتلن واستخدامها في مشاريع تطوير الويب.", 
        cat: "programming", 
        img: "images/c221.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/kotlin-mastering-complete-kotlin-web-development-course/?couponCode=17ED1E10AC12F5447788" 
    },
    { 
        id: 222, 
        titleAr: "استراتيجيات تداول Ichimoku المتقدمة للأسهم والفوركس", 
        titleEn: "Advanced Ichimoku Trading Strategies for Stocks & Forex", 
        desc: "تعلم التداول باستخدام استراتيجيات إيشيموكو المتقدمة.", 
        cat: "business", 
        img: "images/c222.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/ichimoku-trading/?couponCode=1DEC25" 
    },
    { 
        id: 223, 
        titleAr: "إتقان التقدير واستشارات الأعمال (Guesstimate)", 
        titleEn: "Master Guesstimate & Business Consulting Case interview", 
        desc: "دورة متخصصة في حل قضايا الأعمال ومقابلات الاستشارات.", 
        cat: "business", 
        img: "images/c223.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/guesstimates-and-case-interviews-excellence/?couponCode=ABC9D910ACE26A7A268B" 
    },
    { 
        id: 224, 
        titleAr: "ماستر كلاس جافا للمبتدئين تماماً", 
        titleEn: "Java Masterclass for Absolute Beginners", 
        desc: "ابدأ تعلم لغة جافا من الصفر بهذه الدورة الشاملة.", 
        cat: "programming", 
        img: "images/c224.jpg", 
        date: "04 ديسمبر 2025 | 13 جمادى الآخرة 1447", 
        url: "https://www.udemy.com/course/java-masterclass-for-absolute-beginners/?couponCode=DEC-FREE" 
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