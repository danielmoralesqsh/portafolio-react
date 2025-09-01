import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
 
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="bg-foreground text-text py-8 mt-16 border-t border-border"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a href="https://github.com/danielmoralesqsh" target="_blank" rel="noopener noreferrer" className="text-text/70 hover:text-primary transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-text/70 hover:text-primary transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm">
          {new Date().getFullYear()} Daniel Quishpe. Echo por mi w.
        </p>
        <p className="text-xs mt-2 text-text/50">
          Diseñado con pasión y un poco de ansiedad
        </p>
      </div>
    </motion.footer>
  );
};
 
export default Footer;