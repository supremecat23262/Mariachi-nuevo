import React from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Mariachi Sones de México</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        <div className="contact-buttons">
          <a href="tel:+529991189181" className="contact-link">
            <FaPhone /> 999 118 9181
          </a>
          <a href="https://wa.me/529991189181" className="contact-link whatsapp">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header