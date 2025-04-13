import Swiper from 'swiper';
import 'swiper/css';

const reviewsSwiper = () => {
  new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    grabCursor: true,
    spaceBetween: 24,
    speed: 800,
    simulateTouch: true,
    touchRatio: 1,
    initialSlide: 0,
    mousewheel: {
      sensitivity: 0.5,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: -24,
      depth: 50,
      slideShadows: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 1,
      },
    },
  });
};

export default reviewsSwiper;