// Add event listener for scroll events
window.addEventListener('scroll', function() {
    // Add motion blur class to body when scrolling
    document.body.classList.add('motion-blur');

    // Clear timeout to prevent multiple class additions
    clearTimeout(timeout);

    // Set timeout to remove motion blur class after 500ms of no scrolling
    var timeout = setTimeout(function() {
        document.body.classList.remove('motion-blur');
    }, 500);
});
