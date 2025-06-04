// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission (Web3Forms via fetch)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('✅ Thank you! Your message was sent successfully.');
            contactForm.reset();
        } else {
            alert('❌ Oops! Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error(error);
        alert('❌ Network error. Please try again later.');
    }
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-img, .about-text, .experience-item, .education-item, .project-item, .contact-info, .contact-form');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animations
window.addEventListener('load', () => {
    animateOnScroll();
});

window.addEventListener('scroll', () => {
    animateOnScroll();
});
