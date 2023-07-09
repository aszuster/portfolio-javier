import { useState } from "react";

import Card from "../Card";

import arrow from "../../images/arrow-down-black-small.png";
import videoPlaceholder from "../../images/video-placeholder.png";

function Events() {
  return (
    <>
      <section className="bg-lightGrey h-auto w-screen overflow-hidden relative pb-[100px]">
        <div className="flex mt-[27px] justify-center items-end gap-[10px] mb-[35px]">
          <img src={arrow} alt="" className="w-[13px] h-[13px]" />
          <p className="text-black articulat text-center text-xs font-medium tracking-[1.54px] leading-[6px]">
            próximos eventos
          </p>
        </div>

        <h2 className="text-blue text-center re-70 text-7xl  tracking-tighter leading-[90%] mb-[35px]">
          próximos conciertos!
        </h2>
        <div className="mx-[13px] flex gap-4">
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}

export default Events;
