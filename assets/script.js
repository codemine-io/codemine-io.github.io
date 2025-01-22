document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    
    // Here you would typically send the data to your backend
    console.log('Schedule requested for:', name, email);
    alert('Thank you! We will contact you shortly.');
});
