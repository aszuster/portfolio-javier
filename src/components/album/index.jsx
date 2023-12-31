import { useState } from "react";

import misc4 from "../../images/misc-4.svg";
import bomb from "../../images/bomb.png";
import albumCover from "../../images/portada-arcade.png";
import foreslash from "../../images/forselash.svg";
import misc3 from "../../images/misc-3.svg";
import blackSquare from "../../images/black-square.svg";
import greySquare from "../../images/grey-square.svg";

function Album() {
  return (
    <div className="bg-green">
      <section className="bg-green h-screen w-screen overflow-hidden relative lg:flex lg:flex lg:justify-center" id="album">
        <img
          src={misc4}
          alt=""
          className="w-[120px] absolute left-[-1px] top-[-1px] lg:w-[264px]"
        />
        <img
          src={blackSquare}
          alt=""
          className="uniformBlink hidden lg:block lg:w-[88px] lg:absolute lg:right-0 lg:top-[-1px]"
        />
        <img
          src={greySquare}
          alt=""
          className="hidden lg:block lg:w-[88px] lg:absolute lg:right-0 lg:bottom-[-1px]"
        />
        <div className="lg:max-w-[1728px] lg:flex lg:flex-row-reverse lg:gap-[116px] lg:items-center lg:p-20">
          <div className="lg:max-w-[763px] lg:mt-[27px] lg:h-[800px] lg:flex lg:flex-col lg:relative">
            <div className="lg:flex lg:justify-between lg:max-w-[520px] xl:max-w-[600px] lg:grow lg:mt-[50px] xl:mt-[0px] xl:mb-[60px]">
              <p className="hidden lg:block text-blue articulat text-sm tracking-[4.5px]">
                new release!
              </p>
              <p className="text-blue articulat text-center text-xs lg:text-sm font-medium tracking-[1.54px] lg:tracking-[4.5px] mt-[27px] lg:mt-[0px]">
                nuevo álbum
              </p>
            </div>
            <img
              src={bomb}
              alt=""
              srcset=""
              className="w-[86px] absolute right-[40px] lg:left-[220px] xl:left-[200px] lg:w-[200px] xl:w-[260px] lg:top-[110px] xl:top-[50px]"
            />
            <div className="lg:pb-[20px] xl:pb-[60px]">
              <h2 className="text-blue text-center lg:text-left re-70 text-7xl mt-[65px] tracking-tighter">
                arcade
              </h2>
              <p className="text-dark articulat font-normal mx-[13px] lg:mx-[0px] text-justify mt-[20px] lg:mt-[10px] text-sm lg:text-[21px] lg:leading-[120%]">
              "Arcade" es el próximo álbum de estudio de Javier Lekker, una exploración nostálgica de la transición a la edad adulta a través de la metáfora de un videojuego. Cada canción del álbum representa un "nivel" que simboliza los desafíos de la vida adulta, comenzando con temas de pop alternativo y progresando hacia un sonido más experimental y electrónico, similar al aumento de dificultad en un videojuego.
              </p>
            </div>
            <div className="mt-[20px] hidden lg:block lg:grow lg:relative ">
              <div className="flex ml-[13px]">
                <div className="mr-[68px]">
                  <div className="flex">
                    <img src={foreslash} alt="" />
                    <p className="text-blue re-35 text-[21.6px] ml-[7px] mt-[5px]">
                      Tutorial
                    </p>
                  </div>
                  <p className="text-dark articulat text-[21.6px] font-semibold mt-[10px] ml-[20px]">
                  <a className="hover:text-white" href="https://s.disco.ac/paoprwaxxxdt" target="_blank">
                  Que me paren los pies
                  </a>
                  </p>
                </div>
                <div>
                  <div className="flex">
                    <img src={foreslash} alt="" />
                    <p className="text-blue re-35 text-[21.6px] ml-[7px] mt-[5px]">
                      lvl 01
                    </p>
                  </div>
                  <p className="text-dark articulat text-[21.6px] font-semibold mt-[10px] ml-[20px]">
                  <a className="hover:text-white" href="https://s.disco.ac/paoprwaxxxdt" target="_blank">
                  Niño emperador
                  </a>
                  </p>
                </div>
              </div>
              <div className="flex justify-center ml-[150px] mt-[30px]">
                <div className="mr-[68px]">
                  <div className="flex">
                    <img src={foreslash} alt="" />
                    <p className="text-blue re-35 text-[21.6px] ml-[7px] mt-[5px]">
                      lvl 02
                    </p>
                  </div>
                  <p className="text-dark articulat text-[21.6px] font-semibold mt-[10px] ml-[20px]">
                    <a className="hover:text-white" href="https://s.disco.ac/paoprwaxxxdt" target="_blank">
                    Final Boss_Liturgia.
                    </a>
                  </p>
                </div>

              </div>
              <img
                src={misc3}
                alt=""
                className="lg:absolute hidden lg:block lg:w-[90px] lg:bottom-[80px]"
              />
            </div>
          </div>
          <a href="https://s.disco.ac/paoprwaxxxdt" target="_blank">
          <img
            src={albumCover}
            alt=""
            className="max-w-[267px] mx-auto mt-[20px] lg:max-w-[533px] lg:max-h-[414px] xl:max-h-[544px]"
          />
          </a>
        </div>
        <div className="mt-[20px] block lg:hidden">
          <div className="flex ml-[13px]">
            <div className="mr-[10px]">
              <div className="flex">
                <img src={foreslash} alt="" />
                <p className="text-blue re-35 text-xs ml-[7px] mt-[5px]">
                  Tutorial
                </p>
              </div>
              <p className="text-dark articulat text-xs font-semibold mt-[10px] ml-[20px]">
              <a href="https://s.disco.ac/paoprwaxxxdt" target="_blank">
              Que me paren los pies
              </a>
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
              <a href="https://s.disco.ac/paoprwaxxxdt" target="_blank">
              Niño emperador
              </a>
              </p>
            </div>
          </div>
          <div className="flex justify-end mr-[100px] mt-[25px]">
            <div>
              <div className="flex">
                <img src={foreslash} alt="" />
                <p className="text-blue re-35 text-xs ml-[7px] mt-[5px]">
                  lvl 02
                </p>
              </div>
              <p className="text-dark articulat text-xs font-semibold mt-[10px] ml-[20px]">
              <a href="https://s.disco.ac/paoprwaxxxdt" target="_blank">
                Final Boss_Liturgia.
                </a>
              </p>
            </div>

          </div>
        </div>
        <img src={misc3} alt="" className="absolute bottom-0 lg:hidden" />
      </section>
    </div>
  );
}

export default Album;
