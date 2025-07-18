import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Education.css';

const Education = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const educationData = [
    {
      id: 1,
      period: "2021 - 2024",
      title: "Analista Programador",
      subtitle: "Título Profesional",
      description: "Completé exitosamente la carrera de Analista Programador, adquiriendo sólidos conocimientos en desarrollo de software, bases de datos, metodologías ágiles y arquitectura de sistemas. Durante mi formación desarrollé múltiples proyectos que consolidaron mis habilidades técnicas.",
      highlights: [
        { icon: "fas fa-code", text: "Desarrollo de Software" },
        { icon: "fas fa-database", text: "Bases de Datos" },
        { icon: "fas fa-project-diagram", text: "Metodologías Ágiles" },
        { icon: "fas fa-cogs", text: "Arquitectura de Sistemas" }
      ],
      status: "completed",
      statusText: "Completado"
    },
    {
      id: 2,
      period: "Presente",
      title: "Ingeniería en Informática",
      subtitle: "Continuando mi formación",
      description: "Actualmente cursando Ingeniería en Informática para profundizar mis conocimientos en áreas avanzadas como arquitectura de software empresarial, gestión de proyectos de gran escala, inteligencia artificial y tecnologías emergentes que me permitan liderar equipos de desarrollo.",
      highlights: [
        { icon: "fas fa-building", text: "Arquitectura Empresarial" },
        { icon: "fas fa-users-cog", text: "Gestión de Proyectos" },
        { icon: "fas fa-brain", text: "Inteligencia Artificial" },
        { icon: "fas fa-rocket", text: "Tecnologías Emergentes" }
      ],
      status: "in-progress",
      statusText: "En Curso",
      progress: 90
    }
  ];

  return (
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Formación Académica
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Mi trayectoria educativa y desarrollo profesional
          </motion.p>

          <div className="education-timeline">
            {educationData.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="education-item"
                variants={itemVariants}
              >
                <div className="education-marker">
                  <div className="education-year">{item.period}</div>
                  <motion.div 
                    className={`education-dot ${item.status === 'in-progress' ? 'active' : ''}`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  />
                </div>
                
                <motion.div 
                  className={`education-card ${item.status}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="education-header">
                    <div className="education-icon">
                      <i className={item.status === 'completed' ? 'fas fa-graduation-cap' : 'fas fa-laptop-code'}></i>
                    </div>
                    <div className={`education-status ${item.status}`}>
                      {item.statusText}
                    </div>
                  </div>
                  
                  <div className="education-content">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.description}</p>
                    
                    <div className="education-highlights">
                      {item.highlights.map((highlight, idx) => (
                        <motion.div 
                          key={idx} 
                          className="highlight-item"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ delay: index * 0.3 + idx * 0.1 + 0.8 }}
                        >
                          <i className={highlight.icon}></i>
                          <span>{highlight.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {item.progress && (
                      <div className="progress-indicator">
                        <div className="progress-text">Progreso actual</div>
                        <div className="progress-bar">
                          <motion.div 
                            className="progress-fill"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${item.progress}%` } : { width: 0 }}
                            transition={{ delay: index * 0.3 + 1.2, duration: 1 }}
                          />
                        </div>
                        <div className="progress-percentage">{item.progress}% completado</div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
