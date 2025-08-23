import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaGithub, FaEnvelope, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaDatabase, FaFileExcel, FaChartBar, FaLinux } from 'react-icons/fa';

const App = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
    { name: 'Java (básico)', icon: FaJava, color: '#007396' },
    { name: 'Python (aprendizaje)', icon: FaPython, color: '#3776AB' },
    { name: 'SQL (básico)', icon: FaDatabase, color: '#4479A1' },
    { name: 'Excel', icon: FaFileExcel, color: '#217346' },
    { name: 'Power BI', icon: FaChartBar, color: '#F2C811' },
    { name: 'Linux (Ubuntu)', icon: FaLinux, color: '#E95420' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main className="pt-20">
        {/* Sección Inicio */}
        <section id="inicio" className="min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-800 mb-4">
              Daniel Quishpe — <br className="md:hidden" /> Desarrollador Web y Analista Junior
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Tecnólogo en Desarrollo de Software de Ecuador, apasionado por construir soluciones web y desentrañar datos. Buscando oportunidades junior/trainee para aplicar y expandir mis conocimientos. ¡Listo para aprender y contribuir!
            </p>
            <motion.a
              href="#contacto"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ¡Hablemos!
            </motion.a>
          </motion.div>
        </section>

        {/* Sección Proyectos */}
        <section id="proyectos" className="py-16 px-6 bg-white">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto max-w-4xl"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Mis Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-200"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Proyecto 1: ¡Próximamente!</h3>
                <p className="text-gray-600">
                  Aquí aparecerá una descripción de mi primer gran proyecto. ¡Paciencia, la grandeza se cocina a fuego lento!
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-200"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Proyecto 2: ¡En desarrollo!</h3>
                <p className="text-gray-600">
                  Este será otro proyecto increíble que demostrará mis habilidades. ¡Manténganse al tanto!
                </p>
              </motion.div>
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg">
              (Más proyectos se añadirán a medida que conquiste el mundo del desarrollo y el análisis de datos.)
            </p>
          </motion.div>
        </section>

        {/* Sección Habilidades Técnicas */}
        <section id="habilidades" className="py-16 px-6 bg-gray-50">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto max-w-4xl"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Habilidades Técnicas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 text-center flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ translateY: -5, boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}
                >
                  <skill.icon size={40} style={{ color: skill.color }} className="mb-3" />
                  <p className="text-lg font-medium text-gray-700">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto max-w-3xl text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">¡Conéctate Conmigo!</h2>
            <p className="text-lg text-gray-700 mb-8">
              ¿Tienes una oportunidad emocionante, una pregunta o simplemente quieres saludar? ¡No dudes en contactarme!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <motion.a
                href="mailto:quishpedaniel36@gmail.com"
                className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="mr-3" /> Correo Electrónico
              </motion.a>
              <motion.a
                href="https://github.com/danielmoralesqsh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="mr-3" /> GitHub
              </motion.a>
            </div>
           
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;