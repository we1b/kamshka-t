/* Path: js/udemy-data.js */
// تحديث: 11 يناير 2026 - القائمة الشاملة (صباحاً + مساءً)

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

// 2. قائمة الكورسات (المجموعة الأولى + المجموعة الثانية)
const udemyCourses = [
    // --- المجموعة الأولى (الصباحية) ---
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
    },

    // --- المجموعة الثانية (المسائية - الإضافة الجديدة) ---
    {
        id: 1331,
        titleAr: "احتراف الهجوم السيبراني (Red Team)",
        titleEn: "Red Team Mastery: Advanced Offensive Security",
        desc: "دورة متقدمة في الأمن السيبراني الهجومي.",
        cat: "IT & Software",
        subCat: "Network & Security",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/ef4444/ffffff?text=Red+Team",
        url: "https://www.udemy.com/course/red-team-mastery-advanced-offensive-security/?couponCode=8938A37FB6DE8D5AE61E"
    },
    {
        id: 1332,
        titleAr: "إدارة العقود خطوة بخطوة",
        titleEn: "Contract Management Step by Step",
        desc: "دليل شامل لإدارة العقود التجارية.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/64748b/ffffff?text=Contracts",
        url: "https://www.udemy.com/course/contract-management-step-by-step/?couponCode=59B36A14F733AFFF4B52"
    },
    {
        id: 1333,
        titleAr: "إدارة تجربة العملاء (CX)",
        titleEn: "Customer Experience Management (CX): Frameworks & Strategies",
        desc: "استراتيجيات وأطر عمل لتحسين تجربة العملاء.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/10b981/ffffff?text=CX+Mgmt",
        url: "https://www.udemy.com/course/customer-experience-management-cx-frameworks-strategies/?couponCode=FC8FF2158563C9EB39DB"
    },
    {
        id: 1334,
        titleAr: "شهادة احترافية في إدارة الأعمال",
        titleEn: "Professional Business Management Certificate",
        desc: "أساسيات إدارة الأعمال والشركات.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/f59e0b/ffffff?text=Business+Mgmt",
        url: "https://www.udemy.com/course/professional-business-management-certificate/?couponCode=43AA6765BB73A33B5D0A"
    },
    {
        id: 1335,
        titleAr: "تعلم Git للتحكم في الإصدارات",
        titleEn: "Learn Git Version Control | Git Essentials for Developers",
        desc: "أساسيات Git و GitHub للمطورين.",
        cat: "Development",
        subCat: "Software Testing",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/f43f5e/ffffff?text=Git",
        url: "https://www.udemy.com/course/git-vsc-essentials/?couponCode=80274642FAE48BBECCF8"
    },
    {
        id: 1336,
        titleAr: "التحول الرقمي الاستراتيجي",
        titleEn: "Strategic Digital Transformation for Business Growth",
        desc: "كيفية قيادة التحول الرقمي لنمو الأعمال.",
        cat: "Business",
        subCat: "Business Strategy",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/3b82f6/ffffff?text=Digital+Trans",
        url: "https://www.udemy.com/course/strategic-digital-transformation-for-business-growth/?couponCode=95275111DD0FB52C83CF"
    },
    {
        id: 1337,
        titleAr: "شهادة مهنية في إدارة المخاطر (عربي)",
        titleEn: "Professional Certificate in Risk Management (Arabic)",
        desc: "دورة شاملة باللغة العربية لإدارة المخاطر.",
        cat: "Business",
        subCat: "Management",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/ef4444/ffffff?text=Risk+Mgmt",
        url: "https://www.udemy.com/course/professional-certificate-in-risk-management-arabic-version/?couponCode=1F9DE747ACB58EC37C80"
    },
    {
        id: 1338,
        titleAr: "إدارة المبيعات واستراتيجياتها",
        titleEn: "High-Impact Sales Management, Strategy and Sales Operations",
        desc: "استراتيجيات متقدمة لإدارة المبيعات والعمليات.",
        cat: "Business",
        subCat: "Sales",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/10b981/ffffff?text=Sales",
        url: "https://www.udemy.com/course/high-impact-sales-management-strategy-and-sales-operations/?couponCode=85378830984CF2A47B83"
    },
    {
        id: 1339,
        titleAr: "دبلومة إدارة المكاتب",
        titleEn: "Professional Diploma in Office Administration Management",
        desc: "مهارات السكرتارية وإدارة المكاتب.",
        cat: "Office Productivity",
        subCat: "Other Office Productivity",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/64748b/ffffff?text=Office+Admin",
        url: "https://www.udemy.com/course/officeadministrationmanagement/?couponCode=1AE0EE9AD01101E3A8CF"
    },
    {
        id: 1340,
        titleAr: "أساسيات Tmux (لينكس)",
        titleEn: "Tmux Fundamentals | Linux Terminal Productivity",
        desc: "زيادة الإنتاجية في تيرمينال لينكس باستخدام Tmux.",
        cat: "IT & Software",
        subCat: "Operating Systems & Servers",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/0f172a/ffffff?text=Tmux",
        url: "https://www.udemy.com/course/tmux-fundamentals/?couponCode=69A59BA85EE2E4B58533"
    },
    {
        id: 1341,
        titleAr: "أساسيات Vim للمطورين",
        titleEn: "Vim Fundamentals: Vim for Devs, Linux Users and Sysadmins",
        desc: "احترف محرر النصوص Vim.",
        cat: "Development",
        subCat: "Programming Languages",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/06b6d4/ffffff?text=Vim",
        url: "https://www.udemy.com/course/vim-fundamentals/?couponCode=DCA306A78F00BAC5B5FD"
    },
    {
        id: 1342,
        titleAr: "Signals في Angular v19+",
        titleEn: "Reactivity with Signals in Angular v19+",
        desc: "تعلم أحدث ميزات Angular (Signals) للتفاعلية.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/dd0031/ffffff?text=Angular",
        url: "https://www.udemy.com/course/signals-in-angular-v19/?couponCode=366038ED0AADE4C58745"
    },
    {
        id: 1343,
        titleAr: "كورس مطور ووردبريس الكامل",
        titleEn: "Complete Wordpress Website Developer Course",
        desc: "تعلم تطوير مواقع ووردبريس من الألف للياء.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/21759b/ffffff?text=WordPress",
        url: "https://www.udemy.com/course/the-complete-wordpress-developer-course-w/?couponCode=3CC0BDAB3589913EE832"
    },
    {
        id: 1344,
        titleAr: "دورة دروبال للمبتدئين (Drupal)",
        titleEn: "Drupal For Beginners - Master Drupal Quickly",
        desc: "تعلم نظام إدارة المحتوى دروبال بسرعة.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/0678be/ffffff?text=Drupal",
        url: "https://www.udemy.com/course/drupal-for-beginners-course/?couponCode=6118B7629E914891276A"
    },
    {
        id: 1345,
        titleAr: "دروبال للمبتدئين تماماً (2025)",
        titleEn: "Drupal For Absolute Beginners (2025)",
        desc: "كورس حديث لتعلم دروبال من الصفر.",
        cat: "Development",
        subCat: "Web Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/0678be/ffffff?text=Drupal+2025",
        url: "https://www.udemy.com/course/drupal-masterclass/?couponCode=90C42ABEBBDBC78B42FB"
    },
    {
        id: 1346,
        titleAr: "تعلم جافاسكريبت بالهندية",
        titleEn: "Learn JavaScript Programming In Hindi",
        desc: "كورس جافاسكريبت شامل باللغة الهندية.",
        cat: "Development",
        subCat: "Programming Languages",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/f7df1e/ffffff?text=JS+Hindi",
        url: "https://www.udemy.com/course/learn-javascript-step-by-step-in-hindi/?couponCode=2A25A857E871207136B4"
    },
    {
        id: 1347,
        titleAr: "احتراف الآيلتس (IELTS Pro)",
        titleEn: "IELTS Pro: Reading | Writing | Listening | Speaking",
        desc: "دليل شامل لاجتياز اختبار الآيلتس بمهاراته الأربعة.",
        cat: "Business",
        subCat: "Communication",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/dc2626/ffffff?text=IELTS",
        url: "https://www.udemy.com/course/ielts-pro-reading-writing-listening-speaking/?couponCode=1FC52089DE3E83B10A19"
    },
    {
        id: 1348,
        titleAr: "كورس C++ و Java المكثف للمبتدئين",
        titleEn: "C++ And Java Training Crash Course for Beginners",
        desc: "تعلم لغتي البرمجة C++ و Java في كورس واحد.",
        cat: "Development",
        subCat: "Programming Languages",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/00599c/ffffff?text=C%2B%2B+%26+Java",
        url: "https://www.udemy.com/course/c-and-java-training-crash-course-2022/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=29868BE7743E7FF5761E"
    },
    {
        id: 1349,
        titleAr: "الإكسل للمبتدئين (تأسيس)",
        titleEn: "Microsoft Excel - Excel Course For Beginners",
        desc: "دورة تأسيسية قوية في الإكسل.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Foundation",
        url: "https://www.udemy.com/course/microsoft-excel-excel-only-for-beginners/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=ALHAMDULILLAH_011126"
    },
    {
        id: 1350,
        titleAr: "بايثون لتحليل البيانات",
        titleEn: "Python for Data analysis",
        desc: "استخدام بايثون في تحليل البيانات وعلوم البيانات.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/3776ab/ffffff?text=Python+Data",
        url: "https://www.udemy.com/course/python-for-data-analysis-and-data-science/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=07176FC7E73CAE0FD3CA"
    },
    {
        id: 1351,
        titleAr: "شهادة إدارة التسويق الرقمي الأول",
        titleEn: "Digital-First Marketing Management Professional Certificate",
        desc: "إدارة التسويق في العصر الرقمي.",
        cat: "Marketing",
        subCat: "Digital Marketing",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/d946ef/ffffff?text=Marketing+Mgmt",
        url: "https://www.udemy.com/course/digital-first-marketing-management-professional-certificate/?source=CourseFolder&medium=CourseFolderFreeTelegram&couponCode=CD2EA410DECD9A2B6BFC"
    },
    {
        id: 1352,
        titleAr: "ماستر كلاس أتمتة الأوفيس (Word, Excel, PPT)",
        titleEn: "MS Office Automation MasterClass Word Excel PowerPoint",
        desc: "أتمتة المهام في برامج الأوفيس.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Office+Automation",
        url: "https://www.udemy.com/course/ms-office-automation-masterclass-word-excel-powerpoint/?couponCode=CP250105G2"
    },
    {
        id: 1353,
        titleAr: "التصنيع المستدام: مراجعة وتقدم",
        titleEn: "Sustainable Manufacturing: Review & Emerging Advances",
        desc: "أحدث التقنيات في التصنيع المستدام.",
        cat: "Business",
        subCat: "Business Strategy",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/10b981/ffffff?text=Manufacturing",
        url: "https://www.udemy.com/course/sustainable-manufacturing/?couponCode=9CD8E4182069EDD85F57"
    },
    {
        id: 1354,
        titleAr: "دورة علوم البيانات المجانية (R & Python)",
        titleEn: "Free Data Science Tutorial - R and Python coding with Prython",
        desc: "مقدمة في علوم البيانات باستخدام R و Python.",
        cat: "Development",
        subCat: "Data Science",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/6366f1/ffffff?text=Data+Science+Free",
        url: "https://www.udemy.com/course/r-and-python-coding-with-prython/"
    },
    {
        id: 1355,
        titleAr: "حل مشاكل SQL للمقابلات",
        titleEn: "SQL problem solving for interviews",
        desc: "تجهز لمقابلات العمل بأسئلة SQL وحلولها.",
        cat: "Development",
        subCat: "Database Design & Development",
        date: "جديد 🔥",
        img: "https://placehold.co/600x400/334155/ffffff?text=SQL+Interview",
        url: "https://www.udemy.com/course/sql-problem-solving-for-interviews/?couponCode=E2D90AE8D2E455B395FA"
    }
];

// تصدير البيانات
window.udemyData = udemyCourses;
window.udemyCategories = udemyCategories;