import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillsData = [
    {
      category: "Frontend",
      icon: "fas fa-code",
      skills: [
        { name: "React", level: 85 },
        { name: "Angular", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "Ionic", level: 75 },
        { name: "Vite", level: 70 }
      ]
    },
    {
      category: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "APIs REST", level: 80 },
        { name: "WebSockets", level: 70 }
      ]
    },
    {
      category: "Herramientas & Testing",
      icon: "fas fa-tools",
      skills: [
        { name: "K6 (Testing)", level: 85 },
        { name: "Git", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Pruebas de Carga", level: 80 }
      ]
    }
  ];

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newAnimatedSkills = {};
        skillsData.forEach((category, categoryIndex) => {
          category.skills.forEach((skill, skillIndex) => {
            const key = `${categoryIndex}-${skillIndex}`;
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                [key]: skill.level
              }));
            }, (categoryIndex * 200) + (skillIndex * 150));
          });
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

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
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Habilidades Técnicas
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Las tecnologías y herramientas que domino para crear soluciones completas
          </motion.p>

          <div className="skills-grid">
            {skillsData.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                className="skill-category"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  <i className={category.icon}></i> {category.category}
                </motion.h3>
                
                <div className="skill-items">
                  {category.skills.map((skill, skillIndex) => {
                    const skillKey = `${categoryIndex}-${skillIndex}`;
                    const animatedLevel = animatedSkills[skillKey] || 0;
                    
                    return (
                      <motion.div 
                        key={skillIndex} 
                        className="skill-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: categoryIndex * 0.3 + skillIndex * 0.1 }}
                      >
                        <div className="skill-header">
                          <div className="skill-name">{skill.name}</div>
                          <div className="skill-percentage">{skill.level}%</div>
                        </div>
                        <div className="skill-bar">
                          <motion.div 
                            className="skill-progress"
                            initial={{ width: 0 }}
                            animate={{ width: `${animatedLevel}%` }}
                            transition={{ 
                              duration: 1.5, 
                              ease: "easeOut",
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
