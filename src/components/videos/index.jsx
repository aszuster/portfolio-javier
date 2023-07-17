import { useState } from "react";

import arrow from "../../images/arrow-down-white.png";
import videoPlaceholder from "../../images/video-placeholder.png";
import greyArrow from "../../images/grey-arrow.svg"
import greyArrowRight from "../../images/grey-arrow-right.svg"

function Videos() {
  return (
    <>
      <section className="video-bg bg-dark h-auto w-screen overflow-hidden relative">
        <div className="lg:max-w-[1450px] lg:mx-auto">
        <div className="flex mt-[27px] justify-center items-end gap-[10px] mb-[35px] lg:justify-start lg:mt-[90px] lg:mb-[77px] lg:px-[200px] xxxl:px-0">
          <img src={arrow} alt="" className="w-[13px] h-[13px]" />
          <p className="text-white articulat text-center text-xs font-medium tracking-[1.54px] leading-[6px] lg:tracking-[9px] lg:text-left ">
            videos & actuaciones
          </p>
        </div>

<div className="lg:flex lg:gap-[350px] lg:px-[200px] lg:pb-[50px] xxxl:pb-0 xxxl:px-0">
        <h2 className="text-white text-center re-70 text-7xl  tracking-tighter leading-[90%] mb-[35px]">
          videos
        </h2>
        <div className="lg:flex lg:items-start">
          <img src={greyArrowRight} alt="" className="hidden lg:block lg:w-[20px]"/>
        <p className="text-blue articulat text-left text-[18px] font-normal leading-[130%] tracking-[1.54px] mt-[10px] mx-[13px] mb-[35px] lg:my-[0] lg:max-w-[600px]">
          Descubre los videos de Javier Lekker en YouTube, donde la música cobra
          vida a través de impactantes imágenes y narrativas visuales.
        </p>
        </div>
        </div>
        <div className="lg:video-bg px-[13px] lg:pb-[107px] hidden lg:block lg:ml-[200px] lg:mr-[300px]">
          <div className="grid grid-cols-2 gap-3 mt-[14px]">
          <img src={videoPlaceholder} alt="" />
          <img src={videoPlaceholder} alt="" />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-[14px]">
           
            <img src={videoPlaceholder} alt="" />
            <img src={videoPlaceholder} alt="" />
            <img src={videoPlaceholder} alt="" />
          </div>
        </div>
        <div className="video-bg px-[13px] pb-[66px] lg:hidden">
          <img src={videoPlaceholder} alt="" />
          <div className="grid grid-cols-2 gap-3 mt-[14px]">
            <img src={videoPlaceholder} alt="" />
            <img src={videoPlaceholder} alt="" />
            <img src={videoPlaceholder} alt="" />
            <img src={videoPlaceholder} alt="" />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Videos;
