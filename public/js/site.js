// ============================================
// MODERN PORTFOLIO - ALLEN PANDEY
// Enhanced JavaScript Interactions
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('mainNav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 150; // Account for banner + navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== FADE-IN ANIMATION ON SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        fadeObserver.observe(element);
    });
    
    // ===== SKILL BARS ANIMATION =====
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // ===== PARALLAX EFFECT FOR HERO IMAGE =====
    const heroImage = document.querySelector('.hero-image-wrapper');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            if (scrolled < window.innerHeight) {
                heroImage.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // ===== STAT COUNTER ANIMATION =====
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statEl = entry.target;
                const text = statEl.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/\d/g, '');
                
                if (number && !isNaN(number)) {
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            statEl.textContent = number + suffix;
                            clearInterval(timer);
                        } else {
                            statEl.textContent = Math.floor(current) + suffix;
                        }
                    }, 30);
                }
                
                statObserver.unobserve(statEl);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statObserver.observe(stat);
    });
    
    // ===== AUTO-DISMISS ALERTS =====
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        if (!alert.classList.contains('alert-permanent')) {
            setTimeout(() => {
                const bsAlert = new bootstrap.Alert(alert);
                bsAlert.close();
            }, 5000);
        }
    });
    
    // ===== FORM VALIDATION ENHANCEMENT =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
    
    // ===== CURSOR TRAIL EFFECT (OPTIONAL - REMOVE IF NOT NEEDED) =====
    // Uncomment if you want a cursor trail effect
    /*
    let cursorTrail = [];
    const maxTrailLength = 20;
    
    document.addEventListener('mousemove', function(e) {
        const trailDot = document.createElement('div');
        trailDot.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: rgba(0, 212, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(trailDot);
        
        cursorTrail.push(trailDot);
        if (cursorTrail.length > maxTrailLength) {
            const oldDot = cursorTrail.shift();
            oldDot.style.opacity = '0';
            setTimeout(() => oldDot.remove(), 300);
        }
        
        setTimeout(() => {
            trailDot.style.opacity = '0';
            setTimeout(() => trailDot.remove(), 300);
        }, 500);
    });
    */
    
    // ===== PROJECT CARD 3D TILT EFFECT =====
    const projectCards = document.querySelectorAll('.project-card-modern');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
    
    // ===== TYPING EFFECT (OPTIONAL) =====
    // Uncomment to add typing effect to hero title
    /*
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
    */
    
});

// ===== CONSOLE MESSAGE =====
console.log('%cWelcome to Allen Pandey\'s Portfolio!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with Node.js, Express, and modern web technologies', 'color: #8892b0; font-size: 12px;');
console.log('%cLooking for something? Check out the code on GitHub!', 'color: #8338ec; font-size: 12px;');

