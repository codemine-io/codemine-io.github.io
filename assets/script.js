// Form
function renderBodyJson(name, company, email) {
    return {
        "surveyId": "6797038e84227c1a123e374c",
        "values": { "name": name, "company": company, "email": email },
        "parent": "https://forms.yandex.com/cloud/6797038e84227c1a123e374c/success/?page=1&akey=a697be9432e42266daef4a086b521e0ff70d7a98",
        "dryRun": false
    };
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('[name="name"]').value;
    const company = this.querySelector('[name="company"]').value;
    const email = this.querySelector('[name="email"]').value;

    const bodyJson = {
        "surveyId": "6797038e84227c1a123e374c",
        "values": {
            "name": name,
            "company": company,
            "email": email
        },
        "parent": "https://forms.yandex.com/cloud/6797038e84227c1a123e374c/success/?page=1&akey=a697be9432e42266daef4a086b521e0ff70d7a98",
        "dryRun": false
    };
    fetch("https://forms.yandex.com/cloud/gateway/root/form/postSurvey", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            // "priority": "u=1, i",
            // "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
            // "sec-ch-ua-mobile": "?0",
            // "sec-ch-ua-platform": "\"macOS\"",
            // "sec-fetch-dest": "empty",
            // "sec-fetch-mode": "cors",
            // "sec-fetch-site": "same-origin",
            "x-csrf-token": "cef648e1e98eb60e03015e1987ee62916e066584:1737951367",
            "x-forms-yandexuid": "7579547131589821504",
            "x-use-collab": "1"
        },
        "referrer": "https://forms.yandex.com/cloud/6797038e84227c1a123e374c/?page=1",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify(bodyJson),
        "method": "POST",
        // "mode": "cors",
        "mode": "no-cors",
        "credentials": "include"
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error);
    });
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
