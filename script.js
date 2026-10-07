// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Contact Form Handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent full page reload
            
            // Get user name
            const nameInput = document.getElementById('nom').value;

            // Create success alert dynamically
            const alertBox = document.createElement('div');
            alertBox.className = 'alert alert-success alert-dismissible fade show mt-3';
            alertBox.role = 'alert';
            alertBox.innerHTML = `
                <i class="fa-solid fa-circle-check me-2"></i>
                Merci <strong>${nameInput}</strong> ! Votre message a été envoyé avec succès. Nous vous contacterons sous peu.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;

            // Insert alert after form and reset fields
            contactForm.appendChild(alertBox);
            contactForm.reset();

            // Auto-remove alert after 5 seconds
            setTimeout(() => {
                alertBox.remove();
            }, 5000);
        });
    }

    // 2. Dynamic Navbar Shadow on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });

    // 3. Back to Top Button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    backToTopBtn.className = 'btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4 d-none shadow';
    backToTopBtn.style.zIndex = '1000';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('d-none');
        } else {
            backToTopBtn.classList.add('d-none');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});