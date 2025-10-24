import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; 
import H1 from './Hero1.jpg'
import H2 from './Hero2.jpg'
import H3 from './Hero3.jpg'
import H4 from './Hero4.jpg'
import H5 from './H5.jpg'
const HeroSwiper = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true} 
        onSlideChange={() => console.log()}
        onSwiper={(swiper) => console.log()}
      >
        <SwiperSlide><img src={H1} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={H2} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={H3} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={H4} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={H5} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
