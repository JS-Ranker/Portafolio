import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Sobre mí
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Conoce más sobre mi trayectoria y experiencia como desarrollador
          </motion.p>

          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <h3>¿Quién soy?</h3>
              <p>
                ¡Hola! Soy Héctor Sanhueza, un apasionado Desarrollador Web Full Stack de Chile 🇨🇱,
                con experiencia en la creación de soluciones digitales modernas, eficientes y centradas en el usuario.
              </p>
              <p>
                Desde mis inicios, me he enfocado en combinar la lógica del backend con la experiencia visual del frontend,
                utilizando tecnologías como JavaScript, React, Node.js, MySQL. Me entusiasma aprender constantemente y
                mantenerme al día con las tendencias del desarrollo web, trabajando en proyectos que resuelvan problemas
                reales y aporten valor.
              </p>

              <motion.div
                className="about-stats"
                variants={containerVariants}
              >
                <motion.div className="stat" variants={itemVariants}>
                  <h4>1+</h4>
                  <p>Años de experiencia</p>
                </motion.div>
                <motion.div className="stat" variants={itemVariants}>
                  <h4>2+</h4>
                  <p>Proyectos desarrollados</p>
                </motion.div>
                <motion.div className="stat" variants={itemVariants}>
                  <h4>100%</h4>
                  <p>Dedicación</p>
                </motion.div>
              </motion.div>

              <motion.div className="cv-download" variants={itemVariants}>
                <motion.a
                  href="/assets/cv/Hector_Sanhueza_CV.pdf"
                  className="btn btn-cv"
                  download="Hector_Sanhueza_CV.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-file-pdf"></i>
                  <span>Descargar mi CV</span>
                  <i className="fas fa-download"></i>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="about-image"
              variants={itemVariants}
            >
              <motion.div
                className="image-placeholder"
                whileHover={{ scale: 1.05 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img src="/assets/images/Logos/LOGO.png" alt="Logo Héctor Sanhueza" className="about-logo-img" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
