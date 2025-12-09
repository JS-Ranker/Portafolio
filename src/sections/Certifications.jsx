import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const certifications = [
        {
            id: 1,
            title: "Scrum Master Professional Certificate (SMPC)",
            issuer: "CertiProf",
            date: "2024",
            link: "/assets/Certificados/SMPC.pdf",
            icon: "fas fa-users-cog",
            isDownload: true
        }
    ];

    return (
        <section id="certifications" className="certifications" ref={ref}>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2 className="section-title" variants={itemVariants}>
                        Certificaciones
                    </motion.h2>
                    <motion.p className="section-subtitle" variants={itemVariants}>
                        Validación de conocimientos y aprendizaje continuo
                    </motion.p>

                    <div className="certifications-grid">
                        {certifications.map((cert) => (
                            <motion.div
                                key={cert.id}
                                className="certification-card"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="certification-icon">
                                    <i className={cert.icon}></i>
                                </div>

                                <div className="certification-content">
                                    <h3 className="certification-title">{cert.title}</h3>
                                    <span className="certification-issuer">{cert.issuer}</span>
                                    <div className="certification-date">
                                        <i className="far fa-calendar-alt"></i>
                                        {cert.date}
                                    </div>
                                </div>

                                <a
                                    href={cert.link}
                                    className="certification-link"
                                    {...(cert.isDownload ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                                >
                                    {cert.isDownload ? "Descargar Certificado" : "Ver Credencial"}
                                    <i className={cert.isDownload ? "fas fa-download" : "fas fa-external-link-alt"}></i>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
