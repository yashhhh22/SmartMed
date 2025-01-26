// Smooth Scrolling for Navigation Links 
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll to the target section with a smooth effect and ease-in-out transition
        window.scrollTo({
            top: targetElement.offsetTop - 80,  // Offset to account for navbar height
            behavior: 'smooth'
        });

        // Optional: Adding active class to highlight the current section in the navbar
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Form Validation for Contact and Login Forms
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields!');
    } else {
        alert('Message sent successfully!');
    }
});

document.querySelector('.login-form').addEventListener('submit', function (e) {
    const email = this.querySelector('input[name="email"]').value;
    const password = this.querySelector('input[name="password"]').value;

    if (!email || !password) {
        e.preventDefault();
        alert('Please fill in both fields!');
    } else {
        alert('Login successful!');
    }
});

// Adding Fade-In Effect on Page Load for the Home Section
window.addEventListener('load', function () {
    document.querySelector('.home-section').classList.add('fade-in');
});

// Animating Feature Cards on Hover
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });
});

// Adding a Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '30px';
scrollToTopButton.style.right = '30px';
scrollToTopButton.style.backgroundColor = '#007bff';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.padding = '15px 20px';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.fontSize = '20px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none';  // Initially hidden
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block'; // Show button when scrolled down
    } else {
        scrollToTopButton.style.display = 'none'; // Hide button when near top
    }
});

// Enhanced Input Focus Effect for Forms
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function () {
        this.style.borderColor = '#007bff';
        this.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)';
    });

    input.addEventListener('blur', function () {
        this.style.borderColor = '#ddd';
        this.style.boxShadow = 'none';
    });
});

// Optional: Add subtle animations on scroll (for example, fade-in elements as you scroll down)
const elementsToAnimate = document.querySelectorAll('.fade-on-scroll');

function checkScrollAnimations() {
    const scrollPosition = window.scrollY + window.innerHeight;
    elementsToAnimate.forEach(element => {
        if (element.offsetTop < scrollPosition) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', checkScrollAnimations);
window.addEventListener('load', checkScrollAnimations);
