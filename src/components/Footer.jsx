import Icon from './Icon';
import { profile } from '../data/portfolio';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <p>
        © {new Date().getFullYear()} {profile.name}. Hecho con React y Vite.
      </p>
      <a className="text-link" href="#inicio">
        <Icon name="arrowUp" size={16} />
        Volver arriba
      </a>
    </div>
  </footer>
);

export default Footer;
