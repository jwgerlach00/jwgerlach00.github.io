// script.js

document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('content');
    
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                contentContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    function handleNavigation() {
        const path = window.location.pathname;

        // Load the appropriate content based on the path
        if (path === '/') {
            loadContent('index.html');
        } else if (path === '/about') {
            loadContent('about.html');
    }

    // Handle initial page load and navigation
    handleNavigation();

    // Intercept link clicks and load content dynamically
    document.addEventListener('click', function (event) {
        const target = event.target;
        
        if (target.tagName === 'A') {
            event.preventDefault();
            const href = target.getAttribute('href');
            window.history.pushState({}, '', href);
            handleNavigation();
        }
    });

    // Handle back/forward navigation with browser buttons
    window.addEventListener('popstate', handleNavigation);
});
