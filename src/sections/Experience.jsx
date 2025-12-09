import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const experiences = [
        {
            id: 1,
            role: "Ingeniero en Sistemas (Práctica Profesional)",
            company: "PC Factory",
            date: "Abril 2025 – Junio 2025",
            type: "Práctica",
            responsibilities: [
                "Apoyo en flujos críticos del sitio web (login, carrito, búsqueda).",
                "Desarrollo de scripts de pruebas E2E con K6 y JavaScript.",
                "Optimización de tiempos de carga y validación de interfaz.",
                "Documentación técnica para el equipo de desarrollo."
            ]
        }
        // Add more experiences here as needed
    ];

    return (
        <section id="experience" className="experience" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Experiencia Laboral</h2>
                    <p className="section-subtitle">Mi trayectoria profesional</p>

                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                className="timeline-item"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                transition={{ delay: index * 0.2 + 0.3 }}
                            >
                                <div className="timeline-dot"></div>

                                <div className="history-card">
                                    <div className="history-header">
                                        <h3 className="history-role">{exp.role}</h3>
                                        <div className="history-company">
                                            <i className="fas fa-building"></i>
                                            {exp.company}
                                        </div>
                                        <span className="history-date">
                                            <i className="far fa-calendar-alt"></i> {exp.date}
                                        </span>
                                    </div>

                                    <div className="history-content">
                                        <ul>
                                            {exp.responsibilities.map((task, idx) => (
                                                <li key={idx}>
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
