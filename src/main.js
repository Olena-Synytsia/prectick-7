import {
  getContacts,
  getIdContact,
  createContact,
  putContact,
  deletContact,
} from './js/api';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

getContacts().then(data => console.log(data));
getIdContact(26).then(data => console.log(data));
// createContact({ name: 'Roman', phone: '1234567890' }).then(data =>
//   console.log(data)
// );
// putContact(26, { name: 'Oscar' });
deletContact(26);

const swiper = new Swiper('.mySwiper', {
  // configure Swiper to use modules
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: true,
  modules: [EffectCoverflow, Pagination, Navigation],
});
