/* المسار: js/script.js */

// --- 1. بيانات الكورسات (17 كورس) ---
const coursesData = [
    // --- المجموعة القديمة (1-12) ---
    { 
        id: 1, 
        titleAr: "الدبلومة التنفيذية في الإدارة الاستراتيجية", 
        titleEn: "Executive Diploma in Strategic Management", 
        desc: "تعلم كيفية صياغة وتنفيذ الاستراتيجيات لتحقيق أهداف المؤسسة.",
        cat: "business", 
        img: "images/c1.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/executive-diploma-in-strategic-management/?couponCode=83842AE81B2F0E833F60" 
    },
    { 
        id: 2, 
        titleAr: "شهادة محلل أعمال أجايل وسكرام", 
        titleEn: "Agile & Scrum Business Analyst", 
        desc: "احترف تحليل الأعمال باستخدام منهجيات الأجايل والسكرام.",
        cat: "business", 
        img: "images/c2.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/professional-certificate-of-agile-and-scrum-business-analyst/?couponCode=41AF3373F9BA222CAF3C" 
    },
    { 
        id: 3, 
        titleAr: "استراتيجيات التنافس والهيمنة على السوق", 
        titleEn: "Business Competitive Strategy Mastery", 
        desc: "كيف تتفوق على المنافسين وتسيطر على السوق باستراتيجيات ذكية.",
        cat: "marketing", 
        img: "images/c3.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/business-competitive-strategy-market-domination-mastery-course/?couponCode=0BBCB81E9BFC36CE5937" 
    },
    { 
        id: 4, 
        titleAr: "احتراف قيادة الفرق وإدارة الأفراد", 
        titleEn: "Mastering Team Leadership", 
        desc: "دليل شامل لإدارة الموظفين والفرق بفعالية وقيادة ناجحة.",
        cat: "business", 
        img: "images/c4.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/the-complete-team-management-facilitation-course/?couponCode=0EB7DE74BAE5A055D99B" 
    },
    { 
        id: 5, 
        titleAr: "شهادة احترافية في إدارة المكاتب", 
        titleEn: "Office Administration Management", 
        desc: "تعلم مهارات تنظيم وإدارة المكاتب والسكرتارية التنفيذية.",
        cat: "business", 
        img: "images/c5.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/professional-certificate-in-office-administration-management/?couponCode=52EE47C275DDC0DE922C" 
    },
    { 
        id: 6, 
        titleAr: "شهادة احترافية في المشتريات", 
        titleEn: "Procurement and Purchasing Cert", 
        desc: "كل ما تحتاج معرفته عن عمليات الشراء والتوريد في الشركات.",
        cat: "business", 
        img: "images/c6.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/professional-certificate-in-procurement-and-purchasing/?couponCode=5CD2B54C1DF16292D8B7" 
    },
    { 
        id: 7, 
        titleAr: "شهادة الأعمال الرقمية واقتصاديات الوحدة", 
        titleEn: "Digital Business & Unit Economics", 
        desc: "فهم الاقتصاديات الرقمية وكيفية حساب ربحية الوحدة الواحدة.",
        cat: "business", 
        img: "images/c7.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/professional-certificate-digital-business-unit-economics/?couponCode=22EDD603C8A2DA452FDA" 
    },
    { 
        id: 8, 
        titleAr: "الدبلومة التنفيذية في الإدارة الهندسية", 
        titleEn: "Engineering Management Diploma", 
        desc: "جسر الفجوة بين الهندسة والإدارة للمهندسين والمديرين التقنيين.",
        cat: "business", 
        img: "images/c8.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/executive-diploma-in-engineering-management/?couponCode=4D1084A244D7FC844628" 
    },
    { 
        id: 9, 
        titleAr: "دبلومة مدير التسويق وشريك الأعمال", 
        titleEn: "Marketing Manager Business Partner", 
        desc: "كيف تصبح مديراً للتسويق يساهم في نمو واستراتيجية الشركة.",
        cat: "marketing", 
        img: "images/c9.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/professional-diploma-of-marketing-manager-business-partner/?couponCode=D22906CF8D1AD4FB8838" 
    },
    { 
        id: 10, 
        titleAr: "احتراف Node.js: من المبتدئ للمحترف", 
        titleEn: "Master Node.js Full-Stack", 
        desc: "كورس شامل لتعلم تطوير الويب الخلفي (Back-end) باستخدام Node.js.",
        cat: "programming", 
        img: "images/c10.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/master-nodejs-from-beginner-to-full-stack-developer/?couponCode=0DB6950F827EDB5F2C29" 
    },
    { 
        id: 11, 
        titleAr: "أساسيات ريادة الأعمال", 
        titleEn: "Entrepreneurship Essentials", 
        desc: "الدليل الكامل لبدء مشروعك الخاص وفهم عالم البيزنس.",
        cat: "business", 
        img: "images/c11.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/entrepreneurship-and-business-essentials/?couponCode=B39C7298044F86249850" 
    },
    { 
        id: 12, 
        titleAr: "كورس CSS الكامل للمبتدئين", 
        titleEn: "CSS Complete Course", 
        desc: "تعلم تصميم وتنسيق صفحات الويب باستخدام CSS من الصفر.",
        cat: "programming", 
        img: "images/c12.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/css-complete-course-for-beginners/?couponCode=A3015B0CE9D90F1DE66C" 
    },
    
    // --- المجموعة الجديدة (13-17) ---
    { 
        id: 13, 
        titleAr: "من فيجما لأنجولار بالذكاء الاصطناعي", 
        titleEn: "Figma to Angular Mastery with AI", 
        desc: "حول تصميماتك لكود حقيقي باستخدام أدوات الذكاء الاصطناعي.",
        cat: "programming", 
        img: "images/c13.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/figma-to-angular-mastery-design-to-code-with-ai/?couponCode=FREE1234567890" 
    },
    { 
        id: 14, 
        titleAr: "تحكم في الأردوينو بالجافاسكريبت", 
        titleEn: "Control Arduino with JavaScript", 
        desc: "إطلاق العنان لقوة الجافاسكريبت للتحكم في الهاردوير والمتصفح.",
        cat: "programming", 
        img: "images/c14.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/arduino-control-your-browser-arduino-web-browser/?couponCode=24HFREE" 
    },
    { 
        id: 15, 
        titleAr: "احتراف Sora لصناعة الفيديو", 
        titleEn: "Master Sora AI Video Creation", 
        desc: "تعلم إنشاء فيديوهات احترافية وسريعة باستخدام Sora AI.",
        cat: "graphic", 
        img: "images/c15.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/sora-mastery-from-beginner-to-professional-hidden-gems/?couponCode=FREE1234567890" 
    },
    { 
        id: 16, 
        titleAr: "استراتيجيات الهيمنة على السوق", 
        titleEn: "Market Domination Strategy", 
        desc: "خطط واستراتيجيات متقدمة للسيطرة على السوق والمنافسة.",
        cat: "business", 
        img: "images/c16.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/business-competitive-strategy-market-domination-mastery-course/?couponCode=0BBCB81E9BFC36CE5937" 
    },
    { 
        id: 17, 
        titleAr: "علم الأحياء الدقيقة للجميع", 
        titleEn: "Microbiology for All", 
        desc: "فهم الخلايا، الفيروسات، المناعة والأمراض بشكل مبسط وشامل.",
        cat: "science", 
        img: "images/c17.jpg", 
        date: "30 Nov 2025",
        url: "https://www.udemy.com/course/microbiology-for-all-cells-viruses-immunity-diseases/?couponCode=AEFE6BBE0485B7A4906C" 
    }
];

// --- 2. بيانات المقالات ---
const articlesData = [
    { id: 1, title: "فكك من جو التنين المجنح", excerpt: "يا صاحبي، السوشيال ميديا هرتنا كلام عن إنك لازم تكون سوبر مان..", content: "...", img: "images/a1.jpg", cat: "development", date: "28 Nov 2025" },
    { id: 2, title: "الذكاء الاصطناعي والمستقبل", excerpt: "هل الـ AI هياخد مكاننا؟ تعال نشوف..", content: "...", img: "images/a2.jpg", cat: "tech", date: "2025/11/29" },
    { id: 3, title: "إزاي تبدأ فري لانس صح؟", excerpt: "خطوات عملية عشان تبدأ شغلك الحر من غير تشتت.", content: "...", img: "images/a3.jpg", cat: "freelance", date: "30 Nov 2025" },
    { id: 4, title: "أهمية البراندينج الشخصي", excerpt: "أنت براند ماشي على الأرض، استغل ده لصالحك.", content: "...", img: "images/a4.jpg", cat: "marketing", date: "01 Dec 2025" },
    { id: 5, title: "نصائح لتعلم الإنجليزية", excerpt: "بلاش تحفظ كلمات، احفظ جمل ومواقف.", content: "...", img: "images/a5.jpg", cat: "languages", date: "02 Dec 2025" }
];

// --- 3. تحميل الهيدر والفوتر ---
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
        grid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-500 font-bold">مفيش كورسات بالاسم ده يا درش 🤷‍♂️</div>`;
        if(loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }

    const visibleItems = filtered.slice(0, visibleCoursesCount);

    grid.innerHTML = visibleItems.map((c, index) => `
        <div class="glass-panel rounded-2xl overflow-hidden group hover:-translate-y-2 transition duration-300 flex flex-col fade-in bg-white/60" style="animation-delay: ${index * 50}ms">
            <div class="relative h-48 overflow-hidden">
                <img src="${c.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" onerror="this.src='https://placehold.co/600x400/10b981/FFF?text=Kameshkah+Course'">
                <div class="absolute top-2 right-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs text-emerald-800 font-bold shadow-sm">
                    ${getCatName(c.cat)}
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <div class="text-xs text-slate-500 mb-2 flex items-center gap-1 font-bold"><i data-lucide="calendar" class="w-3 h-3 text-emerald-500"></i> ${c.date}</div>
                <h3 class="text-xl font-bold mb-1 text-emerald-900">${c.titleAr}</h3>
                <h4 class="text-sm font-semibold text-slate-500 mb-3">${c.titleEn}</h4>
                <p class="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">${c.desc}</p>
                
                <div class="mt-auto flex gap-2">
                    <a href="${c.url}" target="_blank" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-center font-bold transition shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                         اشتراك <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                    <button onclick="shareContent('${c.titleAr}', '${c.url}')" class="bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 rounded-xl transition">
                        <i data-lucide="share-2" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();

    if (loadMoreBtn) {
        if (visibleCoursesCount >= filtered.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

function getCatName(cat) {
    const names = { 
        'graphic': 'جرافيك', 
        'programming': 'برمجة', 
        'accounting': 'محاسبة', 
        'languages': 'لغات', 
        'business': 'إدارة أعمال', 
        'marketing': 'تسويق',
        'science': 'علوم' // إضافة قسم العلوم
    };
    return names[cat] || cat;
}

// --- 5. منطق المقالات ---
let currentArticleCat = 'all';
let searchArticleText = '';

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
                    <span class="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-bold">${getArticleCatName(a.cat)}</span>
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

function getArticleCatName(cat) {
    const names = { 'development': 'تطوير ذات', 'tech': 'تكنولوجيا', 'freelance': 'عمل حر', 'marketing': 'تسويق', 'languages': 'لغات' };
    return names[cat] || cat;
}

// --- 6. Helper Functions ---
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
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-download').href = src;
    lb.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Gallery Logic
let visibleGalleryCount = 10;
const totalGalleryImages = 2000;
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more-gallery');
    if(!grid) return;
    let html = '';
    for(let i=1; i<=visibleGalleryCount && i<=totalGalleryImages; i++) {
        const height = [300, 400, 500][Math.floor(Math.random() * 3)]; 
        html += `<div class="glass-panel rounded-2xl overflow-hidden break-inside-avoid mb-6 group relative fade-in border-0 shadow-sm"><div class="relative cursor-pointer" onclick="openLightbox('images/${i}.jpg')"><img src="images/${i}.jpg" class="w-full h-auto object-cover" loading="lazy" onerror="this.src='https://placehold.co/400x${height}/dcfce7/065f46?text=Design+${i}'"><div class="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-3"><div class="bg-white text-emerald-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition shadow-xl"><i data-lucide="zoom-in" class="w-4 h-4"></i> تكبير</div></div></div><!-- زر المشاركة المضاف --><div class="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition duration-300 z-10" onclick="event.stopPropagation()"><button onclick="shareContent('تصميم رقم ${i} من كمشكاة', 'https://kameshkah.com/gallery?img=${i}')" class="bg-white hover:bg-emerald-50 text-emerald-800 p-2 rounded-full shadow-lg transition transform hover:scale-110"><i data-lucide="share-2" class="w-5 h-5"></i></button></div></div>`;
    }
    grid.innerHTML = html;
    lucide.createIcons();
    if (loadMoreBtn) {
        if (visibleGalleryCount >= totalGalleryImages) { loadMoreBtn.style.display = 'none'; } else { loadMoreBtn.style.display = 'inline-flex'; loadMoreBtn.innerHTML = `عرض المزيد (فاضل ${totalGalleryImages - visibleGalleryCount})`; }
    }
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) { window.requestAnimationFrame(step); }
    };
    window.requestAnimationFrame(step);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    
    if(document.getElementById('courses-grid')) {
        renderCourses();
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentCat = e.target.dataset.cat;
                visibleCoursesCount = 10;
                renderCourses();
            });
        });
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

    if(document.getElementById('articles-grid')) {
         renderArticles();
         document.querySelectorAll('.article-filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.article-filter-btn').forEach(b => b.classList.remove('active', 'bg-emerald-600', 'text-white'));
                e.target.classList.add('active', 'bg-emerald-600', 'text-white');
                currentArticleCat = e.target.dataset.cat;
                renderArticles();
            });
         });
         document.getElementById('article-search-input')?.addEventListener('keyup', (e) => {
            searchArticleText = e.target.value;
            renderArticles();
         });
    }

    if(document.getElementById('gallery-grid')) {
        renderGallery();
        document.getElementById('load-more-gallery')?.addEventListener('click', () => {
            visibleGalleryCount += 10;
            renderGallery();
        });
    }

    if (document.body.dataset.page === 'home') {
        const counters = document.querySelectorAll('.counter-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            animateValue(counter, 0, target, 2000);
        });
    }
});