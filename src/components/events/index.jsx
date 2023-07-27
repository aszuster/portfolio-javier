import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { SwiperNavButtons } from "../SwiperNavButton";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import events from "../../events.json"

// import required modules
import { Navigation } from 'swiper/modules';

import Card from "../Card";

import arrow from "../../images/arrow-down-black-small.png";
import blackRectangle from "../../images/black-rectangle.svg"

function Events() {
  return (
    <>
      <section className="bg-lightGrey h-auto w-screen overflow-hidden relative pb-[100px] lg:pt-[80px] xxxl:pt-[132px] lg:pb-[100px] xxxl:pb-[200px]" id="events">
        <img src={blackRectangle} alt="" className="hidden lg:block lg:absolute lg:bottom-[-1px] lg:right-0" />
        <div className="lg:max-w-[1500px] lg:mx-auto ">
          <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-start lg:mb-[60px] xxxl:mb-[136px] lg:px-20 xxxl:px-0">
        <div className="flex mt-[27px] justify-center items-end gap-[10px] mb-[35px]  lg:mt-[0] lg:mb-[0]">
          <img src={arrow} alt="" className="w-[13px] h-[13px]" />
          <p className="text-black articulat text-center text-xs font-medium tracking-[1.54px] leading-[6px] lg:tracking-[9px]">
            próximos eventos
          </p>
        </div>

        <h2 className="text-blue text-center re-70 text-7xl  tracking-tighter leading-[90%] mb-[35px] lg:w-[300px] lg:mb-[0]">
          próximos conciertos!
        </h2>
        </div>
        <div className="mx-[13px] flex gap-4">

        <Swiper
        slidesPerView={2}
        spaceBetween={20}
   
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        
        breakpoints={{
          976: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1727: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* {events && events.map(({ id, fecha, hora, espacio, ciudad }) => (
          console.log(id),
          <SwiperSlide key={id}><Card fecha={fecha} hora={hora} espacio={espacio} ciudad={ciudad}/></SwiperSlide>
        ))} */}
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperNavButtons />
      </Swiper>
        </div>
        </div>
        
      </section>
    </>
  );
}

export default Events;
