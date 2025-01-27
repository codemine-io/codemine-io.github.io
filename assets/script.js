document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;

    // Here you would typically send the data to your backend
    console.log('Schedule requested for:', name, email);
    alert('Thank you! We will contact you shortly.');
});

// Scroll animations
(function () {
    const sections = document.querySelectorAll('section, main');
    const options = {
        root: null,
        rootMargin: '-30% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
})();
