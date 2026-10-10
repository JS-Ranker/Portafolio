import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/portfolio';
import './Skills.css';

const Skills = () => (
  <section id="habilidades" className="section" aria-labelledby="habilidades-title">
    <div className="container section-grid">
      <SectionHeading
        index="03"
        id="habilidades-title"
        title="Habilidades"
        lead="Tecnologías con las que he construido y probado proyectos reales."
      />

      <dl className="skills" data-reveal>
        {skills.map((skill) => (
          <div key={skill.group} className="skills-row">
            <dt>{skill.group}</dt>
            <dd>
              <ul className="tag-list">
                {skill.items.map((item) => (
                  <li key={item} className="tag">{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Skills;
