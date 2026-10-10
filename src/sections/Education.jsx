import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import { certifications, education } from '../data/portfolio';
import './Education.css';

const Education = () => (
  <section id="formacion" className="section" aria-labelledby="formacion-title">
    <div className="container section-grid">
      <SectionHeading index="04" id="formacion-title" title="Formación" />

      <div className="formation">
        <div data-reveal>
          <h3 className="formation-heading">Educación</h3>
          <ul className="formation-list">
            {education.map((item) => (
              <li key={item.id} className="formation-item">
                <p className="formation-period">
                  {item.current ? <span className="status">{item.period}</span> : item.period}
                </p>
                <div>
                  <h4 className="formation-title">{item.title}</h4>
                  <p className="formation-detail">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <h3 className="formation-heading">Certificaciones</h3>
          <ul className="formation-list">
            {certifications.map((cert) => (
              <li key={cert.id} className="formation-item">
                <p className="formation-period">{cert.year}</p>
                <div>
                  <h4 className="formation-title">{cert.title}</h4>
                  <p className="formation-detail">{cert.issuer}</p>
                  <a className="text-link formation-link" href={cert.file} target="_blank" rel="noopener noreferrer">
                    <Icon name="file" size={16} />
                    Ver certificado (PDF)
                    <span className="visually-hidden">, se abre en una pestaña nueva</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
