import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "/img/logo.png";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "", href: "/" },
    { name: "About", href: "/About" },
    { name: "Skills", href: "/Skills" },
    { name: "Experience", href: "/Experience" },
    { name: "Projects", href: "/Projects" },
    { name: "Education", href: "/Education" },
    { name: "Contact", href: "/Contact" },
  ];

  const handleNavLinkClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
   <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavLinkClick("/")}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Zakariya Logo"
                className="h-20 max-w-full object-contain"
              />
            </button>
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

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="ml-3 p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

     {/* Mobile navigation overlay */}
     {isMobileMenuOpen && (
       <div className="fixed inset-0 z-50 md:hidden">
         {/* Background Overlay */}
         <div
           className="absolute inset-0 bg-black/50 backdrop-blur-sm"
           onClick={() => setIsMobileMenuOpen(false)}
         />

         {/* Slide-in Menu */}
         <div className="absolute top-0 right-0 w-72 h-full bg-black  bg-opacity-30 rounded-l-2xl shadow-xl p-6 flex flex-col space-y-6 transition-transform duration-300 ease-in-out text-gray-800">
           {/* Close Button */}
           <button
             onClick={() => setIsMobileMenuOpen(false)}
             className="self-end text-sky-50 hover:text-red-500"
             aria-label="Close mobile menu"
           >
             <X size={28} />
           </button>

           {/* Navigation Links */}
           {navLinks.map((link) => (
             <button
               key={link.name}
               onClick={() => handleNavLinkClick(link.href)}
               className="text-lg  text-sky-50 font-medium text-left hover:text-blue-600 transition-colors"
             >
               {link.name}
             </button>
           ))}
         </div>
       </div>
     )}

    </header>
  );
};

export default Header;
