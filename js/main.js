document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Toggle mobile menu when hamburger button is clicked
    hamburgerButton.addEventListener('click', (event) => {
        event.stopPropagation();  // Prevent click from bubbling to document
        mobileMenu.classList.toggle('active');
    });

    // Toggle mobile menu on when clicking anywhere if it's not active
    document.addEventListener('click', (event) => {
        if (!mobileMenu.classList.contains('active')) {
            mobileMenu.classList.add('active');
        }
    });
});
