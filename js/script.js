// =======================================
// AL WAKIL - FULL OPTIMIZED VERSION
// Balanced Performance + Features
// =======================================

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initMobileMenu();
    initHeroSlider();
    initFAQ();
    initScrollAnimations();
    initCounters();
    initScrollToTop();
});


// =======================================
// Smooth Scroll
// =======================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}


// =======================================
// Mobile Menu
// =======================================
function initMobileMenu() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    const navContainer = nav.querySelector('.nav-container');
    const navLinks = nav.querySelector('.nav-links');

    const btn = document.createElement('button');
    btn.className = 'mobile-menu-btn';
    btn.innerHTML = `<span></span><span></span><span></span>`;
    navContainer.appendChild(btn);

    btn.addEventListener('click', () => {
        nav.classList.toggle('mobile-menu-open');
    });

    navLinks.addEventListener('click', e => {
        if (e.target.tagName === 'A') {
            nav.classList.remove('mobile-menu-open');
        }
    });
}


// =======================================
// HERO SLIDER (Optimized)
// =======================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    const progressBar = document.querySelector('.progress-bar');

    if (!slides.length) return;

    let current = 0;
    const interval = 5000;
    let timer;

    function updateSlider() {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === current);
            if (indicators[i]) {
                indicators[i].classList.toggle('active', i === current);
            }
        });

        if (progressBar) {
            progressBar.style.animation = 'none';
            void progressBar.offsetWidth;
            progressBar.style.animation = `slideProgress ${interval}ms linear`;
        }
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        updateSlider();
    }

    function start() {
        timer = setInterval(nextSlide, interval);
    }

    function stop() {
        clearInterval(timer);
    }

    indicators.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stop();
            current = index;
            updateSlider();
            start();
        });
    });

    const container = document.querySelector('.hero-slider');
    container?.addEventListener('mouseenter', stop);
    container?.addEventListener('mouseleave', start);

    updateSlider();
    start();
}


// =======================================
// FAQ
// =======================================
function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question?.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}


// =======================================
// SINGLE Scroll Animation Observer
// =======================================
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.section-header, .service-card, .portfolio-item, .about-text, .about-image, .faq-item, .stat-item'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}


// =======================================
// Counter Animation (Lightweight)
// =======================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-item h3');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + '+';
                    }
                }, 16);

                observer.disconnect();
            }
        });

        observer.observe(counter);
    });
}


// =======================================
// Scroll To Top
// =======================================
function initScrollToTop() {
    const btn = document.createElement('button');
    btn.className = 'scroll-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}