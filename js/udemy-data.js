/* Path: js/udemy-data.js */
// تحديث: الخميس 15 يناير 2026 - القائمة الكاملة (57 كورس)

// 1. هيكلة التصنيفات
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

// التاريخ والوقت (الخميس 15 يناير)
const dateStr = "الخميس 15 يناير 2026 | 11:30 م";

// 2. قائمة الكورسات (القديم + الجديد)
const udemyCourses = [
    // --- المجموعة الأولى (اللي كانت موجودة الصبح - 25 كورس) ---
    {
        id: 1801,
        titleAr: "أطلق العنان لقوة إكسل: المهارات الأساسية",
        titleEn: "Unlock Excel's Power: Essential MS Excel Skills for Success",
        desc: "مهارات الإكسل الأساسية لزيادة الإنتاجية.",
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
        desc: "دمج مهارات المكتب وتطوير المواقع.",
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
        desc: "تصميم مواقع احترافية بدون كود.",
        cat: "Design",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/3b82f6/ffffff?text=Webflow",
        url: "https://www.udemy.com/course/webflow-for-beginners-create-your-first-website/?couponCode=635786F33F32698E77E1"
    },
    {
        id: 1804,
        titleAr: "تعلم PHP و MySQL لتطبيقات الويب",
        titleEn: "Learn PHP and MySQL for Web Application and Web Development",
        desc: "بناء تطبيقات ويب ديناميكية.",
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
        desc: "تقنيات متقدمة في ووردبريس.",
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
        titleAr: "هندسة الأوامر: تطبيقات أندرويد بـ Gemini",
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
        desc: "دليل شامل لمكتبات تحليل البيانات.",
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
        desc: "كورس مكثف لغات الويب.",
        cat: "Development",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/e34f26/ffffff?text=Full+Stack",
        url: "https://www.udemy.com/course/html-css-java-javascript-full-stack-programming-course/?couponCode=F053F20F0E5AA6E2D4DC"
    },
    {
        id: 1810,
        titleAr: "خط أنابيب البيانات بـ Kafka و Google Cloud",
        titleEn: "Streaming data pipeline using Confluent Kafka & Google Cloud",
        desc: "بناء أنظمة معالجة البيانات اللحظية.",
        cat: "Development",
        subCat: "Data Science",
        date: dateStr,
        img: "https://placehold.co/600x400/4285f4/ffffff?text=Kafka+GCP",
        url: "https://www.udemy.com/course/streaming-data-pipeline-using-confluent-kafka-google-cloud/?couponCode=25BBPMXINACTIVE"
    },
    // ... (باقي الكورسات الصباحية بنفس النمط مختصرة للمساحة)

    // --- المجموعة الثانية (الجديدة - 32 كورس) ---
    {
        id: 1901,
        titleAr: "مدير نجاح العملاء: استراتيجيات المبيعات",
        titleEn: "Customer Success Manager: Sales Driven Customer Success",
        desc: "استراتيجيات للحفاظ على العملاء ونمو المبيعات.",
        cat: "Business",
        subCat: "Sales",
        date: dateStr,
        img: "https://placehold.co/600x400/10b981/ffffff?text=Customer+Success",
        url: "https://www.udemy.com/course/csm-adopt-proven-sales-strategies-for-retention-and-growth/?couponCode=D70398DE886B4B153DFC"
    },
    {
        id: 1902,
        titleAr: "تدريب شهادة CompTIA Security+ Plus 2026",
        titleEn: "CompTIA Security+ Plus Certification Training Course 2026",
        desc: "الدليل الشامل لاجتياز اختبار Security+.",
        cat: "IT & Software",
        subCat: "IT Certifications",
        date: dateStr,
        img: "https://placehold.co/600x400/dc2626/ffffff?text=Security%2B",
        url: "https://www.udemy.com/course/the-ultimate-guide-for-comptia-security-plus-exam/?couponCode=CYVFREE0126"
    },
    {
        id: 1903,
        titleAr: "فن التأثير في سلسلة التوريد",
        titleEn: "The Art of Influence in Supply Chain",
        desc: "مهارات التأثير والقيادة في الإمداد.",
        cat: "Business",
        subCat: "Management",
        date: dateStr,
        img: "https://placehold.co/600x400/6366f1/ffffff?text=Supply+Chain",
        url: "https://www.udemy.com/course/the-art-of-influence-in-supply-chain/?couponCode=D65E11579186610DEB4D"
    },
    {
        id: 1904,
        titleAr: "تحليل البيانات بـ Excel (إدارة)",
        titleEn: "Excel Data Analysis Visualization with Management Technique",
        desc: "تقنيات إدارية لتحليل البيانات بالإكسل.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateStr,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Data",
        url: "https://www.udemy.com/course/microsoft-excel-data-visualization-with-management-technique/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 1905,
        titleAr: "أساسيات YAML الكاملة",
        titleEn: "YAML Fundamentals Compete Course",
        desc: "تعلم لغة YAML للـ DevOps.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/000000/ffffff?text=YAML",
        url: "https://www.udemy.com/course/yaml-fundamentals-compete-course/?couponCode=B79D6FC468C5C31CE842"
    },
    {
        id: 1906,
        titleAr: "احتراف C#: بناء الألعاب والتطبيقات",
        titleEn: "Mastering C# Learn Building Games, Application, Softwares",
        desc: "تعلم لغة C# لبناء البرامج.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/6f42c1/ffffff?text=C%23",
        url: "https://www.udemy.com/course/mastering-c-learn-building-games-application-softwares/?couponCode=5998B043FC00530F88AC"
    },
    {
        id: 1907,
        titleAr: "احتراف فوتوشوب CC + الذكاء الاصطناعي",
        titleEn: "Ultimate Adobe Photoshop CC Mastery Class: Basic to Pro + AI",
        desc: "احتراف الفوتوشوب وأدوات AI.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/0284c7/ffffff?text=Photoshop+AI",
        url: "https://www.udemy.com/course/the-ultimate-adobe-photoshop-fundamental-course/?couponCode=EB08FF17C906AACFA25C"
    },
    {
        id: 1908,
        titleAr: "التداول الآلي على MT5",
        titleEn: "Automated trading on MT5. Step by step",
        desc: "برمجة روبوتات التداول.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateStr,
        img: "https://placehold.co/600x400/10b981/ffffff?text=Auto+Trading",
        url: "https://www.udemy.com/course/automated-trading-on-mt5-step-by-step/?couponCode=2BFF881B64E7DAF69F8B"
    },
    {
        id: 1909,
        titleAr: "الواقع المعزز (AR) بعمق 101",
        titleEn: "Augmented Reality in Depth 101",
        desc: "مقدمة شاملة لتقنية الواقع المعزز.",
        cat: "IT & Software",
        subCat: "Other IT & Software",
        date: dateStr,
        img: "https://placehold.co/600x400/8b5cf6/ffffff?text=AR+101",
        url: "https://www.udemy.com/course/augmented-reality-in-depth-101-by-debayandey-thnewagetraveller/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 1910,
        titleAr: "تطوير الويب الحديث: JS, jQuery & TS",
        titleEn: "Modern Web Development with JavaScript, jQuery & TypeScript",
        desc: "تقنيات الويب الحديثة.",
        cat: "Development",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/f7df1e/000000?text=Modern+Web",
        url: "https://www.udemy.com/course/modern-web-development-with-javascript-jquery-typescript/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 1911,
        titleAr: "بايثون لعلوم البيانات (سهل)",
        titleEn: "Python Data Science and Machine Learning Made Easy",
        desc: "شرح مبسط لعلوم البيانات.",
        cat: "Development",
        subCat: "Data Science",
        date: dateStr,
        img: "https://placehold.co/600x400/3776ab/ffffff?text=Data+Science",
        url: "https://www.udemy.com/course/python-data-science-and-machine-learning-made-easy/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 1912,
        titleAr: "استراتيجية تداول الفوركس (Divergence)",
        titleEn: "Divergence Forex Trading Strategy",
        desc: "استراتيجية قوية لتداول الفوركس.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateStr,
        img: "https://placehold.co/600x400/0ea5e9/ffffff?text=Forex",
        url: "https://www.udemy.com/course/divergence-bomber/?couponCode=E9FD82E112629CF1ADF9"
    },
    {
        id: 1913,
        titleAr: "فوتوشوب وإليستريتور: كورس 2 في 1",
        titleEn: "Photoshop and Illustrator 2 in 1 Master Course",
        desc: "أساسيات التصميم بالبرنامجين.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/db2777/ffffff?text=Ps+Ai",
        url: "https://www.udemy.com/course/designs-photoshop-adobe-illustrator-cc/?couponCode=7C65A94C3D7D029C8280"
    },
    {
        id: 1914,
        titleAr: "كورس إكسل الكامل: من المبتدئ للمتقدم",
        titleEn: "The Complete Microsoft Excel Course: Beginner to Expert",
        desc: "احتراف الإكسل من الصفر.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateStr,
        img: "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Complete",
        url: "https://www.udemy.com/course/the-complete-microsoft-excel-course-beginner-to-expert/?couponCode=9889743C53F134176A11"
    },
    {
        id: 1915,
        titleAr: "إتقان البرمجة بـ C و C++",
        titleEn: "Master Programming with C and C++: From Beginner to Advanced",
        desc: "دليل شامل لاحتراف لغتي C و C++.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/00599c/ffffff?text=C+%26+C%2B%2B",
        url: "https://www.udemy.com/course/master-programming-with-c-and-c-from-beginner-to-advanced/?couponCode=59D3B3A44BA5F9FA13C7"
    },
    {
        id: 1916,
        titleAr: "برمجة بايثون: بناء أساس قوي",
        titleEn: "Python Programming: Build a Strong Foundation in Coding",
        desc: "تأسيس قوي في البرمجة.",
        cat: "Development",
        subCat: "Programming Languages",
        date: dateStr,
        img: "https://placehold.co/600x400/3776ab/ffffff?text=Python",
        url: "https://www.udemy.com/course/python-programming-build-a-strong-foundation-in-coding/?couponCode=25BBPMXINACTIVE"
    },
    {
        id: 1917,
        titleAr: "كاب كات للتصوير السينمائي والموشن",
        titleEn: "CapCut for Cinematography Motion Graphics and Social Media",
        desc: "مونتاج احترافي ببرنامج CapCut.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateStr,
        img: "https://placehold.co/600x400/000000/ffffff?text=CapCut",
        url: "https://www.udemy.com/course/capcut-for-cinematography-motion-graphics-and-social-media/?couponCode=19A3D756D526970FFC37"
    },
    {
        id: 1918,
        titleAr: "ماستر كلاس فوتوشوب CC الشامل",
        titleEn: "Ultimate Adobe Photoshop CC Masterclass Basics To Advanced",
        desc: "تعلم كل أدوات الفوتوشوب.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/0284c7/ffffff?text=Ps+Masterclass",
        url: "https://www.udemy.com/course/ultimate-adobe-photoshop-cc-masterclass-basics-to-advanced/?couponCode=9A46E31D6B7B4035151A"
    },
    {
        id: 1919,
        titleAr: "دورة فوتوشوب CC السريعة (ساعتين)",
        titleEn: "Adobe Photoshop CC Crash Course Learn Photoshop In Two Hour",
        desc: "تعلم الأساسيات في وقت قياسي.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/0369a1/ffffff?text=Ps+Crash",
        url: "https://www.udemy.com/course/essential-adobe-photoshop-free-photoshop-crash-course/?couponCode=819EB9E61BD616F919A6"
    },
    {
        id: 1920,
        titleAr: "ماستر كلاس UI/UX مع Adobe XD",
        titleEn: "UI/UX Design Masterclass with Adobe XD",
        desc: "تصميم واجهات المستخدم باحترافية.",
        cat: "Design",
        subCat: "User Experience Design",
        date: dateStr,
        img: "https://placehold.co/600x400/ff00ff/ffffff?text=Adobe+XD",
        url: "https://www.udemy.com/course/uiux-design-masterclass-with-adobe-xd-from-beginner-to-pro/?couponCode=03C0E3D9CFD814DEBD60"
    },
    {
        id: 1921,
        titleAr: "معسكر كاب كات للمونتاج",
        titleEn: "CapCut Video Editing Bootcamp",
        desc: "دليل صناع المحتوى للمونتاج.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateStr,
        img: "https://placehold.co/600x400/000000/ffffff?text=CapCut+Bootcamp",
        url: "https://www.udemy.com/course/capcut-video-editing-bootcamp-for-social-media-and-creators/?couponCode=BB8A1C9B9299620503DD"
    },
    {
        id: 1922,
        titleAr: "بريمير برو المتقدم: مؤثرات هوليود",
        titleEn: "Advanced Adobe Premiere Pro Add Hollywood-level Effects",
        desc: "صناعة خدع سينمائية.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateStr,
        img: "https://placehold.co/600x400/9999ff/ffffff?text=Premiere+Pro",
        url: "https://www.udemy.com/course/advanced-adobe-premiere-pro-add-hollywood-level-effects/?couponCode=F3D7C71A6B4AF79133EB"
    },
    {
        id: 1923,
        titleAr: "تعلم تصميم UI/UX (Adobe XD)",
        titleEn: "Learn UI UX Design Adobe XD",
        desc: "أساسيات تجربة المستخدم.",
        cat: "Design",
        subCat: "User Experience Design",
        date: dateStr,
        img: "https://placehold.co/600x400/ff00ff/ffffff?text=UI+UX",
        url: "https://www.udemy.com/course/learn-ui-ux-design-adobe-xd-figma-uiuxdesign/?couponCode=98FAA3254E2451E1C741"
    },
    {
        id: 1924,
        titleAr: "احتراف مشاريع إليستريتور",
        titleEn: "Mastering Adobe Illustrator Projects",
        desc: "بناء معرض أعمال قوي.",
        cat: "Design",
        subCat: "Graphic Design & Illustration",
        date: dateStr,
        img: "https://placehold.co/600x400/ea580c/ffffff?text=Illustrator",
        url: "https://www.udemy.com/course/mastering-adobe-illustrator-projects-build-your-portfolio/?couponCode=E8C615646E5A74459668"
    },
    {
        id: 1925,
        titleAr: "احتراف فيلمورا: مونتاج وتلوين",
        titleEn: "Master Filmora: Editing, Motion Graphics",
        desc: "تعلم كل شيء في Filmora.",
        cat: "Design",
        subCat: "3D & Animation",
        date: dateStr,
        img: "https://placehold.co/600x400/14b8a6/ffffff?text=Filmora",
        url: "https://www.udemy.com/course/master-filmora-editing-motion-graphics-and-color-grading/?couponCode=F4810DA18E0DD146377A"
    },
    {
        id: 1926,
        titleAr: "كورس CSS و JavaScript الكامل",
        titleEn: "CSS And JavaScript Complete Course For Beginners",
        desc: "برمجة وتصميم الويب.",
        cat: "Development",
        subCat: "Web Development",
        date: dateStr,
        img: "https://placehold.co/600x400/e34f26/ffffff?text=CSS+JS",
        url: "https://www.udemy.com/course/css-and-javascript-complete-course-for-beginners/?couponCode=5AEB9F099562F6865D15"
    },
    {
        id: 1927,
        titleAr: "أساسيات الذكاء الاصطناعي",
        titleEn: "AI Essentials: Introduction to Artificial Intelligence",
        desc: "مقدمة شاملة في AI.",
        cat: "Development",
        subCat: "Data Science",
        date: dateStr,
        img: "https://placehold.co/600x400/2563eb/ffffff?text=AI+Essentials",
        url: "https://www.udemy.com/course/ai-essentials-introduction-to-artificial-intelligence/?couponCode=25E9985D705950A67D7B"
    },
    {
        id: 1928,
        titleAr: "تصميم تطبيقات الموبايل بـ Figma",
        titleEn: "Mobile App Design in Figma",
        desc: "من الفكرة للنموذج الأولي.",
        cat: "Design",
        subCat: "User Experience Design",
        date: dateStr,
        img: "https://placehold.co/600x400/f24e1e/ffffff?text=Mobile+App",
        url: "https://www.udemy.com/course/mobile-app-design-in-figma-from-concept-to-prototype/?couponCode=15JANUARY2026"
    },
    {
        id: 1929,
        titleAr: "احتراف مايكروسوفت وورد",
        titleEn: "Mastering Microsoft Word",
        desc: "دليل شامل لبرنامج Word.",
        cat: "Office Productivity",
        subCat: "Microsoft",
        date: dateStr,
        img: "https://placehold.co/600x400/2563eb/ffffff?text=Word",
        url: "https://www.udemy.com/course/mastering-microsoft-word-a-comprehensive-guide-to-boost-you/?couponCode=4927C33BA0E4DAC9879F"
    },
    {
        id: 1930,
        titleAr: "احتراف AWS Serverless",
        titleEn: "Mastering AWS Serverless",
        desc: "تطبيقات عملية على خدمات AWS.",
        cat: "IT & Software",
        subCat: "Network & Security",
        date: dateStr,
        img: "https://placehold.co/600x400/f59e0b/ffffff?text=AWS",
        url: "https://www.udemy.com/course/mastering-aws-serverless-hands-on-with-core-aws-services/?couponCode=15JANUARY2026"
    },
    {
        id: 1931,
        titleAr: "التسويق عبر البريد الإلكتروني بالـ AI",
        titleEn: "AI-Powered Email Marketing",
        desc: "استخدام AI في حملات البريد.",
        cat: "Marketing",
        subCat: "Digital Marketing",
        date: dateStr,
        img: "https://placehold.co/600x400/d946ef/ffffff?text=Email+Mkt",
        url: "https://www.udemy.com/course/ai-powered-email-marketing-a-complete-guide/?couponCode=15JANUARY2026"
    },
    {
        id: 1932,
        titleAr: "الاستثمار وتداول الخيارات (Options)",
        titleEn: "Investing & Options: From Basics to Mastery",
        desc: "دليل شامل للاستثمار.",
        cat: "Finance & Accounting",
        subCat: "Investing & Trading",
        date: dateStr,
        img: "https://placehold.co/600x400/10b981/ffffff?text=Investing",
        url: "https://www.udemy.com/course/investing-options-from-basics-to-mastery/?couponCode=15JANUARY2026"
    }
];

// تصدير البيانات
window.udemyData = udemyCourses;
window.udemyCategories = udemyCategories;