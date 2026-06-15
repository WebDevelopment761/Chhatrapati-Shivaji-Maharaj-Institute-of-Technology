// 1. Mobile Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked on mobile screen
document.querySelectorAll('.nav-links a').bind = function(){
    navLinks.classList.remove('active');
};

// 2. Automated & Manual Banner Image Slider
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

// Auto Slide Change timer
setInterval(() => showSlide(currentSlide + 1), 6000);

// 3. Admission Form Submission Handler
const admissionForm = document.getElementById('admissionForm');
admissionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentName = document.getElementById('studentName').value;
    alert(`Congratulations ${studentName}!\nYour admission request for year 2026 has been successfully captured. Our counselor will contact you soon.`);
    admissionForm.reset();
});


// === 4. Academic Courses Horizontal Scroll Logic (HA CODE SHEVTI JODHLA AHE) ===
const courseGrid = document.getElementById('courseGrid');
const courseNext = document.getElementById('courseNext');
const coursePrev = document.getElementById('coursePrev');

if (courseGrid && courseNext && coursePrev) {
    courseNext.addEventListener('click', () => {
        courseGrid.scrollLeft += 400; // Right la 400px sarakel
    });

    coursePrev.addEventListener('click', () => {
        courseGrid.scrollLeft -= 400; // Left la 400px sarakel
    });
}
