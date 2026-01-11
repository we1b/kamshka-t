/* Path: js/udemy-data.js */
// تحديث: 11 يناير 2026 - دفعة الكورسات الجديدة

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

// 2. قائمة الكورسات الجديدة
const udemyCourses = [
    {
        id: 1301,
        titleAr: "بناء مدونة CMS كاملة بـ PHP و MySQL",
        titleEn: "Build Complete CMS Blog in PHP MySQL Bootstrap & PDO",
        desc: "تعلم كيفية بناء نظام إدارة محتوى كامل من الصفر.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/0f172a/ffffff?text=PHP+CMS",
        url: "https://www.udemy.com/course/build-complete-2022-cms-blog-in-php-mysql-bootstrap-pdo/?couponCode=PHPBLOG76"
    },
    {
        id: 1302,
        titleAr: "أدوبي إليستريتور لتصميم التيشيرتات",
        titleEn: "Adobe Illustrator for T-Shirt Design: From Sketch to Print",
        desc: "احترف تصميم التيشيرتات من السكتش للطباعة.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Illustrator",
        url: "https://www.udemy.com/course/adobe-illustrator-for-t-shirt-design-from-sketch-to-print/?couponCode=3312F1B3EFD04710C51D"
    },
    {
        id: 1303,
        titleAr: "احتراف مايكروسوفت بوربوينت",
        titleEn: "MS PowerPoint Course: Present with Confidence & Creativity",
        desc: "صمم عروض تقديمية إبداعية واحترافية.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/c2410c/ffffff?text=PowerPoint",
        url: "https://www.udemy.com/course/ms-powerpoint-course-present-with-confidence-creativity/?couponCode=C59BCA7CAC2B7F2775AA"
    },
    {
        id: 1304,
        titleAr: "5 مشاريع تعلم آلة في 5 أيام",
        titleEn: "5 Days 5 Machine Learning Projects From Basic To Pro",
        desc: "تطبيقات عملية لبناء مشاريع تعلم آلة من الصفر.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/2563eb/ffffff?text=Machine+Learning",
        url: "https://www.udemy.com/course/5-days-5-machine-learning-projects-from-scratch/?couponCode=9D045EE6E4C361F5B8D5"
    },
    {
        id: 1305,
        titleAr: "كورس فوتوشوب CC الاحترافي",
        titleEn: "Professional Adobe Photoshop CC Course With Advance Training",
        desc: "تدريب متقدم لاحتراف أدوات الفوتوشوب.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/0284c7/ffffff?text=Photoshop",
        url: "https://www.udemy.com/course/professional-adobe-photoshop-cc-course-with-advance-training/?couponCode=CFB28A7DEDE66A27A3C2"
    },
    {
        id: 1306,
        titleAr: "الذكاء الاصطناعي للمبتدئين: ChatGPT و Gemini",
        titleEn: "AI for Beginners: Learn ChatGPT, Gemini, Perplexity and Grok",
        desc: "دليل شامل لأدوات الذكاء الاصطناعي التوليدي.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/10b981/ffffff?text=AI+Tools",
        url: "https://www.udemy.com/course/ai-for-beginners-learn-chatgpt-gemini-perplexity-and-grok/?couponCode=DA01363A8567A0F883DF"
    },
    {
        id: 1307,
        titleAr: "إدارة المنتجات باستخدام ChatGPT",
        titleEn: "Build Product Management deliverable portfolio using ChatGPT",
        desc: "كيف تستخدم AI في بناء بورتفوليو إدارة المنتجات.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/6366f1/ffffff?text=Product+Mgmt",
        url: "https://www.udemy.com/course/build-product-management-deliverable-portfolio-using-chatgpt-o/?couponCode=7801144544A2972DB746"
    },
    {
        id: 1308,
        titleAr: "تعلم مايكروسوفت أوفيس مع AI",
        titleEn: "Learn Microsoft Office with ChatGPT Gemini and Copilot",
        desc: "دمج الذكاء الاصطناعي مع برامج الأوفيس لزيادة الإنتاجية.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Office+AI",
        url: "https://www.udemy.com/course/learn-microsoft-office-with-chatgpt-gemini-and-copilot/?couponCode=47D2683327D039E26047"
    },
    {
        id: 1309,
        titleAr: "احتراف كانفا: صمم كمحترف",
        titleEn: "Canva Mastery: Design Like a Pro in Just Days",
        desc: "تعلم التصميم الجرافيكي السريع باستخدام Canva.",
        cat: "Design",
        subCat: "Design Tools",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/06b6d4/ffffff?text=Canva",
        url: "https://www.udemy.com/course/canva-mastery-design-like-a-pro-in-just-days/?couponCode=65B4DC51EC7FA652AF2A"
    },
    {
        id: 1310,
        titleAr: "مونتاج الفيديو بـ Premiere Pro: 18 مشروع",
        titleEn: "Video Editing Course Premiere Pro: 18 Project In 1 Course",
        desc: "تعلم المونتاج من خلال التطبيق العملي على 18 مشروع.",
        cat: "Design",
        subCat: "3D & Animation",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/9333ea/ffffff?text=Premiere+Pro",
        url: "https://www.udemy.com/course/premiere-pro-cc-novice-to-expert-how-to-earn-money-by-video/?couponCode=A21D975A1B96FEDE5C50"
    },
    {
        id: 1311,
        titleAr: "مايكروسوفت وورد: من المبتدئ للخبير",
        titleEn: "MS Word - Microsoft Word Course Beginner to Expert",
        desc: "احترف معالجة النصوص ببرنامج Word.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/2563eb/ffffff?text=MS+Word",
        url: "https://www.udemy.com/course/ms-word-for-novice/?couponCode=1F0181262AE008079647"
    },
    {
        id: 1312,
        titleAr: "مونتاج الفيديو ببرنامج فيلمورا",
        titleEn: "Learn Filmora Video Editing Masterclass From Beginner to Pro",
        desc: "تعلم المونتاج السهل والاحترافي ببرنامج Filmora.",
        cat: "Design",
        subCat: "3D & Animation",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/14b8a6/ffffff?text=Filmora",
        url: "https://www.udemy.com/course/learn-filmora-video-editing-masterclass-from-beginner-to-pro/?couponCode=33E0B169824A99C58971"
    },
    {
        id: 1314,
        titleAr: "غير حياتك في 5 أيام: تحدي الفشل",
        titleEn: "Transform Your Life in 5 Days: I Challenge You to Fail",
        desc: "كورس لتطوير الذات وتغيير العقلية.",
        cat: "Health & Fitness",
        subCat: "Mental Health",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/f59e0b/ffffff?text=Life+Change",
        url: "https://www.udemy.com/course/transform-your-life-in-5-days-i-challenge-you-to-fail/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=494293FCEDBDBF4D5299"
    },
    {
        id: 1315,
        titleAr: "مايكروسوفت أزور (Azure)",
        titleEn: "Microsoft Azure",
        desc: "مقدمة في خدمات الحوسبة السحابية من مايكروسوفت.",
        cat: "IT & Software",
        subCat: "IT Certifications",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/0ea5e9/ffffff?text=Azure",
        url: "https://www.udemy.com/course/microsoft-azure-y/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=4D52FF5FD3B072B989FE"
    },
    {
        id: 1316,
        titleAr: "تحليل المخاطر ونقاط التحكم الحرجة (HACCP)",
        titleEn: "Hazard Analysis and Critical Control Points",
        desc: "كورس متخصص في سلامة الغذاء وإدارة المخاطر.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/ef4444/ffffff?text=HACCP",
        url: "https://www.udemy.com/course/hazard-analysis-and-critical-control-points/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=9327774781546B8DADF5"
    },
    {
        id: 1317,
        titleAr: "أساسيات Confluence للمبتدئين",
        titleEn: "Atlassian Confluence A-Z: Confluence for Beginners",
        desc: "تعلم أداة التوثيق وإدارة المعرفة Confluence.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/3b82f6/ffffff?text=Confluence",
        url: "https://www.udemy.com/course/atlassian-confluence-masterclass/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=78DAA4080C78120F37F4"
    },
    {
        id: 1318,
        titleAr: "احتراف Jira مع الذكاء الاصطناعي",
        titleEn: "Mastering Jira® with Atlassian® Intelligence (AI) & Rovo®",
        desc: "إدارة المشاريع بـ Jira مدعوماً بالـ AI.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/2563eb/ffffff?text=Jira",
        url: "https://www.udemy.com/course/jira-with-atlassian-intelligence-ai-rovo/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=49A9D1348C9B9F1E7FBB"
    },
    {
        id: 1319,
        titleAr: "عقليات الشمول المكاني للقادة",
        titleEn: "Location-Inclusive Mindsets: For Leaders, Managers, and HR",
        desc: "كيفية إدارة الفرق عن بعد والشمولية في بيئة العمل.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/64748b/ffffff?text=Leadership",
        url: "https://www.udemy.com/course/location-inclusive-mindsets-genman-solutions/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=184DD1689B98BB1723A3"
    },
    {
        id: 1320,
        titleAr: "ماستر كلاس الموارد البشرية (HR)",
        titleEn: "HR Masterclass: Complete Guide to Human Resource Management",
        desc: "دليل كامل لإدارة الموارد البشرية.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/f43f5e/ffffff?text=HR",
        url: "https://www.udemy.com/course/hr-masterclass-genman/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=A548690471E27578B7BF"
    },
    {
        id: 1321,
        titleAr: "الحلول الأمنية والشبكات الافتراضية (SVPN)",
        titleEn: "Secure Solutions with Virtual Private Networks (SVPN) Exams",
        desc: "تأمين الشبكات باستخدام VPN.",
        cat: "IT & Software",
        subCat: "Network & Security",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/10b981/ffffff?text=VPN+Security",
        url: "https://www.udemy.com/course/implementing-secure-solutions-with-virtual-private-networks/?couponCode=JAN11FREE"
    },
    {
        id: 1322,
        titleAr: "تأمين مواقع ووردبريس للمبتدئين",
        titleEn: "Secure Your Wordpress Website For Beginners",
        desc: "حماية موقعك الووردبريس من الاختراق.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/3b82f6/ffffff?text=WP+Security",
        url: "https://www.udemy.com/course/secure-your-wordpress-website-for-beginners/?couponCode=ALHAMDULILLAH_011126"
    },
    {
        id: 1323,
        titleAr: "كورس الإكسل الكامل: جميع المستويات",
        titleEn: "The Complete Microsoft Excel Course: Master All Levels",
        desc: "احترف الإكسل من البداية وحتى الاحتراف.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Pro",
        url: "https://www.udemy.com/course/the-complete-microsoft-excel-course-master-all-levels/?couponCode=EFD566D206C08F4BEE07"
    },
    {
        id: 1324,
        titleAr: "ماستر كلاس Gemini: الابتكار بالذكاء الاصطناعي",
        titleEn: "Gemini Masterclass: Boost Creativity & Innovate with AI",
        desc: "استخدام Gemini لزيادة الإبداع والابتكار.",
        cat: "Office Productivity",
        subCat: "Google",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/8b5cf6/ffffff?text=Gemini",
        url: "https://www.udemy.com/course/gemini-masterclass-boost-creativity-innovate-with-ai/?couponCode=4E68ED5002D249D0459F"
    },
    {
        id: 1327,
        titleAr: "الإكسل للمبتدئين",
        titleEn: "Microsoft Excel - Excel Course For Beginners",
        desc: "دورة تأسيسية في برنامج الإكسل.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/22c55e/ffffff?text=Excel+Beginner",
        url: "https://www.udemy.com/course/microsoft-excel-excel-only-for-beginners/?couponCode=ALHAMDULILLAH_011126"
    },
    {
        id: 1328,
        titleAr: "الذكاء الاصطناعي التوليدي لقادة الأعمال",
        titleEn: "Generative AI for Business Leaders Managers & C-Suite 2026",
        desc: "استراتيجيات الذكاء الاصطناعي للمدراء والقادة.",
        cat: "Business",
        subCat: "Business Strategy",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/6366f1/ffffff?text=AI+Business",
        url: "https://www.udemy.com/course/generative-ai-for-business-leaders-managers-c-suite/?couponCode=C2A1E73A02273DE0DF00"
    },
    {
        id: 1329,
        titleAr: "أساسيات مخاطر الائتمان والتحليل",
        titleEn: "Credit Risk Essentials: Analytics, AI & Underwriting",
        desc: "فهم مخاطر الائتمان والتحليل المالي باستخدام AI.",
        cat: "Finance & Accounting",
        subCat: "Finance",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/14b8a6/ffffff?text=Credit+Risk",
        url: "https://www.udemy.com/course/credit-risk-essentials-analytics-ai-underwriting/?couponCode=772EB07C02DB9E58EF57"
    },
    {
        id: 1330,
        titleAr: "احتراف المقابلات والسيرة الذاتية",
        titleEn: "Interview & CV Mastery: From CV to Job Offer",
        desc: "كيف تكتب سيرة ذاتية قوية وتنجح في المقابلات.",
        cat: "Business",
        subCat: "Communication",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/f59e0b/ffffff?text=CV+Mastery",
        url: "https://www.udemy.com/course/interview-cv-mastery-from-cv-to-job-offer/?couponCode=927FCCEC1C3D2FEC6B8C"
    }
];

// تصدير البيانات
window.udemyData = udemyCourses;
window.udemyCategories = udemyCategories;