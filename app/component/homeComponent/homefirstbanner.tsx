'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import React, { useRef, useState } from 'react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

export default function HomeFirstBanner() {
  return (<div className="w-full  flex justify-center my-5 ">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}

      pagination={{ clickable: true }}
      navigation={true}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}

    >
      <SwiperSlide><img className='w-full' src="/pic/Group 1261153156.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full' src="/pic/Group 1261153156.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full' src="/pic/Group 1261153156.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full' src="/pic/Group 1261153156.png" alt="" /></SwiperSlide>

    </Swiper>

  </div>)
}