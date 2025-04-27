import React from "react";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";
import { about } from "../utils/data";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline"; // Ensure you have this import for the Spline component

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
      {/* Background with Spline */}
      <div className="absolute inset-0 z-0">
        <main className="w-full h-full scale-150">
          <Spline scene="https://prod.spline.design/nLEbjV609zZBezOm/scene.splinecode" />
        </main>
      </div>

      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      {/* Content */}
      <div className="relative container mx-auto z-20 ">
        <motion.h2
          className="section-heading mb-8 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          About Me
        </motion.h2>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className=" mt-10 Great Vibes text-2xl space-y-4">
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

          <motion.div
            className="card h-full p-8 bg-slate-800/20 dark:bg-slate-800/20 shadow-lg rounded-lg flex flex-col items-center justify-center space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="w-40 h-auto rounded-full overflow-hidden mb-4">
              <img
                src="./img/photo.png"
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2 text-slate-700 dark:text-slate-300">
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
