import React from "react";
import Spline from "@splinetool/react-spline";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <main className="w-full h-full bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-indigo-950 scale-150">
          <Spline scene="https://prod.spline.design/s4u3SNI8LHfP9RC9/scene.splinecode" />
        </main>
      </div>

      <div className="absolute bottom-0 z-10 w-full p-8">
        <div className="flex flex-col sm:flex-row gap-7 justify-center items-center">
          <a href="/contact" className="btn btn-primary">
            Get in touch
          </a>
          <a href="/projects" className="btn btn-secondary">
            View my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
