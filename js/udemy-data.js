/* Path: js/udemy-data.js */
// تحديث: 16 يناير 2026 - الكورسات الجديدة (صباحاً) + القديمة

// 1. هيكلة التصنيفات (ثابتة)
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

// تواريخ العرض
const dateMorning = "الجمعة 16 يناير 2026 | 27 رجب 1447 - 10:00 ص";
const dateEvening = "الجمعة 16 يناير 2026 | 27 رجب 1447 - 07:00 م"; // القديم

// 2. قائمة الكورسات (الجديد في الأول)
const udemyCourses = [
    // --- 🟢 الدفعة الجديدة (16 يناير - 10:00 ص) 🟢 ---
    {
        id: 2101,
        titleAr: "تخصص التعلم العميق: ذكاء اصطناعي متقدم",
        titleEn: "Deep Learning Specialization: Advanced AI, Hands on Lab",
        desc: "تعلم معماريات الذكاء الاصطناعي المتقدمة والتطبيقات العملية.",
        cat: "Development",
        subCat: "Data Science",
        date: dateMorning,
        img: "https://placehold.co/600x400/2563eb/ffffff?text=Deep+Learning",
        url: "https://www.udemy.com/course/deep-learning-specialization-advanced-ai-architectures/?couponCode=FF92E5E92DDC7E31C1D3"
    },
    {
        id: 2102,
        titleAr: "دورة أساسيات تعلم الآلة والذكاء الاصطناعي",
        titleEn: "Machine Learning & AI Foundations Course",
        desc: "مدخل شامل لفهم أساسيات الـ ML والـ AI.",
        cat: "Development",
        subCat: "Data Science",
        date: dateMorning,
        img: "https://placehold.co/600x400/10b981/ffffff?text=ML+Foundations",
        url: "https://www.udemy.com/course/machine-learning-ai-foundations-course/?couponCode=33A5E592E172B996BF3E"
    },
    {
        id: 2103,
        titleAr: "دورة أساسيات محلل البيانات المعتمد",
        titleEn: "Certified Data Analyst Foundations Course",
        desc: "تأسيس قوي في مجال تحليل البيانات والشهادات المعتمدة.",
        cat: "Development",
        subCat: "Data Science",
        date: dateMorning,
        img: "https://placehold.co/600x400/f59e0b/ffffff?text=Data+Analyst",
        url: "https://www.udemy.com/course/certified-data-analyst-foundations-course/?couponCode=C0CE6B1721AD276D541C"
    },
    {
        id: 2104,
        titleAr: "اصنع لعبة Flappy Bird من الصفر بـ Unity و C#",
        titleEn: "Make a Flappy Bird Game From Scratch in Unity 6.3 & C#",
        desc: "تطبيق عملي ممتع لتعلم تطوير الألعاب بمحرك Unity.",
        cat: "Development",
        subCat: "Game Development",
        date: dateMorning,
        img: "https://placehold.co/600x400/ec4899/ffffff?text=Unity+Game",
        url: "https://www.udemy.com/course/flappy-bird-from-scratch-unity6/?couponCode=A947A1A98052297E4781"
    },
    {
        id: 2105,
        titleAr: "الدليل الشامل لـ Spring 6 و Spring Boot 3",
        titleEn: "Ultimate Guide to Spring 6, Spring Boot 3 & Hibernate [NEW]",
        desc: "احترف إطار عمل Spring لبناء تطبيقات جافا قوية.",
        cat: "Development",
        subCat: "Web Development",
        date: dateMorning,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Spring+Boot",
        url: "https://www.udemy.com/course/learn-spring-framework-the-easy-and-fun-way/?couponCode=NEWYEAR2026"
    },
    {
        id: 2106,
        titleAr: "برمجة جافا للمبتدئين تماماً",
        titleEn: "Java Programming for Complete Beginners",
        desc: "تعلم لغة الجافا من الصفر حتى الاحتراف.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateMorning,
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Java+Beginner",
        url: "https://www.udemy.com/course/java-programming-complete-beginner-to-advanced/?couponCode=0A4F559DEC59BE93661D"
    },
    {
        id: 2107,
        titleAr: "مشاريع واقعية في تعلم الآلة باستخدام بايثون",
        titleEn: "Machine Learning Real World projects in Python",
        desc: "تطبيق عملي لمشاريع ML حقيقية باستخدام بايثون.",
        cat: "Development",
        subCat: "Data Science",
        date: dateMorning,
        img: "https://placehold.co/600x400/3776ab/ffffff?text=ML+Projects",
        url: "https://www.udemy.com/course/machine-learning-real-world-projects-in-python/?couponCode=NEW_YEAR_2026_100OFF"
    },
    {
        id: 2108,
        titleAr: "تنظيف البيانات بـ SQL: مشاريع البورتفوليو",
        titleEn: "VBM Portfolio Projects: SQL Data Cleaning (e-commerce data)",
        desc: "مشروع قوي لبناء معرض أعمالك في تحليل البيانات.",
        cat: "Development",
        subCat: "Database Design & Development",
        date: dateMorning,
        img: "https://placehold.co/600x400/334155/ffffff?text=SQL+Cleaning",
        url: "https://www.udemy.com/course/data-portfolio-builder-sql-data-cleaning-for-dashboard-kpis/?couponCode=4A8C26815FC01F792EDD"
    },
    {
        id: 2109,
        titleAr: "إدارة الأعمال (Micro MBA)",
        titleEn: "Business Administration",
        desc: "كورس مصغر وشامل في إدارة الأعمال.",
        cat: "Business",
        subCat: "Management",
        date: dateMorning,
        img: "https://placehold.co/600x400/4f46e5/ffffff?text=Micro+MBA",
        url: "https://www.udemy.com/course/micro-mba-in-business-administration/?couponCode=6FCF8E652AB0D297B755"
    },
    {
        id: 2110,
        titleAr: "تحضير مقابلة سكروم ماستر (Scrum Master)",
        titleEn: "Free Scrum Tutorial - Scrum Master Interview Prep",
        desc: "أسئلة وسيناريوهات واستراتيجيات لمقابلة العمل.",
        cat: "Business",
        subCat: "Management",
        date: dateMorning,
        img: "https://placehold.co/600x400/ef4444/ffffff?text=Scrum+Prep",
        url: "https://www.udemy.com/course/how-to-prepare-for-scrum-master-interviews/"
    },
    {
        id: 2111,
        titleAr: "تعلم 100 مفهوم في C# في 100 دقيقة",
        titleEn: "Free C# Tutorial - 100 C# Concepts in 100 Minutes",
        desc: "مراجعة سريعة ومكثفة لمفاهيم لغة السي شارب.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateMorning,
        img: "https://placehold.co/600x400/6f42c1/ffffff?text=C%23+Concepts",
        url: "https://www.udemy.com/course/100-csharp-concepts-in-100-minutes/"
    },

    // --- 🔵 الكورسات الموجودة مسبقاً (16 يناير - 07:00 م) 🔵 ---
    {
        id: 2001,
        titleAr: "مدير نجاح العملاء: استراتيجيات المبيعات",
        titleEn: "Customer Success Manager: Sales Driven Customer Success",
        desc: "كيف تتبنى استراتيجيات مبيعات للحفاظ على العملاء.",
        cat: "Business",
        subCat: "Sales",
        date: dateEvening,
        img: "https://placehold.co/600x400/10b981/ffffff?text=Customer+Success",
        url: "https://www.udemy.com/course/csm-adopt-proven-sales-strategies-for-retention-and-growth/?couponCode=D70398DE886B4B153DFC"
    },
    {
        id: 2002,
        titleAr: "تدريب شهادة CompTIA Security+ Plus 2026",
        titleEn: "CompTIA Security+ Plus Certification Training Course 2026",
        desc: "الدليل الشامل لاجتياز اختبار Security+.",
        cat: "IT & Software",
        subCat: "IT Certifications",
        date: dateEvening,
        img: "https://placehold.co/600x400/dc2626/ffffff?text=CompTIA+Sec%2B",
        url: "https://www.udemy.com/course/the-ultimate-guide-for-comptia-security-plus-exam/?couponCode=CYVFREE0126"
    },
    {
        id: 2003,
        titleAr: "فن التأثير في سلسلة التوريد",
        titleEn: "The Art of Influence in Supply Chain",
        desc: "مهارات التأثير والقيادة في مجال الإمداد.",
        cat: "Business",
        subCat: "Management",
        date: dateEvening,
        img: "https://placehold.co/600x400/6366f1/ffffff?text=Supply+Chain",
        url: "https://www.udemy.com/course/the-art-of-influence-in-supply-chain/?couponCode=D65E11579186610DEB4D"
    },
    {
        id: 2004,
        titleAr: "تحليل البيانات وتصويرها بـ Excel (إدارة)",
        titleEn: "Excel Data Analysis Visualization with Management Technique",
        desc: "تقنيات إدارية لتحليل البيانات بالإكسل.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateEvening,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Analysis",
        url: "https://www.udemy.com/course/microsoft-excel-data-visualization-with-management-technique/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 2005,
        titleAr: "أساسيات YAML الكاملة",
        titleEn: "YAML Fundamentals Compete Course",
        desc: "تعلم لغة YAML المستخدمة في الـ DevOps.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateEvening,
        img: "https://placehold.co/600x400/000000/ffffff?text=YAML",
        url: "https://www.udemy.com/course/yaml-fundamentals-compete-course/?couponCode=B79D6FC468C5C31CE842"
    },
    {
        id: 2006,
        titleAr: "احتراف C#: بناء الألعاب والتطبيقات",
        titleEn: "Mastering C# Learn Building Games, Application, Softwares",
        desc: "تعلم لغة C# لبناء البرامج والألعاب.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateEvening,
        img: "https://placehold.co/600x400/6f42c1/ffffff?text=C%23",
        url: "https://www.udemy.com/course/mastering-c-learn-building-games-application-softwares/?couponCode=5998B043FC00530F88AC"
    },
    {
        id: 2007,
        titleAr: "ماستر كلاس فوتوشوب CC: من الأساسي للمتقدم + AI",
        titleEn: "Ultimate Adobe Photoshop CC Mastery Class: Basic to Pro + AI",
        desc: "احتراف الفوتوشوب وأدوات الذكاء الاصطناعي.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateEvening,
        img: "https://placehold.co/600x400/0284c7/ffffff?text=Photoshop+AI",
        url: "https://www.udemy.com/course/the-ultimate-adobe-photoshop-fundamental-course/?couponCode=EB08FF17C906AACFA25C"
    },
    {
        id: 2008,
        titleAr: "التداول الآلي على MT5",
        titleEn: "Automated trading on MT5. Step by step",
        desc: "كيفية برمجة روبوتات التداول.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateEvening,
        img: "https://placehold.co/600x400/10b981/ffffff?text=Auto+Trading",
        url: "https://www.udemy.com/course/automated-trading-on-mt5-step-by-step/?couponCode=2BFF881B64E7DAF69F8B"
    },
    {
        id: 2009,
        titleAr: "الواقع المعزز (AR) بعمق 101",
        titleEn: "Augmented Reality in Depth 101",
        desc: "مقدمة شاملة لتقنية الواقع المعزز.",
        cat: "IT & Software",
        subCat: "Other IT & Software",
        date: dateEvening,
        img: "https://placehold.co/600x400/8b5cf6/ffffff?text=Augmented+Reality",
        url: "https://www.udemy.com/course/augmented-reality-in-depth-101-by-debayandey-thnewagetraveller/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 2010,
        titleAr: "تطوير الويب الحديث: JS, jQuery & TS",
        titleEn: "Modern Web Development with JavaScript, jQuery & TypeScript",
        desc: "تعلم تقنيات الويب الحديثة.",
        cat: "Development",
        subCat: "Web Development",
        date: dateEvening,
        img: "https://placehold.co/600x400/3178c6/ffffff?text=Modern+Web",
        url: "https://www.udemy.com/course/modern-web-development-with-javascript-jquery-typescript/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 2011,
        titleAr: "بايثون لعلوم البيانات (سهل)",
        titleEn: "Python Data Science and Machine Learning Made Easy",
        desc: "شرح مبسط لعلوم البيانات ببايثون.",
        cat: "Development",
        subCat: "Data Science",
        date: dateEvening,
        img: "https://placehold.co/600x400/3776ab/ffffff?text=Python+Data",
        url: "https://www.udemy.com/course/python-data-science-and-machine-learning-made-easy/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 2012,
        titleAr: "استراتيجية التداول بالانحراف (Divergence)",
        titleEn: "Divergence Forex Trading Strategy",
        desc: "استراتيجية قوية لتداول الفوركس.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateEvening,
        img: "https://placehold.co/600x400/0ea5e9/ffffff?text=Forex+Strategy",
        url: "https://www.udemy.com/course/divergence-bomber/?couponCode=E9FD82E112629CF1ADF9"
    },
    {
        id: 2013,
        titleAr: "فوتوشوب وإليستريتور: كورس 2 في 1",
        titleEn: "Photoshop and Illustrator 2 in 1 Master Course",
        desc: "تعلم أساسيات التصميم بالبرنامجين.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateEvening,
        img: "https://placehold.co/600x400/db2777/ffffff?text=Ps+Ai",
        url: "https://www.udemy.com/course/designs-photoshop-adobe-illustrator-cc/?couponCode=7C65A94C3D7D029C8280"
    },
    {
        id: 2014,
        titleAr: "كورس إكسل الكامل: من المبتدئ للخبير",
        titleEn: "The Complete Microsoft Excel Course: Beginner to Expert",
        desc: "احتراف الإكسل من الصفر.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateEvening,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Expert",
        url: "https://www.udemy.com/course/the-complete-microsoft-excel-course-beginner-to-expert/?couponCode=9889743C53F134176A11"
    },
    {
        id: 2015,
        titleAr: "إتقان البرمجة بـ C و C++",
        titleEn: "Master Programming with C and C++: From Beginner to Advanced",
        desc: "دليل شامل لاحتراف لغتي C و C++.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateEvening,
        img: "https://placehold.co/600x400/00599c/ffffff?text=C%2B%2B",
        url: "https://www.udemy.com/course/master-programming-with-c-and-c-from-beginner-to-advanced/?couponCode=59D3B3A44BA5F9FA13C7"
    },
    {
        id: 2016,
        titleAr: "برمجة بايثون: بناء أساس قوي",
        titleEn: "Python Programming: Build a Strong Foundation in Coding",
        desc: "تأسيس قوي في البرمجة.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateEvening,
        img: "https://placehold.co/600x400/3776ab/ffffff?text=Python+Code",
        url: "https://www.udemy.com/course/python-programming-build-a-strong-foundation-in-coding/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 2017,
        titleAr: "كاب كات للتصوير السينمائي والموشن",
        titleEn: "CapCut for Cinematography Motion Graphics and Social Media",
        desc: "مونتاج احترافي ببرنامج CapCut.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateEvening,
        img: "https://placehold.co/600x400/000000/ffffff?text=CapCut",
        url: "https://www.udemy.com/course/capcut-for-cinematography-motion-graphics-and-social-media/?couponCode=19A3D756D526970FFC37"
    },
    {
        id: 2018,
        titleAr: "ماستر كلاس فوتوشوب CC الشامل",
        titleEn: "Ultimate Adobe Photoshop CC Masterclass Basics To Advanced",
        desc: "تعلم كل أدوات الفوتوشوب.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateEvening,
        img: "https://placehold.co/600x400/0284c7/ffffff?text=Photoshop+Master",
        url: "https://www.udemy.com/course/ultimate-adobe-photoshop-cc-masterclass-basics-to-advanced/?couponCode=9A46E31D6B7B4035151A"
    },
    {
        id: 2019,
        titleAr: "كورس فوتوشوب السريع (ساعتين)",
        titleEn: "Adobe Photoshop CC Crash Course Learn Photoshop In Two Hour",
        desc: "تعلم الأساسيات في وقت قياسي.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateEvening,
        img: "https://placehold.co/600x400/0369a1/ffffff?text=Ps+Crash",
        url: "https://www.udemy.com/course/essential-adobe-photoshop-free-photoshop-crash-course/?couponCode=819EB9E61BD616F919A6"
    },
    {
        id: 2020,
        titleAr: "ماستر كلاس UI/UX بـ Adobe XD",
        titleEn: "UI/UX Design Masterclass with Adobe XD",
        desc: "تصميم واجهات المستخدم باحترافية.",
        cat: "Design",
        subCat: "User Experience Design",
        date: dateEvening,
        img: "https://placehold.co/600x400/ff00ff/ffffff?text=Adobe+XD",
        url: "https://www.udemy.com/course/uiux-design-masterclass-with-adobe-xd-from-beginner-to-pro/?couponCode=03C0E3D9CFD814DEBD60"
    },
    {
        id: 2021,
        titleAr: "معسكر كاب كات للمونتاج",
        titleEn: "CapCut Video Editing Bootcamp",
        desc: "دليل صناع المحتوى للمونتاج.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateEvening,
        img: "https://placehold.co/600x400/000000/ffffff?text=CapCut+Bootcamp",
        url: "https://www.udemy.com/course/capcut-video-editing-bootcamp-for-social-media-and-creators/?couponCode=BB8A1C9B9299620503DD"
    },
    {
        id: 2022,
        titleAr: "بريمير برو المتقدم: مؤثرات هوليود",
        titleEn: "Advanced Adobe Premiere Pro Add Hollywood-level Effects",
        desc: "صناعة خدع سينمائية.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateEvening,
        img: "https://placehold.co/600x400/9999ff/ffffff?text=Premiere+Pro",
        url: "https://www.udemy.com/course/advanced-adobe-premiere-pro-add-hollywood-level-effects/?couponCode=F3D7C71A6B4AF79133EB"
    },
    {
        id: 2023,
        titleAr: "تعلم تصميم UI/UX (Adobe XD)",
        titleEn: "Learn UI UX Design Adobe XD",
        desc: "أساسيات تجربة المستخدم.",
        cat: "Design",
        subCat: "User Experience Design",
        date: dateEvening,
        img: "https://placehold.co/600x400/ff00ff/ffffff?text=UI+UX",
        url: "https://www.udemy.com/course/learn-ui-ux-design-adobe-xd-figma-uiuxdesign/?couponCode=98FAA3254E2451E1C741"
    },
    {
        id: 2024,
        titleAr: "احتراف مشاريع إليستريتور",
        titleEn: "Mastering Adobe Illustrator Projects",
        desc: "بناء معرض أعمال قوي.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateEvening,
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Illustrator",
        url: "https://www.udemy.com/course/mastering-adobe-illustrator-projects-build-your-portfolio/?couponCode=E8C615646E5A74459668"
    },
    {
        id: 2025,
        titleAr: "احتراف فيلمورا: مونتاج وتلوين",
        titleEn: "Master Filmora: Editing, Motion Graphics, and Color Grading",
        desc: "تعلم كل شيء في Filmora.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateEvening,
        img: "https://placehold.co/600x400/14b8a6/ffffff?text=Filmora",
        url: "https://www.udemy.com/course/master-filmora-editing-motion-graphics-and-color-grading/?couponCode=F4810DA18E0DD146377A"
    },
    {
        id: 2026,
        titleAr: "كورس CSS و JavaScript الكامل",
        titleEn: "CSS And JavaScript Complete Course For Beginners",
        desc: "برمجة وتصميم الويب.",
        cat: "Development",
        subCat: "Web Development",
        date: dateEvening,
        img: "https://placehold.co/600x400/e34f26/ffffff?text=CSS+JS",
        url: "https://www.udemy.com/course/css-and-javascript-complete-course-for-beginners/?couponCode=5AEB9F099562F6865D15"
    },
    {
        id: 2027,
        titleAr: "أساسيات الذكاء الاصطناعي",
        titleEn: "AI Essentials: Introduction to Artificial Intelligence",
        desc: "مقدمة شاملة في AI.",
        cat: "Development",
        subCat: "Data Science",
        date: dateEvening,
        img: "https://placehold.co/600x400/2563eb/ffffff?text=AI+Essentials",
        url: "https://www.udemy.com/course/ai-essentials-introduction-to-artificial-intelligence/?couponCode=25E9985D705950A67D7B"
    },
    {
        id: 2028,
        titleAr: "تصميم تطبيقات الموبايل بـ Figma",
        titleEn: "Mobile App Design in Figma",
        desc: "من الفكرة للنموذج الأولي.",
        cat: "Design",
        subCat: "User Experience Design",
        date: dateEvening,
        img: "https://placehold.co/600x400/f24e1e/ffffff?text=Mobile+App",
        url: "https://www.udemy.com/course/mobile-app-design-in-figma-from-concept-to-prototype/?couponCode=15JANUARY2026"
    },
    {
        id: 2029,
        titleAr: "احتراف مايكروسوفت وورد",
        titleEn: "Mastering Microsoft Word",
        desc: "دليل شامل لبرنامج Word.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateEvening,
        img: "https://placehold.co/600x400/2563eb/ffffff?text=Word",
        url: "https://www.udemy.com/course/mastering-microsoft-word-a-comprehensive-guide-to-boost-you/?couponCode=4927C33BA0E4DAC9879F"
    },
    {
        id: 2030,
        titleAr: "احتراف AWS Serverless",
        titleEn: "Mastering AWS Serverless",
        desc: "تطبيقات عملية على خدمات AWS.",
        cat: "IT & Software",
        subCat: "Network & Security",
        date: dateEvening,
        img: "https://placehold.co/600x400/f59e0b/ffffff?text=AWS",
        url: "https://www.udemy.com/course/mastering-aws-serverless-hands-on-with-core-aws-services/?couponCode=15JANUARY2026"
    },
    {
        id: 2031,
        titleAr: "التسويق عبر البريد الإلكتروني بالذكاء الاصطناعي",
        titleEn: "AI-Powered Email Marketing",
        desc: "استخدام AI في حملات البريد.",
        cat: "Marketing",
        subCat: "Digital Marketing",
        date: dateEvening,
        img: "https://placehold.co/600x400/d946ef/ffffff?text=Email+Mkt",
        url: "https://www.udemy.com/course/ai-powered-email-marketing-a-complete-guide/?couponCode=15JANUARY2026"
    },
    {
        id: 2032,
        titleAr: "الاستثمار وتداول الخيارات (Options)",
        titleEn: "Investing & Options: From Basics to Mastery",
        desc: "دليل شامل للاستثمار.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateEvening,
        img: "https://placehold.co/600x400/10b981/ffffff?text=Investing",
        url: "https://www.udemy.com/course/investing-options-from-basics-to-mastery/?couponCode=15JANUARY2026"
    },
    {
        id: 2033,
        titleAr: "أطلق العنان لقوة إكسل",
        titleEn: "Unlock Excel's Power: Essential MS Excel Skills",
        desc: "مهارات أساسية للنجاح.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateEvening,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Power",
        url: "https://www.udemy.com/course/unlock-excels-power-essential-ms-excel-skills-for-success/?couponCode=176D679072855C23FBE7"
    },
    {
        id: 2034,
        titleAr: "كورس الأوفيس وتطوير الويب",
        titleEn: "Complete MS Office and Web Design Development Course",
        desc: "دمج مهارات المكتب والويب.",
        cat: "Development",
        subCat: "Web Development",
        date: dateEvening,
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Office+Web",
        url: "https://www.udemy.com/course/complete-ms-office-and-web-design-development-course/?couponCode=B20DC7AFD7A543240237"
    },
    {
        id: 2035,
        titleAr: "Webflow للمبتدئين",
        titleEn: "Webflow for Beginners",
        desc: "إنشاء موقعك الأول بدون كود.",
        cat: "Design",
        subCat: "Web Development",
        date: dateEvening,
        img: "https://placehold.co/600x400/3b82f6/ffffff?text=Webflow",
        url: "https://www.udemy.com/course/webflow-for-beginners-create-your-first-website/?couponCode=635786F33F32698E77E1"
    },
    {
        id: 2036,
        titleAr: "تعلم PHP و MySQL",
        titleEn: "Learn PHP and MySQL for Web Application",
        desc: "تطوير تطبيقات الويب.",
        cat: "Development",
        subCat: "Web Development",
        date: dateEvening,
        img: "https://placehold.co/600x400/4f46e5/ffffff?text=PHP",
        url: "https://www.udemy.com/course/learn-php-and-mysql-for-web-application-and-web-development/?couponCode=EC1A5E1C17DE357670F5"
    },
    {
        id: 2037,
        titleAr: "كورس ووردبريس للمحترفين",
        titleEn: "Advanced Wordpress Course for Professionals",
        desc: "تقنيات متقدمة في ووردبريس.",
        cat: "Development",
        subCat: "Web Development",
        date: dateEvening,
        img: "https://placehold.co/600x400/21759b/ffffff?text=WordPress",
        url: "https://www.udemy.com/course/advanced-wordpress-course-for-professionals/?couponCode=AE61258FCE1DB8EF0C9C"
    },
    {
        id: 2038,
        titleAr: "تدريب التعليق الصوتي",
        titleEn: "Voice-Over Artist Training",
        desc: "للكتب الصوتية والإعلانات.",
        cat: "Marketing",
        subCat: "Branding",
        date: dateEvening,
        img: "https://placehold.co/600x400/ef4444/ffffff?text=Voice+Over",
        url: "https://www.udemy.com/course/voice-over-artist-training-for-audiobook-courses-and-promos/?couponCode=7ED96BE034FAD62C6138"
    },
    {
        id: 2039,
        titleAr: "هندسة الأوامر: تطبيقات أندرويد بـ Gemini",
        titleEn: "Prompt Engineering: Android Apps with Gemini AI",
        desc: "برمجة بالتلقين.",
        cat: "Development",
        subCat: "Mobile Development",
        date: dateEvening,
        img: "https://placehold.co/600x400/8b5cf6/ffffff?text=Gemini+App",
        url: "https://www.udemy.com/course/prompt-engineering-crear-apps-android-con-ia-gemini/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 2040,
        titleAr: "تحليل البيانات بـ Python (NumPy, Pandas)",
        titleEn: "NumPy, Pandas, & Python for Data Analysis",
        desc: "دليل كامل للمكتبات.",
        cat: "Development",
        subCat: "Data Science",
        date: dateEvening,
        img: "https://placehold.co/600x400/3776ab/ffffff?text=Pandas",
        url: "https://www.udemy.com/course/numpy-pandas-python-for-data-analysis-a-complete-guide/?couponCode=4427876060BE504982D9"
    },
    {
        id: 2041,
        titleAr: "برمجة شاملة (HTML, Java, JS)",
        titleEn: "HTML, CSS, Java, & JavaScript: Full Stack",
        desc: "كورس مكثف.",
        cat: "Development",
        subCat: "Web Development",
        date: dateEvening,
        img: "https://placehold.co/600x400/e34f26/ffffff?text=Full+Stack",
        url: "https://www.udemy.com/course/html-css-java-javascript-full-stack-programming-course/?couponCode=F053F20F0E5AA6E2D4DC"
    },
    {
        id: 2042,
        titleAr: "معالجة البيانات بـ Kafka و Google Cloud",
        titleEn: "Streaming data pipeline using Confluent Kafka",
        desc: "هندسة البيانات.",
        cat: "Development",
        subCat: "Data Science",
        date: dateEvening,
        img: "https://placehold.co/600x400/4285f4/ffffff?text=Kafka",
        url: "https://www.udemy.com/course/streaming-data-pipeline-using-confluent-kafka-google-cloud/?couponCode=25BBPMXINACTIVE"
    }
];

// تصدير البيانات
window.udemyData = udemyCourses;
window.udemyCategories = udemyCategories;