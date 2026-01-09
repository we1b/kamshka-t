/* Path: js/main.js */

// ... (الجزء الأول من الكود: الترجمة والقائمة والاشتراك - زي ما هو) ...
// (سأضع الجزء الخاص بالمعرض فقط لتوفير المساحة، تأكد من وجود باقي الكود)

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
        btn_download: "تحميل",
        btn_share_img: "مشاركة",
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
        btn_download: "Download",
        btn_share_img: "Share",
        share_msg: "Link copied! Share it with friends.",
    }
};

let currentLang = localStorage.getItem('kamshkat_lang') || 'ar';

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang); 
    loadNavbarFooter();       
    initProtection();         
    safeCreateIcons();
    initCounters();
    injectLightboxStyles(); 

    if(document.body.dataset.page === 'gallery') {
        initGalleryPage();
    }
});

// ... (دوال الترجمة والقائمة والاشتراك showSuccessMessage و enrollInCourse كما هي) ...

function toggleLanguage() { /* ... */ }
function setLanguage(lang) { /* ... */ }
function t(key) { /* ... */ }
function loadNavbarFooter() { /* ... */ }
function safeCreateIcons() { /* ... */ }
window.enrollInCourse = function(courseId, courseType) { /* ... */ }
function showSuccessMessage(msg) { /* ... */ }

// -------------------------------------------------------------------------
// 6. وظائف المعرض (تحديث جذري لمسارات الصور)
// -------------------------------------------------------------------------
let visibleGalleryCount = 0;
const GALLERY_INCREMENT = 12;
const MAX_IMAGES = 100;

function initGalleryPage() {
    const grid = document.getElementById('gallery-grid');
    if(grid) grid.innerHTML = '';
    loadGalleryImages();
    const btn = document.getElementById('load-more-gallery');
    if(btn) { btn.addEventListener('click', loadGalleryImages); }
}

function loadGalleryImages() {
    const grid = document.getElementById('gallery-grid');
    const btn = document.getElementById('load-more-gallery');
    if(!grid) return;
    
    let start = visibleGalleryCount + 1;
    let end = start + GALLERY_INCREMENT - 1;

    if (start > MAX_IMAGES) {
        if(btn) btn.style.display = 'none';
        return;
    }

    let html = '';
    for(let i=start; i<=end; i++) {
        const imgSrc = `images/${i}.webp`; 
        
        // كود الطوارئ المحسن: يجرب jpg و png و مسار فرعي
        const fallbackLogic = `
            this.onerror=null; 
            this.src='images/${i}.jpg'; 
            this.onerror=function(){ 
                this.src='images/${i}.png'; 
                this.onerror=function(){ 
                    this.src='images/gallery/${i}.webp'; 
                    this.onerror=function(){
                        this.src='https://placehold.co/600x800/dcfce7/065f46?text=Image+${i}'; 
                    }
                } 
            }
        `;

        html += `
        <div class="break-inside-avoid mb-6 glass-panel rounded-2xl overflow-hidden group relative bg-white/40 border border-white hover:shadow-xl transition duration-300">
            <div class="cursor-pointer relative" onclick="openLightbox(this.querySelector('img').src)">
                <img src="${imgSrc}" loading="lazy" class="w-full h-auto block transform transition duration-500 group-hover:scale-105" 
                     onerror="${fallbackLogic}">
                
                <div class="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div class="bg-white/90 text-emerald-900 p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition">
                        <i data-lucide="zoom-in" class="w-6 h-6"></i>
                    </div>
                </div>
            </div>
            
            <div class="p-3 flex justify-between items-center bg-white/80 backdrop-blur-md border-t border-white/50">
                <div class="flex gap-2">
                    <button onclick="toggleLike(${i})" class="flex items-center gap-1.5 text-slate-500 hover:text-red-500 transition group/like">
                        <i data-lucide="heart" class="w-5 h-5 transition transform group-active/like:scale-125" id="heart-${i}"></i>
                        <span id="likes-count-${i}" class="text-xs font-bold font-sans mt-0.5">0</span>
                    </button>
                </div>
                <div class="flex gap-2">
                    <button onclick="downloadImage(this.closest('.break-inside-avoid').querySelector('img').src)" class="text-emerald-600 hover:bg-emerald-50 p-2 rounded-lg transition" title="تحميل">
                        <i data-lucide="download" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>`;
    }

    grid.insertAdjacentHTML('beforeend', html);
    visibleGalleryCount = end;
    
    safeCreateIcons();
    
    if(typeof firebase !== 'undefined') listenToLikes(visibleGalleryCount);
}

// دالة التحميل
window.downloadImage = function(src) {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.substring(src.lastIndexOf('/') + 1) || 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دالة فتح اللايت بوكس
window.openLightbox = function(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if(!lb || !img) return;
    img.src = src;
    lb.classList.remove('hidden');
    lb.classList.add('flex');
}

window.closeLightbox = function() {
    const lb = document.getElementById('lightbox');
    lb.classList.add('hidden');
    lb.classList.remove('flex');
}

// التفاعل مع اللايكات
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

window.shareImage = function(imgSrc) {
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

function initCounters() { /* ... */ }
function animateValue(obj, start, end, duration) { /* ... */ }
function initProtection() { document.addEventListener('contextmenu', event => event.preventDefault()); }
function injectLightboxStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        #lightbox-img { max-height: 85vh; max-width: 90vw; border-radius: 12px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
        .masonry-grid { column-count: 1; column-gap: 1.5rem; }
        @media (min-width: 640px) { .masonry-grid { column-count: 2; } }
        @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
        .animate-fade-in-down { animation: fadeInDown 0.3s ease-out forwards; }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.appendChild(style);
}