import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // El formulario se enviará a Formspree
    const form = e.target;
    form.submit();
  };

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

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "hsanhueza.dev@gmail.com",
      link: "mailto:hsanhueza.dev@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Teléfono",
      value: "+56 9 5075 0979",
      link: "tel:+56950750979"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Ubicación",
      value: "Santiago, Chile",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/hectorsanhueza/",
      name: "LinkedIn"
    },
    {
      icon: "fab fa-github",
      url: "https://github.com/JS-Ranker",
      name: "GitHub"
    },
    {
      icon: "fas fa-envelope",
      url: "mailto:hsanhueza.dev@gmail.com",
      name: "Email"
    }
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            ¡Trabajemos juntos!
          </motion.h2>

          <div className="contact-content">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Información de contacto</h3>
              <p>Estoy disponible para nuevas oportunidades y proyectos emocionantes. ¡No dudes en contactarme!</p>
              
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="contact-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.i 
                      className={item.icon}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div>
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link}>{item.value}</a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="social-links"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="contact-form" variants={itemVariants}>
              <form 
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xblkrkzr" 
                method="POST"
              >
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>

                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>

                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 }}
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>

                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                >
                  <textarea
                    name="message"
                    placeholder="Tu mensaje"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>

                {/* Campos ocultos para Formspree */}
                <input type="hidden" name="_subject" value="🚀 Nuevo mensaje desde tu portafolio - Héctor Sanhueza" />
                <input type="hidden" name="_captcha" value="false" />

                <motion.button 
                  type="submit" 
                  className="btn btn-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-paper-plane"></i> Enviar mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
