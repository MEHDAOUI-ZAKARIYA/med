import React from "react";
import Spline from "@splinetool/react-spline";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <main className="w-full h-screen opacity-80 relative  ">
          <Spline scene="https://prod.spline.design/XfpPD0QPNpCUJWl4/scene.splinecode" />
        </main>
        <div className="fixed bottom-0  blur-lg opacity-96 left-0 w-screen h-20 bg-zinc-950 dark:bg-zinc-950 z-10"></div>
      </div>

      <div className="absolute bottom-0 z-10 w-full p-8">
        <div className="flex flex-col sm:flex-row gap-7 justify-center items-center">
          <a href="/Contact" className="btn btn-primary">
            Get in touch
          </a>
          <a href="/Projects" className="btn btn-secondary">
            View my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
