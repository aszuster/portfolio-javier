import { useState } from "react";

import arrow from "../../images/arrow-down-white.png";
import fruits from "../../images/fruits.svg";

function Contact() {
  return (
    <>
      <section className="bg-dark h-auto w-screen overflow-hidden relative pb-[33px]">
        <div className="flex mt-[27px] justify-center items-end gap-[10px] mb-[35px]">
          <img src={arrow} alt="" className="w-[13px] h-[13px]" />
          <p className="text-white articulat text-center text-xs font-medium tracking-[7.6px] leading-[6px]">
            músico & productor
          </p>
        </div>

        <h2 className="text-white text-center re-70 text-7xl  tracking-tighter leading-[90%] mb-[35px]">
          contacto!
        </h2>
        <p className="text-white articulat text-center text-[18px] font-normal leading-[130%] tracking-[1.54px] mt-[10px] mx-[13px] mb-[35px]">
          ¡Trabajemos juntos! Contáctame vía mail o por mis redes sociales.
        </p>
        <form action=""></form>

        <img src={fruits} alt="" className="px-[25px]" />
      </section>
    </>
  );
}

export default Contact;
