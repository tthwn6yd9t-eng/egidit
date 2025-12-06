// ==================== SELECTIVE RIGHT-CLICK PROTECTION ====================

document.addEventListener('contextmenu', (e) => {
    const target = e.target;
    
    // Define what CAN be right-clicked
    const allowedSelectors = [
        '.profile-name',
        '.profile-title',
        '.social-btn',
        'a',
        'h1',
        'p'
    ];
    
    // Check if the clicked element or its parent matches allowed selectors
    const isAllowed = allowedSelectors.some(selector => 
        target.matches(selector) || target.closest(selector)
    );
    
    // Block right-click if not allowed
    if (!isAllowed) {
        e.preventDefault();
    }
});

// Prevent image dragging and selection
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
    
    profileImage.style.userSelect = 'none';
    profileImage.style.webkitUserSelect = 'none';
}