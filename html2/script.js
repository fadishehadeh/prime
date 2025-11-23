// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        // Only prevent default for internal anchor links (starting with #)
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // For external links (like arabic.html), let the browser handle it normally
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Hero particles animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `pulse ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 3}s infinite`;
        particlesContainer.appendChild(particle);
    }
}

// Pulse animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.8; }
    }
`;
document.head.appendChild(style);

// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-animate').forEach(element => {
        scrollObserver.observe(element);
    });
});

// Lifestyle Benefits Carousel
const carouselData = [
    {
        image: 'assets/images/valet-2.jpg',
        title: 'Valet Parking',
        description: '15 free accesses per month'
    },
    {
        image: 'assets/images/gym-2.jpg',
        title: 'Gym Access',
        description: '50% off at partner gyms'
    },
    {
        image: 'assets/images/cinema-2.jpg',
        title: 'Cinema Offers',
        description: 'Buy 1 get 1 free via NOVO (4 tickets per month, including Majlis and 7-Star)'
    },
    {
        image: 'assets/images/club-2.jpg',
        title: 'Club Privileges',
        description: '50% off membership at The NED Doha and SANAD (by invitation only)'
    }
];

let currentCarouselIndex = 0;

function initCarousel() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!carouselWrapper || !dotsContainer) return;
    
    // Clear existing content
    carouselWrapper.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Create slides
    carouselData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.dataset.index = index;
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="carousel-image">
            <div class="carousel-overlay"></div>
            <div class="carousel-content">
                <h3 class="carousel-title">${item.title}</h3>
                <p class="carousel-description">${item.description}</p>
            </div>
        `;
        carouselWrapper.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    // Remove active class from all
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentCarouselIndex = index;
}

function carouselNext() {
    const nextIndex = (currentCarouselIndex + 1) % carouselData.length;
    goToSlide(nextIndex);
}

function carouselPrev() {
    const prevIndex = (currentCarouselIndex - 1 + carouselData.length) % carouselData.length;
    goToSlide(prevIndex);
}

// Auto-advance carousel
let carouselInterval;

function startCarouselAutoplay() {
    carouselInterval = setInterval(() => {
        carouselNext();
    }, 5000);
}

function stopCarouselAutoplay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// Pause autoplay on hover
document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', stopCarouselAutoplay);
        carouselWrapper.addEventListener('mouseleave', startCarouselAutoplay);
    }
});

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initCarousel();
    startCarouselAutoplay();
    setCurrentYear();
    
    // Trigger scroll event once to set initial navbar state
    window.dispatchEvent(new Event('scroll'));
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reinitialize carousel on resize if needed
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        if (carouselWrapper && carouselWrapper.children.length === 0) {
            initCarousel();
        }
    }, 250);
});

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        carouselPrev();
    } else if (e.key === 'ArrowRight') {
        carouselNext();
    }
});

// Add touch swipe support for carousel
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (!carouselWrapper) return;
    
    carouselWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            carouselNext();
        } else {
            // Swipe right - previous slide
            carouselPrev();
        }
    }
}

// Preload images for better performance
function preloadImages() {
    const images = [
        'assets/images/hero-doha.jpg',
        'assets/images/consultation.jpg',
        'assets/images/support.jpg',
        'assets/images/visa-card.jpg',
        'assets/images/wealth.jpg',
        'assets/images/privileges.jpg',
        'assets/images/eligibility.jpg',
        ...carouselData.map(item => item.image)
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Start preloading images
preloadImages();

// Privileges Slider
let privilegesCurrentSlide = 0;
const privilegesSlides = document.querySelectorAll('.privileges-slide');
const privilegesTotalSlides = privilegesSlides.length;

function privilegesShowSlide(index) {
    privilegesSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    // Update dots
    const dots = document.querySelectorAll('.privileges-slider-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function privilegesNext() {
    privilegesCurrentSlide = (privilegesCurrentSlide + 1) % privilegesTotalSlides;
    privilegesShowSlide(privilegesCurrentSlide);
}

function privilegesPrev() {
    privilegesCurrentSlide = (privilegesCurrentSlide - 1 + privilegesTotalSlides) % privilegesTotalSlides;
    privilegesShowSlide(privilegesCurrentSlide);
}

// Initialize privileges slider dots
document.addEventListener('DOMContentLoaded', () => {
    const privilegesDotsContainer = document.getElementById('privilegesSliderDots');
    if (privilegesDotsContainer) {
        for (let i = 0; i < privilegesTotalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('privileges-slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                privilegesCurrentSlide = i;
                privilegesShowSlide(i);
            });
            privilegesDotsContainer.appendChild(dot);
        }
    }

    // Auto-advance privileges slider
    setInterval(() => {
        privilegesNext();
    }, 5000);
});

// Application Form Toggle
function toggleApplicationForm() {
    const form = document.getElementById('applicationForm');
    form.classList.toggle('active');

    // Scroll to form when opening
    if (form.classList.contains('active')) {
        setTimeout(() => {
            form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

// Handle Form Submission
function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        fullName: formData.get('fullName'),
        mobileNumber: formData.get('mobileNumber'),
        emailAddress: formData.get('emailAddress'),
        monthlySalary: formData.get('monthlySalary'),
        preferredTime: formData.get('preferredTime')
    };

    console.log('Application submitted:', data);

    // Show success message
    alert('Thank you for your application! Our Prime Banking team will contact you soon.');

    // Reset form and close
    event.target.reset();
    toggleApplicationForm();
}
