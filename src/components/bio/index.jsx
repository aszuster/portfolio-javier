import { useState } from "react";

import crown from "../../images/crown.png";
import profilePic from "../../images/profile-pic.png";

function Bio() {
  return (
    <>
      <section className="bg-grey h-auto w-screen overflow-hidden relative">
        <p className="text-blue articulat text-center text-xs font-medium tracking-[1.54px] mt-[27px]">
          sobre el artista
        </p>
        <h2 className="text-blue text-center re-70 text-7xl mt-[65px] tracking-tighter">
          biografia
        </h2>
        <img src={crown} alt="" className="absolute crown w-[76px]" />
        <div className="flex justify-center bio-bg min-h-[430px]">
          <img src={profilePic} alt="" className="w-[340px] m-auto" />
        </div>
        <p className="text-blue articulat font-normal mx-[13px] mt-[20px] text-[18px]">
          Javier Lekker es un talentoso músico y compositor que ha cautivado al
          público con su estilo único y su pasión por la música. Con su último
          lanzamiento, el álbum "Arcade", Javier Lekker nos transporta a un
          viaje musical lleno de nostalgia y emociones.
        </p>
        <div className="flex justify-center bio-bg-highlight min-h-[200px] mt-[20px]">
          <p className="text-blue articulat font-black text-center mx-[12px] mt-[20px] text-[30px] leading-[110%] tracking-tight">
            Con su último lanzamiento, el álbum "Arcade", Javier Lekker nos
            transporta a un viaje musical lleno de nostalgia y emociones.
          </p>
        </div>
        <p className="text-blue articulat font-normal mx-[12px] mt-[20px] text-[18px] leading-[140%] mb-[80px]">
          Este proyecto nos sumerge en un mundo donde los recuerdos de la
          infancia se entrelazan con las experiencias de la vida adulta, creando
          una atmósfera única y cautivadora.
        </p>
      </section>
    </>
  );
}

export default Bio;
