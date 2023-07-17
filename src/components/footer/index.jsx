import { useState } from "react";

import email from "../../images/email.svg";
import location from "../../images/location.svg";
import youtubeLogo from "../../images/youtube-logo.svg";
import linkedinLogo from "../../images/linkedin-logo.svg";
import instaLogo from "../../images/instagram-logo.svg";

function Footer() {
  return (
    <>
      <section className="bg-white h-auto w-screen overflow-hidden relative pb-[33px] articulat lg:hidden">
        <div className="flex flex-col items-center py-[56px]">
          <h3 className="text-blue font-extrabold text-[18px]">Contacto</h3>
          <div className="flex pt-[10px] gap-[8px] items-center">
            <img src={email} alt="" />{" "}
            <p className="text-[14px]">hola@javierlekker.com</p>
          </div>
          <div className="flex pt-[10px] gap-[8px] items-center">
            <img src={location} alt="" />{" "}
            <p className="text-[14px]">Barcelona, España.</p>
          </div>
          <p className="text-blue font-extrabold text-[18px] pt-[10px] relative signature">
            Javier Lekker
          </p>
          <p className="text-[12px] py-[10px]">
            ©2023 Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-[44px]">
            <a href="">
              <img src={youtubeLogo} alt="" />
            </a>
            <a href="">
              <img src={linkedinLogo} alt="" />
            </a>
            <a href="">
              <img src={instaLogo} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="hidden lg:block lg:articulat lg:flex lg:flex-row lg:max-w-[1500px] lg:mx-20 xxxl:mx-auto lg:mt-[67.5px] lg:mb-[50px]">
        <div className="w-[50%]">
          <p className="text-blue font-bold text-[36px]">Javier Lekker</p>
          <p className="text-[16px] my-[27px] pr-[250px]">©2023 Todos los derechos reservados. El contenido de este sitio web, incluyendo textos, imágenes, gráficos y otros materiales, está protegido por las leyes de propiedad intelectual. </p>
          <div className="flex gap-[46px] items-center">
          <a href=""><img src={youtubeLogo} alt="" /></a>
          <a href=""><img src={linkedinLogo} alt="" /></a>
          <a href=""><img src={instaLogo} alt="" /></a>
          </div>
        </div>
        <div className="w-[16.6%]">
        <p className="text-blue font-bold text-[21.6px] mb-[20px]">Paginas</p>
        <ul className="text-[16.2px]">
          <a href=""><li className="my-[7px]">Inicio</li></a>
          <a href=""><li className="my-[7px]">Arcade</li></a>
          <a href=""><li className="my-[7px]">Biografía</li></a>
          <a href=""><li className="my-[7px]">Videos</li></a>
          <a href=""><li className="my-[7px]">Conciertos</li></a>
        </ul>
        </div>
        <div className="w-[16.6%]">
          <p className="text-blue font-bold text-[21.6px] mb-[20px]">Servicios</p>
        <ul className="text-[16.2px]">
          <a href=""><li className="my-[7px]">Músico</li></a>
          <a href=""><li className="my-[7px]">Eventos</li></a>
          <a href=""><li className="my-[7px]">Productor</li></a>
        </ul>
        </div>
        <div className="w-[16.6%]">
          <p className="text-blue font-bold text-[21.6px] mb-[20px]">Contacto</p>
          <div className="my-[15px] flex gap-[11px]">
            <img src={email} alt="" />
            <p className="text-[16.2px]">hola@javierlekker.com</p>
          </div>
          <div className="my-[15px] flex gap-[11px]">
            <img src={location} alt="" className="ml-[6px]" />
            <p className="text-[16.2px]">Barcelona, España.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
