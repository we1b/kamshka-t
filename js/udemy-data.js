/* Path: js/udemy-data.js */
// تحديث: 10 يناير 2026

// 1. هيكلة التصنيفات (Categories Structure)
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

// 2. قائمة الكورسات الجديدة (30 كورس)
const udemyCourses = [
    {
        id: 1201,
        titleAr: "أساسيات ArcPy: بايثون للأتمتة الجغرافية",
        titleEn: "Essentials for ArcPy: Python for Geospatial Automation",
        desc: "تعلم كيفية استخدام Python لأتمتة المهام الجغرافية المكانية باستخدام مكتبة ArcPy.",
        cat: "Development",
        subCat: "Programming Languages",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/6075392_2c0d_3.jpg",
        url: "https://www.udemy.com/course/essentials-for-arcpy/?couponCode=AR_FREE_149"
    },
    {
        id: 1202,
        titleAr: "أساسيات PyQGIS: بايثون لنظم المعلومات الجغرافية",
        titleEn: "Essentials for PyQGIS: Python for Geospatial Automation",
        desc: "دليل شامل لاستخدام بايثون في QGIS للأتمتة والتحليل المكاني.",
        cat: "Development",
        subCat: "Programming Languages",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/6075421_b12d_3.jpg",
        url: "https://www.udemy.com/course/essentials-pyqgis/?couponCode=AR_FREE_150"
    },
    {
        id: 1203,
        titleAr: "أساسيات جانغو: بناء ونشر تطبيقات حقيقية",
        titleEn: "Django Essentials: Build and Deploy Real-World Apps",
        desc: "تعلم إطار عمل Django لبناء تطبيقات ويب قوية ونشرها.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/6075429_e674_2.jpg",
        url: "https://www.udemy.com/course/mastering-django/?couponCode=AR_FREE_151"
    },
    {
        id: 1204,
        titleAr: "بايثون للبحث العلمي",
        titleEn: "Python for Scientific Research",
        desc: "استخدام بايثون في التطبيقات العلمية والبحثية.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/6117565_0493_2.jpg",
        url: "https://www.udemy.com/course/python-for-researchers/?couponCode=AR_FREE_154"
    },
    {
        id: 1205,
        titleAr: "لغة R للباحثين: من الأساسيات للمتقدم",
        titleEn: "R for Researchers: From Basics to Advanced Analysis",
        desc: "تحليل البيانات الإحصائية والعلمية باستخدام لغة R.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/6117578_93b0_3.jpg",
        url: "https://www.udemy.com/course/r-for-research/?couponCode=AR_FREE_155"
    },
    {
        id: 1206,
        titleAr: "البرمجة للبحث العلمي (Python & R)",
        titleEn: "Programming for Scientific Research with Python and R",
        desc: "دمج قوتي بايثون و R في البحث العلمي والتحليل.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/6117556_1596_2.jpg",
        url: "https://www.udemy.com/course/programming-for-scientific-research/?couponCode=AR_FREE_153"
    },
    {
        id: 1207,
        titleAr: "الذكاء الاصطناعي للتحليل الجغرافي المكاني",
        titleEn: "Harnessing AI and Machine Learning for Geospatial Analysis",
        desc: "تطبيقات تعلم الآلة في تحليل البيانات الجغرافية.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/6075470_79b7_2.jpg",
        url: "https://www.udemy.com/course/ai-for-geospatial-analysis/?couponCode=AR_FREE_152"
    },
    {
        id: 1208,
        titleAr: "تحدي تغيير الحياة في 5 أيام",
        titleEn: "Transform Your Life in 5 Days: I Challenge You to Fail",
        desc: "كورس لتطوير الذات وتغيير العادات في وقت قياسي.",
        cat: "Business",
        subCat: "Entrepreneurship",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/4942930_3fc0_4.jpg",
        url: "https://www.udemy.com/course/transform-your-life-in-5-days-i-challenge-you-to-fail/?couponCode=494293FCEDBDBF4D5299"
    },
    {
        id: 1209,
        titleAr: "إتقان التسويق المرن (Agile Marketing)",
        titleEn: "Agile Marketing Mastery: Implementing Marketing Sprints",
        desc: "كيفية تطبيق منهجية الأجايل في حملات التسويق.",
        cat: "Marketing",
        subCat: "Marketing Fundamentals",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/4898492_d5d1_2.jpg",
        url: "https://www.udemy.com/course/agile-marketing-mastery-implementing-marketing-sprints/?couponCode=DISCUDEMY.COM"
    },
    {
        id: 1210,
        titleAr: "احتراف تحليل البيانات مع ChatGPT",
        titleEn: "Data Analysis Mastery with ChatGPT and Manus AI Tools",
        desc: "استخدام أدوات الذكاء الاصطناعي لتحليل البيانات بسرعة ودقة.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/5277832_a451_3.jpg",
        url: "https://www.udemy.com/course/from-basics-to-advanced-data-analysis-using-chatgpt/?couponCode=FBA6D1ED52EA2A45119C"
    },
    {
        id: 1211,
        titleAr: "العلامة التجارية الشخصية بالذكاء الاصطناعي",
        titleEn: "AI Personal Branding: Secure High-Paying Jobs as a Student",
        desc: "كيف تبني براند شخصي قوي باستخدام أدوات AI.",
        cat: "Marketing",
        subCat: "Branding",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/5473210_7d97_2.jpg",
        url: "https://www.udemy.com/course/ai-personal-branding-secure-high-paying-jobs-as-a-student/?couponCode=074732C21A17C27D97AF"
    },
    {
        id: 1212,
        titleAr: "شهادة احترافية في التحليل المالي",
        titleEn: "Professional Certificate in Financial Analysis and Modeling",
        desc: "تعلم النمذجة المالية والتحليل المالي بشكل احترافي.",
        cat: "Finance & Accounting",
        subCat: "Financial Modeling & Analysis",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/5354172_5d80_2.jpg",
        url: "https://www.udemy.com/course/professional-certificate-in-financial-analysis-and-modeling/?couponCode=2C5DD97F84D41250C817"
    },
    {
        id: 1213,
        titleAr: "بناء متجر شوبيفاي من الصفر (Shopify)",
        titleEn: "Build a Shopify Store from Scratch: Lean Shopify from A to Z",
        desc: "دليل كامل لإنشاء متجر إلكتروني ناجح على شوبيفاي.",
        cat: "Business",
        subCat: "E-commerce",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3858172_50d0_2.jpg",
        url: "https://www.udemy.com/course/build-a-shopify-store-from-scratch-lean-shopify-from-a-to-z/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=FORWARD2026"
    },
    {
        id: 1214,
        titleAr: "كورس SQL Server الكامل",
        titleEn: "The Complete Microsoft SQL Server Course: From A to Z",
        desc: "احترف قواعد بيانات مايكروسوفت SQL Server من البداية.",
        cat: "Development",
        subCat: "Database Design & Development",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3598172_5d80_2.jpg",
        url: "https://www.udemy.com/course/the-complete-microsoft-sql-server-course-from-a-to-z/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=TOMORROW26"
    },
    {
        id: 1215,
        titleAr: "MySQL للمبتدئين: تدريب كامل",
        titleEn: "MySQL for Beginners: A Complete Training for beginnners",
        desc: "تعلم أساسيات قواعد البيانات MySQL.",
        cat: "Development",
        subCat: "Database Design & Development",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3858172_50d0_2.jpg",
        url: "https://www.udemy.com/course/mysql-for-beginners-a-complete-mysql-training-for-beginnners/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=DESTINY2026"
    },
    {
        id: 1216,
        titleAr: "كورس Vue.JS الكامل للمبتدئين",
        titleEn: "The Complete Vue.JS Course for Beginners: Zero to Mastery",
        desc: "تعلم إطار عمل Vue.js لبناء واجهات مستخدم تفاعلية.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3598172_5d80_2.jpg",
        url: "https://www.udemy.com/course/the-complete-vuejs-course-for-beginners-zero-to-mastery/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=PATHWAY2026"
    },
    {
        id: 1217,
        titleAr: "ماستر كلاس مونتاج الفيديو بـ Camtasia",
        titleEn: "All in One Video Editing Masterclass with Camtasia",
        desc: "تعلم المونتاج وتسجيل الشاشة باحترافية باستخدام Camtasia.",
        cat: "Design",
        subCat: "3D & Animation",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3858172_50d0_2.jpg",
        url: "https://www.udemy.com/course/camtasia-video-editing-masterclass/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=CF6DDEC1612BE5473D48"
    },
    {
        id: 1218,
        titleAr: "PHP مع MySQL: بناء 8 مشاريع",
        titleEn: "PHP with MySQL: Build 8 PHP and MySQL Projects",
        desc: "تطبيقات عملية لبناء مواقع ويب ديناميكية باستخدام PHP.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3598172_5d80_2.jpg",
        url: "https://www.udemy.com/course/php-with-mysql-2022-build-php-and-mysql-projects/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=PHPMYSQLPROJECTS68"
    },
    {
        id: 1219,
        titleAr: "بايثون لعلوم البيانات وتعلم الآلة",
        titleEn: "Python for Data Science & Machine Learning: Zero to Hero",
        desc: "المسار الكامل لاحتراف علوم البيانات بلغة بايثون.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3858172_50d0_2.jpg",
        url: "https://www.udemy.com/course/python-for-data-science-machine-learning-zero-to-hero/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=OPENGATE26"
    },
    {
        id: 1220,
        titleAr: "كورس ووردبريس: ابنِ موقع في دقائق",
        titleEn: "WordPress Crash Course: Build any Website in Minutes!",
        desc: "تعلم الووردبريس وإنشاء المواقع بدون برمجة.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3598172_5d80_2.jpg",
        url: "https://www.udemy.com/course/wordpress-mastery-for-beginners-learn-wordpress-fast/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=CONNECT26"
    },
    {
        id: 1221,
        titleAr: "إتقان TailwindCSS من الصفر",
        titleEn: "TailwindCSS from A to Z: Master TailwindCSS Quickly",
        desc: "تعلم تنسيق المواقع الحديثة باستخدام TailwindCSS.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3858172_50d0_2.jpg",
        url: "https://www.udemy.com/course/learn-tailwind-css-quickly/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=NETWORK2026"
    },
    {
        id: 1222,
        titleAr: "كورس React.JS الكامل للمبتدئين",
        titleEn: "React.JS Crash Course: The Complete Course for Beginners",
        desc: "أقوى مكتبة جافاسكريبت لبناء واجهات المستخدم.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3598172_5d80_2.jpg",
        url: "https://www.udemy.com/course/reactjs-the-complete-course-for-beginners/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=CREW2026"
    },
    {
        id: 1223,
        titleAr: "جافاسكريبت للمبتدئين: الكورس الكامل",
        titleEn: "JavaScript for Beginners: The Complete Course for Beginners",
        desc: "أساسيات لغة الويب الأولى جافاسكريبت.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3858172_50d0_2.jpg",
        url: "https://www.udemy.com/course/javascript-course-for-beginners-the-complete-javascript-for-beginners/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=COLLAB2026"
    },
    {
        id: 1224,
        titleAr: "أمّن مستقبلك الوظيفي مع الذكاء الاصطناعي",
        titleEn: "Secure Your Job & Business Future: Human Skills 4 AI Success",
        desc: "المهارات البشرية المطلوبة للنجاح في عصر الـ AI.",
        cat: "Business",
        subCat: "Business Strategy",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3598172_5d80_2.jpg",
        url: "https://www.udemy.com/course/secure-your-job-business-future-human-skills-4-ai-success/?couponCode=JAN-FRE1"
    },
    {
        id: 1225,
        titleAr: "مشاريع بايثون: 8 أدوات قوية",
        titleEn: "Project Based Python Create 8 Powerful Tools Step by Step",
        desc: "تعلم بايثون من خلال التطبيق العملي وبناء الأدوات.",
        cat: "Development",
        subCat: "Programming Languages",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3858172_50d0_2.jpg",
        url: "https://www.udemy.com/course/project-based-python-create-8-powerful-tools-step-by-step/?couponCode=701310DA656DDF137536"
    },
    {
        id: 1226,
        titleAr: "تقارير إكسل الديناميكية للتسويق",
        titleEn: "Dynamic Excel Reports for Marketing Analytics",
        desc: "كيفية إنشاء تقارير تفاعلية في Excel لتحليل بيانات التسويق.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3598172_5d80_2.jpg",
        url: "https://www.udemy.com/course/dynamic-excel-reports-for-marketing-analytics/?couponCode=WINTER-WIN"
    },
    {
        id: 1227,
        titleAr: "احتراف Midjourney V7: فن وربح",
        titleEn: "Midjourney V7 Mastery 2025: Create Stunning Art & Earn Money",
        desc: "إتقان توليد الصور بالذكاء الاصطناعي وكيفية الربح منها.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: "جديد 🔥",
        img: "https://img-c.udemycdn.com/course/750x422/3858172_50d0_2.jpg",
        url: "https://www.udemy.com/course/midjourney-for-beginners-embark-on-your-artistic-journey/?couponCode=SKILL2026"
    }
];

// تصدير البيانات
window.udemyData = udemyCourses;
window.udemyCategories = udemyCategories;