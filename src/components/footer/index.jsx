import { useState } from "react";

import email from "../../images/email.svg";
import location from "../../images/location.svg";
import youtubeLogo from "../../images/youtube-logo.svg";
import linkedinLogo from "../../images/linkedin-logo.svg";
import instaLogo from "../../images/instagram-logo.svg";

function Footer() {
  return (
    <>
      <section className="bg-white h-auto w-screen overflow-hidden relative pb-[33px] articulat">
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
    </>
  );
}

export default Footer;
