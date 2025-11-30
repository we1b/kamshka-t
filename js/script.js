/* Path: js/script.js */

// --- 1. Courses Data ---
const coursesData = [
    { id: 1, titleAr: "إتقان الفيديو السينمائي بالذكاء الاصطناعي", titleEn: "Cinematic AI Video Mastery (CapCut & Veo)", desc: "تعلم صناعة أفلام ومحتوى سينمائي باستخدام أدوات الذكاء الاصطناعي وكاب كات.", cat: "graphic", img: "images/c1.jpg", date: "30 Nov 2025", url: "https://www.udemy.com/course/master-ai-filmmaking-with-veo3/?im_ref=wTA2JMQE0xycUoDSYrxNU05MUkpT110Vv2q8Vs0&sharedid=&irpid=2550473&utm_medium=affiliate&utm_source=impact&utm_audience=mx&utm_tactic=&utm_content=3193860&utm_campaign=2550473&irgwc=1&afsrc=1&couponCode=DCD0DD65AC674C5A2D83" },
    { id: 2, titleAr: "تدريب مايكروسوفت أوفيس الشامل", titleEn: "Master Excel, PowerPoint & Word", desc: "احترف أهم برامج الأوفيس للأعمال والدراسة من الصفر.", cat: "business", img: "images/c2.jpg", date: "29 Nov 2025", url: "https://www.udemy.com/course/microsoft-office-training-master-excel-powerpoint-word/?couponCode=BISMILLAH-22" },
    { id: 3, titleAr: "تطبيقات بايثون عملية للمبتدئين", titleEn: "Python Demonstrations For Practice", desc: "تمارين وتطبيقات عملية قوية لتعلم لغة بايثون.", cat: "programming", img: "images/c3.jpg", date: "28 Nov 2025", url: "https://www.udemy.com/course/python-for-beginners-demonstration-course/?sharedid=&irpid=2550473&utm_medium=affiliate&utm_source=impact&utm_audience=mx&utm_tactic=&utm_content=3193860&utm_campaign=2550473&irgwc=1&afsrc=1&im_ref=wTA2JMQE0xycUoDSYrxNU05MUkpT1121v2q8Vs0&couponCode=1C11EA262E5C5D7F7B19" },
    { id: 4, titleAr: "كورس فوتوشوب من الصفر للاحتراف", titleEn: "Essential Photoshop Course", desc: "الدليل الكامل لتعلم أدوبي فوتوشوب وتصميم الجرافيك.", cat: "graphic", img: "images/c4.jpg", date: "30 Nov 2025", url: "https://www.udemy.com/course/graphics-design-videoediting-course/?im_ref=wTA2JMQE0xycUoDSYrxNU05MUkpT11zBv2q8Vs0&sharedid=&irpid=2550473&utm_medium=affiliate&utm_source=impact&utm_audience=mx&utm_tactic=&utm_content=3193860&utm_campaign=2550473&irgwc=1&afsrc=1&couponCode=52C59BEAB3917A923178" },
    { id: 5, titleAr: "احتراف تصميم الشعارات", titleEn: "Master Logo Design (Ps & Ai)", desc: "تعلم تصميم اللوجوهات باستخدام فوتوشوب واليستريتور.", cat: "graphic", img: "images/c5.jpg", date: "29 Nov 2025", url: "https://www.udemy.com/course/master-logo-design-with-photoshop-illustrator-zero-to-pro/?im_ref=wTA2JMQE0xycUoDSYrxNU05MUkpT11zNv2q8Vs0&sharedid=&irpid=2550473&utm_medium=affiliate&utm_source=impact&utm_audience=mx&utm_tactic=&utm_content=3193860&utm_campaign=2550473&irgwc=1&afsrc=1&couponCode=024798D406787285E509" },
    { id: 6, titleAr: "ماستر كلاس وظائف PowerShell", titleEn: "PowerShell Functions Master Class", desc: "احترف كتابة الوظائف والسكربتات في PowerShell.", cat: "programming", img: "images/c6.jpg", date: "28 Nov 2025", url: "https://www.udemy.com/course/powershell-functions-master-class/?im_ref=wTA2JMQE0xycUoDSYrxNU05MUkpT1wRlv2q8Vs0&sharedid=&irpid=2550473&utm_medium=affiliate&utm_source=impact&utm_audience=mx&utm_tactic=&utm_content=3193860&utm_campaign=2550473&irgwc=1&afsrc=1&couponCode=FDDCAD88AAD460F08E4D" },
    { id: 7, titleAr: "أسرار النجاح الوظيفي (أفضل 1%)", titleEn: "Top 1% Career Secrets", desc: "مهارات لا تُدرس في المدارس للنجاح في الشركات.", cat: "business", img: "images/c7.jpg", date: "30 Nov 2025", url: "https://www.udemy.com/course/become-a-corporate-winner/?couponCode=NOV2025FREE001" },
    { id: 8, titleAr: "الدبلومة التنفيذية في إدارة الأعمال", titleEn: "Diploma in Business Management", desc: "أساسيات الإدارة وتنظيم الأعمال بشكل احترافي.", cat: "business", img: "images/c8.jpg", date: "29 Nov 2025", url: "https://www.udemy.com/course/executive-diploma-in-business-management-and-administration/?couponCode=C3AC6D445CD3368D662E" },
    { id: 9, titleAr: "برنامج المدير التقني المعتمد (CTO)", titleEn: "Certified CTO Mastery Program", desc: "كيف تصبح مديراً تقنياً ناجحاً وتقود الفرق التكنولوجية.", cat: "business", img: "images/c9.jpg", date: "28 Nov 2025", url: "https://www.udemy.com/course/chief-technology-officercto-mastery-program/?couponCode=AI_NOV_03" },
    { id: 10, titleAr: "الدبلومة التنفيذية في القيادة", titleEn: "Diploma in Leadership & Management", desc: "مهارات القيادة الفعالة وإدارة الفرق.", cat: "business", img: "images/c10.jpg", date: "30 Nov 2025", url: "https://www.udemy.com/course/executive-diploma-in-leadership-and-management/?couponCode=226D25F47550DE5079A8" },
    { id: 11, titleAr: "هندسة الذكاء الاصطناعي للقادة", titleEn: "Architecting Context-Driven AI", desc: "كيفية بناء استراتيجيات ذكاء اصطناعي فعالة للقادة.", cat: "business", img: "images/c11.jpg", date: "29 Nov 2025", url: "https://www.udemy.com/course/mcp-for-leaders-architecting-context-driven-ai/?couponCode=AI_NOV_03" },
    { id: 12, titleAr: "دبلومة الإنجليزية للأعمال", titleEn: "Business English & Communications", desc: "حسن لغتك الإنجليزية للتواصل في بيئة العمل.", cat: "languages", img: "images/c12.jpg", date: "28 Nov 2025", url: "https://www.udemy.com/course/professional-diploma-in-business-english-and-communications/?couponCode=C85E9532336D20D4CEDC" },
    { id: 13, titleAr: "تمارين بايثون NumPy لعلوم البيانات", titleEn: "Numpy For Data Science", desc: "تمارين كودينج حقيقية لإتقان مكتبة NumPy.", cat: "programming", img: "images/c13.jpg", date: "30 Nov 2025", url: "https://www.udemy.com/course/python-numpy-exercises/?couponCode=NUMPY_FREE_NOV28" },
    { id: 14, titleAr: "دبلومة التسويق والكوبي رايتينج", titleEn: "Social Media Marketing Diploma", desc: "احترف التسويق عبر السوشيال ميديا وكتابة المحتوى.", cat: "marketing", img: "images/c14.jpg", date: "29 Nov 2025", url: "https://www.udemy.com/course/professional-diploma-in-social-media-marketing-copywriting/?couponCode=2C44CF9853B582682E58" },
    { id: 15, titleAr: "فهم TypeScript من البداية", titleEn: "Understanding TypeScript", desc: "دليلك الكامل لتعلم لغة TypeScript.", cat: "programming", img: "images/c15.jpg", date: "28 Nov 2025", url: "https://www.udemy.com/course/understanding-typescript-for-beginner-to-advanced/?couponCode=00FEDB74B00FC5E58E74" },
    { id: 16, titleAr: "احتراف الجداول المحورية في إكسل", titleEn: "Excel Pivot Tables Mastery", desc: "تحليل البيانات باستخدام Pivot Tables والدوال.", cat: "accounting", img: "images/c16.jpg", date: "30 Nov 2025", url: "https://www.udemy.com/course/microsoft-excel-pivot-tables-with-formulas-functions/?couponCode=BISMILLAH19" }
];

// --- 2. Articles Data ---
const articlesData = [
    { id: 1, title: "فكك من جو التنين المجنح", excerpt: "يا صاحبي، السوشيال ميديا هرتنا كلام عن إنك لازم تكون سوبر مان..", content: "...", img: "images/a1.jpg", cat: "تطوير ذات", date: "28 Nov 2025" },
    { id: 2, title: "الذكاء الاصطناعي والمستقبل", excerpt: "هل الـ AI هياخد مكاننا؟ تعال نشوف..", content: "...", img: "images/a2.jpg", cat: "تكنولوجيا", date: "2025/11/29" },
    { id: 3, title: "إزاي تبدأ فري لانس صح؟", excerpt: "خطوات عملية عشان تبدأ شغلك الحر من غير تشتت.", content: "...", img: "images/a3.jpg", cat: "عمل حر", date: "30 Nov 2025" },
    { id: 4, title: "أهمية البراندينج الشخصي", excerpt: "أنت براند ماشي على الأرض، استغل ده لصالحك.", content: "...", img: "images/a4.jpg", cat: "تسويق", date: "01 Dec 2025" },
    { id: 5, title: "نصائح لتعلم الإنجليزية", excerpt: "بلاش تحفظ كلمات، احفظ جمل ومواقف.", content: "...", img: "images/a5.jpg", cat: "لغات", date: "02 Dec 2025" }
];

// --- 3. Load Header and Footer ---
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

// --- 4. Courses Logic ---
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
                <img src="${c.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" onerror="this.src='https://placehold.co/600x400/10b981/FFF'">
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
    const names = { 'graphic': 'جرافيك', 'programming': 'برمجة', 'accounting': 'محاسبة', 'languages': 'لغات', 'business': 'إدارة أعمال', 'marketing': 'تسويق' };
    return names[cat] || cat;
}

// --- 5. Gallery Logic ---
let visibleGalleryCount = 10;
const totalGalleryImages = 2000;

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more-gallery');
    if(!grid) return;

    let html = '';
    for(let i=1; i<=visibleGalleryCount && i<=totalGalleryImages; i++) {
        const height = [300, 400, 500][Math.floor(Math.random() * 3)]; 
        
        html += `
            <div class="glass-panel rounded-2xl overflow-hidden break-inside-avoid mb-6 group relative fade-in border-0 shadow-sm">
                <div class="relative cursor-pointer" onclick="openLightbox('images/${i}.jpg')">
                    <img src="images/${i}.jpg" class="w-full h-auto object-cover" 
                         loading="lazy"
                         onerror="this.src='https://placehold.co/400x${height}/dcfce7/065f46?text=Design+${i}'">
                    <div class="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-3">
                        <div class="bg-white text-emerald-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition shadow-xl">
                            <i data-lucide="zoom-in" class="w-4 h-4"></i> تكبير
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    grid.innerHTML = html;
    lucide.createIcons();

    if (loadMoreBtn) {
        if (visibleGalleryCount >= totalGalleryImages) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
            loadMoreBtn.innerHTML = `عرض المزيد (فاضل ${totalGalleryImages - visibleGalleryCount})`;
        }
    }
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

// --- Number Counter Animation ---
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
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
         const grid = document.getElementById('articles-grid');
         grid.innerHTML = articlesData.map(a => `
            <div class="glass-panel p-5 rounded-2xl flex flex-col md:flex-row gap-5 items-center hover:bg-white/60 transition group border border-white/60">
                <img src="${a.img}" class="w-full md:w-48 h-32 rounded-xl object-cover shadow-sm group-hover:scale-105 transition" onerror="this.src='https://placehold.co/400x300/dcfce7/065f46'">
                <div class="text-center md:text-right flex-1">
                    <div class="flex items-center gap-2 mb-2 justify-center md:justify-start">
                        <span class="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-bold">${a.cat}</span>
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

    if(document.getElementById('gallery-grid')) {
        renderGallery();
        document.getElementById('load-more-gallery')?.addEventListener('click', () => {
            visibleGalleryCount += 10;
            renderGallery();
        });
    }

    // Trigger Number Counter Animation on Home Page
    if (document.body.dataset.page === 'home') {
        const counters = document.querySelectorAll('.counter-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            animateValue(counter, 0, target, 2000); // Duration 2 seconds
        });
    }
});