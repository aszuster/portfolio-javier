import { useState } from "react";
import heroImage from "../../images/hero-img.png";
import Navbar from "../Navbar";

function Hero() {
  return (
    <div className="bg-dark flex justify-center overflow-hidden">
      <section className="bg-dark h-screen w-screen overflow-hidden lg:max-w-[1728px] responsive">
        <div className="hidden xxxl:block">
          <Navbar />
        </div>
        <div className="background-hero h-screen flex xxxl:flex-col flex-wrap content-center justify-center xxxl:justify-start">
          <div className="mb-[100px] lg:my-auto xxxl:mb-[100px] xxxl:mt-0 w-[90%] md:w-[70%] lg:w-[45%] xl:w-[40%] xxl:w-[35%] xxxl:w-[100%]">
            <h1 className="title-hero text-center re-50 text-white text-6xl tracking-tight md:text-[100px] xxxl:text-[298px] h-[65%] md:h-[80%] lg:h-[100%]">
              javier lekker
            </h1>
            <h2 className="text-green text-center articulat text-3xl font-medium xxxl:text-[45px] xxxl:mt-[-30px]">
              ¡nueva música!
            </h2>
          </div>
          <img 
            src={heroImage}
            className="heroImage hidden lg:block lg:absolute lg:top-[350px] xxxl:max-w-[1300px] xxxl:absolute xxxl:top-[314px] xxxl:left-[16%]"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
