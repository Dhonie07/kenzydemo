window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const loaderPercentage = document.getElementById('loaderPercentage');
    const loaderProgress = document.getElementById('loaderProgress');
    let percentage = 0;

    const loadingInterval = setInterval(() => {
        percentage += Math.random() * 15;
        if (percentage >= 100) {
            percentage = 100;
            clearInterval(loadingInterval);
            
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        }
        
        loaderPercentage.textContent = Math.floor(percentage) + '%';
        loaderProgress.style.width = percentage + '%';
    }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'hidden';
    
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const closeMenu = document.getElementById('closeMenu');
    const navbar = document.getElementById('navbar');
    const navLinkItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    closeMenu.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinkItems.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.music-card, .movie-card');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        this.reset();
    });

    const playButtons = document.querySelectorAll('.spotify-play-btn, .card-play-btn, .movie-play-btn');
    playButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const video = document.getElementById('heroVideo');
    if (video) {
        video.addEventListener('loadedmetadata', function() {
            this.play().catch(err => console.log('Video autoplay prevented:', err));
        });
    }

    const platformIcons = document.querySelectorAll('.platform-icon');
    platformIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelector('.video-background');
                if (parallax) {
                    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    const cards = document.querySelectorAll('.music-card, .movie-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    const spotifyCard = document.querySelector('.spotify-card');
    if (spotifyCard) {
        spotifyCard.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    }

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setInterval(() => {
            heroTitle.style.animation = 'none';
            setTimeout(() => {
                heroTitle.style.animation = 'glitch 3s infinite';
            }, 10);
        }, 5000);
    }
});
