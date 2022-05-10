let imagesCarousels = document.querySelectorAll('[data-slider="images-carousel"]');
if (imagesCarousels.length) {
    imagesCarousels.forEach(imagesCarousel => {
        let swiperImagesCarousel = new Swiper(imagesCarousel.querySelector('.swiper'), {
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 800,
            loop: true,
            pagination: {
                el: imagesCarousel.querySelector('[data-slider="pagination"]'),
                clickable: true,
            },
            navigation: {
                nextEl: imagesCarousel.querySelector('[data-action="btn-next"]'),
                prevEl: imagesCarousel.querySelector('[data-action="btn-prev"]'),
            },
        });
    })

}