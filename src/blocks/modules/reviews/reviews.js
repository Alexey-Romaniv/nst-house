import Swiper, { Navigation, Pagination } from 'swiper';


const reviewSwiper = new Swiper(".reviewSwiper",{
    modules: [Navigation],
    loop: true,

    navigation: {
        nextEl: '.review-next',
        prevEl: '.review-prev',
    },

})