// Image Slider Functionality
let currentSlide = 0;

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slides img');
  const totalSlides = slides.length;

  slides[currentSlide].classList.add('active');

  document.querySelector('.next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
  });

  document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
  });

  // Contact Form Validation
  const contactForm = document.forms['contactForm'];
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      const name = contactForm['name'].value.trim();
      const email = contactForm['email'].value.trim();

      if (!name || !email) {
        alert('Please fill out all required fields.');
        event.preventDefault();
        return false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return false;
      }

      alert('Message sent successfully!');
    });
  }

  // Smooth Scroll for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
