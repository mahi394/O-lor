function scrollToSection(id) {
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}


window.addEventListener('scroll', function() {
    const button = document.querySelector('.hero-button');
    const scrollPosition = window.scrollY;
    const triggerPoint = 300; // Scroll position at which the button will appear

    if (scrollPosition > triggerPoint) {
        // Add the "visible" class only once, when the user scrolls down past the trigger point
        if (!button.classList.contains('visible')) {
            button.classList.add('visible');
        }
    } else {
        // Keep the button visible even when scrolling back up, until the page reloads
        // button.classList.remove('visible'); // Don't remove it now
    }
});
