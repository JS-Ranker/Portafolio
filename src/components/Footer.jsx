import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Héctor Sanhueza. Todos los derechos reservados.</p>
          <p>
            Hecho con <i className="fas fa-heart" style={{ color: '#e74c3c' }}></i> y mucho café ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
