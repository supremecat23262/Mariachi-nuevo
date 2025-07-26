import React from 'react'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Mariachi Sones de México</h3>
            <p>Más de 20 años llevando la tradición musical mexicana a tus eventos especiales en Mérida y toda la península de Yucatán.</p>
          </div>
          
          <div className="footer-section">
            <h3>Contacto</h3>
            <ul className="contact-info">
              <li>
                <FaPhone /> <a href="tel:+529991189181">999 118 9181</a>
              </li>
              <li>
                <FaWhatsapp /> <a href="https://wa.me/529991189181">WhatsApp</a>
              </li>
              <li>
                <FaEnvelope /> <a href="mailto:contacto@mariachisonedemexico.com">contacto@mariachisonedemexico.com</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Horario</h3>
            <p><FaClock /> Disponibles 24/7 los 365 días del año</p>
          </div>
          
          <div className="footer-section">
            <h3>Ubicación</h3>
            <p><FaMapMarkerAlt /> Calle 18 #9 por 23a y, Mérida - Chalmuch, 97314 Susulá, Yucatán</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mariachi Sones de México. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer