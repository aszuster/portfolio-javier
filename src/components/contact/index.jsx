import { useState } from "react";

import ContactForm from "../ContactForm";
import arrow from "../../images/arrow-down-white.png";
import greySquare from "../../images/light-grey-square.svg";
import cherry from "../../images/cherry-white.svg";
import banana from "../../images/banana-white.svg";

function Contact() {
  return (
    <>
      <section className="bg-dark h-auto w-screen overflow-hidden relative pb-[33px] lg:pb-[126px] lg:pt-[120px] xxxl:pt-[100px] lg:px-20 xxxl:pb-[150px]" id="contact">
        <img
          src={greySquare}
          alt=""
          className="hidden lg:block lg:absolute lg:top-[-1px] lg:left-0"
        />
        <div className="lg:max-w-[1420px] lg:mx-auto lg:flex xxx:flex-row lg:gap-28 xxxl:gap-56">
          <div className="lg:flex lg:flex-col-reverse">
            <div className="flex mt-[27px] justify-center items-end gap-[10px] mb-[35px] lg:justify-start lg:my-[0]">
              <img src={arrow} alt="" className="blink w-[13px] h-[13px]" />
              <p className="text-white articulat text-center text-xs font-medium tracking-[7.6px] leading-[6px]">
                músico & productor
              </p>
            </div>

            <div className="lg:mb-[172px]">
              <h2 className="text-white text-center re-70 text-7xl  tracking-tighter leading-[90%] mb-[35px] lg:text-left">
                contacto!
              </h2>
              <p className="text-white articulat text-center text-[18px] font-normal leading-[130%] tracking-[1.54px] mt-[10px] mx-[13px] mb-[35px] lg:text-left lg:mx-[0] lg:max-w-[500px] lg:mb-[0]">
                ¡Trabajemos juntos! <br className="hidden lg:block" />{" "}
                Contáctame vía mail o por mis redes sociales.
              </p>
            </div>
          </div>
          <div className="lg:grow">
            <div className="relative flex flex-col justify-center overflow-hidden ">
              <div className="w-full p-6 mt-0 bg-dark rounded-md  shadow-rose-600/40 lg:w-full articulat">
<ContactForm/>
              </div>
            </div>
            <div className="flex w-full justify-between px-[20px]">
              <img src={banana} alt="" className="w-[51px] lg:w-[55px]" />
              <img src={cherry} alt="" className="w-[51px] lg:w-[55px]" />
              <img src={banana} alt="" className="w-[51px] lg:w-[55px]" />
              <img src={cherry} alt="" className="w-[51px] lg:w-[55px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
