import React from "react";
import { projects } from "../utils/data";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Projects: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="h-screen overflow-hidden relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <main className="w-full h-screen opacity-80  relative">
          <Spline scene="https://prod.spline.design/X4ClUAq4H1mSlIWm/scene.splinecode" />
        </main>
        <div className="fixed bottom-0  blur-lg opacity-96 left-0 w-screen h-20 bg-white dark:bg-zinc-950 z-10"></div>
      </div>

      <div className="container mx-auto mt-20 relative z-10">
        <motion.h2
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          Featured Projects
        </motion.h2>

        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card  overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <div className=" opacity-1 h-48 mb-4  overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github size={16} className="mr-1" />
                    Source Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
