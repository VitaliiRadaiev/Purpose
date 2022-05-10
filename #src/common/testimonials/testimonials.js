{
    let testimonials = document.querySelector('[data-slider="testimonials-slider"]');
    if(testimonials) {
        let sliderData = new Swiper(testimonials.querySelector('.swiper'), {
            
            effect:  'fade',
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 600,
            pagination: {
                el: testimonials.querySelector('[data-slider="pagination"]'),
                clickable: true,
            },
            navigation: {
                nextEl: testimonials.querySelector('[data-action="btn-next"]'),
                prevEl: testimonials.querySelector('[data-action="btn-prev"]'),
            },
        });
    }
}