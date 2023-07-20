import { useState } from "react";

import arrow from "../../images/arrow-down-white.png";
import greySquare from "../../images/light-grey-square.svg"
import cherry from "../../images/cherry-white.svg"
import banana from "../../images/banana-white.svg"


function Contact() {
  return (
    <>
      <section className="bg-dark h-auto w-screen overflow-hidden relative pb-[33px] lg:pb-[126px] lg:pt-[120px] xxxl:pt-[100px] lg:px-20 xxxl:pb-[150px]">
        <img src={greySquare} alt="" className="hidden lg:block lg:absolute lg:top-[-1px] lg:left-0" />
        <div className="lg:max-w-[1420px] lg:mx-auto lg:flex xxx:flex-row lg:gap-28 xxxl:gap-56">
          <div className="lg:flex lg:flex-col-reverse">
        <div className="flex mt-[27px] justify-center items-end gap-[10px] mb-[35px] lg:justify-start lg:my-[0]">
          <img src={arrow} alt="" className="w-[13px] h-[13px]" />
          <p className="text-white articulat text-center text-xs font-medium tracking-[7.6px] leading-[6px]">
            músico & productor
          </p>
        </div>

        <div className="lg:mb-[172px]">
        <h2 className="text-white text-center re-70 text-7xl  tracking-tighter leading-[90%] mb-[35px] lg:text-left">
          contacto!
        </h2>
        <p className="text-white articulat text-center text-[18px] font-normal leading-[130%] tracking-[1.54px] mt-[10px] mx-[13px] mb-[35px] lg:text-left lg:mx-[0] lg:max-w-[500px] lg:mb-[0]">
          ¡Trabajemos juntos! <br className="hidden lg:block" /> Contáctame vía mail o por mis redes sociales.
        </p>
        </div>
        </div>
        <div className="lg:grow">
        <div className="relative flex flex-col justify-center overflow-hidden ">
      <div className="w-full p-6 mt-0 bg-dark rounded-md  shadow-rose-600/40 lg:w-full articulat">
        <form className="mt-2">
          <div className="lg:flex lg:gap-8">
          <div className="mb-3 lg:basis-1/2">
            <label>
              <span className="text-700 text-green">NOMBRE:</span>
              <input
                type="text"
                name="name"
                className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            text-white
            bg-dark
            text-white
            border-b-2
            border-white
            focus:ring
            focus:ring-indigo-200
               focus:outline-green
          "
           
              />
            </label>
          </div>
          <div className="mb-3 lg:basis-1/2">
            <label>
              <span className="text-green">E-MAIL:</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-2 py-2
            text-white
            text-white
            border-gray-300
            bg-dark
            text-white
            border-b-2
            border-white
        
            focus:ring
            focus:ring-indigo-200
               focus:outline-green
          "
               
                required
              />
            </label>
          </div>
          </div>
          <div className="mb-3">
            <label>
              <span class="text-green">MENSAJE:</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-2 px-2 py-2
            bg-dark
            text-white
            border-b-2
            border-white
            focus:ring
            focus:ring-opacity-50
            focus:outline-green
          "
                rows="3"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            bg-green
            
           
           
            w-[100%]
            rounded-lg
            
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
            lg:w-auto
          "
            >
              Contactame
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
<div className="flex w-full justify-between px-[20px]">
        {/* <img src={fruits} alt="" className="px-[25px]" /> */}
        <img src={banana} alt="" className="w-[51px] lg:w-[55px]"/>
        <img src={cherry} alt="" className="w-[51px] lg:w-[55px]" />
        <img src={banana} alt="" className="w-[51px] lg:w-[55px]"/>
        <img src={cherry} alt="" className="w-[51px] lg:w-[55px]"/>
        </div>
        </div>

        </div>
    
      </section>

    </>
  );
}

export default Contact;
