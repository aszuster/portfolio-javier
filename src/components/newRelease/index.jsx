import { useState } from "react";

import misc4 from "../../images/misc-4.png";
import crown from "../../images/crown.png";
import albumCover from "../../images/album-cover-placeholder.png";
import foreslash from "../../images/forselash.svg";
import misc3 from "../../images/misc-3.svg";
import profilePic from "../../images/profile-pic.png";
import pixelCrown from "../../images/crown-pixel.png";
import blackCherry from "../../images/cherry.png";
import blackFlower from "../../images/flower.png";

function newRelease() {
  return (
    <>
      <section className="bg-white h-auto w-screen overflow-hidden relative mb-[40px]">
        <p className="text-dark articulat text-center text-xs font-medium tracking-[1.54px] mt-[27px] mb-[65px]">
          new release!
        </p>
        <div className="max-w-[343px] mx-auto relative">
          <img
            src={blackCherry}
            alt=""
            className="absolute w-[43px] top-[70px] left-[35px]"
          />
          <img
            src={blackFlower}
            alt=""
            className="absolute w-[42px] top-[70px] right-[35px]"
          />
          <h2 className="text-blue text-center re-70 text-7xl  tracking-tighter leading-[90%]">
            el futuro de la música es arcade
          </h2>
        </div>
        <img src={pixelCrown} alt="" className="mx-auto w-[30px] mt-[42px]" />
        <p className="text-dark articulat text-center text-xs font-medium tracking-[1.54px] mt-[10px]">
          niño emperador
        </p>
      </section>
    </>
  );
}

export default newRelease;
