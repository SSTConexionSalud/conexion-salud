// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// Initialize the carousel
function initCarousel() {
    if (slides.length > 0) {
        showSlide(0);
        // Auto slide every 5 seconds
        setInterval(() => {
            moveCarousel(1);
        }, 5000);
    }
}

// Show a specific slide
function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show the current slide and activate its indicator
    slides[n].classList.add('active');
    if (indicators[n]) {
        indicators[n].classList.add('active');
    }
}

// Move the carousel by a certain number of slides
function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Set the carousel to a specific slide (for indicators)
function setCarousel(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel if it exists on the page
    initCarousel();
    
    // Set up accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the header
            this.classList.toggle('active');
            
            // Toggle the content visibility
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this demo, we'll just show an alert
            alert(`Gracias ${name} por contactarnos. Nos comunicaremos contigo pronto.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.querySelectorAll('.menu li a');

// Close menu when a menu item is clicked
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (menuToggle && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});

// Add animation on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.feature-card, .service-card, .value-card, .team-member, .contact-card');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('animated');
        }
    });
});