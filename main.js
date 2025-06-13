document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navLinks = document.getElementById('main-nav-list');

    if (hamburgerButton && navLinks) {
        hamburgerButton.addEventListener('click', () => {
            // Toggle the .active class on the navigation links UL
            navLinks.classList.toggle('active');

            // Toggle the .active class on the hamburger button for "X" animation
            hamburgerButton.classList.toggle('active');

            // Update aria-expanded attribute for accessibility
            const isExpanded = navLinks.classList.contains('active');
            hamburgerButton.setAttribute('aria-expanded', isExpanded);
        });
    }
});