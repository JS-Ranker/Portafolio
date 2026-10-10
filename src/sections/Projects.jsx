import { useState } from 'react';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import { contact, projects } from '../data/portfolio';
import './Projects.css';

const Gallery = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const image = images[current];

  return (
    <div className="gallery">
      <figure className="gallery-main">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
        />
      </figure>
      {images.length > 1 && (
        <ul className="gallery-thumbs" aria-label={`Capturas de ${title}`}>
          {images.map((img, index) => (
            <li key={img.src}>
              <button
                type="button"
                className="gallery-thumb"
                aria-pressed={index === current}
                aria-label={`Mostrar captura ${index + 1} de ${images.length}: ${img.alt}`}
                onClick={() => setCurrent(index)}
              >
                <img src={img.src} alt="" width="96" height="60" loading="lazy" decoding="async" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Projects = () => (
  <section id="proyectos" className="section" aria-labelledby="proyectos-title">
    <div className="container section-grid">
      <SectionHeading
        index="02"
        id="proyectos-title"
        title="Proyectos"
        lead="Trabajo académico, profesional y personal, con el código disponible en GitHub."
      />

      <div className="project-list">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project ${project.images.length ? '' : 'project--text'}`}
            aria-labelledby={`${project.id}-title`}
            data-reveal
          >
            {project.images.length > 0 && <Gallery images={project.images} title={project.title} />}

            <div className="project-info">
              <p className="project-kind">{project.kind}</p>
              <h3 id={`${project.id}-title`} className="project-title">
                {project.title}
              </h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-description">{project.description}</p>
              <ul className="tag-list" aria-label="Tecnologías">
                {project.tech.map((tech) => (
                  <li key={tech} className="tag">{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.demo && (
                  <a className="text-link project-link" href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Icon name="external" size={16} />
                    Ver demo en vivo
                    <span className="visually-hidden">: {project.title} (se abre en una pestaña nueva)</span>
                  </a>
                )}
                <a className="text-link project-link" href={project.github} target="_blank" rel="noopener noreferrer">
                  <Icon name="github" size={16} />
                  Ver código en GitHub
                  <span className="visually-hidden">: {project.title} (se abre en una pestaña nueva)</span>
                </a>
              </div>
            </div>
          </article>
        ))}

        <p className="project-more">
          Más repositorios y experimentos en{' '}
          <a className="text-link" href={contact.github} target="_blank" rel="noopener noreferrer">
            github.com/JS-Ranker
            <Icon name="external" size={14} />
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
