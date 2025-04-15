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
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    }
});