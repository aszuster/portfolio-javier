import { useState } from "react";

import crown from "../../images/crown.png";
import profilePic from "../../images/profile-pic.png";
import greenSquare from "../../images/green-square.svg";
import Button from "../Button"

function Bio() {
  return (
    <div className="bg-grey">   
      <section className="bg-[#D9D9D9] h-auto w-screen overflow-hidden relative lg:flex lg:justify-center bio-bg-dsk mb-[-1px]" id="bio">
        <img
          src={greenSquare}
          alt=""
          className="uniformBlink hidden lg:block absolute lg:top-[-1px] lg:left-[0]"
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
            Javier Lekker es el pseudónimo de Javier Ramirez, un arquitecto de profesión que ha forjado una carrera en la música a través de su pasión y formación musical. Durante más de una década, Javier ha estado componiendo canciones para otros artistas. Su sonido es una exploración de diversas influencias, desde synthpop de Alizzz, hasta el intimismo de Billie Eilish, con toques nostálgicos de su infancia jugando con máquinas recreativas.
            </p>
            <div className="flex justify-center bio-bg-highlight min-h-[200px] mt-[20px] lg:min-h-[180px]">
              <p className="text-blue articulat font-black text-center mx-[12px] mt-[20px] text-[30px] leading-[110%] tracking-tight lg:text-left lg:pl-[100px]">
                Con su último lanzamiento, el álbum "Arcade", Javier Lekker nos
                transporta a un viaje musical lleno de nostalgia y emociones.
              </p>
            </div>
            <p className="text-blue articulat font-normal mx-[12px] mt-[20px] text-[18px] leading-[140%] mb-[80px] lg:mt-[0] lg:pr-[120px]">
            En 2022 lanza su primer EP, "Termodinámica", inspirado por el indie y la canción de autor, que explora las leyes de la física newtoniana y sus paralelismos con el mundo emocional. Este trabajo fue presentado en vivo tanto en formato acústico bajo la marca “Sofar”, como con banda completa en el festival “EA Málaga”. 
            <br/><br/>
            "Arcade" es el próximo álbum en estudio de Javier Lekker, y se presenta como una reflexión sobre la transición a la adultez y la añoranza de una infancia más sencilla. Este proyecto es un reflejo sobre el proceso de crecimiento y la añoranza por épocas pasadas más sencillas. El álbum se conceptualiza como un videojuego, con cada canción actuando como un nivel a superar, hasta llegar al jefe final. 
            
            <br/><br/>
            El proyecto consiguió llegar la final del concurso organizado por “Sonidos Mans” estando entre los 20 elegidos y habiendo recibido más de 300 propuestas.
            </p>
          </div>
          <div className="flex justify-center bio-bg min-h-[430px] hidden lg:block lg:w-[700px] lg:min-h-[800px] xl:min-h-[700px] xxl:min-h-[800px]">
            <img
              src={profilePic}
              alt=""
              className="w-[352px] m-auto  lg:mt-[224px]  xl:mt-[174px]  xl:mr-[0px] xl:w-[400px]"
            />
          </div>
        </div>
        <Button/>
      </section>
    </div>
  );
}

export default Bio;
