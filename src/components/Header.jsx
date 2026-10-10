import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import { profile } from '../data/portfolio';
import './Header.css';

const navItems = [
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
];

// 'inicio' se observa para que ningún enlace quede marcado al volver a la portada.
const sectionIds = ['inicio', ...navItems.map((item) => item.id)];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const isDark = theme === 'dark';

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
          <img className="brand-mark" src="/assets/images/logo.webp" alt="" width="281" height="264" />
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav aria-label="Principal">
          <ul id="nav-menu" className={`nav-list ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="nav-link"
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          >
            <Icon name={isDark ? 'sun' : 'moon'} />
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
