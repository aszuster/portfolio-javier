import { useState } from "react";
import heroImage from "../../images/hero-img.png";

function Hero() {
  return (
    <>
      <section className="bg-dark h-screen w-screen overflow-hidden">
        <div className="background-hero h-screen flex flex-wrap content-center justify-center">
          <div className="mb-[100px]">
            <h1 className="text-center re-50 text-white text-6xl tracking-tight">
              javier lekker
            </h1>
            <h2 className="text-green text-center articulat text-3xl font-medium">
              ¡nueva música!
            </h2>
          </div>
          <img src={heroImage} className="hidden lg:block" />
        </div>
      </section>
    </>
  );
}

export default Hero;
