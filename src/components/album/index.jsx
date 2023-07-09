import { useState } from "react";

import misc4 from "../../images/misc-4.png";
import bomb from "../../images/bomb.png";
import albumCover from "../../images/album-cover-placeholder.png";
import foreslash from "../../images/forselash.svg";
import misc3 from "../../images/misc-3.svg";

function Album() {
  return (
    <>
      <section className="bg-green h-screen w-screen overflow-hidden relative">
        <img src={misc4} alt="" className="w-[120px] absolute left-[-1px]" />
        <p className="text-blue articulat text-center text-xs font-medium tracking-[1.54px] mt-[27px]">
          nuevo álbum
        </p>
        <img
          src={bomb}
          alt=""
          srcset=""
          className="w-[86px] absolute right-[40px]"
        />
        <h2 className="text-blue text-center re-70 text-7xl mt-[65px] tracking-tighter">
          arcade
        </h2>
        <p className="text-dark articulat font-normal mx-[13px] text-justify mt-[20px] text-sm">
          "Arcade" es el fascinante nuevo álbum de Javier Lekker, una
          experiencia musical que nos sumerge en un mundo de sonidos retro,
          donde la nostalgia se entrelaza con la innovación. Con melodías
          vibrantes y letras envolventes, este álbum nos transporta a una época
          pasada mientras nos conecta con la emoción del presente.{" "}
          <span className="font-bold">
            Descubre el poder de "Arcade" y déjate llevar por su cautivadora
            atmósfera musical.
          </span>
        </p>
        <img src={albumCover} alt="" className="w-[267px] mx-auto mt-[20px]" />
        <div className="mt-[20px]">
          <div className="flex ml-[13px]">
            <div className="mr-[10px]">
              <div className="flex">
                <img src={foreslash} alt="" />
                <p className="text-blue re-35 text-xs ml-[7px] mt-[5px]">
                  lvl 01
                </p>
              </div>
              <p className="text-dark articulat text-xs font-semibold mt-[10px] ml-[20px]">
                Niño emperador.
              </p>
            </div>
            <div>
              <div className="flex">
                <img src={foreslash} alt="" />
                <p className="text-blue re-35 text-xs ml-[7px] mt-[5px]">
                  lvl 01
                </p>
              </div>
              <p className="text-dark articulat text-xs font-semibold mt-[10px] ml-[20px]">
                Arde.
              </p>
            </div>
          </div>
          <div className="flex justify-end mr-[50px] mt-[25px]">
            <div>
              <div className="flex">
                <img src={foreslash} alt="" />
                <p className="text-blue re-35 text-xs ml-[7px] mt-[5px]">
                  lvl 01
                </p>
              </div>
              <p className="text-dark articulat text-xs font-semibold mt-[10px] ml-[20px]">
                Final Boss_Liturgia.
              </p>
            </div>
            <div>
              <div className="flex">
                <img src={foreslash} alt="" />
                <p className="text-blue re-35 text-xs ml-[7px] mt-[5px]">
                  lvl 01
                </p>
              </div>
              <p className="text-dark articulat text-xs font-semibold mt-[10px] ml-[20px]">
                Dior.
              </p>
            </div>
          </div>
        </div>
        <img src={misc3} alt="" className="absolute bottom-0" />
      </section>
    </>
  );
}

export default Album;
