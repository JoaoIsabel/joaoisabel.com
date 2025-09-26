// Daily Code News functionality
document.addEventListener('DOMContentLoaded', function() {
    // Update the date display
    const dateElements = document.querySelectorAll('.date');
    const today = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Update the main date display if it exists
    const mainDateElement = document.querySelector('.daily-news .date');
    if (mainDateElement) {
        mainDateElement.textContent = `Today's curated tech and coding articles - ${today}`;
    }

    // Add click tracking for external links
    const newsLinks = document.querySelectorAll('.news-item h3 a');
    newsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // In a real implementation, you might want to track these clicks
            console.log('News link clicked:', this.href);
        });
    });

    // Add keyboard navigation for news items
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const link = this.querySelector('h3 a');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
    });

    // Simple animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe news items for animation
    newsItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});