document.addEventListener("DOMContentLoaded", function () {
    // Greeting message
    const greeting = document.getElementById("greeting");
    const today = new Date();
    const hours = today.getHours();
    if (hours < 12) {
        greeting.textContent = "Good Morning!";
    } else if (hours < 18) {
        greeting.textContent = "Good Afternoon!";
    } else {
        greeting.textContent = "Good Evening!";
    }

    // Carousel functionality
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    images[currentIndex].classList.add('active');

    document.getElementById('nextBtn').onclick = function() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    };

    document.getElementById('prevBtn').onclick = function() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active');
    };

    // Form submission for admission
    document.getElementById("admission-form").onsubmit = function(event) {
        event.preventDefault();
        const formResponse = document.getElementById("form-response");
        formResponse.textContent = "Thank you for your submission!";

        // Here, you would integrate your email sending logic
        // For example, using EmailJS or Formspree
        this.reset();
    };

    // Form submission for contact
    document.getElementById("contactForm").onsubmit = function(event) {
        event.preventDefault();
        const formResponse = document.getElementById("formResponse");
        formResponse.textContent = "Thank you for your message!";

        // Email sending logic can go here

        this.reset();
    };
});
