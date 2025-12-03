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

// -------------------------------------------------------------------------
// نظام الترجمة الاحترافي (Dictionary)
// -------------------------------------------------------------------------
let currentLang = localStorage.getItem('kameshkah_lang') || 'ar';

const translations = {
    ar: {
        langLabel: "English",
        nav: { home: "الرئيسية", courses: "كورسات", gallery: "المعرض", articles: "مقالات", library: "مكتبة", contact: "تواصل" },
        ui: { 
            rights: "جميع الحقوق محفوظة © مصطفى كمشكاة 2025", 
            search: "ابحث عن كورس...", 
            searchArt: "ابحث في المقالات...",
            all: "الكل", 
            loadMore: "عرض المزيد", 
            subscribe: "اشتراك", 
            share: "مشاركة", 
            shareMsg: "تم نسخ الرابط!", 
            download: "تحميل الصورة", 
            zoom: "تكبير",
            back: "رجوع للمقالات"
        },
        cats: { graphic: "جرافيك", programming: "برمجة", business: "إدارة أعمال", marketing: "تسويق", science: "علوم", freelance: "عمل حر", development: "تطوير ذات", tech: "تكنولوجيا", ai: "ذكاء اصطناعي", languages: "لغات" },
        pages: {
            home: {
                mainTitle: "كمشكاة",
                subTitle: "استعن بالله ولا تعجز",
                btn1: "ابدأ رحلة التعلم",
                btn2: "شوف الإبداع",
                stat1: "متابع شغوف",
                stat2: "كورس احترافي",
                stat3: "طموح بلا حدود"
            },
            courses: { title: "الكورسات التعليمية" },
            gallery: { title: "معرض التصميمات", sub: "إبداع متجدد . لمسة فنية", loadMore: "عرض المزيد من التصميمات" },
            articles: { title: "مدونة كمشكاة" },
            library: { title: "مكتبة كمشكاة", sub: "جاري رفع الكتب والملفات.. انتظرونا قريباً!", badge: "قريباً جداً 🚀" },
            contact: { 
                name: "مصطفى عبد الناصر", 
                role1: "Graphic Designer", 
                role2: "Content Creator",
                behanceBtn: "معرض أعمالي علي Behance",
                brandName: "كمشكاة",
                brandSub: "المجتمع الرسمي والمحتوى الحصري"
            }
        }
    },
    en: {
        langLabel: "العربية",
        nav: { home: "Home", courses: "Courses", gallery: "Gallery", articles: "Blog", library: "Library", contact: "Contact" },
        ui: { 
            rights: "All Rights Reserved © Mostafa Kameshkah 2025", 
            search: "Search courses...", 
            searchArt: "Search articles...",
            all: "All", 
            loadMore: "Show More", 
            subscribe: "Enroll", 
            share: "Share", 
            shareMsg: "Link Copied!", 
            download: "Download", 
            zoom: "Zoom",
            back: "Back to Articles"
        },
        cats: { graphic: "Design", programming: "Coding", business: "Business", marketing: "Marketing", science: "Science", freelance: "Freelance", development: "Self Dev", tech: "Tech", ai: "AI & Tools", languages: "Languages" },
        pages: {
            home: {
                mainTitle: "Kameshkah",
                subTitle: "Trust in Allah and never give up",
                btn1: "Start Learning",
                btn2: "View Gallery",
                stat1: "Followers",
                stat2: "Pro Courses",
                stat3: "Limitless Passion"
            },
            courses: { title: "Educational Courses" },
            gallery: { title: "Design Gallery", sub: "Renewed Creativity . Artistic Touch", loadMore: "Load More Designs" },
            articles: { title: "Kameshkah Blog" },
            library: { title: "Kameshkah Library", sub: "Uploading books and files soon.. Stay tuned!", badge: "Coming Soon 🚀" },
            contact: { 
                name: "Mostafa Abdelnasser", 
                role1: "Graphic Designer", 
                role2: "Content Creator",
                behanceBtn: "My Behance Portfolio",
                brandName: "Kameshkah",
                brandSub: "Official Community & Exclusive Content"
            }
        }
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('kameshkah_lang', currentLang);
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    location.reload(); 
}

function t(section, key) {
    return translations[currentLang][section][key] || key;
}

// -------------------------------------------------------------------------
// تشغيل Firebase
// -------------------------------------------------------------------------
let db;
let analytics;

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    try {
        if (typeof firebase !== 'undefined') {
            firebase.initializeApp(firebaseConfig);
            db = firebase.database();
            analytics = firebase.analytics();
            console.log("Firebase Connected Successfully ✅");
            if(document.getElementById('gallery-grid')) listenToLikes();
        } else {
            console.warn("Firebase SDK not loaded");
        }
    } catch (e) {
        console.error("Firebase Connection Failed ❌", e);
    }

    loadComponents();
    updateStaticText();
    
    if(document.getElementById('courses-grid')) initCoursesPage();
    if(document.getElementById('articles-grid')) initArticlesPage();
    if(document.getElementById('gallery-grid')) initGalleryPage();
    if(document.getElementById('library-grid')) initLibraryPage();
    if(document.body.dataset.page === 'home') initHomePage();
});

<<<<<<< HEAD
// --- 1. بيانات الكورسات (14 كورس جديد + القديم) ---
const coursesData = [
    // --- الكورسات الجديدة (14 كورس) ---
    { id: 101, titleAr: "بناء 3 تطبيقات أندرويد من الصفر بجافا", titleEn: "Android: Build 3 Apps from Scratch with Java", desc: "كورس عملي لتعلم برمجة تطبيقات الأندرويد باستخدام لغة Java وبناء مشاريع حقيقية.", cat: "programming", img: "images/c101.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/android-course-build-3-applications-from-scratch-with-java/?couponCode=9139A2FB926F1B55432C" },
    { id: 102, titleAr: "معسكر PostgreSQL من المبتدئ للمتقدم", titleEn: "PostgreSQL Bootcamp: Beginner to Advanced", desc: "احترف قواعد البيانات PostgreSQL وأوامر SQL المتقدمة.", cat: "programming", img: "images/c102.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/postgresql-bootcamp-complete-beginner-to-advanced-course/?couponCode=A84C9E26F61196AC0782" },
    { id: 103, titleAr: "برمجة بايثون: خطوة بخطوة", titleEn: "Python Programming: Step-by-Step", desc: "تعلم البرمجة بلغة بايثون بأسلوب مبسط ومتدرج للمبتدئين.", cat: "programming", img: "images/c103.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/python-programming-a-step-by-step-programming-course/?couponCode=5EDB52BE0B718B36EC1B" },
    { id: 104, titleAr: "مطور جافاسكريبت الشامل: تعلم JS الحديثة", titleEn: "The Complete JavaScript Developer", desc: "إتقان الجافاسكريبت الحديثة (ES6+) وبناء تطبيقات ويب تفاعلية.", cat: "programming", img: "images/c104.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/the-complete-javascript-developer-learn-modern-javascript/?couponCode=8D410F3EAFD5ADCB2065" },
    { id: 105, titleAr: "إنشاء فيديوهات يوتيوب شورتس تلقائياً", titleEn: "Automated Faceless YouTube Shorts with n8n", desc: "كيفية أتمتة صناعة محتوى الفيديو القصير لليوتيوب بدون ظهور.", cat: "ai", img: "images/c105.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/how-to-create-automated-faceless-shorts-and-reels-with-n8n/?couponCode=C458744CB39B29DDEB66" },
    { id: 106, titleAr: "معسكر بايثون للمبتدئين", titleEn: "Python Bootcamp For Beginners", desc: "أساسيات لغة بايثون وتطبيقاتها في كورس مكثف للمبتدئين.", cat: "programming", img: "images/c106.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/python-programming-python-bootcamp-for-beginners/?couponCode=C49DE833FC0471928AAA" },
    { id: 107, titleAr: "محترف إدارة المواد الخطرة المعتمد (CHMMP)", titleEn: "Certified Hazardous Material Management", desc: "شهادة متخصصة في كيفية التعامل الآمن وإدارة المواد الخطرة.", cat: "science", img: "images/c107.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/hazardous-material-management/?couponCode=1450826AC688431E286D" },
    { id: 108, titleAr: "كورس جافاسكريبت الكامل: من الصفر للخبير", titleEn: "The Complete JavaScript Course", desc: "رحلة كاملة لاحتراف لغة جافاسكريبت وفهم كل تفاصيلها.", cat: "programming", img: "images/c108.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/the-complete-javascript-course-from-zero-to-expert-o/?couponCode=82B652B527D4A2F00E68" },
    { id: 109, titleAr: "تعلم AngularJS من البداية للاحتراف", titleEn: "Learn AngularJS Course: Zero to Hero", desc: "بناء تطبيقات ويب متقدمة باستخدام إطار عمل AngularJS.", cat: "programming", img: "images/c109.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/learn-angular-js-course-zero-to-hero/?couponCode=7A04E3BEA8EE3A085BB3" },
    { id: 110, titleAr: "بناء بورتفوليو بهندسة الأوامر (Prompt Eng)", titleEn: "Portfolio through Prompt Engineering", desc: "كيف تستخدم هندسة الأوامر لبناء معرض أعمال قوي ومميز.", cat: "ai", img: "images/c110.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/portfolio-through-prompt-engineering/?couponCode=ALI-SACHAL" },
    { id: 111, titleAr: "إدارة برنامج الخصوصية (CIPM) عملياً", titleEn: "Privacy Program Management (CIPM)", desc: "نهج عملي لإدارة خصوصية البيانات والامتثال للقوانين.", cat: "business", img: "images/c111.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/privacy-program-management-cipm-a-practical-approach/?couponCode=PRIVACYFORALL" },
    { id: 112, titleAr: "إتقان تقنيات البحث المتقدم في جوجل", titleEn: "Mastering Google Advance Search", desc: "تعلم أسرار البحث المتقدم في جوجل للوصول لأدق المعلومات.", cat: "tech", img: "images/c112.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/mastering-google-advance-search-techniques/?couponCode=AD4C018139E037FEB8A1" },
    { id: 113, titleAr: "تطبيقات جافاسكريبت: 10 مشاريع من الصفر", titleEn: "Hands-On JavaScript: 10 Projects", desc: "طبق ما تعلمته وابنِ 10 مشاريع حقيقية باستخدام جافاسكريبت.", cat: "programming", img: "images/c113.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/mastering-javascript-by-building-10-projects-from-scratch/?couponCode=3C66A1FCBAA33DAE4989" },
    { id: 114, titleAr: "احتراف JavaScript و jQuery للمبتدئين", titleEn: "Mastering JavaScript and jQuery", desc: "تعلم لغة جافاسكريبت ومكتبة jQuery لبناء مواقع تفاعلية.", cat: "programming", img: "images/c114.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/mastering-javascript-and-jquery-course-beginners-to-advanced/?couponCode=DA2615EA661119B527D0" },

    // --- الكورسات القديمة (36 كورس) ---
    { id: 1, titleAr: "ChatGPT لإدارة المنتجات والابتكار", titleEn: "ChatGPT for Product Management", desc: "استخدام ChatGPT في إدارة المنتجات وتطوير الأفكار المبتكرة.", cat: "ai", img: "images/c1.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/chatgpt-for-product-management/?couponCode=2025DECEMBERFIRST" },
    { id: 2, titleAr: "ChatGPT لمالكي المنتجات (Product Owners)", titleEn: "ChatGPT for Product Owners", desc: "دليل شامل لمالكي المنتجات لاستخدام ChatGPT في تحسين سير العمل.", cat: "ai", img: "images/c2.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/chatgpt-for-product-management-innovation-h/?couponCode=2025DECEMBERFIRST" },
    { id: 3, titleAr: "العروض التقديمية باستخدام ChatGPT", titleEn: "Presentations with ChatGPT", desc: "كيفية إنشاء عروض تقديمية احترافية بسرعة باستخدام ChatGPT.", cat: "ai", img: "images/c3.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/presentations-with-chatgpt/?couponCode=2025DECEMBERFIRST" },
    { id: 4, titleAr: "أساسيات الذكاء الاصطناعي التوليدي و LLMs", titleEn: "Generative AI & LLMs Foundations", desc: "من الأساسيات إلى التطبيقات العملية في الذكاء الاصطناعي التوليدي.", cat: "ai", img: "images/c4.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/generative-ai-llms-foundations-from-basics-to-application/?couponCode=2A6A101C9D7490BC6B54" },
    { id: 5, titleAr: "مخطط الوضوح الوظيفي مع خبير HR", titleEn: "Career Clarity Blueprint", desc: "درس تعليمي مجاني لتطوير مسارك الوظيفي بوضوح.", cat: "development", img: "images/c5.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/rachelsparkes-discoverit/" },
    { id: 6, titleAr: "إدارة البيانات السريرية", titleEn: "Clinical Data Management Course", desc: "تعلم كيفية إدارة البيانات الطبية والسريرية بشكل احترافي.", cat: "science", img: "images/c6.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/clinical-data-management-course/?couponCode=5E189C9EA670AEF9FB2D" },
    { id: 7, titleAr: "التسويق الرقمي لرواد الأعمال", titleEn: "Digital Marketing For Entrepreneurs", desc: "كورس شامل في التسويق الرقمي لزيادة نمو الشركات الناشئة.", cat: "marketing", img: "images/c7.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/digital-marketing-for-entrepreneurs-a-complete-course/?couponCode=527CDE75A26DE9605490" },
    { id: 8, titleAr: "تحليل البيانات بالإكسل: الماستر كلاس", titleEn: "Excel Data Analysis Masterclass", desc: "إتقان تحليل البيانات باستخدام أدوات Excel المتقدمة.", cat: "business", img: "images/c8.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/excel-data-analysis-the-complete-analysis-masterclass/?couponCode=1DCEAC508201A4C37094" },
    { id: 9, titleAr: "كورس برمجة جافا الشامل (عملي)", titleEn: "The Ultimate Java Programming Course", desc: "تعلم لغة Java من خلال تدريب عملي ومشاريع حقيقية.", cat: "programming", img: "images/c9.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/the-ultimate-java-programming-course-hands-on-training/?couponCode=5C9CCDFACAE608FD4A7B" },
    { id: 10, titleAr: "أكثر من 100 سؤال لمقابلات JavaScript", titleEn: "100+ JavaScript Coding Test Questions", desc: "تحضير شامل لمقابلات العمل البرمجية في لغة JavaScript.", cat: "programming", img: "images/c10.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/javascript-coding-interview-questions-with-solutions/?couponCode=0D8E049EEF8C12066F37" },
    { id: 11, titleAr: "مخطط تحويل المهارات إلى أرباح", titleEn: "Skills Monetization Blueprint", desc: "كيفية تحويل مهاراتك وخبراتك إلى مصدر دخل ومبيعات.", cat: "business", img: "images/c11.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/skills-monetization-500k-income-stream/?couponCode=01D358F8E419DB276C26" },
    { id: 12, titleAr: "أكثر من 100 سؤال لمقابلات Python", titleEn: "100+ Python Coding Practice Test", desc: "اختبارات وأسئلة عملية لإتقان لغة Python ومقابلاتها.", cat: "programming", img: "images/c12.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/python-interview-questions-answers-coding/?couponCode=0B92A35B70599D5BCB2C" },
    { id: 13, titleAr: "تعلم Excel VBA والماكرو من الصفر", titleEn: "Excel VBA - Learn Visual Basic Macros", desc: "أتمتة المهام في إكسل باستخدام لغة VBA والماكرو.", cat: "business", img: "images/c13.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/excel-vba-learn-visual-basic-macros-beginner-to-advanced/?couponCode=7E5CF4D984CE99D12D90" },
    { id: 14, titleAr: "احتراف التصميم الداخلي بـ SketchUp", titleEn: "Interior Design using SketchUp Pro", desc: "كن مصمم ديكور محترف باستخدام برنامج SketchUp Pro.", cat: "graphic", img: "images/c14.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/become-a-professional-interior-designer-using-sketch-up-pro/?couponCode=BBNNJJ2233" },
    { id: 15, titleAr: "الكورس الكامل في لغة C و C++", titleEn: "The Complete C & C++ Programming", desc: "إتقان لغات البرمجة C و C++ من البداية للاحتراف.", cat: "programming", img: "images/c15.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/the-complete-c-and-c-plus-programming-course-mastering-c-and-c-plus/?couponCode=FE776B381DA48B926B0E" },
    { id: 16, titleAr: "تحليل بيانات إكسل بالمعادلات و VBA", titleEn: "Excel Data Analysis with Formulas & VBA", desc: "دمج قوة المعادلات مع برمجة VBA لتحليل بيانات متقدم.", cat: "business", img: "images/c16.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/microsoft-excel-data-analysis-with-formulas-and-vba/?couponCode=03248BDBC0731836F881" },
    { id: 17, titleAr: "تقنيات تحليل بيانات إكسل المتقدمة", titleEn: "Mastering Excel Data Analysis Techniques", desc: "استخراج رؤى قيمة من البيانات باستخدام تقنيات إكسل.", cat: "business", img: "images/c17.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/mastering-excel-data-analysis-techniques-unlock-insights/?couponCode=7C2325D3D2074BE415F4" },
    { id: 18, titleAr: "تحليل البقاء (Survival Analysis) بلغة R", titleEn: "Survival Analysis Course in R", desc: "كورس متخصص في تحليل البقاء والإحصاء باستخدام لغة R.", cat: "science", img: "images/c18.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/the-complete-survival-analysis-course-in-r/?couponCode=2025DEC9.99" },
    { id: 19, titleAr: "مايكروسوفت أوفيس للمحترفين", titleEn: "Microsoft Office for Pro", desc: "إتقان Excel, Word, PowerPoint و Teams للعمل الاحترافي.", cat: "business", img: "images/c19.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/microsoft-office-excel-word-powerpoint-and-teams-for-pro/?couponCode=E76E11DA99B71BC56B1E" },
    { id: 20, titleAr: "الدليل النهائي لإكسل: تحليل و ماكرو", titleEn: "Ultimate Excel With Data Analysis & VBA", desc: "الكورس الشامل لكل ما يخص إكسل من تحليل وبرمجة ماكرو.", cat: "business", img: "images/c20.jpg", date: "02 Dec 2025", url: "https://www.udemy.com/course/ultimate-microsoft-excel-with-data-analysis-vba-macros/?couponCode=C0F6B592241BC16B7821" },
    { id: 21, titleAr: "التسويق القائم على الحسابات (ABM) للشركات", titleEn: "Account-Based Marketing - ABM B2B", desc: "تعلم استراتيجيات التسويق الموجه للشركات لزيادة الكفاءة والأرباح.", cat: "marketing", img: "images/c21.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/account-based-marketing-increase-your-b2b-efficiency/?couponCode=01DECEMBER2025" },
    { id: 22, titleAr: "إنشاء حملات التواصل المثالية على لينكد إن", titleEn: "Perfect LinkedIn Outreach Campaign", desc: "كيفية الوصول للعملاء والشركات وبناء شبكة علاقات قوية على LinkedIn.", cat: "marketing", img: "images/c22.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/how-to-create-your-perfect-linkedin-outreach-campaign/?couponCode=01DECEMBER2025" },
    { id: 23, titleAr: "الدليل الشامل لزيادة مبيعات متجر Etsy", titleEn: "Etsy: Guide to Boosting Business", desc: "أسرار وطرق الترويج لمنتجاتك وزيادة مبيعاتك على منصة إتسي.", cat: "business", img: "images/c23.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/etsy-promotion/?couponCode=01DECEMBER2025" },
    { id: 24, titleAr: "إعلانات جوجل 2025: زيادة المبيعات بالنقرات", titleEn: "Google Ads 2025: Drive Sales With PPC", desc: "تعلم كيفية إنشاء وإدارة حملات إعلانية ناجحة على جوجل.", cat: "marketing", img: "images/c24.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/google-ads-for-beginners-how-to-drive-sales-with-ppc/?couponCode=01DECEMBER2025" },
    { id: 25, titleAr: "نظرة عامة على إطار عمل SAFe أجايل", titleEn: "SAFe (Scaled Agile Framework) Overview", desc: "فهم مبادئ العمل المرن (Agile) على مستوى المؤسسات الكبيرة.", cat: "business", img: "images/c25.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/safe-scaled-agile-framework/?couponCode=2025DECEMBERFIRST" },
    { id: 26, titleAr: "شهادة مالك المنتج (Product Owner)", titleEn: "Product Owner Certification", desc: "دليل شامل لتصبح Product Owner معتمد وناجح في إدارة المنتجات.", cat: "business", img: "images/c26.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/a-csm-advanced-certified-scrum-master/?couponCode=2025DECEMBERFIRST" },
    { id: 27, titleAr: "احتراف الأمن السيبراني: المعرفة والتقنيات", titleEn: "Mastering Cybersecurity Essentials", desc: "المعارف الأساسية والتقنيات الضرورية لحماية الأنظمة والبيانات.", cat: "tech", img: "images/c27.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/mastering-cybersecurity-essential-knowledge-and-techniques/?couponCode=2025DECEMBERFIRST" },
    { id: 28, titleAr: "اختبارات سطر أوامر لينكس (+90 أمر)", titleEn: "Linux Commands Line Certification Test", desc: "تدريب عملي واختبارات لإتقان سطر الأوامر في نظام Linux.", cat: "programming", img: "images/c28.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/linux-commands-line-certification-prac-test-90-commands/?couponCode=NOV27FREE" },
    { id: 29, titleAr: "ماستر كلاس تعديل الصور بـ لايت روم موبايل", titleEn: "Adobe Lightroom Mobile Masterclass", desc: "احترف تعديل الصور الفوتوغرافية باستخدام هاتفك وتطبيق لايت روم.", cat: "graphic", img: "images/c29.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/lightroom-mobile-course/?couponCode=9E15D948A610675D1A79" },
    { id: 30, titleAr: "احتراف Claude Pro للأعمال والتسويق", titleEn: "Claude Pro Mastery: AI for Business", desc: "استخدام الذكاء الاصطناعي Claude Pro في التسويق والأتمتة.", cat: "ai", img: "images/c30.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/claude-pro-mastery-ai-for-business-marketing-automation/?couponCode=01DECEMBER2025" },
    { id: 31, titleAr: "كورس البرمجة الشامل (HTML, CSS, Java)", titleEn: "Full Stack Programming Course", desc: "تعلم أساسيات الويب والبرمجة باستخدام Java و JavaScript.", cat: "programming", img: "images/c31.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/html-css-java-javascript-full-stack-programming-course/?couponCode=2C530EFECD00848D3F84" },
    { id: 32, titleAr: "البرمجة كائنية التوجه C++ ومقابلات العمل", titleEn: "OOP in C++ & Interview Prep", desc: "إتقان مفاهيم OOP بلغة C++ والتحضير للأسئلة التقنية في المقابلات.", cat: "programming", img: "images/c32.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/cracking-cpp-interview/?couponCode=D3F99F70C58797AC5864" },
    { id: 33, titleAr: "معسكر بايثون الكامل من الصفر للاحتراف", titleEn: "The Complete Python Bootcamp", desc: "ابدأ رحلتك في تعلم لغة بايثون من الأساسيات حتى المستوى المتقدم.", cat: "programming", img: "images/c33.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/the-complete-python-bootcamp-from-zero-to-expert/?couponCode=6BAFE17DEF20BEBDDE73" },
    { id: 34, titleAr: "كورس قواعد البيانات الشامل (SQL & NoSQL)", titleEn: "SQL, MYSQL, POSTGRESQL & MONGODB", desc: "تعلم إدارة قواعد البيانات المختلفة في كورس واحد شامل.", cat: "programming", img: "images/c34.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/sql-mysql-postgresql-mongodb-all-in-one-database-course/?couponCode=370F0C34BF8BBC4672E9" },
    { id: 35, titleAr: "برمجة بايثون: الكورس الكامل للنجاح", titleEn: "Python Programming: Complete Course", desc: "شرح وافي وعملي للغة بايثون وتطبيقاتها المختلفة.", cat: "programming", img: "images/c35.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/python-programming-the-complete-course-for-success/?couponCode=0D7303A8F49D6D25DBF9" },
    { id: 36, titleAr: "معسكر تحليل البيانات باستخدام إكسل", titleEn: "Excel Data Analysis Bootcamp", desc: "تعلم كيفية تحليل البيانات الضخمة واستخراج النتائج باستخدام Excel.", cat: "business", img: "images/c36.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/the-complete-microsoft-excel-data-analysis-bootcamp/?couponCode=9962B5F78821BCE50159" },
    { id: 37, titleAr: "خبير تحليل البيانات ببرنامج إكسل", titleEn: "Become a Data Analysis Expert", desc: "خطوات عملية لتصبح خبيراً في التعامل مع البيانات في مايكروسوفت إكسل.", cat: "business", img: "images/c37.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/microsoft-excel-data-analysis-become-a-data-analysis-expert/?couponCode=940C7B87F04BFBBD3F0A" },
    { id: 38, titleAr: "لغة البرمجة R من المبتدئ للمحترف", titleEn: "R Programming Language Pro", desc: "تعلم لغة R المستخدمة بقوة في الإحصاء وتحليل البيانات.", cat: "programming", img: "images/c38.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/r-programming-r-programming-language-beginners-to-pro/?couponCode=B85F222239ECDB367519" },
    { id: 39, titleAr: "إتقان تحليل بيانات إكسل بالدوال", titleEn: "Mastering Excel Analysis with Functions", desc: "استخدام الدوال والمعادلات المتقدمة لتحليل البيانات بدقة.", cat: "business", img: "images/c39.jpg", date: "01 Dec 2025", url: "https://www.udemy.com/course/mastering-microsoft-excel-data-analysis-with-functions/?couponCode=0D58CDD4105F4CC23868" }
];

// --- 2. بيانات الكتب (نظام المكتبة الجديد) ---
const booksData = [
    { 
        id: 1, 
        title: "أبي غني أبي فقير", 
        author: "روبرت كيوساكي",
        desc: "الكتاب رقم 1 في الثقافة المالية الشخصية.",
        cat: "finance", 
        img: "images/b1.jpg", 
        url: "#" 
    },
    { 
        id: 2, 
        title: "العادات الذرية", 
        author: "جيمس كلير",
        desc: "طريقة سهلة ومثبتة لبناء عادات جيدة والتخلص من السيئة.",
        cat: "self", 
        img: "images/b2.jpg", 
        url: "#" 
    },
    { 
        id: 3, 
        title: "فن اللامبالاة", 
        author: "مارك مانسون",
        desc: "لعيش حياة تخالف المألوف.",
        cat: "self", 
        img: "images/b3.jpg", 
        url: "#" 
=======
// --- 1. بيانات الكورسات (كلها بتاريخ 3 ديسمبر - 46 كورس) ---
const coursesData = [
    // --- الدفعة الثالثة (18 كورس جديد) ---
    { 
        id: 501, 
        titleAr: "20 مشروع جافاسكريبت في 20 يوم", 
        titleEn: "JavaScript 20 Projects In 20 Days", 
        desc: "تطبيق عملي مكثف لبناء مشاريع HTML و CSS و JavaScript.",
        cat: "programming", 
        img: "images/c501.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/javascript-20-projects-in-20-days-html-css-javascript/?couponCode=CFCA4CB167545896F9E2" 
    },
    { 
        id: 502, 
        titleAr: "30 مشروع HTML, CSS & JavaScript للمبتدئين", 
        titleEn: "30 HTML CSS & JavaScript Projects", 
        desc: "دليل المبتدئين لاحتراف تطوير الويب من خلال المشاريع.",
        cat: "programming", 
        img: "images/c502.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/30-html-css-javascript-projects-a-beginners-guide-to-js/?couponCode=D6D3CCE14B4B03020971" 
    },
    { 
        id: 503, 
        titleAr: "كورس التسويق الرقمي الشامل 2025", 
        titleEn: "Full Digital Marketing Course 2025", 
        desc: "احترف SEO, PPC, SMM, GTM و GA4 في كورس واحد.",
        cat: "marketing", 
        img: "images/c503.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/full-digital-marketing-course-2025-ppc-seo-smm-gtm-ga4/?couponCode=2C11BE4E5FC535F8EBDC" 
    },
    { 
        id: 504, 
        titleAr: "تصميم الجرافيك باستخدام كانفا", 
        titleEn: "Graphic Designing With Canva", 
        desc: "إتقان تصميم محتوى السوشيال ميديا والجرافيك باستخدام Canva.",
        cat: "graphic", 
        img: "images/c504.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/canva-mastery-create-social-media-content/?couponCode=758AE3DFB5BDA5A06353" 
    },
    { 
        id: 505, 
        titleAr: "تصميم تطبيقات الموبايل بـ Figma", 
        titleEn: "Mobile App Design in Figma", 
        desc: "من الفكرة للنموذج: تعلم تصميم واجهات التطبيقات باحترافية.",
        cat: "graphic", 
        img: "images/c505.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/mobile-app-design-in-figma-from-concept-to-prototype/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 506, 
        titleAr: "إطار عمل مجموعات جافا (Java Collections)", 
        titleEn: "Java Collections Framework + Generics", 
        desc: "شرح متعمق لـ Collections و Lambdas و Stream API في جافا.",
        cat: "programming", 
        img: "images/c506.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/java-collections-framework-learnit/?couponCode=NOVEMBER_FREE3_2025" 
    },
    { 
        id: 507, 
        titleAr: "دبلومة احترافية في إدارة المنتجات الرقمية", 
        titleEn: "Digital Products Management Diploma", 
        desc: "كيف تصبح مدير منتج رقمي ناجح وتقود عملية التطوير.",
        cat: "business", 
        img: "images/c507.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/digital-product-owner/?couponCode=A72CCAA753B0FDABD8FE" 
    },
    { 
        id: 508, 
        titleAr: "كورس مطور مواقع ووردبريس الكامل", 
        titleEn: "Complete Wordpress Developer Course", 
        desc: "تعلم تطوير وبناء مواقع ووردبريس من الألف إلى الياء.",
        cat: "programming", 
        img: "images/c508.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/the-complete-wordpress-developer-course-w/?couponCode=600D67A32D0C50BBC246" 
    },
    { 
        id: 509, 
        titleAr: "ماستر كلاس تطوير تطبيقات أندرويد (تطبيقين)", 
        titleEn: "Android App's Development Masterclass", 
        desc: "بناء تطبيقين كاملين باستخدام لغة Java للأندرويد.",
        cat: "programming", 
        img: "images/c509.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/android-apps-development-masterclass-build-2-apps-java/?couponCode=42DF4F68E346F0B80F55" 
    },
    { 
        id: 510, 
        titleAr: "مايكروسوفت إكسل للمبتدئين: الاستخدام اليومي", 
        titleEn: "Microsoft Excel for Beginners", 
        desc: "تعلم أساسيات الإكسل للاستخدام اليومي في العمل والحياة.",
        cat: "business", 
        img: "images/c510.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/microsoft-excel-for-beginners-excel-for-everyday-use/?couponCode=96F6FFFADC10C2A46A1F" 
    },
    { 
        id: 511, 
        titleAr: "احتراف تعديل صور الطبيعة من الصفر", 
        titleEn: "Master Landscape Photo Editing", 
        desc: "تعلم فنون تعديل وتحرير صور المناظر الطبيعية.",
        cat: "graphic", 
        img: "images/c511.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/landscape-photo-editing/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 512, 
        titleAr: "15 خطوة فعالة لنمو الأعمال على السوشيال ميديا", 
        titleEn: "Growing Business in Social Media", 
        desc: "استراتيجيات عملية لتكبير البيزنس بتاعك على مواقع التواصل.",
        cat: "marketing", 
        img: "images/c512.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/15-effective-steps-for-growing-business-in-social-media/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 513, 
        titleAr: "تحسين إعلانات فيسبوك: اجعل إعلاناتك مذهلة", 
        titleEn: "Facebook Ads Improvement", 
        desc: "كيفية إنشاء وتحسين إعلانات فيسبوك لنتائج أفضل.",
        cat: "marketing", 
        img: "images/c513.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/facebook-ads-improvement-make-your-ads-breathtaking/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 514, 
        titleAr: "بداية تطوير iOS: اصنع تطبيقك الأول بـ SwiftUI", 
        titleEn: "iOS Development Kickstart with SwiftUI", 
        desc: "مدخل قوي لبرمجة تطبيقات الآيفون باستخدام SwiftUI.",
        cat: "programming", 
        img: "images/c514.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/ios-development-craft-your-first-app-with-swiftui/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 515, 
        titleAr: "أساسيات C#: من الصفر لأول تطبيق", 
        titleEn: "C# Basics: Zero to First Applications", 
        desc: "تعلم لغة C# وابنِ تطبيقاتك الأولى خطوة بخطوة.",
        cat: "programming", 
        img: "images/c515.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/c-basics-from-zero-to-first-applications/?couponCode=03DECEMBER2025" 
    },
    { 
        id: 516, 
        titleAr: "جامعة Elementor Pro: من الصفر للاحتراف", 
        titleEn: "Elementor Pro University", 
        desc: "احترف تصميم المواقع باستخدام Elementor Pro (شرح شامل).",
        cat: "programming", 
        img: "images/c516.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/universidad-de-elementor-pro-desde-cero-hasta-experto/?couponCode=UELE-GR53" 
    },
    { 
        id: 517, 
        titleAr: "إنشاء متجر متعدد البائعين بـ WordPress و Dokan", 
        titleEn: "Create Multi-Vendor Marketplace", 
        desc: "كيفية بناء موقع زي أمازون وسوق باستخدام ووردبريس.",
        cat: "programming", 
        img: "images/c517.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/crea-un-marketplace-multi-vendedor-con-wordpress-y-dokan/?couponCode=DOKAN-GR46" 
    },
    { 
        id: 518, 
        titleAr: "استضافة Elementor 2025: متجر إلكتروني", 
        titleEn: "Elementor Hosting: Create Online Store", 
        desc: "إنشاء متجر إلكتروني كامل باستخدام استضافة Elementor.",
        cat: "programming", 
        img: "images/c518.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/elementor-ecommerce-hosting-crea-una-tienda-online-con-wordpress/?couponCode=ELECO-GR46" 
    },

    // --- الدفعة الثانية (15 كورس) ---
    { 
        id: 401, 
        titleAr: "كورس مايكروسوفت أوفيس الشامل: إكسل، وورد، باوربوينت", 
        titleEn: "All-in-One Microsoft Office Course", 
        desc: "إتقان الحزمة المكتبية الكاملة من مايكروسوفت لزيادة الإنتاجية في العمل.",
        cat: "business", 
        img: "images/c401.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/all-in-one-microsoft-office-course-excel-word-powerpoint/?couponCode=85522FE5819EC1572CE3" 
    },
    { 
        id: 402, 
        titleAr: "إنشاء صفحة هبوط بـ Bootstrap 4 للمبتدئين", 
        titleEn: "Code a 'Coming Soon' Landing Page", 
        desc: "تعلم كيفية تكويد صفحة هبوط احترافية باستخدام إطار عمل Bootstrap.",
        cat: "programming", 
        img: "images/c402.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/code-a-coming-soon-landing-page-in-bootstrap-4/" 
    },
    { 
        id: 403, 
        titleAr: "استراتيجيات التنافس التجاري والهيمنة على السوق", 
        titleEn: "Business Competitive Strategy Mastery", 
        desc: "كيفية تحليل السوق وبناء استراتيجيات تجارية للتفوق على المنافسين.",
        cat: "business", 
        img: "images/c403.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/business-competitive-strategy-market-domination-mastery-course/?couponCode=0BBCB81E9BFC36CE5937" 
    },
    { 
        id: 404, 
        titleAr: "ماستر كلاس لغة C: ابنِ أساسك البرمجي", 
        titleEn: "C Programming Masterclass", 
        desc: "تعلم أساسيات البرمجة القوية من خلال لغة C العريقة.",
        cat: "programming", 
        img: "images/c404.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/c-programming-masterclass-build-your-programming-foundation/?couponCode=F04BC6CE7A0A7BF563AA" 
    },
    { 
        id: 405, 
        titleAr: "احتراف تصور البيانات والرسوم البيانية في إكسل", 
        titleEn: "Mastering Excel Data Visualization", 
        desc: "تحويل البيانات المعقدة إلى رسوم بيانية ومخططات احترافية في إكسل.",
        cat: "business", 
        img: "images/c405.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/mastering-excel-data-visualization-with-design-chart-graph/?couponCode=8A729EEAE3817402103C" 
    },
    { 
        id: 406, 
        titleAr: "PostgreSQL للمطورين: تصميم واستعلام قواعد البيانات", 
        titleEn: "PostgreSQL for Developers", 
        desc: "تصميم واستعلام وتوسيع قواعد البيانات باستخدام PostgreSQL.",
        cat: "programming", 
        img: "images/c406.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/postgresql-for-developers-design-query-scale-databases/?couponCode=5FC4F61A8DCA6CB3A925" 
    },
    { 
        id: 407, 
        titleAr: "الدليل الشامل لمسؤولي مكافحة غسيل الأموال (AML)", 
        titleEn: "Guide to Anti-Money Laundering Officers", 
        desc: "كورس شامل للمتخصصين في الامتثال ومكافحة الجرائم المالية.",
        cat: "business", 
        img: "images/c407.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/comprehensive-guide-to-anti-money-laundering-aml-operation/?couponCode=8277F822437768A1D869" 
    },
    { 
        id: 408, 
        titleAr: "الذكاء الاصطناعي لسرد قصص العلامات التجارية", 
        titleEn: "AI for Brand Storytelling (ChatGPT)", 
        desc: "استخدام ChatGPT لبناء هوية العلامة التجارية وسرد القصص التسويقية.",
        cat: "ai", 
        img: "images/c408.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/ai-for-brand-storytelling-branding-fast-track-using-chatgpt/?couponCode=3E71CC0AD04E5FB04544" 
    },
    { 
        id: 409, 
        titleAr: "تدريب مهارات العرض والتقديم الفردي", 
        titleEn: "Presentation Skills Training", 
        desc: "كيف تقدم عروضاً تقديمية مقنعة وناجحة في الاجتماعات الفردية.",
        cat: "development", 
        img: "images/c409.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/how-to-give-a-one-on-one-presentation/?couponCode=815758BF38A68962AD32" 
    },
    { 
        id: 410, 
        titleAr: "كورس مايكروسوفت إكسل الكامل: من المبتدئ للمتقدم", 
        titleEn: "The Complete Microsoft Excel Course", 
        desc: "دليل شامل لاحتراف مايكروسوفت إكسل من البداية للنهاية.",
        cat: "business", 
        img: "images/c410.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/the-complete-microsoft-excel-course-beginner-to-advanced/?couponCode=237D76D4CAF3BE2EB8F7" 
    },
    { 
        id: 411, 
        titleAr: "التصميم المتجاوب مع CSS3: صفحات ويب للموبايل", 
        titleEn: "Responsive Design with CSS3", 
        desc: "كيفية تصميم مواقع ويب تعمل بكفاءة على الموبايل والتابلت.",
        cat: "programming", 
        img: "images/c411.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/responsive-design-with-css3-create-mobile-friendly-webpages/?couponCode=5F113AE987FFFBF56144" 
    },
    { 
        id: 412, 
        titleAr: "الدليل الكامل لتحليل البيانات ببايثون", 
        titleEn: "Python Data Analysis with Real Datasets", 
        desc: "تطبيق عملي لتحليل البيانات الحقيقية باستخدام لغة بايثون.",
        cat: "programming", 
        img: "images/c412.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/complete-guide-to-python-data-analysis-with-real-datasets/?couponCode=6223F990CF78F840601B" 
    },
    { 
        id: 413, 
        titleAr: "PHP للمبتدئين: كورس مكثف في PDO", 
        titleEn: "PHP for Beginners: PDO Crash Course", 
        desc: "تعلم أساسيات PHP والتعامل مع قواعد البيانات باستخدام PDO.",
        cat: "programming", 
        img: "images/c413.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/php-with-pdo-2021-the-ultimate-pdo-crash-course/?couponCode=PDOCOURSE82" 
    },
    { 
        id: 414, 
        titleAr: "أساسيات مكافحة غسيل الأموال وتمويل الإرهاب", 
        titleEn: "AML/CFT for Beginners", 
        desc: "مدخل لفهم قوانين وإجراءات مكافحة الجرائم المالية.",
        cat: "business", 
        img: "images/c414.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/learn-amlcft/?couponCode=14E282BE871CC7E837BA" 
    },
    { 
        id: 415, 
        titleAr: "معسكر بايثون الكامل من الصفر للخبير", 
        titleEn: "The Complete Python Bootcamp", 
        desc: "رحلة تعلم البرمجة ببايثون من الأساسيات حتى مستوى الخبراء.",
        cat: "programming", 
        img: "images/c415.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/the-complete-python-bootcamp-from-zero-to-expert/?couponCode=1E19FCF4B06F67E25037" 
    },

    // --- الدفعة الأولى (13 كورس) ---
    { 
        id: 301, 
        titleAr: "الدبلومة الاحترافية في الكتابة والنسخ (Copywriting)", 
        titleEn: "Professional Diploma in Copywriting", 
        desc: "احترف كتابة الإعلانات ومحتوى الأعمال بشكل احترافي وجذاب.",
        cat: "marketing", 
        img: "images/c301.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/copywriting_businesswriting/?couponCode=2F52E00DA9F7DCEC590D" 
    },
    { 
        id: 302, 
        titleAr: "الدبلومة التنفيذية في الإدارة المالية", 
        titleEn: "Executive Diploma in Finance Management", 
        desc: "أساسيات الإدارة المالية والتحليل المالي للمديرين ورواد الأعمال.",
        cat: "business", 
        img: "images/c302.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/financemanagement/?couponCode=3556C1BEDC0CC448AC06" 
    },
    { 
        id: 303, 
        titleAr: "الذكاء الاصطناعي الجغرافي: تعلم عميق للصور الفضائية", 
        titleEn: "Geospatial AI: Deep Learning", 
        desc: "استخدام الذكاء الاصطناعي لتحليل صور الأقمار الصناعية والبيانات الجغرافية.",
        cat: "ai", 
        img: "images/c303.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/geospatial-ai-deep-learning/?couponCode=AR_FREE_116" 
    },
    { 
        id: 304, 
        titleAr: "بايثون للذكاء الاصطناعي وتعلم الآلة", 
        titleEn: "Python for AI and Machine Learning", 
        desc: "دليل شامل لتعلم بايثون وتطبيقاتها في مجال الذكاء الاصطناعي.",
        cat: "ai", 
        img: "images/c304.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/python-for-ai/?couponCode=AR_FREE_108" 
    },
    { 
        id: 305, 
        titleAr: "أساسيات ArcPy: أتمتة نظم المعلومات الجغرافية", 
        titleEn: "Essentials for ArcPy: Python Geospatial", 
        desc: "كيفية استخدام بايثون (ArcPy) لأتمتة مهام نظم المعلومات الجغرافية.",
        cat: "tech", 
        img: "images/c305.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/essentials-for-arcpy/?couponCode=AR_FREE_109" 
    },
    { 
        id: 306, 
        titleAr: "أساسيات PyQGIS: بايثون للأتمتة الجغرافية", 
        titleEn: "Essentials for PyQGIS: Python Automation", 
        desc: "تعلم استخدام مكتبة PyQGIS لأتمتة العمليات في برنامج QGIS.",
        cat: "tech", 
        img: "images/c306.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/essentials-pyqgis/?couponCode=AR_FREE_110" 
    },
    { 
        id: 307, 
        titleAr: "أساسيات Django: بناء تطبيقات ويب حقيقية", 
        titleEn: "Django Essentials: Build Real-World Apps", 
        desc: "تعلم إطار عمل Django لبناء مواقع وتطبيقات ويب قوية باستخدام بايثون.",
        cat: "programming", 
        img: "images/c307.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/mastering-django/?couponCode=AR_FREE_111" 
    },
    { 
        id: 308, 
        titleAr: "لغة R للباحثين: من الأساسيات للتحليل المتقدم", 
        titleEn: "R for Researchers: Basics to Advanced", 
        desc: "كورس متخصص للباحثين لتعلم تحليل البيانات والإحصاء باستخدام لغة R.",
        cat: "science", 
        img: "images/c308.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/r-for-research/?couponCode=AR_FREE_115" 
    },
    { 
        id: 309, 
        titleAr: "دروبال للمبتدئين تماماً (2025)", 
        titleEn: "Drupal For Absolute Beginners", 
        desc: "تعلم كيفية إنشاء وإدارة المواقع باستخدام نظام إدارة المحتوى دروبال.",
        cat: "programming", 
        img: "images/c309.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/drupal-masterclass/?couponCode=D96DB34C4D10A9B768CA" 
    },
    { 
        id: 310, 
        titleAr: "الدبلومة التنفيذية في إدارة الموارد البشرية (HRM)", 
        titleEn: "Executive Diploma in HR Management", 
        desc: "كل ما تحتاج معرفته عن إدارة الموارد البشرية وتعيين الموظفين.",
        cat: "business", 
        img: "images/c310.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/humanresourceshrm/?couponCode=06B3363F2188FA3B5F67" 
    },
    { 
        id: 311, 
        titleAr: "إنشاء موقع ويب بـ WordPress و Cloudways", 
        titleEn: "Create Website with WordPress & Cloudways", 
        desc: "خطوات عملية لإنشاء واستضافة موقع ووردبريس سريع وآمن.",
        cat: "programming", 
        img: "images/c311.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/como-crear-una-pagina-web-con-wordpress-y-cloudways/?couponCode=CLOUD-GR32" 
    },
    { 
        id: 312, 
        titleAr: "كيفية عمل إعلانات فعالة على تيك توك 2025", 
        titleEn: "Effective TikTok Ads 2025", 
        desc: "استراتيجيات لإنشاء حملات إعلانية ناجحة ومربحة على منصة تيك توك.",
        cat: "marketing", 
        img: "images/c312.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/como-hacer-anuncios-efectivos-en-tiktok-ads/?couponCode=TIKTOK-GR38" 
    },
    { 
        id: 313, 
        titleAr: "إنشاء موقع ويب للربح من جوجل أدسنس 2025", 
        titleEn: "Create Website for Google Adsense", 
        desc: "دليل كامل لبناء موقع والربح منه عن طريق إعلانات جوجل أدسنس.",
        cat: "marketing", 
        img: "images/c313.jpg", 
        date: "03 Dec 2025", 
        url: "https://www.udemy.com/course/como-crear-una-pagina-web-para-google-adsense/?couponCode=GOOGLEA-GR35" 
>>>>>>> 5ac43ef9a233df6c49a6124169626831c3a88ce5
    }
];

// --- 3. بيانات المقالات ---
const articlesData = [
    { id: 1, title: "فكك من جو التنين المجنح", excerpt: "يا صاحبي، السوشيال ميديا هرتنا كلام عن إنك لازم تكون سوبر مان..", content: "...", img: "images/a1.jpg", cat: "development", date: "28 Nov 2025" },
    { id: 2, title: "الذكاء الاصطناعي والمستقبل", excerpt: "هل الـ AI هياخد مكاننا؟ تعال نشوف..", content: "...", img: "images/a2.jpg", cat: "tech", date: "2025/11/29" },
    { id: 3, title: "إزاي تبدأ فري لانس صح؟", excerpt: "خطوات عملية عشان تبدأ شغلك الحر من غير تشتت.", content: "...", img: "images/a3.jpg", cat: "freelance", date: "30 Nov 2025" },
    { id: 4, title: "أهمية البراندينج الشخصي", excerpt: "أنت براند ماشي على الأرض، استغل ده لصالحك.", content: "...", img: "images/a4.jpg", cat: "marketing", date: "01 Dec 2025" },
    { id: 5, title: "نصائح لتعلم الإنجليزية", excerpt: "بلاش تحفظ كلمات، احفظ جمل ومواقف.", content: "...", img: "images/a5.jpg", cat: "languages", date: "02 Dec 2025" }
];

// --- دوال التحميل والتشغيل ---

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
                <a href="library.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">مكتبة</a>
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

// --- 4. منطق الكورسات ---
let currentCat = 'all';
let searchText = '';
let visibleCoursesCount = 10;

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

function renderFilters() {
    const filterContainer = document.getElementById('course-filters');
    if (!filterContainer) return;
    const categories = ['all', ...new Set(coursesData.map(c => c.cat))];
    filterContainer.innerHTML = categories.map(cat => {
        const name = cat === 'all' ? 'الكل' : getCatName(cat);
        const active = cat === currentCat ? 'active bg-emerald-600 text-white' : 'bg-white/60 hover:bg-white/90 text-emerald-900';
        return `<button class="filter-btn px-6 py-2 rounded-full font-bold transition shadow-sm ${active}" data-cat="${cat}">${name}</button>`;
    }).join('');
    filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', (e) => {
        currentCat = e.target.dataset.cat;
        visibleCoursesCount = 10;
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
        const matchSearch = c.titleAr.includes(searchText) || c.titleEn.toLowerCase().includes(searchText.toLowerCase());
        return matchCat && matchSearch;
    });

    if(filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-500 font-bold">مفيش كورسات بالاسم ده 🤷‍♂️</div>`;
        if(loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }

    grid.innerHTML = filtered.slice(0, visibleCoursesCount).map((c, i) => `
        <div class="glass-panel rounded-2xl overflow-hidden group hover:-translate-y-2 transition duration-300 flex flex-col fade-in bg-white/60" style="animation-delay: ${i * 50}ms">
            <div class="relative h-48 overflow-hidden">
                <img src="${c.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" onerror="this.src='https://placehold.co/600x400/10b981/FFF?text=Kamshkat'">
                <div class="absolute top-2 right-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs text-emerald-800 font-bold shadow-sm">${getCatName(c.cat)}</div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <div class="text-xs text-slate-500 mb-2 font-bold">${c.date}</div>
                <h3 class="text-xl font-bold mb-1 text-emerald-900">${c.titleAr}</h3>
                <h4 class="text-sm font-semibold text-slate-500 mb-3">${c.titleEn}</h4>
                <p class="text-slate-600 text-sm mb-4 line-clamp-2">${c.desc}</p>
                <a href="${c.url}" target="_blank" class="mt-auto bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-center font-bold transition shadow-lg flex items-center justify-center gap-2">اشتراك <i data-lucide="external-link" class="w-4 h-4"></i></a>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
    if(loadMoreBtn) loadMoreBtn.style.display = visibleCoursesCount >= filtered.length ? 'none' : 'inline-flex';
}

// --- 5. منطق المكتبة (جديد) ---
function initLibraryPage() {
    renderBooks();
    document.getElementById('book-search-input')?.addEventListener('keyup', (e) => {
        renderBooks(e.target.value);
    });
}

function renderBooks(search = '') {
    const grid = document.getElementById('library-grid');
    if(!grid) return;
    
    const filtered = booksData.filter(b => b.title.includes(search) || b.author.includes(search));
    
    if(filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-500 font-bold">مفيش كتب بالاسم ده</div>`;
        return;
    }

    grid.innerHTML = filtered.map(b => `
        <div class="glass-panel p-4 rounded-2xl flex gap-4 hover:bg-white/60 transition group border border-white/60">
            <img src="${b.img}" class="w-24 h-32 rounded-lg object-cover shadow-md group-hover:scale-105 transition" onerror="this.src='https://placehold.co/300x400/10b981/FFF?text=Book'">
            <div class="flex-1">
                <h3 class="text-lg font-bold text-emerald-900 mb-1">${b.title}</h3>
                <p class="text-sm text-emerald-600 font-semibold mb-2">${b.author}</p>
                <p class="text-xs text-slate-600 line-clamp-2 mb-3">${b.desc}</p>
                <a href="${b.url}" class="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold hover:bg-emerald-200 transition">تحميل الكتاب</a>
            </div>
        </div>
    `).join('');
}

// --- 6. باقي الدوال ---
function getCatName(cat) {
    const names = { 'graphic': 'جرافيك', 'programming': 'برمجة', 'business': 'أعمال', 'marketing': 'تسويق', 'ai': 'ذكاء اصطناعي', 'science': 'علوم', 'development': 'تطوير ذات' };
    return names[cat] || cat;
}

function initArticlesPage() { renderArticles(); }

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
                    <span class="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-bold">${getCatName(a.cat)}</span>
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

let currentArticleCat = 'all';
let searchArticleText = '';

// المعرض واللايكات
function initGalleryPage() { renderGallery(); }
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more-gallery');
    if(!grid) return;

    let html = '';
    const totalGalleryImages = 2000;
    
    // استخدم المتغير العالمي visibleGalleryCount المعرف في مكان آخر أو عرفه هنا
    // سنفترض هنا وجوده أو نعرفه محلياً للدالة
    if (typeof window.visibleGalleryCount === 'undefined') window.visibleGalleryCount = 10;
    
    for(let i=1; i<=window.visibleGalleryCount && i<=totalGalleryImages; i++) {
        html += `
        <div class="glass-panel rounded-2xl overflow-hidden break-inside-avoid mb-6 group relative fade-in border-0 shadow-sm">
            <div class="relative cursor-pointer" onclick="openLightbox('images/${i}.jpg')">
                <img src="images/${i}.jpg" class="w-full h-auto object-cover" loading="lazy" onerror="this.src='https://placehold.co/400x500/dcfce7/065f46?text=Design+${i}'">
                
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
        </div>`;
    }
    grid.innerHTML = html;
    lucide.createIcons();
    listenToLikes();
    
    if (loadMoreBtn) {
        document.getElementById('load-more-gallery')?.addEventListener('click', () => {
            window.visibleGalleryCount += 10;
            renderGallery();
        });
         if (window.visibleGalleryCount >= totalGalleryImages) { loadMoreBtn.style.display = 'none'; } else { loadMoreBtn.style.display = 'inline-flex'; loadMoreBtn.innerHTML = `عرض المزيد (فاضل ${totalGalleryImages - window.visibleGalleryCount})`; }
    }
}

// دوال اللايكات
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
    // نفترض الاستماع للصور المعروضة حالياً
    if (typeof window.visibleGalleryCount === 'undefined') window.visibleGalleryCount = 10;
    
    for(let i=1; i<=window.visibleGalleryCount; i++) {
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

// دوال المشاركة واللايت بوكس
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
    if(lb) {
        document.getElementById('lightbox-img').src = src;
        lb.classList.add('active');
    }
}
function closeLightbox() { document.getElementById('lightbox')?.classList.remove('active'); }

function initHomePage() {
    document.querySelectorAll('.counter-number').forEach(c => {
        animateValue(c, 0, +c.dataset.target, 2000);
    });
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