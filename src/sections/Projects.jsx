import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

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

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión Veterinaria",
      description: "Aplicación completa web y móvil para gestión veterinaria. Incluye e-commerce integrado, videollamadas en vivo, notificaciones push y sistema completo de fichas electrónicas para mascotas.",
      tech: ["React", "Vite", "Node.js", "Express", "Ionic", "Angular"],
      github: "https://github.com/JS-Ranker/Proyecto_Titulo",
      icon: "fas fa-heartbeat"
    },
    {
      id: 2,
      title: "Sistema de Monitoreo K6 - PC Factory",
      description: "Implementación de pruebas de carga con K6 para optimizar el rendimiento de aplicaciones web. Desarrollo de scripts especializados para áreas de TI y e-commerce con monitoreo en tiempo real.",
      tech: ["K6", "JavaScript", "Performance Testing", "Load Testing", "Monitoring"],
      github: "https://github.com/JS-Ranker/Monitoreo_k6",
      icon: "fas fa-chart-line"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Mis Proyectos
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Una selección de proyectos que demuestran mis habilidades y experiencia
          </motion.p>

          <motion.div className="projects-grid" variants={containerVariants}>
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <i className={project.icon}></i>
                  </div>
                  <motion.div 
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="project-links">
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-github"></i>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <motion.span 
                        key={index} 
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="projects-cta" variants={itemVariants}>
            <div className="cta-content">
              <div className="cta-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="cta-text">
                <h3>¿Quieres ver más proyectos?</h3>
                <p>Explora mi repositorio completo en GitHub con más desarrollos y experimentos</p>
              </div>
              <div className="cta-actions">
                <motion.a 
                  href="https://github.com/JS-Ranker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-github"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-github"></i>
                  <span>Ver GitHub</span>
                  <i className="fas fa-external-link-alt"></i>
                </motion.a>
                <motion.button 
                  className="btn btn-contact"
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-handshake"></i>
                  <span>Colaborar</span>
                </motion.button>
              </div>
            </div>
            <div className="cta-decoration">
              <motion.div 
                className="floating-icon"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              >
                <i className="fas fa-code"></i>
              </motion.div>
              <motion.div 
                className="floating-icon"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                <i className="fas fa-laptop-code"></i>
              </motion.div>
              <motion.div 
                className="floating-icon"
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              >
                <i className="fas fa-rocket"></i>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
