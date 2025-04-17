const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 3300,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    effect: 'slide',
    speed: 600
});