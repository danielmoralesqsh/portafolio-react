import React from 'react';
import { motion } from 'framer-motion';
 
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="bg-gray-800 text-white py-8 mt-16"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Daniel Quishpe. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          Diseñado con pasión y un poco de cafeína.
        </p>
      </div>
    </motion.footer>
  );
};
 
export default Footer;