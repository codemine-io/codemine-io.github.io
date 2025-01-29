// Form
function renderBodyJson(name, company, email) {
    return {
        "surveyId": "6797038e84227c1a123e374c",
        "values": { "name": name, "company": company, "email": email },
        "parent": "https://forms.yandex.com/cloud/6797038e84227c1a123e374c/success/?page=1&akey=a697be9432e42266daef4a086b521e0ff70d7a98",
        "dryRun": false
    };
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('The website is under development and this form does not work yet. In the meantime you can contact us thru X: https://x.com/NikitaYVolkov');
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
