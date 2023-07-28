import { useState } from "react";

import pixelCrown from "../../images/crown-pixel.png";
import blackCherry from "../../images/cherry.svg";
import blackFlower from "../../images/flower.svg";
import blackArrow from "../../images/arrow-down-black-small.png";

function newRelease() {
  return (
    <>
      <section className="bg-white h-auto w-screen overflow-hidden relative mb-[40px] lg:mb-[97.6px]">
        <div className="lg:flex lg:justify-around lg:mt-[65px] xl:mt-[70px] xxl:mt-[80px] xxxl:mt-[100px] lg:mb-[83px] xl:mb-[100px] xxl:mb-[130px] xxxl:mb-[186px]">
          <div className="hidden lg:flex ">
            <img src={blackArrow} alt="" className="blink w-[14.4px] lg:mr-[20px]" />
            <p className="text-dark articulat text-center text-xs font-medium tracking-[1.54px] mt-[27px] mb-[65px] lg:tracking-[9px] lg:my-[0]">
              hyperpop & synthpop
            </p>
          </div>
          <p className="text-dark articulat text-center text-xs font-medium tracking-[1.54px] mt-[27px] mb-[65px] lg:tracking-[9px] lg:my-[0]">
            new release!
          </p>
        </div>
        <div className="max-w-[343px] lg:max-w-[100%] mx-auto relative lg:mx-[200px] xl:mx-[100px] xxl:mx-[80px] xxxl:mx-[100px] ">
          <img
            src={blackCherry}
            alt=""
            className="absolute w-[43px] top-[70px] left-[35px] lg:left-[-40px] xl:left-[35px] xxl:left-[-20px] xxxl:left-[35px] lg:w-[112.5px] lg:top-[192px] xl:top-[200px] xxl:top-[22px]"
          />
          <img
            src={blackFlower}
            alt=""
            className="absolute w-[42px] top-[70px] right-[35px] lg:right-[-40px] xl:right-[35px] xxl:right-[-20px] xxxl:right-[35px] lg:w-[110.7px] lg:top-[192px] xl:top-[200px] xxl:top-[22px]"
          />
          <h2 className="title-futuro text-blue text-center re-70 text-7xl  tracking-tighter leading-[90%] lg:text-[188px]">
            el futuro de la música es arcade
          </h2>
        </div>
        <div className="text-emperador">
        <img src={pixelCrown} alt="" className="mx-auto w-[30px] mt-[42px] lg:w-[66.6px] lg:mt-[50px] xl:mt-[60px] xxl:mt-[100px]" />
        <p className="text-dark articulat text-center text-xs font-medium tracking-[1.54px] mt-[10px] lg:text-[14.4px] lg:tracking-[4.5px] lg:mt-[23.4px]">
          niño emperador
        </p>
        </div>
      </section>
    </>
  );
}

export default newRelease;
