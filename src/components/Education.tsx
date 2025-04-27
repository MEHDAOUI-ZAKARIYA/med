import React from 'react';
import { educations } from '../utils/data';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="section bg-slate-50 dark:bg-slate-800/20">
      <div className="container mx-auto">
        <motion.h2 
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          Education
        </motion.h2>
        
        <div className="space-y-8">
          {educations.map((education, index) => (
            <motion.div 
              key={education.id}
              className="md:grid md:grid-cols-12 md:gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <div className="md:col-span-3 mb-4 md:mb-0">
                <div className="flex items-center space-x-2 md:justify-end">
                  <div className="text-right hidden md:block">
                    <div className="font-medium text-blue-500">{education.startDate} - {education.endDate}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{education.location}</div>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                    <GraduationCap size={16} className="text-white" />
                  </div>
                </div>
                <div className="md:hidden mt-2">
                  <div className="font-medium text-blue-500">{education.startDate} - {education.endDate}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{education.location}</div>
                </div>
              </div>
              
              <div className="md:col-span-9">
                <div className="card">
                  <h3 className="text-xl font-bold">{education.degree} in {education.field}</h3>
                  <p className="text-lg text-blue-500 dark:text-blue-400">{education.institution}</p>
                  <p className="mt-3 text-slate-700 dark:text-slate-300">
                    Studied {education.field} with a focus on advanced topics in software development, 
                    computer science theory, and practical application development.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;