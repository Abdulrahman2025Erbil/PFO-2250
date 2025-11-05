// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animated counter for impact metrics
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60 FPS
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loading');
            
            // Animate counters when they come into view
            if (entry.target.classList.contains('metric-number')) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    // Observe metric numbers
    document.querySelectorAll('.metric-number').forEach(el => {
        observer.observe(el);
    });
    
    // Observe cards
    document.querySelectorAll('.impact-card, .resource-card, .regional-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
    
    // Observe achievement items
    document.querySelectorAll('.achievement-item').forEach(el => {
        observer.observe(el);
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
    
    lastScroll = currentScroll;
});

// Add active state to navigation links
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Timeline animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateX(-50px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, 100);
            
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Pillar items hover effect
document.querySelectorAll('.pillar-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-links a.active {
        color: var(--peace-green);
        border-bottom-color: var(--peace-green);
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / hero.offsetHeight);
    }
});

// Card entrance animations
const cards = document.querySelectorAll('.impact-card, .regional-card, .resource-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cardObserver.observe(card);
});

// Mobile menu toggle (for responsive design)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && !document.querySelector('.menu-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'menu-toggle';
            toggle.innerHTML = '<i class="fas fa-bars"></i>';
            toggle.style.cssText = `
                display: block;
                background: transparent;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            `;
            
            const navBrand = document.querySelector('.nav-brand');
            navBrand.parentElement.insertBefore(toggle, navLinks);
            
            toggle.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'var(--un-dark-blue)';
                navLinks.style.padding = '1rem';
                navLinks.style.zIndex = '1000';
            });
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Print functionality
const addPrintButton = () => {
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i> Print Dashboard';
    printBtn.className = 'btn btn-primary print-btn';
    printBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 999;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    `;
    
    printBtn.addEventListener('click', () => window.print());
    document.body.appendChild(printBtn);
    
    // Hide print button when printing
    window.addEventListener('beforeprint', () => {
        printBtn.style.display = 'none';
    });
    
    window.addEventListener('afterprint', () => {
        printBtn.style.display = 'block';
    });
};

addPrintButton();

// Scroll to top button
const addScrollToTop = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 6rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--un-blue);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 998;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.transform = 'translateY(0)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'translateY(20px)';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.background = 'var(--peace-green)';
        this.style.transform = 'translateY(-5px)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.background = 'var(--un-blue)';
        this.style.transform = 'translateY(0)';
    });
};

addScrollToTop();

// Console message for developers
console.log('%c Peace & Freedom Organization ', 'background: #009edb; color: white; font-size: 20px; padding: 10px;');
console.log('%c Contributing to UN Resolution 2250 - Youth, Peace & Security ', 'background: #4ade80; color: white; font-size: 14px; padding: 5px;');
console.log('Dashboard created for donor presentation');

// Add loading screen
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--un-dark-blue);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <i class="fas fa-dove" style="font-size: 4rem; margin-bottom: 1rem; animation: pulse 1s infinite;"></i>
            <h2>Loading Dashboard...</h2>
        </div>
    `;
    
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
        }
    `;
    document.head.appendChild(pulseStyle);
    
    document.body.insertBefore(loader, document.body.firstChild);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 1000);
});

// Add data export functionality
const addExportButton = () => {
    const exportBtn = document.createElement('button');
    exportBtn.innerHTML = '<i class="fas fa-download"></i> Export Data';
    exportBtn.className = 'btn btn-secondary export-btn';
    exportBtn.style.cssText = `
        position: fixed;
        bottom: 10rem;
        right: 2rem;
        z-index: 997;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    `;
    
    exportBtn.addEventListener('click', () => {
        const data = {
            organization: "Peace and Freedom Organization",
            resolution: "UN Security Council Resolution 2250",
            levels: ["International", "Regional", "National"],
            international_memberships: [
                "Civil Society Working Group on Youth, Peace and Security",
                "United Network of Young Peacebuilders",
                "Italian Youth, Peace and Security Network"
            ],
            regional_role: "MENA Regional Coalition Program Committee Lead",
            national_achievements: [
                "National Coalition for Youth, Peace and Security in Iraq (2020)",
                "National Network for Resolution 2250 in Iraq (2021)",
                "Drafting Iraq's First National Action Plan on YPS (2024-present)"
            ],
            key_partnerships: [
                "UNFPA",
                "Folke Bernadotte Academy",
                "Iraqi Ministry of Youth and Sports",
                "Ministry of Youth and Culture in Kurdistan Region",
                "Prime Minister's Office of Iraq"
            ]
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'pfo-resolution-2250-data.json';
        a.click();
        URL.revokeObjectURL(url);
        
        // Show success message
        const message = document.createElement('div');
        message.textContent = 'Data exported successfully!';
        message.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: var(--peace-green);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            z-index: 9999;
            animation: slideInRight 0.3s ease;
        `;
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    });
    
    document.body.appendChild(exportBtn);
};

addExportButton();

// Add slide in/out animations
const animations = document.createElement('style');
animations.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(animations);