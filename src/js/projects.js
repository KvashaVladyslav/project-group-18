// У файлі main.js
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel, EffectCreative, EffectCards } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.project .swiper.project', {
  slidesPerView: 1,
  speed: 1200,
  direction: 'horizontal',
  spaceBetween: 32,
  navigation: {
    nextEl: '.project .swiper-btn-next',
    prevEl: '.project .swiper-btn-prev',
  },
  modules: [Navigation, Keyboard, Mousewheel, EffectCreative, EffectCards, Pagination],
  mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  effect: 'cards',
  EffectCards: {
    perSlideOffset: 8,
    perSlideRotate: 2,
    rotate: true,
    slideShadows: true,
  },

});
