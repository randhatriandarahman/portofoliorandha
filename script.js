// === LAYAR PEMBUKA — Masuk ke Website & Putar Lagu ===
const introScreen = document.getElementById('introScreen');
const mainContent = document.getElementById('mainContent');
const audioContainer = document.getElementById('audioContainer');
const introIcons = document.querySelectorAll('.intro-icon');

introIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Tutup layar pembuka
        introScreen.classList.add('hidden');
        
        // Tampilkan isi utama
        setTimeout(() => {
            mainContent.classList.add('visible');
        }, 300);

        // Tampilkan pemutar lagu & mulai putar
        setTimeout(() => {
            audioContainer.classList.add('show');
        }, 800);
    });
});

// === CEGAH KLIK KANAN ===
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// === NAVIGASI ===
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// === PENANDA BAGIAN AKTIF ===
const sections = document.querySelectorAll('section');
const navLinkItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// === ANIMASI MUNCUL SAAT GULIR ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .skill-card, .contact-card, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// === BUKA/TUTUP GALERI KARYA ===
const worksToggle = document.getElementById('worksToggle');
const worksGallery = document.getElementById('worksGallery');
const toggleText = document.getElementById('toggleText');
const toggleIcon = document.getElementById('toggleIcon');

worksToggle.addEventListener('click', () => {
    const isOpen = worksGallery.classList.contains('works-gallery-visible');

    if (isOpen) {
        worksGallery.classList.remove('works-gallery-visible');
        worksToggle.classList.remove('active');
        toggleText.textContent = 'Lihat Karya Saya';
    } else {
        worksGallery.classList.add('works-gallery-visible');
        worksToggle.classList.add('active');
        toggleText.textContent = 'Sembunyikan Karya';
        
        setTimeout(() => {
            worksGallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
    }
});