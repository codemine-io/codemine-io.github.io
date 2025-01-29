// Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('The website is under development and this form does not work yet. Sorry. In the meantime you can contact us thru X: https://x.com/NikitaYVolkov');
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
