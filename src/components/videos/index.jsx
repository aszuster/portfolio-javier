import { useState } from "react";

import arrow from "../../images/arrow-down-white.png";
import greyArrowRight from "../../images/grey-arrow-right.svg";
import dior from "../../images/videos/dior.png";
import termodinamica from "../../images/videos/termodinamica.png";
import huracan from "../../images/videos/huracan.png";
import gravedad from "../../images/videos/gravedad.png";
import elMonstruo from "../../images/videos/el-monstruo.png";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

function Videos(props) {



  const videos = props.props;

//desktop video division
     const firstPartVideos =  videos.slice(0, 2)
     const secondPartVideos = videos.slice(2, 5)
  
//mobile video division

const firstVideoMobile = videos.slice(0, 1);
const restOfVideosMobile = videos.slice(1, 5);



  return (
    <>
      <section
        className="video-bg bg-dark h-auto w-screen overflow-hidden relative mb-[-1px]"
        id="videos"
      >
        <div className="lg:max-w-[1450px] lg:mx-auto">
          <div className="flex mt-[27px] justify-center items-end gap-[10px] mb-[35px] lg:justify-start lg:mt-[90px] lg:mb-[77px] lg:px-[200px] xxxl:px-0">
            <img src={arrow} alt="" className="blink w-[13px] h-[13px]" />
            <p className="text-white articulat text-center text-xs font-medium tracking-[1.54px] leading-[6px] lg:tracking-[9px] lg:text-left ">
              videos & actuaciones
            </p>
          </div>

          <div className="lg:flex lg:gap-[350px] lg:px-[200px] lg:pb-[50px] xxxl:pb-0 xxxl:px-0">
            <h2 className="text-white text-center re-70 text-7xl  tracking-tighter leading-[90%] mb-[35px]">
              videos
            </h2>
            <div className="lg:flex lg:items-start">
              <img
                src={greyArrowRight}
                alt=""
                className="hidden lg:block lg:w-[20px] arrowAnimX"
              />
              <p className="text-blue articulat text-left text-[18px] font-normal leading-[130%] tracking-[1.54px] mt-[10px] mx-[13px] mb-[35px] lg:my-[0] lg:max-w-[600px]">
                Descubre los videos de Javier Lekker en YouTube, donde la música
                cobra vida a través de impactantes imágenes y narrativas
                visuales.
              </p>
            </div>
          </div>
          <div className="lg:video-bg px-[13px] lg:pb-[107px] hidden lg:block lg:ml-[200px] lg:mr-[300px]">
            <div className="grid grid-cols-2 gap-3 mt-[14px]">
            {firstPartVideos.map((video) => {
                  return (
                    <a
                    className="vid relative overflow-hidden"
                    href={video.video}
                    target="blank"
                  >
                    <img src={video.image} alt="" />
                    <div className="play-button">
                      <PlayCircleIcon className="w-[70px] h-[70px] text-white" />
                    </div>
                  </a>
                  );
                })}
            </div>
            <div className="grid grid-cols-3 gap-3 mt-[14px]">
            {secondPartVideos.map((video) => {
                  return (
                    <a
                    className="vid relative overflow-hidden"
                    href={video.video}
                    target="blank"
                  >
                    <img src={video.image} alt="" />
                    <div className="play-button-small">
                      <PlayCircleIcon className="w-[70px] h-[70px] text-white" />
                    </div>
                  </a>
                  );
                })}
            </div>
          </div>
          <div className="video-bg px-[13px] pb-[66px] lg:hidden">
          {firstVideoMobile.map((video) => {
                  return (
                    <a
                    className="relative"
                    href={video.video}
                    target="blank"
                  >
                    <img src={video.image} alt="" />
                    <div className="play-button-mobile">
                      <PlayCircleIcon className="w-[40px] h-[40px] text-white" />
                    </div>
                  </a>
                  );
                })}
            <div className="grid grid-cols-2 gap-3 mt-[14px]">
            {restOfVideosMobile.map((video) => {
                  return (
                    <a
                    className="relative"
                    href={video.video}
                    target="blank"
                  >
                    <img src={video.image} alt="" />
                    <div className="play-button-mobile">
                      <PlayCircleIcon className="w-[40px] h-[40px] text-white" />
                    </div>
                  </a>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Videos;
