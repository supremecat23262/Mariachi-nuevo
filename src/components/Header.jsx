import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Para prevenir el salto hacia abajo
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-inner">
        <div className="logo">
          <img src={logo} alt="Logo Mariachi Sones de México" className="logo-image" />
          <h1>Mariachi Sones de México</h1>
        </div>

        {/* Botón del menú hamburguesa */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Menú"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Navegación principal */}
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="#nosotros" onClick={toggleMenu}>Nosotros</a></li>
            <li><a href="#servicios" onClick={toggleMenu}>Servicios</a></li>
            <li><a href="#ubicacion" onClick={toggleMenu}>Ubicación</a></li>            
            <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
          </ul>
        </nav>

        {/* Botones de contacto */}
        <div className={`contact-buttons ${isMenuOpen ? 'mobile-visible' : ''}`}>
          <a href="tel:+529991490660" className="contact-link">
            <FaPhone className="icon" />
            <span className="contact-text">999 149 0660</span>
          </a>
          <a href="https://wa.me/529991490660" className="contact-link whatsapp">
            <FaWhatsapp className="icon" />
            <span className="contact-text">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
