
// Enhanced Main JavaScript with Modern Interactions
let didScroll = false;
let lastScrollTop = 0;
let delta = 8;
let navbarHeight = 0;
let navbar = null;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    navbar = document.querySelector('.navbar');
    if (navbar) {
        navbarHeight = navbar.offsetHeight;
    }
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Initialize smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize intersection observer for animations
    initScrollAnimations();
    
    // Initialize typing effect for hero heading
    initTypingEffect();
    
    // Initialize parallax effects
    initParallaxEffects();
});

// Enhanced navbar scrolling with hide/show and background effects
function initScrollEffects() {
    window.addEventListener('scroll', function() {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
}

function hasScrolled() {
    if (!navbar) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (Math.abs(lastScrollTop - scrollTop) <= delta) return;
    
    // Hide/show navbar based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        // Scroll Down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll Up
        navbar.style.transform = 'translateY(0)';
    }
    
    // Add/remove scrolled class for background effect
    const header = document.querySelector('.header');
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const menu = document.querySelector('.menu');
                if (menu && menu.classList.contains('show')) {
                    menu.classList.remove('show');
                }
            }
        });
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Only animate specific elements, not all children
                if (entry.target.classList.contains('card') || 
                    entry.target.classList.contains('blog-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);
    
    // Observe only cards, not all sections
    document.querySelectorAll('.card, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Typing effect for hero heading
function initTypingEffect() {
    const heading = document.querySelector('.my-heading');
    if (!heading) return;
    
    const text = heading.textContent;
    heading.textContent = '';
    heading.style.borderRight = '3px solid var(--primary-color)';
    heading.style.opacity = '1'; // Ensure heading is visible
    
    let index = 0;
    const typingSpeed = 100;
    
    function type() {
        if (index < text.length) {
            heading.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                heading.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
}

// Parallax effects for hero section
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = hero.querySelectorAll('.headings, .intro-buttons, .tech-menu');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
            element.style.opacity = 1 - (scrolled * 0.001);
        });
    });
}

// Enhanced mobile menu toggle
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger-menu');
    
    if (menu && hamburger) {
        menu.classList.toggle('show');
        
        // Animate hamburger icon
        if (menu.classList.contains('show')) {
            hamburger.innerHTML = '✕';
            hamburger.style.transform = 'rotate(90deg)';
        } else {
            hamburger.innerHTML = '☰';
            hamburger.style.transform = 'rotate(0deg)';
        }
    }
}

// Add hover effect to tech stack icons
function initTechStackEffects() {
    const techIcons = document.querySelectorAll('.tech-list-items');
    
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.filter = 'drop-shadow(0 5px 15px rgba(69, 162, 158, 0.4))';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.filter = 'none';
        });
    });
}

// Initialize tech stack effects when DOM is ready
document.addEventListener('DOMContentLoaded', initTechStackEffects);

// Add ripple effect to buttons
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
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
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Initialize ripple effect
document.addEventListener('DOMContentLoaded', initRippleEffect);

// Add CSS for ripple effect
const rippleStyles = `
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
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;

if (!document.querySelector('#ripple-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'ripple-styles';
    styleSheet.textContent = rippleStyles;
    document.head.appendChild(styleSheet);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(() => {
    // Add any scroll-based performance optimizations here
}, 10));

// Add loading states for images
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            this.classList.add('error');
        });
    });
}

document.addEventListener('DOMContentLoaded', initImageLoading);


