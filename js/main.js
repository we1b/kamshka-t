/* Path: js/main.js */

// -------------------------------------------------------------------------
// 1. إعدادات الترجمة
// -------------------------------------------------------------------------
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_courses: "الكورسات",
        nav_gallery: "المعرض",
        nav_articles: "المقالات",
        nav_library: "المكتبة",
        nav_contact: "تواصل",
        nav_login: "دخول",
        nav_account: "حسابي",
        footer_rights: "جميع الحقوق محفوظة © مصطفى كمشكاة 2025",
        
        home_welcome: "كمشكاة",
        btn_start_learning: "ابدأ رحلة التعلم",
        btn_view_gallery: "شوف الإبداع",
        stat_followers: "زائر للموقع",
        stat_courses: "كورس متاح",
        stat_ambition: "طموح بلا حدود",

        gallery_title: "معرض التصميمات",
        gallery_subtitle: "إبداع متجدد . لمسة فنية",
        btn_download: "تحميل بجودة عالية",
        btn_share_img: "مشاركة",
        btn_zoom: "تكبير",
        btn_load_more: "عرض المزيد",
        
        share_msg: "تم نسخ الرابط! شاركه مع أصحابك.",
        login_welcome: "أهلاً بيك تاني! 👋",
    },
    en: {
        nav_home: "Home",
        nav_courses: "Courses",
        nav_gallery: "Gallery",
        nav_articles: "Articles",
        nav_library: "Library",
        nav_contact: "Contact",
        nav_login: "Login",
        nav_account: "My Account",
        footer_rights: "All Rights Reserved © Mostafa Kamshkat 2025",

        home_welcome: "Kamshkat",
        btn_start_learning: "Start Learning",
        btn_view_gallery: "View Gallery",
        stat_followers: "Visitors",
        stat_courses: "Courses Available",
        stat_ambition: "Limitless Ambition",

        gallery_title: "Design Gallery",
        gallery_subtitle: "Renewed Creativity . Artistic Touch",
        btn_download: "Download HD",
        btn_share_img: "Share",
        btn_zoom: "Zoom",
        btn_load_more: "Load More",

        share_msg: "Link copied! Share it with friends.",
    }
};

let currentLang = localStorage.getItem('kamshkat_lang') || 'ar';

// -------------------------------------------------------------------------
// 2. التشغيل الرئيسي
// -------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang); 
    loadNavbarFooter();       
    initProtection();         
    lucide.createIcons();     
    initChatbot(); 
    initCounters(); 

    // لو إحنا في صفحة المعرض، الوظيفة الخاصة بيها في gallery.html هتشتغل
    // هنا ممكن نضيف لوجيك عام لو احتاجناه
});

// -------------------------------------------------------------------------
// 3. وظائف الترجمة
// -------------------------------------------------------------------------
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('kamshkat_lang', currentLang);
    setLanguage(currentLang);
    loadNavbarFooter();
    location.reload(); 
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if(translations[lang][key]) {
            if(el.tagName === 'INPUT') el.placeholder = translations[lang][key];
            else el.innerText = translations[lang][key];
        }
    });
}

function t(key) { return translations[currentLang][key] || key; }

// -------------------------------------------------------------------------
// 4. بناء القائمة (كاملة ومتجاوبة)
// -------------------------------------------------------------------------
function loadNavbarFooter() {
    const langBtnText = currentLang === 'ar' ? 'En' : 'عربي';
    
    // تم استرجاع القائمة كاملة هنا بدل الاختصار
    const navbarHTML = `
    <nav class="fixed top-0 w-full glass-panel z-50 !bg-white/90 backdrop-blur-md border-b border-white/50 h-20 flex items-center shadow-sm">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <!-- اللوجو -->
            <a href="index.html" class="flex items-center gap-2 font-black text-2xl text-emerald-800 hover:scale-105 transition">
                <img src="images/logo.png" class="w-10 h-10 drop-shadow-sm object-contain" alt="Logo" onerror="this.style.display='none'"> 
                <span data-i18n="home_welcome">${t('home_welcome')}</span>
            </a>
            
            <!-- قائمة الكمبيوتر -->
            <div class="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200">
                <a href="index.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_home">${t('nav_home')}</a>
                <a href="courses.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_courses">${t('nav_courses')}</a>
                <a href="gallery.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_gallery">${t('nav_gallery')}</a>
                <a href="articles.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_articles">${t('nav_articles')}</a>
                <a href="library.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_library">${t('nav_library')}</a>
                <a href="contact.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition" data-i18n="nav_contact">${t('nav_contact')}</a>
            </div>

            <!-- أزرار الجانب وزر الموبايل -->
            <div class="flex items-center gap-2">
                <button onclick="toggleLanguage()" class="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition border border-emerald-200">
                    ${langBtnText}
                </button>
                
                <div id="auth-area" class="hidden md:block">
                    <a href="login.html" class="bg-emerald-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 text-sm" data-i18n="nav_login">${t('nav_login')}</a>
                </div>

                <!-- زرار الموبايل (Menu Icon) -->
                <button onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="md:hidden p-2 rounded-lg bg-slate-100 text-emerald-800 hover:bg-emerald-100 transition">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- قائمة الموبايل المنسدلة -->
        <div id="mobile-menu" class="hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 p-4 shadow-xl flex flex-col gap-2 md:hidden animate-fade-in-down">
            <a href="index.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="home" class="w-5 h-5 text-emerald-600"></i> ${t('nav_home')}</a>
            <a href="courses.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="zap" class="w-5 h-5 text-emerald-600"></i> ${t('nav_courses')}</a>
            <a href="gallery.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="image" class="w-5 h-5 text-emerald-600"></i> ${t('nav_gallery')}</a>
            <a href="articles.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="pen-tool" class="w-5 h-5 text-emerald-600"></i> ${t('nav_articles')}</a>
            <a href="library.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="library" class="w-5 h-5 text-emerald-600"></i> ${t('nav_library')}</a>
            <a href="contact.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="phone" class="w-5 h-5 text-emerald-600"></i> ${t('nav_contact')}</a>
            <div class="h-px bg-slate-100 my-1"></div>
            <a href="login.html" class="p-3 rounded-xl bg-emerald-600 text-white font-bold text-center shadow-lg">${t('nav_login')}</a>
        </div>
    </nav>`;

    const footerHTML = `
    <footer class="text-center py-8 mt-auto relative z-10">
        <div class="glass-panel inline-block px-8 py-4 rounded-full bg-white/50 backdrop-blur-md">
            <p class="text-emerald-800 font-bold text-sm" data-i18n="footer_rights">${t('footer_rights')}</p>
        </div>
    </footer>`;

    if(document.getElementById('header-ph')) document.getElementById('header-ph').innerHTML = navbarHTML;
    if(document.getElementById('footer-ph')) document.getElementById('footer-ph').innerHTML = footerHTML;
    lucide.createIcons();
}

// -------------------------------------------------------------------------
// 5. وظائف المعرض (اللايكات واللايت بوكس)
// -------------------------------------------------------------------------
// تم نقل لوجيك تحميل الصور لملف gallery.html نفسه للتحكم الأفضل
// الدوال هنا هي دوال مساعدة عامة (Helpers)

window.openLightbox = function(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const dl = document.getElementById('lightbox-download');
    
    if(lb && img) {
        img.src = src;
        if(dl) {
            dl.href = src;
            dl.innerHTML = `<i data-lucide="download"></i> ${t('btn_download')}`;
        }
        lb.classList.add('active');
    }
    lucide.createIcons();
}

window.closeLightbox = function() {
    document.getElementById('lightbox')?.classList.remove('active');
}

window.toggleLike = function(id) {
    if(typeof firebase === 'undefined') return;
    const db = firebase.database();
    const likeRef = db.ref('likes/' + id);
    const storageKey = `liked_${id}`;
    const isLiked = localStorage.getItem(storageKey);

    likeRef.transaction((currentLikes) => {
        if (currentLikes === null) currentLikes = 0;
        if (isLiked) {
            localStorage.removeItem(storageKey);
            updateHeartUI(id, false);
            return currentLikes - 1;
        } else {
            localStorage.setItem(storageKey, 'true');
            updateHeartUI(id, true);
            return currentLikes + 1;
        }
    });
}

// هذه الدالة مهمة جداً لـ gallery.html عشان تعرض عدد اللايكات
window.listenToLikes = function(limit) {
    if(typeof firebase === 'undefined') return;
    const db = firebase.database();
    for(let i=1; i<=limit; i++) {
        db.ref('likes/' + i).on('value', (snapshot) => {
            const countEl = document.getElementById(`likes-count-${i}`);
            if(countEl) countEl.innerText = snapshot.val() || 0;
            updateHeartUI(i, localStorage.getItem(`liked_${i}`));
        });
    }
}

function updateHeartUI(id, isLiked) {
    const icon = document.getElementById(`heart-${id}`);
    if(icon) {
        if(isLiked) {
            icon.classList.add('fill-red-500', 'text-red-500');
            icon.classList.remove('text-slate-400');
        } else {
            icon.classList.remove('fill-red-500', 'text-red-500');
            icon.classList.add('text-slate-400');
        }
    }
}

// -------------------------------------------------------------------------
// 6. وظيفة المشاركة
// -------------------------------------------------------------------------
window.shareCourse = function(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Check out this course on Kamshkat: ${title}`,
            url: url
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(url);
        alert(t('share_msg'));
    }
}

window.shareImage = function(imgSrc) {
    // دالة مشاركة الصور العامة
    const fullUrl = imgSrc.startsWith('http') ? imgSrc : window.location.origin + window.location.pathname.replace('gallery.html', '') + imgSrc;
    if (navigator.share) {
        navigator.share({
            title: 'تصميم من كمشكاة',
            text: 'شوف الإبداع ده!',
            url: fullUrl
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(fullUrl);
        alert(t('share_msg'));
    }
}

// -------------------------------------------------------------------------
// 7. الشات بوت
// -------------------------------------------------------------------------
function initChatbot() {
    (function(){
        if(!window.chatbase || window.chatbase("getState") !== "initialized"){
            window.chatbase = (...arguments) => {
                if(!window.chatbase.q){ window.chatbase.q = [] }
                window.chatbase.q.push(arguments)
            };
            window.chatbase = new Proxy(window.chatbase, {
                get(target, prop){
                    if(prop === "q"){ return target.q }
                    return (...args) => target(prop, ...args)
                }
            })
        }
        const onLoad = function(){
            const script = document.createElement("script");
            script.src = "https://www.chatbase.co/embed.min.js";
            script.id = "pzJqEYo1jgjQMK7rX1iuu";
            script.domain = "www.chatbase.co";
            document.body.appendChild(script)
        };
        if(document.readyState === "complete"){ onLoad() }
        else { window.addEventListener("load", onLoad) }
    })();
}

// -------------------------------------------------------------------------
// 8. العدادات
// -------------------------------------------------------------------------
function initCounters() {
    const counters = document.querySelectorAll('.counter-number');
    if(counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const el = entry.target;
                const target = +el.dataset.target || 0;
                animateValue(el, 0, target, 2500); 
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.2 });

    counters.forEach(c => observer.observe(c));
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

// -------------------------------------------------------------------------
// 9. الحماية
// -------------------------------------------------------------------------
function initProtection() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function(e) {
        if(e.keyCode == 123) return false; 
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; 
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; 
    };
    document.addEventListener('dragstart', function(e) { e.preventDefault(); });
}