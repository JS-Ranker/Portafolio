import Icon from '../components/Icon';
import { contact, profile } from '../data/portfolio';
import './Hero.css';

const [firstName, ...rest] = profile.name.split(' ');
const lastName = rest.join(' ');

const Hero = () => (
  <section id="inicio" className="hero" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="status">
          {profile.current.label} · {profile.current.period}
        </p>
        <div className="hero-lockup">
          <h1 id="hero-title" className="hero-title">
            <span>{firstName}</span> <span className="hero-title-accent">{lastName}</span>
          </h1>
          <p className="hero-role eyebrow">{profile.role}</p>
        </div>
        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#proyectos">
            Ver proyectos
          </a>
          <a className="btn btn-ghost" href={profile.cv} download="Hector_Sanhueza_CV.pdf">
            <Icon name="download" size={16} />
            Descargar CV
            <span className="visually-hidden">(PDF)</span>
          </a>
        </div>

        <ul className="hero-links" aria-label="Perfiles y contacto">
          <li>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={16} /> GitHub
            </a>
          </li>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={16} /> LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>
              <Icon name="mail" size={16} /> {contact.email}
            </a>
          </li>
        </ul>
      </div>

      <figure className="hero-photo">
        <div className="hero-avatar">
          <img
            src={profile.photo}
            alt={`Retrato de ${profile.name}`}
            width="640"
            height="640"
            fetchPriority="high"
          />
        </div>
        <figcaption>
          <Icon name="pin" size={14} /> {profile.location}
        </figcaption>
      </figure>
    </div>
  </section>
);

export default Hero;
