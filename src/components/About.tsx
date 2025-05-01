import React from "react";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";
import { about } from "../utils/data";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import photo from "/img/photo.png";

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <main className="w-full h-screen opacity-80 relative scale-150">
          <Spline scene="https://prod.spline.design/nLEbjV609zZBezOm/scene.splinecode" />
        </main>
      </div>
      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      {/* Content */}
      <div className="relative container mx-auto z-20 px-4">
        <motion.h2
          className="section-heading mb-3 mt-20 text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Text Description */}
          <motion.div
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="mt-6 text-center md:text-left text-sm md:text-xl text-white space-y-4 px-2 md:px-0">
              {about.description.map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="card w-full max-w-sm mx-auto my-8 p-6 bg-slate-800/20 dark:bg-slate-800/20 shadow-lg rounded-lg flex flex-col items-center justify-center space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="w-32 h-auto rounded-lg overflow-hidden mb-4">
              <img
                src={photo}
                alt="photo"
                className="h-30 opacity-70 max-w-full object-contain"
              />
            </div>

            <div className="space-y-2 text-slate-300 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={18} />
                <span>{about.location}</span>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <Mail size={18} />
                <a
                  href={`mailto:${about.email}`}
                  className="hover:text-blue-500 transition-colors"
                >
                  {about.email}
                </a>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <Linkedin size={18} />
                <a
                  href={about.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <Github size={18} />
                <a
                  href={about.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
