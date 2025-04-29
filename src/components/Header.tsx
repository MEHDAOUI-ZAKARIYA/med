import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "/img/logo.png"; // Correct path for your logo

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "About", href: "/About" },
    { name: "Skills", href: "/Skills" },
    { name: "Experience", href: "/Experience" },
    { name: "Projects", href: "/Projects" },
    { name: "Education", href: "/Education" },
    { name: "Contact", href: "/Contact" },
  ];

  const handleNavLinkClick = (href: string) => {
    if (href === "#hero") {
      // Smooth scroll to anchor section (Hero)
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to a new page
      navigate(href);
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/Hero" className="flex items-center">
              <img
                src={logo}
                alt="Zakariya Logo"
                className="h-20 max-w-full object-contain"
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavLinkClick(link.href)}
                    className="text-slate-700 dark:text-slate-300 font-medium relative group transition-all duration-300 ease-in-out"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-3 p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 md:hidden"
              aria-expanded="false"
              aria-label="Open mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavLinkClick(link.href)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
