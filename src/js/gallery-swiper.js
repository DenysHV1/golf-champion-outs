import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperGallery = () => {
  new Swiper('.swiper-gallery', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    speed: 800,
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: -224,
      depth: 700,
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

export default swiperGallery;
