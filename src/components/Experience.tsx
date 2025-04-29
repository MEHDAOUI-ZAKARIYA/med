import React from "react";
import { experiences } from "../utils/data";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
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
      id="experience"
      className="section bg-slate-50 dark:bg-slate-800/20"
    >
      <div className="container mx-auto">
        <motion.h2
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative pl-8 md:pl-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <div className="md:grid md:grid-cols-12 md:gap-4">
                {/* Timeline dot for mobile */}
                <div className="absolute left-0 top-0 md:hidden">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                    <Briefcase size={16} className="text-white" />
                  </div>
                </div>

                {/* Date */}
                <div className="md:col-span-3 mb-4 md:mb-0">
                  <div className="flex md:justify-end items-center h-full">
                    <div className="hidden md:flex items-center">
                      <div className="mr-4 text-right">
                        <div className="font-medium text-blue-500">
                          {experience.startDate} - {experience.endDate}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {experience.location}
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                        <Briefcase size={16} className="text-white" />
                      </div>
                    </div>
                    <div className="md:hidden">
                      <div className="font-medium text-blue-500">
                        {experience.startDate} - {experience.endDate}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <div className="card">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <p className="text-lg text-blue-500 dark:text-blue-400 mb-4">
                      {experience.company}
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700 dark:text-slate-300">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
