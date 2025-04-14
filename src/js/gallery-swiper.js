import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function widthValue(widthInner) {
  if (widthInner >= 1440) {
    return {
      rotate: 0,
      stretch: -224,
      depth: 700,
      slideShadows: false,
    };
  } else {
    return {
      rotate: 0,
      stretch: -140,
      depth: 1000,
      slideShadows: false,
    };
  }
}

export const swiperGallery = () => {
  const width = window.innerWidth;
  new Swiper('.swiper-gallery', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    speed: 800,
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: widthValue(width),
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
