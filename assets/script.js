document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Here you would typically send the email to your backend
    console.log('Schedule requested for:', email);
    alert('Thank you! We will contact you shortly.');
});
