// Scroll Animations and Interactive Effects

class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.init();
    }

    init() {
        this.setupScrollObserver();
        this.setupCounterAnimations();
        this.setupSmoothScrolling();
        this.setupCopyButtons();
    }

    setupScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, this.observerOptions);

        // Observe all capability cards
        const capabilityCards = document.querySelectorAll('.capability-card');
        capabilityCards.forEach(card => {
            card.classList.add('animate-on-scroll');
            observer.observe(card);
        });

        // Observe all doc cards
        const docCards = document.querySelectorAll('.doc-card');
        docCards.forEach(card => {
            card.classList.add('animate-on-scroll');
            observer.observe(card);
        });

        // Observe sections
        const sections = document.querySelectorAll('.introduction, .github-section, .documentation, .trial-section');
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    setupCounterAnimations() {
        const statNumbers = document.querySelectorAll('.stat-number');

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    this.animateCounter(entry.target);
                    entry.target.dataset.animated = 'true';
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => counterObserver.observe(stat));
    }

    animateCounter(element) {
        const target = parseFloat(element.dataset.target);
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        const stepDuration = duration / steps;

        let current = 0;
        element.classList.add('counting');

        const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(timer);
                element.classList.remove('counting');
            }

            // Format number based on target
            if (target >= 1000000) {
                element.textContent = (current / 1000000).toFixed(1) + 'M+';
            } else if (target >= 1000) {
                element.textContent = (current / 1000).toFixed(0) + 'K+';
            } else if (target % 1 !== 0) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepDuration);
    }

    setupSmoothScrolling() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');

                // Skip if it's just "#" or modal close
                if (href === '#' || href === '#!') {
                    return;
                }

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupCopyButtons() {
        const copyButtons = document.querySelectorAll('.copy-btn');

        copyButtons.forEach(button => {
            button.addEventListener('click', async () => {
                const targetId = button.dataset.clipboardTarget;
                const targetElement = document.getElementById(targetId);

                if (!targetElement) return;

                const textToCopy = targetElement.textContent;

                try {
                    await navigator.clipboard.writeText(textToCopy);

                    // Show success feedback
                    const originalText = button.textContent;
                    button.textContent = 'Copied!';
                    button.style.backgroundColor = 'var(--color-success)';
                    button.style.color = 'var(--color-bg-primary)';

                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.backgroundColor = '';
                        button.style.color = '';
                    }, 2000);
                } catch (err) {
                    // Failed to copy
                    button.textContent = 'Failed';

                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                }
            });
        });
    }
}

// Parallax effect for hero background
class ParallaxEffect {
    constructor() {
        this.heroBackground = document.querySelector('.hero-background');
        if (!this.heroBackground) return;

        this.ticking = false;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * 0.5;

                    if (this.heroBackground) {
                        this.heroBackground.style.transform = `translate3d(0, ${rate}px, 0)`;
                    }
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
    }
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ScrollAnimations();
        new ParallaxEffect();
    });
} else {
    new ScrollAnimations();
    new ParallaxEffect();
}
