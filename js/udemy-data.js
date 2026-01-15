/* Path: js/udemy-data.js */
// تحديث: 16 يناير 2026 - دفعة اليوم فقط

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

// التاريخ والوقت الحالي
const dateStr = "الخميس 16 يناير 2026 | 27 رجب 1447 - 02:00 م";

// 2. قائمة الكورسات (41 كورس)
const udemyCourses = [
    {
        id: 1801,
        titleAr: "أطلق العنان لقوة إكسل: المهارات الأساسية للنجاح",
        titleEn: "Unlock Excel's Power: Essential MS Excel Skills for Success",
        desc: "مهارات الإكسل الأساسية لزيادة الإنتاجية في العمل.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateStr,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Power",
        url: "https://www.udemy.com/course/unlock-excels-power-essential-ms-excel-skills-for-success/?couponCode=176D679072855C23FBE7"
    },
    {
        id: 1802,
        titleAr: "كورس مايكروسوفت أوفيس وتصميم الويب الشامل",
        titleEn: "Complete MS Office and Web Design Development Course",
        desc: "تعلم الأوفيس وتطوير المواقع في كورس واحد.",
        cat: "Development",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Office+Web",
        url: "https://www.udemy.com/course/complete-ms-office-and-web-design-development-course/?couponCode=B20DC7AFD7A543240237"
    },
    {
        id: 1803,
        titleAr: "Webflow للمبتدئين: أنشئ موقعك الأول",
        titleEn: "Webflow for Beginners: Create Your First Website",
        desc: "تصميم مواقع احترافية بدون كود باستخدام Webflow.",
        cat: "Design",
        subCat: "Web Design",
        date: dateStr,
        img: "https://placehold.co/600x400/3b82f6/ffffff?text=Webflow",
        url: "https://www.udemy.com/course/webflow-for-beginners-create-your-first-website/?couponCode=635786F33F32698E77E1"
    },
    {
        id: 1804,
        titleAr: "تعلم PHP و MySQL لتطبيقات الويب",
        titleEn: "Learn PHP and MySQL for Web Application and Web Development",
        desc: "بناء تطبيقات ويب ديناميكية باستخدام PHP وقواعد البيانات.",
        cat: "Development",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/4f46e5/ffffff?text=PHP+MySQL",
        url: "https://www.udemy.com/course/learn-php-and-mysql-for-web-application-and-web-development/?couponCode=EC1A5E1C17DE357670F5"
    },
    {
        id: 1805,
        titleAr: "كورس ووردبريس المتقدم للمحترفين",
        titleEn: "Advanced Wordpress Course for Professionals",
        desc: "تقنيات متقدمة في إدارة وتطوير مواقع الووردبريس.",
        cat: "Development",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/21759b/ffffff?text=Advanced+WP",
        url: "https://www.udemy.com/course/advanced-wordpress-course-for-professionals/?couponCode=AE61258FCE1DB8EF0C9C"
    },
    {
        id: 1806,
        titleAr: "تدريب التعليق الصوتي للكتب والإعلانات",
        titleEn: "Voice-Over Artist Training for Audiobook, Courses and Promos",
        desc: "كيف تصبح معلق صوتي محترف.",
        cat: "Marketing",
        subCat: "Branding",
        date: dateStr,
        img: "https://placehold.co/600x400/ef4444/ffffff?text=Voice+Over",
        url: "https://www.udemy.com/course/voice-over-artist-training-for-audiobook-courses-and-promos/?couponCode=7ED96BE034FAD62C6138"
    },
    {
        id: 1807,
        titleAr: "هندسة الأوامر: إنشاء تطبيقات أندرويد بـ Gemini",
        titleEn: "Prompt Engineering: Crea Apps Android 100% con Gemini IA",
        desc: "استخدام الذكاء الاصطناعي لبرمجة تطبيقات الموبايل.",
        cat: "Development",
        subCat: "Mobile Development",
        date: dateStr,
        img: "https://placehold.co/600x400/8b5cf6/ffffff?text=Gemini+Android",
        url: "https://www.udemy.com/course/prompt-engineering-crear-apps-android-con-ia-gemini/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 1808,
        titleAr: "بايثون لتحليل البيانات: NumPy و Pandas",
        titleEn: "NumPy, Pandas, & Python for Data Analysis: A Complete Guide",
        desc: "دليل شامل لمكتبات تحليل البيانات في بايثون.",
        cat: "Development",
        subCat: "Data Science",
        date: dateStr,
        img: "https://placehold.co/600x400/3776ab/ffffff?text=Data+Analysis",
        url: "https://www.udemy.com/course/numpy-pandas-python-for-data-analysis-a-complete-guide/?couponCode=4427876060BE504982D9"
    },
    {
        id: 1809,
        titleAr: "برمجة شاملة: HTML, CSS, Java, JS",
        titleEn: "HTML, CSS, Java, & JavaScript: Full Stack Programming Course",
        desc: "كورس مكثف لتعلم لغات البرمجة الأساسية للويب.",
        cat: "Development",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/e34f26/ffffff?text=Full+Stack",
        url: "https://www.udemy.com/course/html-css-java-javascript-full-stack-programming-course/?couponCode=F053F20F0E5AA6E2D4DC"
    },
    {
        id: 1810,
        titleAr: "خط أنابيب البيانات باستخدام Kafka و Google Cloud",
        titleEn: "Streaming data pipeline using Confluent Kafka & Google Cloud",
        desc: "بناء أنظمة معالجة البيانات اللحظية.",
        cat: "Development",
        subCat: "Data Science",
        date: dateStr,
        img: "https://placehold.co/600x400/4285f4/ffffff?text=Kafka+GCP",
        url: "https://www.udemy.com/course/streaming-data-pipeline-using-confluent-kafka-google-cloud/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 1811,
        titleAr: "التداول الآلي على MT5 خطوة بخطوة",
        titleEn: "Automated trading on MT5. Step by step",
        desc: "كيفية برمجة بوتات التداول الآلي.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateStr,
        img: "https://placehold.co/600x400/10b981/ffffff?text=Auto+Trading",
        url: "https://www.udemy.com/course/automated-trading-on-mt5-step-by-step/?couponCode=2BFF881B64E7DAF69F8B"
    },
    {
        id: 1812,
        titleAr: "كورس جافا الشامل: تدريب عملي",
        titleEn: "The Ultimate Java Programming Course: Hands-On Training",
        desc: "تعلم لغة جافا من خلال المشاريع العملية.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/f89820/ffffff?text=Java+Training",
        url: "https://www.udemy.com/course/the-ultimate-java-programming-course-hands-on-training/?couponCode=7BF01D7F2F518FA83C1A"
    },
    {
        id: 1813,
        titleAr: "تداول الفوركس السريع (Scalping) على M15",
        titleEn: "Forex scalping on M15. Grabber Trading + software as a gift",
        desc: "استراتيجيات المضاربة السريعة في سوق العملات.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateStr,
        img: "https://placehold.co/600x400/14b8a6/ffffff?text=Forex+Scalping",
        url: "https://www.udemy.com/course/forex-scalping-on-m15-grabber-trading-software-as-a-gift/?couponCode=8B9F56FCAF6318A103C4"
    },
    {
        id: 1814,
        titleAr: "إتقان التسويق الرقمي 2.0",
        titleEn: "Digital Marketing Mastery 2.0",
        desc: "تحديث شامل لاستراتيجيات التسويق الرقمي.",
        cat: "Marketing",
        subCat: "Digital Marketing",
        date: dateStr,
        img: "https://placehold.co/600x400/d946ef/ffffff?text=Digital+Mkt",
        url: "https://www.udemy.com/course/digital-marketing-mastery-20/?couponCode=456F5D6FFF3AE7F2B5D8"
    },
    {
        id: 1815,
        titleAr: "اختراق الكوكب أخلاقياً (الجزء 4)",
        titleEn: "Ethically Hack the Planet Part 4",
        desc: "سلسلة متقدمة في الهكر الأخلاقي واختبار الاختراق.",
        cat: "IT & Software",
        subCat: "Network & Security",
        date: dateStr,
        img: "https://placehold.co/600x400/000000/ffffff?text=Ethical+Hacking",
        url: "https://www.udemy.com/course/ethically-hack-the-planet-part-4/?couponCode=919FE65352D3B5E5CA65"
    },
    {
        id: 1816,
        titleAr: "كورس مايكروسوفت إكسل الكامل",
        titleEn: "The Complete Microsoft Excel Course: Beginner to Expert",
        desc: "من المبتدئ للخبير في جداول البيانات.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateStr,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Complete",
        url: "https://www.udemy.com/course/the-complete-microsoft-excel-course-beginner-to-expert/?couponCode=9889743C53F134176A11"
    },
    {
        id: 1817,
        titleAr: "إتقان أفتر إفكتس (VFX وموشن جرافيك)",
        titleEn: "Adobe After Effects CC Mastery Course (VFX + Motion Design)",
        desc: "تعلم الخدع السينمائية والتحريك الاحترافي.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateStr,
        img: "https://placehold.co/600x400/9999ff/ffffff?text=After+Effects",
        url: "https://www.udemy.com/course/after-effects-mastery-course-master-vfx-motion-graphics/?couponCode=D16DC3CCE345B7537BE2"
    },
    {
        id: 1818,
        titleAr: "أساسيات التسويق الرقمي للمبتدئين",
        titleEn: "Digital Marketing Foundations for Beginners",
        desc: "مدخل قوي لعالم التسويق الإلكتروني.",
        cat: "Marketing",
        subCat: "Marketing Fundamentals",
        date: dateStr,
        img: "https://placehold.co/600x400/f43f5e/ffffff?text=Marketing+Basics",
        url: "https://www.udemy.com/course/digital-marketing-foundations-for-beginners/?couponCode=4D940FEC0044530F6225"
    },
    {
        id: 1819,
        titleAr: "استراتيجية التداول بالانحراف (Divergence)",
        titleEn: "Divergence Forex Trading Strategy + software as a gift",
        desc: "كيف تستخدم الدايفرجنس في تداول الفوركس.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateStr,
        img: "https://placehold.co/600x400/0ea5e9/ffffff?text=Forex+Divergence",
        url: "https://www.udemy.com/course/divergence-bomber/?couponCode=E9FD82E112629CF1ADF9"
    },
    {
        id: 1820,
        titleAr: "إتقان أدوبي إليستريتور CC + الذكاء الاصطناعي",
        titleEn: "The Adobe Illustrator CC Mastery Course: Basics to Pro + AI",
        desc: "تعلم الرسم المتجهي ودمج أدوات الـ AI.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Illustrator+AI",
        url: "https://www.udemy.com/course/the-adobe-illustrator-cc-mastery-course-basics-to-pro-ai/?couponCode=3331FFF54020E7AFE19D"
    },
    {
        id: 1821,
        titleAr: "اقتصاديات الوحدة وإدارة العملاء (CRM)",
        titleEn: "Unit Economics & CRM: LTV, Churn, Retention Rates, Cohorts",
        desc: "تحليل مؤشرات الأداء المالي للشركات الناشئة.",
        cat: "Business",
        subCat: "Business Strategy",
        date: dateStr,
        img: "https://placehold.co/600x400/6366f1/ffffff?text=Unit+Economics",
        url: "https://www.udemy.com/course/unit-economics-crm-ltv-churn-retention-rates-cohorts/?couponCode=BFDB735E127EF1B54CD6"
    },
    {
        id: 1822,
        titleAr: "التعرف على الوجوه باستخدام YOLOv7",
        titleEn: "Facial Recognition with YOLOv7 : Best Deep Learning Project",
        desc: "مشروع تعلم عميق للتعرف على الوجوه.",
        cat: "Development",
        subCat: "Data Science",
        date: dateStr,
        img: "https://placehold.co/600x400/2563eb/ffffff?text=Facial+Rec",
        url: "https://www.udemy.com/course/facial-recognition-using-yolov7-deep-learning-project/?couponCode=AA6AB358CE1464CB9105"
    },
    {
        id: 1823,
        titleAr: "احتراف فوتوشوب CC + الذكاء الاصطناعي",
        titleEn: "Ultimate Adobe Photoshop CC Mastery Class: Basic to Pro + AI",
        desc: "المرجع الكامل لتعلم الفوتوشوب وأدواته الذكية.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/0284c7/ffffff?text=Photoshop+AI",
        url: "https://www.udemy.com/course/the-ultimate-adobe-photoshop-fundamental-course/?couponCode=EB08FF17C906AACFA25C"
    },
    {
        id: 1824,
        titleAr: "دورة خبير تصميم الشعارات في إليستريتور",
        titleEn: "The Logo Design Expert Course in Adobe Illustrator CC",
        desc: "كيف تصمم شعارات عالمية ومبتكرة.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/ff9a00/ffffff?text=Logo+Expert",
        url: "https://www.udemy.com/course/the-logo-design-expert-course/?couponCode=153E5BC2924642A9C36C"
    },
    {
        id: 1825,
        titleAr: "مجموعة فيديوهات العقل (تأمل وتحفيز)",
        titleEn: "A Collection of Mind Videos/ Mind Movies",
        desc: "فيديوهات لتحسين الحالة الذهنية والتركيز.",
        cat: "Health & Fitness",
        subCat: "Mental Health",
        date: dateStr,
        img: "https://placehold.co/600x400/8b5cf6/ffffff?text=Mind+Movies",
        url: "https://www.udemy.com/course/a-collection-of-mind-videos-mind-movies/?couponCode=8CF459937235EFAE4633"
    },
    {
        id: 1826,
        titleAr: "فوتوشوب و Firefly للمبتدئين",
        titleEn: "Adobe Photoshop and Firefly 2 in 1 Mega Course for Newbies",
        desc: "دمج التصميم التقليدي مع التوليد بالذكاء الاصطناعي.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/ec4899/ffffff?text=Ps+Firefly",
        url: "https://www.udemy.com/course/gen-ai-artworks-photoshop-adobe-firefly/?couponCode=55225606C0DF97862976"
    },
    {
        id: 1827,
        titleAr: "تطوير الويب الحديث: JS, jQuery & TS",
        titleEn: "Modern Web Development with JavaScript, jQuery & TypeScript",
        desc: "تعلم تقنيات الويب الحديثة والتايب سكريبت.",
        cat: "Development",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/3178c6/ffffff?text=Modern+Web",
        url: "https://www.udemy.com/course/modern-web-development-with-javascript-jquery-typescript/?couponCode=32C5D677DCA053ADE654"
    },
    {
        id: 1828,
        titleAr: "بايثون لعلوم البيانات وتعلم الآلة (سهل)",
        titleEn: "Python Data Science and Machine Learning Made Easy",
        desc: "شرح مبسط لمفاهيم علوم البيانات المعقدة.",
        cat: "Development",
        subCat: "Data Science",
        date: dateStr,
        img: "https://placehold.co/600x400/10b981/ffffff?text=Easy+Data+Science",
        url: "https://www.udemy.com/course/python-data-science-and-machine-learning-made-easy/?couponCode=0D2715AE4BB35EFD9D4A"
    },
    {
        id: 1829,
        titleAr: "كانفا للتصميم الجرافيكي وتسويق السوشيال ميديا",
        titleEn: "Canva for Graphic Design & Social Media Marketing",
        desc: "كيف تصمم بوستات سوشيال ميديا جذابة بكانفا.",
        cat: "Design",
        subCat: "Design Tools",
        date: dateStr,
        img: "https://placehold.co/600x400/06b6d4/ffffff?text=Canva+Marketing",
        url: "https://www.udemy.com/course/canva-for-graphic-design-social-media-marketing/?couponCode=279666B693E186F51077"
    },
    {
        id: 1830,
        titleAr: "تحليل وتصوير البيانات بإكسل (إدارة)",
        titleEn: "Excel Data Analysis Visualization with Management Technique",
        desc: "تقنيات إدارية لتحليل البيانات بالإكسل.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateStr,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Mgmt",
        url: "https://www.udemy.com/course/microsoft-excel-data-analysis-visualization-with-management-technique/?couponCode=0E3A4FA1DA4D4DB66B35"
    },
    {
        id: 1831,
        titleAr: "فوتوشوب وإليستريتور: كورس 2 في 1",
        titleEn: "Photoshop and Illustrator 2 in 1 Master Course for Beginners",
        desc: "تعلم البرنامجين الأساسيين في التصميم الجرافيكي.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/db2777/ffffff?text=Ps+Ai",
        url: "https://www.udemy.com/course/designs-photoshop-adobe-illustrator-cc/?couponCode=7C65A94C3D7D029C8280"
    },
    {
        id: 1832,
        titleAr: "أساسيات بايثون وعلوم البيانات",
        titleEn: "Python Development & Data Science: Variables and Data Types",
        desc: "فهم المتغيرات وأنواع البيانات في بايثون.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/3776ab/ffffff?text=Python+Basics",
        url: "https://www.udemy.com/course/python-development-data-science-variables-and-data-types/?couponCode=249679D7676738B388A2"
    },
    {
        id: 1833,
        titleAr: "احتراف الفوركس: تحليل فني وأساسي",
        titleEn: "Forex Mastery: Technical & Fundamental Analysis Mega Course",
        desc: "كورس ضخم لتعلم كل شيء عن سوق الفوركس.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateStr,
        img: "https://placehold.co/600x400/14b8a6/ffffff?text=Forex+Mega",
        url: "https://www.udemy.com/course/forex-mastery-technical-fundamental-analysis-mega-course/?couponCode=F0603E95C2CC50FF03A1"
    },
    {
        id: 1834,
        titleAr: "إليستريتور وأفتر إفكتس: كورس 2 في 1",
        titleEn: "Adobe Illustrator & After Effects 2 in 1 Course for Newbies",
        desc: "الدمج بين التصميم والتحريك للمبتدئين.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateStr,
        img: "https://placehold.co/600x400/6366f1/ffffff?text=Ai+Ae",
        url: "https://www.udemy.com/course/illustrator-adobe-after-effects-cc/?couponCode=AC480BA6183109FE1BEF"
    },
    {
        id: 1835,
        titleAr: "أساسيات أدوبي إليستريتور CC",
        titleEn: "The Ultimate Adobe Illustrator CC Fundamental Course",
        desc: "تعلم الأساسيات القوية للإليستريتور.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Illustrator+Fund",
        url: "https://www.udemy.com/course/course-adobe-illustrator-cc/?couponCode=9EE395CFFD2E990D382E"
    },
    {
        id: 1836,
        titleAr: "إليستريتور المتقدم: تصاميم احترافية",
        titleEn: "The Ultimate Adobe Illustrator CC Advanced Course",
        desc: "تقنيات متقدمة في التصميم باستخدام إليستريتور.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/c2410c/ffffff?text=Illustrator+Adv",
        url: "https://www.udemy.com/course/advanced-designs-in-adobe-illustrator-cc/?couponCode=FE5137F049D13CCE646C"
    },
    {
        id: 1837,
        titleAr: "إتقان C و C++: من الأساسي للمتقدم",
        titleEn: "Mastering C & C++ Programming: From Fundamentals to Advanced",
        desc: "تعلم لغتي C و C++ بعمق.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/00599c/ffffff?text=C+%26+C%2B%2B",
        url: "https://www.udemy.com/course/mastering-c-c-plus-programming-from-fundamentals-to-advanced/?couponCode=E869AD2F058C20A98B69"
    },
    {
        id: 1838,
        titleAr: "معسكر جافا الكامل: تعلم الكود",
        titleEn: "Complete Java Programming Bootcamp: Learn to Code in Java",
        desc: "تعلم لغة جافا من الصفر.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/f89820/ffffff?text=Java+Bootcamp",
        url: "https://www.udemy.com/course/complete-java-programming-bootcamp-learn-to-code-in-java/?couponCode=2BD2140D6707670C90ED"
    },
    {
        id: 1839,
        titleAr: "فوتوشوب المتقدم 2025 + AI",
        titleEn: "The Ultimate Adobe Photoshop CC Advanced Course - 2025 + AI",
        desc: "تقنيات الدمج المتقدمة وأدوات الذكاء الاصطناعي في فوتوشوب.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/0284c7/ffffff?text=Photoshop+Adv",
        url: "https://www.udemy.com/course/advanced-compositing-in-adobe-photoshop-cc/?couponCode=F0BBC9E9349F0DA26588"
    },
    {
        id: 1840,
        titleAr: "برمجة بايثون: بناء أساس قوي",
        titleEn: "Python Programming: Build a Strong Foundation in Coding",
        desc: "تأسيس قوي في البرمجة باستخدام بايثون.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/3776ab/ffffff?text=Python+Strong",
        url: "https://www.udemy.com/course/python-programming-build-a-strong-foundation-in-coding/?couponCode=63A2707F6F57995AFBE1"
    },
    {
        id: 1841,
        titleAr: "تقنيات فوتوشوب الأساسية",
        titleEn: "The Ultimate Adobe Photoshop CC Fundamental Course",
        desc: "تعلم الأدوات الأساسية للفوتوشوب.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/0369a1/ffffff?text=Photoshop+Fund",
        url: "https://www.udemy.com/course/fundamental-techniques-in-adobe-photoshop-cc/?couponCode=A63F75D92FEE7D4D69EE"
    },
    {
        id: 1842,
        titleAr: "التحليل الأساسي في تداول الفوركس",
        titleEn: "Complete Fundamental Analysis In Forex Trading Master Course",
        desc: "كيف تحلل الأخبار الاقتصادية وتأثيرها على العملات.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateStr,
        img: "https://placehold.co/600x400/10b981/ffffff?text=Forex+Fund",
        url: "https://www.udemy.com/course/complete-fundamental-analysis-master-course/?couponCode=FEEC912EB10C15150D66"
    }
];

// تصدير البيانات
window.udemyData = udemyCourses;
window.udemyCategories = udemyCategories;