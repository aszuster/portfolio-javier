import { useState } from "react";

import arrow from "../../images/arrow-down-black-small.png";
import videoPlaceholder from "../../images/video-placeholder.png";
import events from "../../events.json"

function Card( data ) {


  return (
    
    <>
      <div className="cursor-pointer bg-white hover:bg-green p-[21px] max-w-[175px] h-[206px] flex flex-col justify-between rounded-[8.85px] lg:max-w-[301.8px] lg:h-[353.8px] lg:p-[36.4px]">
        <div>
          <p className="articulat text-blue font-extrabold text-[31px] leading-[26.34px] tracking-tight lg:text-[53.14px] lg:leading-[45.17px]">
            {data.fecha}
          </p>
          <p className="articulat text-[14px] lg:text-[24.29px]">{data.hora}</p>
        </div>
        <p className="articulat text-[17px] leading-[90%] lg:text-[30.37px] lg:leading-[27.33px]">
          {data.espacio}, <span className="font-semibold">{data.ciudad}.</span>
        </p>
      </div>
    </>
  );
}

export default Card;
