document.addEventListener('DOMContentLoaded', function () {
    // Scroll-to-top Button
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.classList.add('scroll-to-top-btn');
    scrollToTopBtn.innerHTML = '&#8679;';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            scrollToTopBtn.classList.add('active');
            navbar.classList.add('scrolled');
        } else {
            scrollToTopBtn.classList.remove('active');
            navbar.classList.remove('scrolled');
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Menu Toggle
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('active');
    });

    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('active');
        });
    });

    // Accordion Functionality
    const acc = document.getElementsByClassName('accordion');
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove('show');
            } else {
                const allPanels = document.getElementsByClassName('panel');
                for (let j = 0; j < allPanels.length; j++) {
                    allPanels[j].style.maxHeight = null;
                    allPanels[j].classList.remove('show');
                }
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.classList.add('show');
            }
        });
    }
});