// У файлі main.js
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Keyboard],
  
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

});
