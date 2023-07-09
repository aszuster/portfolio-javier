import { useState } from "react";

import arrow from "../../images/arrow-down-white.png";
import videoPlaceholder from "../../images/video-placeholder.png";

function Videos() {
  return (
    <>
      <section className="bg-dark h-auto w-screen overflow-hidden relative">
        <div className="flex mt-[27px] justify-center items-end gap-[10px] mb-[35px]">
          <img src={arrow} alt="" className="w-[13px] h-[13px]" />
          <p className="text-white articulat text-center text-xs font-medium tracking-[1.54px] leading-[6px]">
            videos & actuaciones
          </p>
        </div>

        <h2 className="text-white text-center re-70 text-7xl  tracking-tighter leading-[90%] mb-[35px]">
          videos
        </h2>
        <p className="text-blue articulat text-left text-[18px] font-normal leading-[130%] tracking-[1.54px] mt-[10px] mx-[13px] mb-[35px]">
          Descubre los videos de Javier Lekker en YouTube, donde la música cobra
          vida a través de impactantes imágenes y narrativas visuales.
        </p>
        <div className="video-bg px-[13px] pb-[66px]">
          <img src={videoPlaceholder} alt="" />
          <div className="grid grid-cols-2 gap-3 mt-[14px]">
            <img src={videoPlaceholder} alt="" />
            <img src={videoPlaceholder} alt="" />
            <img src={videoPlaceholder} alt="" />
            <img src={videoPlaceholder} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Videos;
