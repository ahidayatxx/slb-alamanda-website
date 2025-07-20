// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing mobile menu...');
    
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    // Debug: Periksa apakah elemen ditemukan
    console.log('Menu toggle found:', menuToggle);
    console.log('Main nav found:', mainNav);
    
    if (menuToggle && mainNav) {
        // Tambahkan overlay untuk mobile
        let overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.id = 'menu-overlay';
        document.body.appendChild(overlay);
        
        console.log('Overlay created:', overlay);
        
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Menu toggle clicked');
            
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                console.log('Menu opened, body scroll disabled');
            } else {
                document.body.style.overflow = '';
                console.log('Menu closed, body scroll enabled');
            }
        });
        
        // Close menu when clicking on a menu item
        const menuLinks = mainNav.querySelectorAll('a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                console.log('Menu link clicked, closing menu');
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking on overlay
        overlay.addEventListener('click', function() {
            console.log('Overlay clicked, closing menu');
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close menu when clicking outside (alternative method)
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
                console.log('Clicked outside, closing menu');
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
                console.log('Window resized to desktop, closing menu');
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        console.log('Mobile menu initialized successfully');
        
    } else {
        console.error('Menu toggle or main nav not found!');
        // Tambahkan pesan error untuk debugging
        if (!menuToggle) console.error('Element with ID "menu-toggle" not found');
        if (!mainNav) console.error('Element with ID "main-nav" not found');
    }
});
