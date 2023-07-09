import { useState } from "react";

import arrow from "../../images/arrow-down-black-small.png";
import videoPlaceholder from "../../images/video-placeholder.png";

function Card() {
  return (
    <>
      <div className="bg-white p-[21px] max-w-[175px] h-[206px] flex flex-col justify-between rounded-[8.85px]">
        <div>
          <p className="articulat text-blue font-extrabold text-[31px] leading-[26.34px] tracking-tight">
            14 de Febrero
          </p>
          <p className="articulat text-[14px]">20:30 hrs</p>
        </div>
        <p className="articulat text-[17px] leading-[90%]">
          Estadio Malvinas, Barcelona.
        </p>
      </div>
    </>
  );
}

export default Card;
