// Navegación responsive mejorada
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.body;

// Crear overlay para móvil
const mobileOverlay = document.createElement('div');
mobileOverlay.className = 'mobile-overlay';
body.appendChild(mobileOverlay);

// Toggle del menú hamburguesa
function toggleMobileMenu() {
    const isOpen = hamburger.classList.contains('active');
    
    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    hamburger.classList.add('active');
    navMenu.classList.add('mobile-open', 'show');
    mobileOverlay.classList.add('show');
    body.style.overflow = 'hidden'; // Prevenir scroll del body
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('show');
    mobileOverlay.classList.remove('show');
    body.style.overflow = ''; // Restaurar scroll del body
    
    // Remover clase mobile-open después de la animación
    setTimeout(() => {
        navMenu.classList.remove('mobile-open');
    }, 300);
}

// Event listeners
hamburger.addEventListener('click', toggleMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        closeMobileMenu();
        // Solo cerrar el menú, sin smooth scroll
    });
});

// Cerrar menú con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show')) {
        closeMobileMenu();
    }
});

// Cerrar menú al cambiar orientación
window.addEventListener('orientationchange', () => {
    setTimeout(closeMobileMenu, 100);
});

// Navbar scroll effect mejorado
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;
let ticking = false;

function updateNavbar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Ocultar navbar al hacer scroll hacia abajo en móviles
    if (window.innerWidth <= 768) {
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

// Navegación activa basada en scroll
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 120; // Ajuste para navbar de 80px
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinksAll.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Throttle para mejorar performance
let navTicking = false;
window.addEventListener('scroll', () => {
    if (!navTicking) {
        requestAnimationFrame(updateActiveNav);
        navTicking = true;
        setTimeout(() => { navTicking = false; }, 10);
    }
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animación de las barras de habilidades
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
                bar.classList.add('animate');
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Animación de aparición de elementos
const appearOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-hidden');
        }
    });
}, appearOptions);

// Aplicar animación a todas las secciones
sections.forEach(section => {
    section.classList.add('section-hidden');
    appearOnScroll.observe(section);
});

// Inicializar cuando la página carga
window.addEventListener('load', () => {
    // El efecto de typewriter ha sido eliminado
    // El título del hero ahora se muestra directamente
});

// Formulario de contacto mejorado
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Estado de carga
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showNotification('¡Mensaje enviado con éxito! Te contactaré pronto.', 'success');
                contactForm.reset();
            } else {
                showNotification('Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
            }
        } catch (error) {
            showNotification('Error de conexión. Verifica tu internet e inténtalo de nuevo.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Sistema de notificaciones mejorado
function showNotification(message, type = 'info') {
    // Remover notificación existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Animaciones on scroll mejoradas
const scrollObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, scrollObserverOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.project-card, .skill-item, .timeline-item, .hero-content, .about-content'
    );
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        animateOnScroll.observe(el);
    });
});

// Inicializar efectos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // El efecto typewriter ha sido eliminado
    // El título se muestra directamente sin animación
    
    // Lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Mejorar performance en móviles
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reajustar elementos si es necesario
        if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
            closeMobileMenu();
        }
    }, 250);
});

// Prevenir zoom en inputs en iOS
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        if (window.innerWidth < 768) {
            const viewport = document.querySelector('meta[name="viewport"]');
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
    });
    
    input.addEventListener('blur', () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    });
});

// Touch gestures mejorados para móviles
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && navMenu.classList.contains('show')) {
            // Swipe left - cerrar menú
            closeMobileMenu();
        }
    }
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar notificaciones modernas
function showNotification(message, type = 'info', duration = 5000) {
    // Remover notificaciones antiguas si hay más de 3
    const existingNotifications = document.querySelectorAll('.notification');
    if (existingNotifications.length >= 3) {
        existingNotifications[0].remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Iconos según el tipo de notificación
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-triangle'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="notification-icon ${icons[type]}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
        <div class="notification-progress"></div>
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación con animación
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Manejar cierre de notificación
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        closeNotification(notification);
    });
    
    // Auto-cerrar después del tiempo especificado
    setTimeout(() => {
        if (document.body.contains(notification)) {
            closeNotification(notification);
        }
    }, duration);
    
    // Cerrar al hacer clic en la notificación (opcional)
    notification.addEventListener('click', (e) => {
        if (e.target !== closeBtn) {
            closeNotification(notification);
        }
    });
}

function closeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.remove();
        }
    }, 400);
}

// Función para mostrar notificación de éxito con confetti (opcional)
function showSuccessNotification(message) {
    showNotification(message, 'success', 6000);
    
    // Efecto de confetti simple (opcional)
    createConfetti();
}

// Función para crear efecto de confetti simple
function createConfetti() {
    const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}vw;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (document.body.contains(confetti)) {
                    confetti.remove();
                }
            }, 5000);
        }, i * 50);
    }
}

// Agregar animación de confetti al CSS dinámicamente
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Función para mostrar estado de carga en el formulario
function showLoadingState() {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    }
}

function hideLoadingState() {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar mensaje';
    }
}

// Efecto parallax sutil para el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Contador animado para las estadísticas
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Observar las estadísticas para animarlas cuando entren en vista
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h4');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// Función para manejar el scroll del body cuando se abre el menú móvil
function toggleBodyScroll(disable) {
    if (disable) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Actualizar el toggle del menú hamburguesa
hamburger.addEventListener('click', () => {
    const isActive = navMenu.classList.contains('active');
    toggleBodyScroll(!isActive);
});

// Cerrar menú al redimensionar la ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        toggleBodyScroll(false);
    }
});

// Lazy loading para las imágenes (cuando se agreguen)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Efecto de hover en las tarjetas de proyecto
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Copiar email al clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('📋 ¡Email copiado al portapapeles!', 'success', 3000);
    }).catch(() => {
        showNotification('❌ No se pudo copiar el email.', 'error');
    });
}

// Agregar funcionalidad de copia al email
document.addEventListener('DOMContentLoaded', () => {
    const emailElements = document.querySelectorAll('[href^="mailto:"]');
    emailElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const email = element.getAttribute('href').replace('mailto:', '');
            copyToClipboard(email);
        });
    });
});

// Performance optimization: debounce scroll events
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Aplicar debounce a los eventos de scroll
window.addEventListener('scroll', debounce(() => {
    updateActiveNav();
}));

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Remover clase de loading si existe
    document.body.classList.remove('loading');
    
    // Configurar tooltips si es necesario
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
});

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

console.log('🚀 Portafolio cargado exitosamente!');
