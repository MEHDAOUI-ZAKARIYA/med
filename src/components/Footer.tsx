import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { about } from "../utils/data";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <span className="text-2xl font-bold text-blue-500">
              {about.name}
            </span>
          </div>

          <div className="flex space-x-6 mb-8">
            <a
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${about.email}`}
              className="text-slate-300 hover:text-blue-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-center text-slate-400 text-sm">
            <p>
              © {currentYear} {about.name}. All rights reserved.
            </p>
            <p className="mt-1">
              Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
