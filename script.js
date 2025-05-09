document.addEventListener('DOMContentLoaded', () => {

    // --- Логика мобильного меню ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-menu a');
    const body = document.body;

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-open');
            menuToggle.classList.toggle('is-active');
            body.classList.toggle('no-scroll');
        });

        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
                menuToggle.classList.remove('is-active');
                 body.classList.remove('no-scroll');
            });
        });
    }


    // --- Плавный скролл для навигационных ссылок ---
    const fixedHeader = document.querySelector('.fixed-header');
    let headerHeight = fixedHeader ? fixedHeader.offsetHeight : 0;

    window.addEventListener('resize', () => {
        headerHeight = fixedHeader ? fixedHeader.offsetHeight : 0;
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') === '#') {
             return;
        }

        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                 // history.pushState(null, null, targetId);

                 if (mobileMenu && mobileMenu.classList.contains('is-open')) {
                     mobileMenu.classList.remove('is-open');
                     menuToggle.classList.remove('is-active');
                     body.classList.remove('no-scroll');
                 }
            }
        });
    });

    // --- Логика FAQ (Аккордеон) ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // --- Опционально: Закрываем все другие открытые ответы ---
                // faqItems.forEach(otherItem => {
                //     if (otherItem !== item && otherItem.classList.contains('active')) {
                //         otherItem.classList.remove('active');
                //     }
                // });

                item.classList.toggle('active');
            });
        }
    });

    // --- Инициализация Карты (пример) ---
    // Код для инициализации карты, если используете JS API, будет здесь.
    // Замените на свой код карты.

});