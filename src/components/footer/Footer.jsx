import "./footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li className="texto-footer">Copyright © Letheria 2024</li>
        <li className="social-icons">
          <a href="https://www.facebook.com/tu-perfil" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/997433209" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

