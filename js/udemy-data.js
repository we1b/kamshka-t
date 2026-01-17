/* Path: js/udemy-data.js */
// تحديث: السبت 17 يناير 2026 - الكورسات الجديدة فقط

// 1. هيكلة التصنيفات (ثابتة)
const udemyCategories = [
    {
        id: "development",
        title: "Development",
        icon: "code",
        sub: ["Web Development", "Mobile Development", "Programming Languages", "Game Development", "Database Design & Development", "Software Testing", "Data Science"]
    },
    {
        id: "business",
        title: "Business",
        icon: "briefcase",
        sub: ["Entrepreneurship", "Communication", "Management", "Sales", "Business Strategy", "E-commerce"]
    },
    {
        id: "finance",
        title: "Finance & Accounting",
        icon: "dollar-sign",
        sub: ["Accounting & Bookkeeping", "Cryptocurrency & Blockchain", "Finance", "Financial Modeling & Analysis", "Investing & Trading"]
    },
    {
        id: "it",
        title: "IT & Software",
        icon: "server",
        sub: ["IT Certifications", "Network & Security", "Hardware", "Operating Systems & Servers", "Other IT & Software"]
    },
    {
        id: "office",
        title: "Office Productivity",
        icon: "file-text",
        sub: ["Microsoft", "Apple", "Google", "SAP", "Oracle", "Other Office Productivity"]
    },
    {
        id: "design",
        title: "Design",
        icon: "pen-tool",
        sub: ["Web Design", "Graphic Design & Illustration", "Design Tools", "User Experience Design", "Game Design", "3D & Animation"]
    },
    {
        id: "marketing",
        title: "Marketing",
        icon: "megaphone",
        sub: ["Digital Marketing", "Search Engine Optimization", "Social Media Marketing", "Branding", "Marketing Fundamentals", "Marketing Analytics & Automation"]
    },
    {
        id: "health",
        title: "Health & Fitness",
        icon: "heart",
        sub: ["Fitness", "General Health", "Sports", "Nutrition & Diet", "Yoga", "Mental Health"]
    }
];

// التاريخ والوقت الحالي
const dateStr = "السبت 17 يناير 2026 | 28 رجب 1447 - 03:00 م";

// 2. قائمة الكورسات (25 كورس)
const udemyCourses = [
    {
        id: 2301,
        titleAr: "اكتب كل يوم: بناء عادة الكتابة المستمرة",
        titleEn: "Write Every Day: Building a Consistent Writing Habit in 2026",
        desc: "كيف تبني روتين كتابة يومي وتطور مهاراتك الإبداعية.",
        cat: "Business",
        subCat: "Communication",
        date: dateStr,
        img: "https://placehold.co/600x400/f59e0b/ffffff?text=Writing",
        url: "https://www.udemy.com/course/write-every-day-building-a-consistent-writing-habit/?couponCode=3F263A3CFCDA9C5708AF"
    },
    {
        id: 2302,
        titleAr: "معسكر المونتاج الكامل: من المبتدئ للمتقدم",
        titleEn: "Complete Video Editing BootCamp Beginner to Advanced",
        desc: "احترف تحرير الفيديو والمونتاج من الصفر.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateStr,
        img: "https://placehold.co/600x400/9333ea/ffffff?text=Video+Editing",
        url: "https://www.udemy.com/course/complete-video-editing-bootcamp-beginner-to-advanced/?couponCode=3E8C179EA01BA0D9C07E"
    },
    {
        id: 2303,
        titleAr: "ChatGPT لمالكي المنتجات (Product Owners)",
        titleEn: "ChatGPT for Product Owners",
        desc: "كيف تستخدم ChatGPT لإدارة المنتجات بكفاءة.",
        cat: "Business",
        subCat: "Management",
        date: dateStr,
        img: "https://placehold.co/600x400/10b981/ffffff?text=ChatGPT+PO",
        url: "https://www.udemy.com/course/chatgpt-for-product-managers/?couponCode=0868771DE83BB7971F67"
    },
    {
        id: 2304,
        titleAr: "الذكاء الاصطناعي لمديري المنتجات",
        titleEn: "AI for Product Managers",
        desc: "دليل مديري المنتجات لاستخدام تقنيات AI.",
        cat: "Business",
        subCat: "Management",
        date: dateStr,
        img: "https://placehold.co/600x400/2563eb/ffffff?text=AI+Product",
        url: "https://www.udemy.com/course/product-management-using-chatgpt/?couponCode=292C3AF111577C9078F3"
    },
    {
        id: 2305,
        titleAr: "Apache Zeppelin: أداة تصوير البيانات الضخمة",
        titleEn: "Apache Zeppelin - Big Data Visualization Tool",
        desc: "تحليل وتصوير البيانات الكبيرة (Big Data).",
        cat: "Development",
        subCat: "Data Science",
        date: dateStr,
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Big+Data",
        url: "https://www.udemy.com/course/apache-zeppelin-big-data-visualization-tool/?couponCode=B3AC76F7150E71E6B080"
    },
    {
        id: 2306,
        titleAr: "ماستر كلاس كتابة السيرة الذاتية وتخصيصها",
        titleEn: "The Complete CV Writing & Tailoring Masterclass",
        desc: "كيف تكتب CV احترافي وتخصصه لكل وظيفة.",
        cat: "Business",
        subCat: "Communication",
        date: dateStr,
        img: "https://placehold.co/600x400/64748b/ffffff?text=CV+Writing",
        url: "https://www.udemy.com/course/the-complete-cv-writing-tailoring-masterclass/?couponCode=8F99C4E664B5B6B506A3"
    },
    {
        id: 2307,
        titleAr: "احتراف Grok: برمجة وذكاء اصطناعي",
        titleEn: "Grok Mastery: Programming, AI and Problem Solving Skills",
        desc: "تعلم حل المشكلات والبرمجة باستخدام Grok AI.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/000000/ffffff?text=Grok+AI",
        url: "https://www.udemy.com/course/grok-mastery-programming-ai-and-problem-solving-skills/?couponCode=09CF77787800A6B97081"
    },
    {
        id: 2308,
        titleAr: "احتراف Perplexity AI: بحث أذكى",
        titleEn: "Mastering Perplexity AI: Smarter Research, Better Results",
        desc: "كيف تستخدم محرك البحث بالذكاء الاصطناعي Perplexity.",
        cat: "Office Productivity",
        subCat: "Other Office Productivity",
        date: dateStr,
        img: "https://placehold.co/600x400/0ea5e9/ffffff?text=Perplexity",
        url: "https://www.udemy.com/course/mastering-perplexity-ai-smarter-research-better-results/?couponCode=D24975AC2310F241E702"
    },
    {
        id: 2309,
        titleAr: "معادلات إكسل: نصائح وحيل واختصارات",
        titleEn: "Excel Formulas and Functions: Tips, Tricks, and Shortcuts",
        desc: "أسرار الإكسل لزيادة سرعتك وإنتاجيتك.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateStr,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Tips",
        url: "https://www.udemy.com/course/excel-formulas-and-functions-tips-tricks-and-shortcuts/?couponCode=81AEB82497751CA5B582"
    },
    {
        id: 2310,
        titleAr: "ماستر كلاس إكسل للباحثين عن عمل في المحاسبة",
        titleEn: "MS Excel Masterclass for Job Seekers Accounting Success",
        desc: "مهارات الإكسل الضرورية للمحاسبة والبحث عن عمل.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateStr,
        img: "https://placehold.co/600x400/15803d/ffffff?text=Excel+Accounting",
        url: "https://www.udemy.com/course/ms-excel-masterclass-for-job-seekers-accounting-success/?couponCode=B4EEF3A18C359CA95148"
    },
    {
        id: 2311,
        titleAr: "جافاسكريبت شاملة: Full Stack",
        titleEn: "JavaScript Fundamentals to Advanced: Full Stack Development",
        desc: "من الأساسيات إلى التطوير الكامل للويب بـ JS.",
        cat: "Development",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/f7df1e/000000?text=JavaScript",
        url: "https://www.udemy.com/course/javascript-fundamentals-to-advanced-full-stack-development/?couponCode=7276F6F173BE74745FA0"
    },
    {
        id: 2312,
        titleAr: "احتراف C++: من المبتدئ للمتقدم",
        titleEn: "Master of Essential C++ Programming Beginner to Advanced",
        desc: "دليل شامل لتعلم لغة البرمجة C++.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/00599c/ffffff?text=C%2B%2B",
        url: "https://www.udemy.com/course/master-of-essential-c-programming-beginner-to-advanced/?couponCode=F3C5A6E0CBC10C1B1FDA"
    },
    {
        id: 2313,
        titleAr: "تحليل وتصوير البيانات بـ Excel",
        titleEn: "Microsoft Excel: Data Analysis, Management and Visualization",
        desc: "كيف تحلل البيانات وتنشئ رسوم بيانية بالإكسل.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateStr,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Data",
        url: "https://www.udemy.com/course/microsoft-excel-data-analysis-management-and-visualization/?couponCode=08EFD5B41D2CFF95686B"
    },
    {
        id: 2314,
        titleAr: "تصميم واجهات المستخدم UI/UX (Figma & XD)",
        titleEn: "UIUX with Figma and Adobe XD",
        desc: "تعلم تصميم التطبيقات والمواقع بـ Figma و Adobe XD.",
        cat: "Design",
        subCat: "User Experience Design",
        date: dateStr,
        img: "https://placehold.co/600x400/f24e1e/ffffff?text=UI+UX",
        url: "https://www.udemy.com/course/uiux-with-figma-and-adobe-xd/?couponCode=1CEF4C4ECC8412663CBD"
    },
    {
        id: 2315,
        titleAr: "أساسيات تصميم اللوجو (فوتوشوب وإليستريتور)",
        titleEn: "Logo Design Essentials: Photoshop & Illustrator",
        desc: "كيف تصمم شعارات احترافية.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/ff9a00/ffffff?text=Logo+Design",
        url: "https://www.udemy.com/course/logo-design-essentials-photoshop-illustrator/?couponCode=7E9346A2ED4E52FB90E5"
    },
    {
        id: 2316,
        titleAr: "أساسيات أفتر إفكتس والموشن جرافيك",
        titleEn: "Adobe After Effect Essential: Learn Video Motion Animation",
        desc: "ابدأ رحلتك في عالم التحريك والموشن جرافيك.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateStr,
        img: "https://placehold.co/600x400/9999ff/ffffff?text=After+Effects",
        url: "https://www.udemy.com/course/adobe-after-effect-essential-learn-video-motion-animation/?couponCode=9179EE13110F88213511"
    },
    {
        id: 2317,
        titleAr: "تصميم التيشيرتات بالفوتوشوب",
        titleEn: "T-Shirt Design for Beginner to Advanced with Adobe Photoshop",
        desc: "دليل كامل لتصميم المطبوعات على الملابس.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/31a8ff/ffffff?text=T-Shirt",
        url: "https://www.udemy.com/course/t-shirt-design-for-beginner-to-advanced-with-adobe-photoshop/?couponCode=88397DDF65A84D504710"
    },
    {
        id: 2318,
        titleAr: "معسكر تطوير الويب: HTML CSS PHP MySQL",
        titleEn: "Web Development Bootcamp with HTML CSS PHP MySQL Wordpress",
        desc: "تعلم بناء المواقع الديناميكية والووردبريس.",
        cat: "Development",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/e34f26/ffffff?text=Web+Bootcamp",
        url: "https://www.udemy.com/course/web-development-bootcamp-with-html-css-php-mysql-wordpress/?couponCode=2DFA8CB056CB4FAFC101"
    },
    {
        id: 2319,
        titleAr: "احتراف يوتيوب: مونتاج وتصميم",
        titleEn: "Youtube Masterclass With Video Editing and Graphics Design",
        desc: "كيف تنجح على يوتيوب وتصنع محتوى احترافي.",
        cat: "Marketing",
        subCat: "Social Media Marketing",
        date: dateStr,
        img: "https://placehold.co/600x400/ff0000/ffffff?text=YouTube",
        url: "https://www.udemy.com/course/youtube-masterclass-with-video-editing-and-graphics-design/?couponCode=93CC5FBFD0454DE58142"
    },
    {
        id: 2320,
        titleAr: "إكسل الأساسي: من الصفر للاحتراف",
        titleEn: "Essential Microsoft Excel from Beginner to Advance level",
        desc: "كل ما تحتاجه لتعلم الإكسل.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateStr,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Essential",
        url: "https://www.udemy.com/course/essential-excel-for-beginner-to-advanced/?couponCode=16D7FED9678090A0CA7F"
    },
    {
        id: 2321,
        titleAr: "كورس تصميم الويب للمبتدئين",
        titleEn: "Web Design Course For Beginner to Advanced",
        desc: "أساسيات تصميم المواقع بشكل جذاب.",
        cat: "Design",
        subCat: "Web Design",
        date: dateStr,
        img: "https://placehold.co/600x400/0ea5e9/ffffff?text=Web+Design",
        url: "https://www.udemy.com/course/web-design-for-beginner-to-advanced/?couponCode=EEEB3EA3DCFDC9DDC6D8"
    },
    {
        id: 2322,
        titleAr: "إتقان الإنجليزية مع AI (ChatGPT)",
        titleEn: "Master English with AI: Improve Fluency Fast Using ChatGPT",
        desc: "طور لغتك الإنجليزية باستخدام الذكاء الاصطناعي.",
        cat: "Business",
        subCat: "Communication",
        date: dateStr,
        img: "https://placehold.co/600x400/8b5cf6/ffffff?text=English+AI",
        url: "https://www.udemy.com/course/master-english-with-ai-improve-fluency-fast-using-chatgpt/?couponCode=CP250105G2"
    },
    {
        id: 2323,
        titleAr: "التسويق القائم على الحسابات (ABM)",
        titleEn: "Account-Based Marketing - ABM: Increase Your B2B Efficiency",
        desc: "زيادة كفاءة التسويق للشركات B2B.",
        cat: "Marketing",
        subCat: "Marketing Fundamentals",
        date: dateStr,
        img: "https://placehold.co/600x400/d946ef/ffffff?text=ABM+Marketing",
        url: "https://www.udemy.com/course/account-based-marketing-increase-your-b2b-efficiency/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=13JANUARY2026"
    },
    {
        id: 2324,
        titleAr: "شهادة محترف التسويق الرقمي",
        titleEn: "Digital Marketing Professional Certification",
        desc: "شهادة شاملة في التسويق الإلكتروني.",
        cat: "Marketing",
        subCat: "Digital Marketing",
        date: dateStr,
        img: "https://placehold.co/600x400/ec4899/ffffff?text=Digital+Marketing",
        url: "https://www.udemy.com/course/digital-marketing-expert-assessment/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=4EE951AB68E4661E6C44"
    },
    {
        id: 2325,
        titleAr: "البناء مع Google AI: تطبيقات وفيديو",
        titleEn: "Build with Google AI: Apps, Videos & Stunning Visuals",
        desc: "استخدام أدوات جوجل للذكاء الاصطناعي.",
        cat: "Development",
        subCat: "Data Science",
        date: dateStr,
        img: "https://placehold.co/600x400/4285f4/ffffff?text=Google+AI",
        url: "https://www.udemy.com/course/build-with-google-ai-apps-videos-stunning-visuals/?source=CourseFolder&medium=61A4040453247D580157&couponCode=3EFB4D055E670E598B3B"
    }
];

// تصدير البيانات
window.udemyData = udemyCourses;
window.udemyCategories = udemyCategories;