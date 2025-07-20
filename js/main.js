// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Select the menu button and the navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Check if the menu toggle button exists
    if (menuToggle) {
        // Add a click event listener to the button
        menuToggle.addEventListener('click', function() {
            // Toggle the 'nav-active' class on the navigation menu
            // This class will be used in CSS to show or hide the menu
            mainNav.classList.toggle('nav-active');
        });
    }
});
