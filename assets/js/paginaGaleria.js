
/**
 * Selector
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

/**
 * EventListener
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}

/**
 * Filtrado de imagenes en la galería
 */
window.addEventListener('load', () => {
    let portfolioContainer = select('.galeria-container');
    if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.galeria-item'
        });

        let portfolioFilters = select('#galeria-filters li', true);

        on('click', '#galeria-filters li', function (e) {
            e.preventDefault();
            portfolioFilters.forEach(function (el) {
                el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');

            portfolioIsotope.arrange({
                filter: this.getAttribute('data-filter')
            });
            portfolioIsotope.on('arrangeComplete', function () {
                AOS.refresh()
            });
        }, true);
    }

});

/**
 * Inicializar Glightbox
 */
const portfolioLightbox = GLightbox({
    selector: '.galeria-lightbox'
});

/**
 * Inicializar Glightbox en detalles de galería
 */
const portfolioDetailsLightbox = GLightbox({
    width: '90%',
    height: '90vh'
});

/**
 * Slider de detalles de galería
 */
new Swiper({
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        type: 'bullets',
        clickable: true
    }
});