import Swiper, { Navigation, Pagination } from 'swiper';



// init Swiper:
const swiper = new Swiper('.gallery-swiper', {
    modules: [Navigation],
    slidesPerView:1,

    // Optional parameters
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
    },

    // And if we need scrollbar
    breakpoints:{
        1280: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween:30,
        }
    },
});