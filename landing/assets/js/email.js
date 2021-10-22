window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        emailjs.init('user_vSaydeiyGST7PZnU3J0fn');
        event.preventDefault();

        emailjs.sendForm('service_3hounyt', 'template_hh4w0ze', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function (err) {
                console.log('FAILED: ', err);
            });
    });
};