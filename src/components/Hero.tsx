import React from "react";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleNavLinkClick = (href: string) => {
    if (href === "/Contact") {
      navigate("/Contact");
    } else {
      navigate(href);
    }
  };

  const handleNavLinkClick2 = (href: string) => {
    if (href === "/Projects") {
      navigate("/Projects"); // Vous pouvez directement naviguer à la page Hero.jsx
    } else {
      navigate(href);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <main className="w-full h-screen opacity-80 relative scale-150 ">
          <Spline   scene="https://prod.spline.design/mvuSUwAfqDP2O36f/scene.splinecode" />

        </main>
      </div>

      <div className="absolute bottom-0 z-10 w-full p-8">
        <div className="flex flex-col sm:flex-row gap-7 justify-center items-center">
          <button
            onClick={() => handleNavLinkClick("/Contact")}
            className="px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-md focus:outline-none"
          >
            Get in touch
          </button>
          <button
            onClick={() => handleNavLinkClick2("/Projects")}
            className="px-6 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300 rounded-md focus:outline-none"
          >
            View my work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
