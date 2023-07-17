import { useState } from "react";

import crown from "../../images/crown.png";
import profilePic from "../../images/profile-pic.png";
import greenSquare from "../../images/green-square.svg";

function Bio() {
  return (
    <div className="bg-grey">
      <section className="bg-grey h-auto w-screen overflow-hidden relative lg:flex lg:justify-center ">
        <img
          src={greenSquare}
          alt=""
          className="hidden lg:block absolute lg:top-[-1px] lg:left-[0]"
        />
        <div className="lg:max-w-[1728px] lg:flex lg:flex-row lg:gap-[20px] items-center lg:p-20 lg:pb-10 xxxl:p-0"> 
          <div className="lg:max-w-[700px] lg:min-h-[600px] xl:min-h-[750px]  lg:relative">
            <div className="lg:flex lg:justify-between lg:max-w-[600px] lg:grow lg:mb-[100px] lg:pt-[0px] xl:pt-[45px]">
              <p className="hidden lg:block text-blue articulat text-center text-xs font-medium tracking-[1.54px] mt-[15px] lg:mt-[-88px] lg:ml-[50px] xxxl:ml-0 xxxl:mt-[15px] lg:tracking-[4.5px]">
                javier lekker
              </p>
              <p className="text-blue articulat text-center text-xs font-medium tracking-[1.54px] mt-[15px] lg:tracking-[4.5px] lg:mt-[-88px] xxxl:mt-[15px]">
                sobre el artista
              </p>
            </div>
            <h2 className="text-blue text-center re-70 text-7xl mt-[65px] tracking-tighter lg:text-left lg:mt-[140px]">
              biografia
            </h2>
            <img
              src={crown}
              alt=""
              className="absolute crown w-[76px] lg:w-[151px]"
            />
            <div className="flex justify-center bio-bg min-h-[430px] lg:hidden">
              <img src={profilePic} alt="" className="w-[340px] m-auto" />
            </div>
            <p className="text-blue articulat font-normal mx-[13px] mt-[20px] text-[18px] lg:text-left lg:pr-[120px] lg:ml-[0]">
              Javier Lekker es un talentoso músico y compositor que ha cautivado
              al público con su estilo único y su pasión por la música. Con su
              último lanzamiento, el álbum "Arcade", Javier Lekker nos
              transporta a un viaje musical lleno de nostalgia y emociones.
            </p>
            <div className="flex justify-center bio-bg-highlight min-h-[200px] mt-[20px] lg:min-h-[180px]">
              <p className="text-blue articulat font-black text-center mx-[12px] mt-[20px] text-[30px] leading-[110%] tracking-tight lg:text-left lg:pl-[100px]">
                Con su último lanzamiento, el álbum "Arcade", Javier Lekker nos
                transporta a un viaje musical lleno de nostalgia y emociones.
              </p>
            </div>
            <p className="text-blue articulat font-normal mx-[12px] mt-[20px] text-[18px] leading-[140%] mb-[80px] lg:mt-[0] lg:pr-[120px]">
              Este proyecto nos sumerge en un mundo donde los recuerdos de la
              infancia se entrelazan con las experiencias de la vida adulta,
              creando una atmósfera única y cautivadora.
            </p>
          </div>
          <div className="flex justify-center bio-bg min-h-[430px] hidden lg:block lg:w-[700px] lg:min-h-[800px] xl:min-h-[700px] xxl:min-h-[800px]">
            <img
              src={profilePic}
              alt=""
              className="w-[352px] m-auto  lg:mt-[224px]  xl:mt-[174px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bio;
