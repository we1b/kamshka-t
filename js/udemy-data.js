/* Path: js/udemy-data.js */
// تحديث: 12 يناير 2026 - كورسات اليوم فقط

// 1. هيكلة التصنيفات (ثابتة عشان الفلتر يشتغل)
const udemyCategories = [
    {
        id: "development",
        title: "Development",
        icon: "code",
        sub: [
            "Web Development", "Mobile Development", "Programming Languages", 
            "Game Development", "Database Design & Development", "Software Testing", "Data Science"
        ]
    },
    {
        id: "business",
        title: "Business",
        icon: "briefcase",
        sub: [
            "Entrepreneurship", "Communication", "Management", 
            "Sales", "Business Strategy", "E-commerce"
        ]
    },
    {
        id: "finance",
        title: "Finance & Accounting",
        icon: "dollar-sign",
        sub: [
            "Accounting & Bookkeeping", "Cryptocurrency & Blockchain", 
            "Finance", "Financial Modeling & Analysis", "Investing & Trading"
        ]
    },
    {
        id: "it",
        title: "IT & Software",
        icon: "server",
        sub: [
            "IT Certifications", "Network & Security", "Hardware", 
            "Operating Systems & Servers", "Other IT & Software"
        ]
    },
    {
        id: "office",
        title: "Office Productivity",
        icon: "file-text",
        sub: [
            "Microsoft", "Apple", "Google", "SAP", "Oracle", "Other Office Productivity"
        ]
    },
    {
        id: "design",
        title: "Design",
        icon: "pen-tool",
        sub: [
            "Web Design", "Graphic Design & Illustration", "Design Tools", 
            "User Experience Design", "Game Design", "3D & Animation"
        ]
    },
    {
        id: "marketing",
        title: "Marketing",
        icon: "megaphone",
        sub: [
            "Digital Marketing", "Search Engine Optimization", "Social Media Marketing", 
            "Branding", "Marketing Fundamentals", "Marketing Analytics & Automation"
        ]
    },
    {
        id: "health",
        title: "Health & Fitness",
        icon: "heart",
        sub: [
            "Fitness", "General Health", "Sports", "Nutrition & Diet", "Yoga", "Mental Health"
        ]
    }
];

// 2. قائمة الكورسات (كورسات اليوم فقط)
const udemyCourses = [
    {
        id: 1401,
        titleAr: "الذكاء الاصطناعي الكامل للمحترفين",
        titleEn: "The Complete Artificial Intelligence (AI) for Professionals",
        desc: "دليل شامل للذكاء الاصطناعي وتطبيقاته العملية للمحترفين.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/2563eb/ffffff?text=AI+For+Pros",
        url: "https://www.udemy.com/course/the-complete-artificial-intelligence-ai-for-professionals/?couponCode=JAN_26_26"
    },
    {
        id: 1402,
        titleAr: "تعلم Excel VLOOKUP من الصفر",
        titleEn: "Learn Excel VLOOKUP from Scratch",
        desc: "احترف دالة البحث الأكثر أهمية في الإكسل.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/16a34a/ffffff?text=VLOOKUP",
        url: "https://www.udemy.com/course/learn-excel-vlookup-from-scratch/?couponCode=BITTOBANSAL"
    },
    {
        id: 1403,
        titleAr: "كورس بايثون الكامل: من المبتدئ للمتقدم",
        titleEn: "Complete Python Course: Learn From Beginner To Advanced",
        desc: "تعلم البرمجة بلغة بايثون من الأساسيات حتى الاحتراف.",
        cat: "Development",
        subCat: "Programming Languages",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/3776ab/ffffff?text=Python+Complete",
        url: "https://www.udemy.com/course/complete-python-course-learn-from-beginner-to-advanced/?couponCode=3381460255994D1B4E87"
    },
    {
        id: 1404,
        titleAr: "تعلم الرسم بالفوتوشوب - كورس كامل",
        titleEn: "Learn to Draw with Photoshop - Complete Drawing Course",
        desc: "احترف الرسم الرقمي والإليستريشن باستخدام فوتوشوب.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/0284c7/ffffff?text=Photoshop+Art",
        url: "https://www.udemy.com/course/learn-to-draw-complete-drawing-course/?couponCode=DRAWFREE1000-JAN26"
    },
    {
        id: 1405,
        titleAr: "إتقان المؤثرات البصرية في Adobe Animate",
        titleEn: "Mastering Visual Effects in Adobe Animate-Intermediate Level",
        desc: "تعلم صناعة المؤثرات البصرية والتحريك.",
        cat: "Design",
        subCat: "3D & Animation",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/9333ea/ffffff?text=Animate+VFX",
        url: "https://www.udemy.com/course/visual-effects-with-adobe-animate/?couponCode=ANIMATE-VFX-JAN26"
    },
    {
        id: 1406,
        titleAr: "التحريك الاحترافي 2D في Animate (مبتدئ)",
        titleEn: "Animate Like Pro - 2D Animation in Animate - Beginner Level",
        desc: "أساسيات التحريك ثنائي الأبعاد.",
        cat: "Design",
        subCat: "3D & Animation",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/d946ef/ffffff?text=2D+Animation",
        url: "https://www.udemy.com/course/2d-animation-in-animate-beginner-level/?couponCode=ANIMATEBEGIN-JAN26"
    },
    {
        id: 1407,
        titleAr: "بيئات العمل الهجين: ما ينجح فعلاً",
        titleEn: "Hybrid Work Environments: What Actually Works",
        desc: "كيفية إدارة العمل عن بعد وفي المكتب بفعالية.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/64748b/ffffff?text=Hybrid+Work",
        url: "https://www.udemy.com/course/hybrid-work-environments-what-actually-works/?couponCode=4ACB5924F41BCD1FD13F"
    },
    {
        id: 1408,
        titleAr: "احتراف تصوير البيانات ببايثون",
        titleEn: "Python Data Visualization Mastery: From Beginner to Expert",
        desc: "تعلم Matplotlib و Seaborn لتحليل البيانات.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/f59e0b/ffffff?text=Data+Vis",
        url: "https://www.udemy.com/course/python-data-visualization-mastery-from-beginner-to-expert/?couponCode=E2458D3D416593ED3B0D"
    },
    {
        id: 1409,
        titleAr: "معادلات ودوال إكسل: من الأساسي للخبير",
        titleEn: "Microsoft Excel Formulas and Functions For Basic to Expert",
        desc: "إتقان دوال الإكسل للمعالجة المتقدمة للبيانات.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/10b981/ffffff?text=Excel+Expert",
        url: "https://www.udemy.com/course/microsoft-excel-formulas-and-functions-for-basic-to-expert/?couponCode=CAF164D275050222F807"
    },
    {
        id: 1410,
        titleAr: "برمجة جافاسكريبت الكاملة",
        titleEn: "Complete JavaScript Programming: From Novice to Expert",
        desc: "تعلم لغة الويب الأولى من الصفر حتى الاحتراف.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/f7df1e/000000?text=JavaScript",
        url: "https://www.udemy.com/course/complete-javascript-programming-from-novice-to-expert/?couponCode=2746C66E7CA6C54505B6"
    },
    {
        id: 1411,
        titleAr: "إتقان إنشاء المواقع: 15 منصة في كورس واحد",
        titleEn: "Master Website Creation - 15 Website Platforms in 1 Course!",
        desc: "تعلم إنشاء المواقع باستخدام ووردبريس، ويكس، شوبيفاي وغيرها.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/0ea5e9/ffffff?text=Web+Creation",
        url: "https://www.udemy.com/course/master-website-creation-15-website-platforms-in-1-course-s/?couponCode=8C1823101008E8449EA7"
    },
    {
        id: 1412,
        titleAr: "التحضير لاختبار Github Copilot (GH-300)",
        titleEn: "GH-300: Github Copilot – Complete Exam Preparation Guide",
        desc: "دليل شامل لاجتياز اختبار شهادة Github Copilot.",
        cat: "IT & Software",
        subCat: "IT Certifications",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/1e293b/ffffff?text=GitHub+Cert",
        url: "https://www.udemy.com/course/gh-300-github-copilot-exam-preparation/?couponCode=12JANUARY2026"
    },
    {
        id: 1413,
        titleAr: "دليل تصميم التيشيرتات بكانفا",
        titleEn: "Ultimate Guide to Canva T-Shirt Design: Mastery in T-Shirt",
        desc: "كيف تصمم وتبيع تيشيرتات باستخدام Canva.",
        cat: "Design",
        subCat: "Design Tools",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/06b6d4/ffffff?text=Canva+T-Shirt",
        url: "https://www.udemy.com/course/ultimate-guide-to-canva-t-shirt-design-mastery-in-t-shirt/?couponCode=B890D8E543A05A0321B6"
    },
    {
        id: 1414,
        titleAr: "تحليل الأعمال للمدراء مع Copilot",
        titleEn: "Business Analysis for Executives with Microsoft Copilot",
        desc: "استخدام الذكاء الاصطناعي في تحليل القرارات الإدارية.",
        cat: "Business",
        subCat: "Business Strategy",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/4f46e5/ffffff?text=Biz+Copilot",
        url: "https://www.udemy.com/course/business-analysis-for-executives-with-microsoft-copilot/?couponCode=12JANUARY2026"
    },
    {
        id: 1415,
        titleAr: "مشاريع أوفيس مع ChatGPT و Gemini",
        titleEn: "Project Based Microsoft Office With ChatGPT And Gemini",
        desc: "زيادة إنتاجية برامج الأوفيس باستخدام أدوات الـ AI.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Office+AI",
        url: "https://www.udemy.com/course/project-based-microsoft-office-with-chatgpt-and-gemini/?couponCode=479B76EF4747292C403C"
    },
    {
        id: 1416,
        titleAr: "احتراف Runway: إنشاء الفيديو بالذكاء الاصطناعي",
        titleEn: "Runway Masterclass: Gen-4, Aleph & Act-Two AI Video Creation",
        desc: "تعلم صناعة الفيديوهات السينمائية باستخدام Runway AI.",
        cat: "Design",
        subCat: "3D & Animation",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/db2777/ffffff?text=Runway+Gen4",
        url: "https://www.udemy.com/course/runway-masterclass-gen-4-aleph-act-two-ai-video-creation/?couponCode=12JANUARY2026"
    },
    {
        id: 1417,
        titleAr: "كورس فوتوشوب الأساسي: للمبتدئين والمحترفين",
        titleEn: "Essential Photoshop Course for Beginner to Advanced",
        desc: "دليل كامل لأدوات وتقنيات الفوتوشوب.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/0369a1/ffffff?text=Ps+Essential",
        url: "https://www.udemy.com/course/graphics-design-video-editing-for-beginner-to-advanced/?couponCode=62AE08B64BAB73C6ACFA"
    },
    {
        id: 1418,
        titleAr: "الدليل الشامل للباحث عن عمل",
        titleEn: "Ultimate Job Seeker Course - Resume, Cover Letter, Interview",
        desc: "كتابة السيرة الذاتية، خطاب التغطية، واجتياز المقابلات.",
        cat: "Business",
        subCat: "Communication",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/059669/ffffff?text=Job+Seeker",
        url: "https://www.udemy.com/course/ultimate-job-seeker-course-resume-cover-letter-interview/?couponCode=4E5F5D6862E54DFCA457"
    },
    {
        id: 1419,
        titleAr: "HTML و CSS: من الأساسي للمتقدم",
        titleEn: "HTML and CSS for Beginners From Basic to Advance",
        desc: "المدخل الأساسي لتعلم تصميم وتطوير المواقع.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/e34f26/ffffff?text=HTML+CSS",
        url: "https://www.udemy.com/course/html-and-css-for-beginners-from-basic-to-advance/?couponCode=540D12C6B0CC03E8DAEC"
    },
    {
        id: 1420,
        titleAr: "ماستر كلاس إكسل وجوجل شيتس مع AI",
        titleEn: "Modern Excel MasterClass and Google Sheets with AI ChatGPT",
        desc: "دمج جداول البيانات مع الذكاء الاصطناعي لتحليل أسرع.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/10b981/ffffff?text=Modern+Excel",
        url: "https://www.udemy.com/course/modern-microsoft-excel-masterclass-and-google-sheets-with-ai-chatgpt/?couponCode=11AF7F12B244C1AC8CAD"
    },
    {
        id: 1421,
        titleAr: "التعلم والتطوير (L&D) مع Copilot",
        titleEn: "The Ultimate Guide to Learning & Development with Copilot",
        desc: "استخدام AI في تطوير المناهج والتدريب.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/6366f1/ffffff?text=L%26D+AI",
        url: "https://www.udemy.com/course/the-ultimate-guide-to-learning-development-with-copilot/?couponCode=12JANUARY2026"
    },
    {
        id: 1422,
        titleAr: "مدخل سريع للجافاسكريبت",
        titleEn: "JavaScript Fast Entry: Programming for Everyone",
        desc: "تعلم أساسيات الجافاسكريبت بسرعة.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/facc15/000000?text=JS+Fast",
        url: "https://www.udemy.com/course/javascript-fast-entry-programming-for-everyone/?couponCode=12JANUARY2026"
    },
    {
        id: 1423,
        titleAr: "مايكروسوفت كوبايلوت للعمل",
        titleEn: "Microsoft Copilot for Work: Learn to Work Faster & Smarter",
        desc: "زيادة الإنتاجية في بيئة العمل باستخدام Copilot.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/0ea5e9/ffffff?text=Copilot+Work",
        url: "https://www.udemy.com/course/microsoft-copilot-for-work-learn-to-work-faster-smarter/?couponCode=12JANUARY2026"
    },
    {
        id: 1424,
        titleAr: "محو أمية الذكاء الاصطناعي للموظفين",
        titleEn: "AI Literacy for All Employees",
        desc: "أساسيات الـ AI التي يجب أن يعرفها كل موظف.",
        cat: "Business",
        subCat: "Business Strategy",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/64748b/ffffff?text=AI+Literacy",
        url: "https://www.udemy.com/course/ai-literacy-for-all-employees-v/?couponCode=12JANUARY2026"
    },
    {
        id: 1425,
        titleAr: "تعزيز معرفة إدارة المشاريع (PMP)",
        titleEn: "PMP Knowledge Boost: Stay on Track with PMI Standards",
        desc: "تحديث معلوماتك في إدارة المشاريع وفق معايير PMI.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/1d4ed8/ffffff?text=PMP+Boost",
        url: "https://www.udemy.com/course/pmp-knowledge-boost-stay-on-track-with-pmi-standards/?couponCode=12JANUARY2026"
    },
    {
        id: 1426,
        titleAr: "تحريك الشخصيات 2D المتقدم (Animate)",
        titleEn: "Master 2D Character Animation in Adobe Animate-Advance Level",
        desc: "تقنيات متقدمة لتحريك الشخصيات.",
        cat: "Design",
        subCat: "3D & Animation",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/7c3aed/ffffff?text=Char+Anim",
        url: "https://www.udemy.com/course/master-2d-character-animation-in-adobe-animate-advance-level/?couponCode=ANIMATEADVANCE-JAN26"
    },
    {
        id: 1427,
        titleAr: "احتراف Freepik: من الأصول للذكاء الاصطناعي",
        titleEn: "Freepik Pro: From Assets to AI Creation",
        desc: "كيفية استخدام أدوات Freepik الجديدة.",
        cat: "Design",
        subCat: "Design Tools",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/2563eb/ffffff?text=Freepik+Pro",
        url: "https://www.udemy.com/course/freepik-pro-from-assets-to-ai-creation/?couponCode=12JANUARY2026"
    },
    {
        id: 1428,
        titleAr: "تصميم منتجات الذكاء الاصطناعي",
        titleEn: "Design AI Products",
        desc: "كيفية تصميم تجربة المستخدم لمنتجات تعتمد على AI.",
        cat: "Design",
        subCat: "User Experience Design",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/ec4899/ffffff?text=Design+AI",
        url: "https://www.udemy.com/course/design-ai-products/?couponCode=12JANUARY2026"
    }
];

// تصدير البيانات
window.udemyData = udemyCourses;
window.udemyCategories = udemyCategories;