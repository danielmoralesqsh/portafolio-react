import React from 'react';
import { motion } from 'framer-motion';
 
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="bg-foreground text-text py-6 mt-16 border-t border-border"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Daniel Quishpe. Echo por mi w.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          Diseñado con pasión y un poco de ansiedad
        </p>
      </div>
    </motion.footer>
  );
};
 
export default Footer;
