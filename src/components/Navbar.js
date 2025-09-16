import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
 
const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Contacto', href: '#contacto' },
  ];
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md border-b border-border shadow-md py-0"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-bold text-accent">
          <img src={process.env.PUBLIC_URL + '/DQ.png'} alt="Logo de DQ.Dev" className="h-48 w-auto -my-12" />
        </a>
 
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${isActive ? 'text-accent' : 'text-text hover:text-primary'}`}>
                {link.name}
              </a>
            );
          })}
        </div>
 
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-text hover:text-primary focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
 
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-foreground/90"
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium text-lg ${isActive ? 'text-accent [text-shadow:0_0_8px_var(--color-accent)]' : 'text-text hover:text-primary'}`}>
                {link.name}
              </a>
            )
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};
 
export default Navbar;