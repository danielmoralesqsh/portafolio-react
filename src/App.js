import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaGithub, FaEnvelope, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaDatabase, FaFileExcel, FaChartBar, FaLinux, FaExternalLinkAlt, FaGitAlt } from 'react-icons/fa';
import { projects } from './data/projects';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } // Triggers when section is in the middle 40% of the screen
    );

    const sections = document.querySelectorAll('main section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
      ]
    },
    {
      title: "Back-end",
      skills: [
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032' },
        { name: 'Excel', icon: FaFileExcel, color: '#217346' },
        { name: 'Power BI', icon: FaChartBar, color: '#F2C811' },
        { name: 'Linux (Ubuntu)', icon: FaLinux, color: '#E95420' },
      ]
    }
  ];

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-aurora" />
      <div className="relative min-h-screen text-text font-sans bg-grid">
        <Helmet>
        {/* Esto actualiza las etiquetas del head para esta "página" */}
        <title>Portafolio de Daniel Morales | Desarrollador de Software</title>
        <meta name="description" content="Página principal del portafolio de Daniel Morales, mostrando proyectos de desarrollo web, análisis de datos y más." />
        {/* La URL canónica ayuda a los buscadores a no indexar contenido duplicado */}
        <link rel="canonical" href="https://TU_URL_AQUI.com/" />
      </Helmet>

      <Navbar activeSection={activeSection} />

      <main className="pt-20">
        {/* Sección Inicio */}
        <section id="inicio" className="min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-text mb-4">
              Daniel Quishpe — <br className="md:hidden" /> <span className='text-accent'>Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-text/80 leading-relaxed mb-8">
              Tecnólogo en Desarrollo de Software Ecuartoriano, me encanta descubrir nuevas tecnologias y contribuir con mis
              conocimientos y habilidades en proyectos desafiantes. Cuento con habilidades en desarrollo web, bases de datos y analisis de datos.
              Buscando expandir mis conocimientos y crecer profesionalmente.
            </p>
            <motion.a
              href="#contacto"
              className="inline-block bg-accent text-background px-8 py-3 rounded-md text-lg font-bold shadow-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--color-accent)' }}
              whileTap={{ scale: 0.95 }}
            >
              [ Contactar ]
            </motion.a>
          </motion.div>
        </section>

        {/* Sección Proyectos */}
        <section id="proyectos" className="py-16 px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto max-w-5xl"
          >
            <h2 className="text-4xl font-bold text-center text-accent mb-12">// Proyectos_</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-foreground border border-border rounded-lg p-6 flex flex-col transition-all duration-300 hover:border-accent hover:shadow-glow-accent"
                >
                  <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-text/80 mb-4 flex-grow">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-medium bg-border text-accent px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-border/50">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text hover:text-primary transition-colors duration-300">
                      <FaGithub size={20} /> GitHub
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text hover:text-primary transition-colors duration-300">
                      <FaExternalLinkAlt size={20} /> Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Sección Habilidades Técnicas */}
        <section id="habilidades" className="py-16 px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto max-w-5xl"
          >
            <h2 className="text-4xl font-bold text-center text-accent mb-12">// Habilidades_</h2>
            {skillCategories.map((category) => (
              <div key={category.title} className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="group bg-foreground border border-border p-6 rounded-lg text-center flex flex-col items-center justify-center w-36 h-36"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -5, boxShadow: `0 0 20px var(--color-accent)`, border: `1px solid var(--color-accent)` }}
                    >
                      <skill.icon size={40} style={{ color: skill.color }} className="mb-3 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-lg font-medium text-text/90 group-hover:text-accent">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="py-16 px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold text-accent mb-8">// Contacto_</h2>
            <p className="text-lg text-text/80 mb-8">
              ¿Interesado en colaborar? Contactame y hablemos de cómo puedo contribuir a tu equipo o proyecto. 
            </p>
            <form name="contact" method="POST" data-netlify="true" className="text-left">
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-4">
                <label htmlFor="name" className="block text-primary mb-2">Nombre</label>
                <input type="text" id="name" name="name" required className="w-full bg-foreground border border-border rounded-md py-2 px-3 text-text focus:outline-none focus:border-accent" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-primary mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full bg-foreground border border-border rounded-md py-2 px-3 text-text focus:outline-none focus:border-accent" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-primary mb-2">Mensaje</label>
                <textarea id="message" name="message" rows="4" required className="w-full bg-foreground border border-border rounded-md py-2 px-3 text-text focus:outline-none focus:border-accent"></textarea>
              </div>
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-accent text-background px-8 py-3 rounded-md text-lg font-bold shadow-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--color-accent)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  [ Enviar Mensaje ]
                </motion.button>
              </div>
            </form>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default App;
