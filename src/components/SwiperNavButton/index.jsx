import React from 'react';
import { useSwiper } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'


export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns hidden lg:flex lg:justify-between ">
        <div className='ml-[-50px] mt-[-15%] z-50'>
      <button onClick={() => swiper.slidePrev()}><ChevronLeftIcon className='w-[34px] pr-[2px]'/></button>
      </div>
      <div className='mr-[-50px] mt-[-15%] z-50'>
      <button onClick={() => swiper.slideNext()}><ChevronRightIcon className="w-[36px] pl-[5px]"/></button>
      </div>
    </div>
  );
};