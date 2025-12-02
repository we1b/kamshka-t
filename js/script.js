/* المسار: js/script.js */

// -------------------------------------------------------------------------
// إعدادات Firebase (بيانات مشروعك الحقيقية)
// -------------------------------------------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCTRm9XNvVgmP-h_7qHZyQy-dEAqnTIrY4",
    authDomain: "kameshkah-8c9ed.firebaseapp.com",
    projectId: "kameshkah-8c9ed",
    storageBucket: "kameshkah-8c9ed.firebasestorage.app",
    messagingSenderId: "221923589082",
    appId: "1:221923589082:web:098b2152a227e93acbdee3",
    measurementId: "G-199GK5EH3K",
    databaseURL: "https://kameshkah-8c9ed-default-rtdb.firebaseio.com"
};

// -------------------------------------------------------------------------
// نظام الترجمة الاحترافي (Dictionary)
// -------------------------------------------------------------------------
let currentLang = localStorage.getItem('kameshkah_lang') || 'ar';

const translations = {
    ar: {
        langLabel: "English", // اللي بيظهر في الزرار
        nav: { home: "الرئيسية", courses: "كورسات", gallery: "المعرض", articles: "مقالات", library: "مكتبة", contact: "تواصل" },
        ui: { 
            rights: "جميع الحقوق محفوظة © مصطفى كمشكاة 2025", 
            search: "ابحث عن كورس...", 
            searchArt: "ابحث في المقالات...",
            all: "الكل", 
            loadMore: "عرض المزيد", 
            subscribe: "اشتراك", 
            share: "مشاركة", 
            shareMsg: "تم نسخ الرابط!", 
            download: "تحميل الصورة", 
            zoom: "تكبير",
            back: "رجوع للمقالات"
        },
        cats: { graphic: "جرافيك", programming: "برمجة", business: "إدارة أعمال", marketing: "تسويق", science: "علوم", freelance: "عمل حر", development: "تطوير ذات", tech: "تكنولوجيا", ai: "ذكاء اصطناعي", languages: "لغات" },
        pages: {
            home: {
                mainTitle: "كمشكاة",
                subTitle: "استعن بالله ولا تعجز",
                btn1: "ابدأ رحلة التعلم",
                btn2: "شوف الإبداع",
                stat1: "متابع شغوف",
                stat2: "كورس احترافي",
                stat3: "طموح بلا حدود"
            },
            courses: { title: "الكورسات التعليمية" },
            gallery: { title: "معرض التصميمات", sub: "إبداع متجدد . لمسة فنية", loadMore: "عرض المزيد من التصميمات" },
            articles: { title: "مدونة كمشكاة" },
            library: { title: "مكتبة كمشكاة", sub: "جاري رفع الكتب والملفات.. انتظرونا قريباً!", badge: "قريباً جداً 🚀" },
            contact: { 
                name: "مصطفى عبد الناصر", 
                role1: "Graphic Designer", 
                role2: "Content Creator",
                behanceBtn: "معرض أعمالي علي Behance",
                brandName: "كمشكاة",
                brandSub: "المجتمع الرسمي والمحتوى الحصري"
            }
        }
    },
    en: {
        langLabel: "العربية", // Label on button
        nav: { home: "Home", courses: "Courses", gallery: "Gallery", articles: "Blog", library: "Library", contact: "Contact" },
        ui: { 
            rights: "All Rights Reserved © Mostafa Kameshkah 2025", 
            search: "Search courses...", 
            searchArt: "Search articles...",
            all: "All", 
            loadMore: "Show More", 
            subscribe: "Enroll", 
            share: "Share", 
            shareMsg: "Link Copied!", 
            download: "Download", 
            zoom: "Zoom",
            back: "Back to Articles"
        },
        cats: { graphic: "Design", programming: "Coding", business: "Business", marketing: "Marketing", science: "Science", freelance: "Freelance", development: "Self Dev", tech: "Tech", ai: "AI & Tools", languages: "Languages" },
        pages: {
            home: {
                mainTitle: "Kameshkah",
                subTitle: "Trust in Allah and never give up",
                btn1: "Start Learning",
                btn2: "View Gallery",
                stat1: "Followers",
                stat2: "Pro Courses",
                stat3: "Limitless Passion"
            },
            courses: { title: "Educational Courses" },
            gallery: { title: "Design Gallery", sub: "Renewed Creativity . Artistic Touch", loadMore: "Load More Designs" },
            articles: { title: "Kameshkah Blog" },
            library: { title: "Kameshkah Library", sub: "Uploading books and files soon.. Stay tuned!", badge: "Coming Soon 🚀" },
            contact: { 
                name: "Mostafa Abdelnasser", 
                role1: "Graphic Designer", 
                role2: "Content Creator",
                behanceBtn: "My Behance Portfolio",
                brandName: "Kameshkah",
                brandSub: "Official Community & Exclusive Content"
            }
        }
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('kameshkah_lang', currentLang);
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    location.reload(); 
}

function t(section, key) {
    return translations[currentLang][section][key] || key;
}

// -------------------------------------------------------------------------
// تشغيل Firebase
// -------------------------------------------------------------------------
let db;
let analytics;

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    try {
        if (typeof firebase !== 'undefined') {
            firebase.initializeApp(firebaseConfig);
            db = firebase.database();
            analytics = firebase.analytics();
            console.log("Firebase Connected Successfully ✅");
            if(document.getElementById('gallery-grid')) listenToLikes();
        } else {
            console.warn("Firebase SDK not loaded");
        }
    } catch (e) {
        console.error("Firebase Connection Failed ❌", e);
    }

    loadComponents();
    updateStaticText(); // تحديث نصوص الصفحة الحالية
    
    if(document.getElementById('courses-grid')) initCoursesPage();
    if(document.getElementById('articles-grid')) initArticlesPage();
    if(document.getElementById('gallery-grid')) initGalleryPage();
    if(document.body.dataset.page === 'home') initHomePage();
});

// --- 1. بيانات الكورسات (36 كورس) ---
const coursesData = [
    // (نفس البيانات السابقة، لم يتم تغييرها للحفاظ على المساحة - الكود هيشتغل تمام)
    // ... الكورسات موجودة هنا ...
     { id: 1, titleAr: "إتقان الفيديو السينمائي بالذكاء الاصطناعي", titleEn: "Cinematic AI Video Mastery", desc: "تعلم صناعة أفلام ومحتوى سينمائي باستخدام أدوات الذكاء الاصطناعي وكاب كات.", cat: "graphic", img: "images/c1.jpg", date: "30 Nov 2025", url: "https://www.udemy.com/course/master-ai-filmmaking-with-veo3/?couponCode=DCD0DD65AC674C5A2D83" },
     // ... باقي الـ 35 كورس ...
];
// (ملحوظة: أنا اختصرت القائمة هنا للعرض، بس أنت انسخ القائمة الكاملة من الكود اللي فات لو مش موجودة، أو لو عايزني احطها كلها تاني قولي)

// --- 2. بيانات المقالات ---
const articlesData = [
    { id: 1, title: "فكك من جو التنين المجنح", excerpt: "...", content: "...", img: "images/a1.jpg", cat: "development", date: "28 Nov 2025" },
    // ... باقي المقالات ...
];

// --- 3. تحميل الهيدر والفوتر (زرار الترجمة الجديد) ---
function loadComponents() {
    const header = `
    <nav class="fixed top-0 w-full glass-panel z-50 !bg-white/60 !border-0 !rounded-none backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-3 font-bold text-2xl text-emerald-800 hover:text-emerald-600 transition group">
                <img src="images/logo.png" class="w-10 h-10 bg-white rounded-lg p-1 shadow-sm group-hover:rotate-12 transition" alt="L"> 
                <span class="hidden sm:inline">${currentLang === 'ar' ? 'كمشكاة' : 'Kameshkah'}</span>
            </a>
            
            <!-- Desktop Nav -->
            <div class="hidden md:flex gap-1 bg-white/40 p-1 rounded-full border border-white/60 shadow-sm">
                <a href="index.html" class="px-4 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="home">${t('nav', 'home')}</a>
                <a href="courses.html" class="px-4 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="courses">${t('nav', 'courses')}</a>
                <a href="gallery.html" class="px-4 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="gallery">${t('nav', 'gallery')}</a>
                <a href="articles.html" class="px-4 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="articles">${t('nav', 'articles')}</a>
                <a href="library.html" class="px-4 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="library">${t('nav', 'library')}</a>
                <a href="contact.html" class="px-4 py-2 rounded-full hover:bg-white text-slate-700 hover:text-emerald-700 transition text-sm font-bold" data-page="contact">${t('nav', 'contact')}</a>
            </div>

            <div class="flex items-center gap-2">
                <!-- زرار الترجمة الاحترافي -->
                <button onclick="toggleLanguage()" class="bg-white border border-emerald-200 text-emerald-800 px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-50 transition shadow-sm font-bold text-sm" title="Switch Language">
                    <i data-lucide="globe" class="w-4 h-4"></i>
                    <span>${translations[currentLang].langLabel}</span>
                </button>

                <button class="md:hidden text-emerald-800 p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                    <i data-lucide="menu" class="w-7 h-7"></i>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-white/95 border-t border-emerald-100 p-4 absolute w-full shadow-xl">
            <div class="flex flex-col gap-2">
                <a href="index.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav', 'home')}</a>
                <a href="courses.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav', 'courses')}</a>
                <a href="gallery.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav', 'gallery')}</a>
                <a href="articles.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav', 'articles')}</a>
                <a href="contact.html" class="p-3 rounded-lg hover:bg-emerald-50 text-emerald-900 font-bold">${t('nav', 'contact')}</a>
            </div>
        </div>
    </nav>`;
    
    const footer = `<footer class="text-center py-8 glass-panel !bg-white/40 !border-0 mt-10 relative z-10"><p class="text-emerald-800 font-bold">${t('ui', 'rights')}</p></footer>`;

    if(document.getElementById('header-ph')) document.getElementById('header-ph').innerHTML = header;
    if(document.getElementById('footer-ph')) document.getElementById('footer-ph').innerHTML = footer;

    const page = document.body.dataset.page;
    if(page) document.querySelector(`[data-page="${page}"]`)?.classList.add('!bg-emerald-500', '!text-white', 'shadow-md');
    lucide.createIcons();
}

// --- دالة تحديث النصوص الثابتة (المترجم الذكي) ---
function updateStaticText() {
    const page = document.body.dataset.page;
    const pObj = translations[currentLang].pages[page];
    
    if (!pObj) return;

    // الصفحة الرئيسية
    if (page === 'home') {
        if(document.querySelector('h1')) document.querySelector('h1').innerText = pObj.mainTitle;
        if(document.querySelector('main p.text-2xl')) document.querySelector('main p.text-2xl').innerText = pObj.subTitle;
        
        const btns = document.querySelectorAll('main .flex a');
        if(btns.length >= 2) {
            btns[0].innerText = pObj.btn1;
            btns[1].innerText = pObj.btn2;
        }
        
        const stats = document.querySelectorAll('.text-slate-600');
        if(stats.length >= 3) {
            stats[0].innerText = pObj.stat1;
            stats[1].innerText = pObj.stat2;
            stats[2].innerText = pObj.stat3;
        }
    }
    
    // العناوين الرئيسية في باقي الصفحات
    if (document.querySelector('h1') && pObj.title) {
        document.querySelector('h1').innerText = pObj.title;
    }

    // نصوص فرعية محددة
    if (page === 'gallery') {
        if(document.querySelector('.text-slate-600')) document.querySelector('.text-slate-600').innerText = pObj.sub;
        if(document.getElementById('load-more-gallery')) document.getElementById('load-more-gallery').innerText = pObj.loadMore;
    }
    
    if (page === 'library') {
        if(document.querySelector('.text-slate-600')) document.querySelector('.text-slate-600').innerText = pObj.sub;
        if(document.querySelector('.bg-emerald-50')) document.querySelector('.bg-emerald-50').innerText = pObj.badge;
    }

    if (page === 'contact') {
        const h2s = document.querySelectorAll('h2');
        if(h2s.length >= 2) {
            h2s[0].innerText = pObj.name;
            h2s[1].innerText = pObj.brandName;
        }
        const roles = document.querySelectorAll('.bg-emerald-100, .bg-purple-100');
        if(roles.length >= 2) {
            roles[0].innerText = pObj.role1;
            roles[1].innerText = pObj.role2;
        }
        const behance = document.querySelector('a[href*="behance"]');
        if(behance) behance.innerText = pObj.behanceBtn;
        
        const brandP = document.querySelector('.border-emerald-500\\/30 p');
        if(brandP) brandP.innerText = pObj.brandSub;
    }

    // تحديث الـ Placeholder للبحث
    if(document.getElementById('search-input')) document.getElementById('search-input').placeholder = t('ui', 'search');
    if(document.getElementById('article-search-input')) document.getElementById('article-search-input').placeholder = t('ui', 'searchArt');
}

// --- 4. منطق الكورسات ---
let currentCat = 'all';
let searchText = '';
let visibleCoursesCount = 10;

function renderFilters() {
    const filterContainer = document.getElementById('course-filters');
    if (!filterContainer) return;

    const categories = ['all', ...new Set(coursesData.map(course => course.cat))];

    filterContainer.innerHTML = categories.map(cat => {
        const displayName = cat === 'all' ? t('ui', 'all') : getCatName(cat);
        const isActive = cat === currentCat ? 'active bg-emerald-600 text-white border border-white/10' : 'bg-white/60 hover:bg-white/90 text-emerald-900';
        return `<button class="filter-btn px-6 py-2 rounded-full font-bold transition-all shadow-sm ${isActive}" data-cat="${cat}">${displayName}</button>`;
    }).join('');

    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentCat = e.target.dataset.cat;
            visibleCoursesCount = 10;
            renderFilters();
            renderCourses();
        });
    });
}

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
                <h3 class="text-xl font-bold mb-1 text-emerald-900" dir="auto">${currentLang === 'ar' ? c.titleAr : c.titleEn}</h3>
                <p class="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed" dir="auto">${c.desc}</p>
                
                <div class="mt-auto flex gap-2">
                    <a href="${c.url}" target="_blank" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-center font-bold transition shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                         ${t('ui', 'subscribe')} <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                    <button onclick="shareContent('${c.titleAr}', '${c.url}')" class="bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 rounded-xl transition" title="${t('ui', 'share')}">
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
            loadMoreBtn.innerText = t('ui', 'loadMore');
        }
    }
}

function getCatName(cat) {
    return t('cats', cat) || cat;
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
                    <span class="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-bold">${getCatName(a.cat)}</span>
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

// --- 6. منطق المعرض (اللايكات الحقيقية) ---
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
                            <i data-lucide="zoom-in" class="w-4 h-4"></i> ${t('ui', 'zoom')}
                        </div>
                    </div>

                    <div class="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition duration-300 z-10" onclick="event.stopPropagation()">
                        <button onclick="shareContent('تصميم رقم ${i} من كمشكاة', 'https://kameshkah.com/gallery?img=${i}')" class="bg-white hover:bg-emerald-50 text-emerald-800 p-2 rounded-full shadow-lg transition transform hover:scale-110" title="${t('ui', 'share')}"><i data-lucide="share-2" class="w-5 h-5"></i></button>
                    </div>

                    <div class="absolute bottom-3 right-3 z-10" onclick="event.stopPropagation()">
                        <button id="like-btn-${i}" onclick="toggleLike(${i})" class="bg-white/90 hover:bg-white text-slate-400 p-2 px-3 rounded-full shadow-lg transition flex items-center gap-1 group/like">
                            <i data-lucide="heart" class="w-5 h-5 transition-colors group-hover/like:text-red-500" id="heart-icon-${i}"></i>
                            <span id="like-count-${i}" class="text-sm font-bold text-slate-700">0</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    grid.innerHTML = html;
    lucide.createIcons();
    if(db) listenToLikes();

    if (loadMoreBtn) {
        if (visibleGalleryCount >= totalGalleryImages) { loadMoreBtn.style.display = 'none'; } else { 
            loadMoreBtn.style.display = 'inline-flex'; 
            loadMoreBtn.innerText = t('ui', 'loadMore');
        }
    }
}

// دالة اللايك
window.toggleLike = function(imgId) {
    if (!db) { alert("جاري الاتصال بالسيرفر.. تأكد من الإنترنت!"); return; }
    const likeRef = db.ref('likes/' + imgId);
    const isLiked = localStorage.getItem(`liked_${imgId}`);

    likeRef.transaction((currentLikes) => {
        if (currentLikes === null) currentLikes = 0;
        if (isLiked) {
            localStorage.removeItem(`liked_${imgId}`);
            updateHeartUI(imgId, false);
            return currentLikes - 1;
        } else {
            localStorage.setItem(`liked_${imgId}`, 'true');
            updateHeartUI(imgId, true);
            return currentLikes + 1;
        }
    });
};

function listenToLikes() {
    if (!db) return;
    for(let i=1; i<=visibleGalleryCount; i++) {
        const likeRef = db.ref('likes/' + i);
        likeRef.on('value', (snapshot) => {
            const count = snapshot.val() || 0;
            const countEl = document.getElementById(`like-count-${i}`);
            if(countEl) countEl.innerText = count;
            const isLiked = localStorage.getItem(`liked_${i}`);
            updateHeartUI(i, !!isLiked);
        });
    }
}

function updateHeartUI(imgId, isLiked) {
    const icon = document.getElementById(`heart-icon-${imgId}`);
    if(!icon) return;
    if (isLiked) {
        icon.classList.add('fill-red-500', 'text-red-500');
        icon.classList.remove('text-slate-400');
    } else {
        icon.classList.remove('fill-red-500', 'text-red-500');
        icon.classList.add('text-slate-400');
    }
}

// --- 7. Helper Functions ---
async function shareContent(title, url) {
    if (navigator.share) {
        try {
            await navigator.share({ title: 'كمشكاة', text: `شوف المحتوى ده من موقع كمشكاة: ${title}`, url: url });
        } catch (err) { console.log('Share canceled'); }
    } else {
        navigator.clipboard.writeText(url);
        alert(t('ui', 'shareMsg'));
    }
}

function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    const dl = document.getElementById('lightbox-download');
    dl.href = src;
    dl.innerText = t('ui', 'download');
    lb.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function initHomePage() {
    const counters = document.querySelectorAll('.counter-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        animateValue(counter, 0, target, 2000);
    });
}

function initCoursesPage() {
    renderFilters();
    renderCourses();
    const searchInput = document.getElementById('search-input');
    if(searchInput) {
        searchInput.placeholder = t('ui', 'search');
        searchInput.addEventListener('keyup', (e) => {
            searchText = e.target.value;
            visibleCoursesCount = 10;
            renderCourses();
        });
    }
    document.getElementById('load-more-courses')?.addEventListener('click', () => {
        visibleCoursesCount += 10;
        renderCourses();
    });
}

function initArticlesPage() {
    renderArticles();
    document.querySelectorAll('.article-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.article-filter-btn').forEach(b => b.classList.remove('active', 'bg-emerald-600', 'text-white'));
            e.target.classList.add('active', 'bg-emerald-600', 'text-white');
            currentArticleCat = e.target.dataset.cat;
            renderArticles();
        });
    });
    const searchInput = document.getElementById('article-search-input');
    if(searchInput) {
        searchInput.placeholder = t('ui', 'searchArt');
        searchInput.addEventListener('keyup', (e) => {
            searchArticleText = e.target.value;
            renderArticles();
        });
    }
}

function initGalleryPage() {
    renderGallery();
    document.getElementById('load-more-gallery')?.addEventListener('click', () => {
        visibleGalleryCount += 10;
        renderGallery();
    });
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