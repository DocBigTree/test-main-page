// Main JavaScript Entry Point
// Note: form-validation.js and animations.js are loaded separately in HTML

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize global features
    initializeAccessibility();
    initializePerformanceOptimizations();
});

// Accessibility enhancements
function initializeAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#introduction';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--color-accent);
        color: var(--color-bg-primary);
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Announce page changes to screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    document.body.appendChild(announcer);
}

// Performance optimizations
function initializePerformanceOptimizations() {
    // Lazy load images if any are added later
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Handle external links
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[target="_blank"]');
    if (link) {
        // Add rel="noopener noreferrer" for security
        if (!link.rel.includes('noopener')) {
            link.rel = link.rel ? `${link.rel} noopener noreferrer` : 'noopener noreferrer';
        }
    }
});
