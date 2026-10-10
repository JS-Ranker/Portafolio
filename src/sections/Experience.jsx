import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolio';
import './Experience.css';

const Experience = () => (
  <section id="experiencia" className="section" aria-labelledby="experiencia-title">
    <div className="container section-grid">
      <SectionHeading
        index="01"
        id="experiencia-title"
        title="Experiencia"
        lead="Prácticas profesionales en salud y retail tecnológico."
      />

      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.id} className="timeline-item" data-reveal>
            <div className="timeline-meta">
              <p className="timeline-period">{job.period}</p>
              {job.note && <p className="timeline-note">{job.note}</p>}
            </div>
            <div className="timeline-body">
              <h3 className="timeline-role">{job.role}</h3>
              <p className="timeline-company">
                {job.company}
                {job.current && <span className="status timeline-current">En curso</span>}
              </p>
              {job.responsibilities.length > 0 && (
                <ul className="timeline-tasks">
                  {job.responsibilities.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
