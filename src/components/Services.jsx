import React from 'react'
import { FaMusic, FaGlassCheers, FaCalendarAlt } from 'react-icons/fa'
import '../styles/Services.css'

const Services = () => {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaMusic size={40} />
            </div>
            <h3>Serenatas</h3>
            <p>Para momentos especiales, se suele llevar en las noches para despertar a la persona con música mexicana.</p>
            <ul>
              <li>6 canciones seleccionadas</li>
              <li>Traje tradicional</li>
              <li>Incluye trompeta</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaGlassCheers size={40} />
            </div>
            <h3>Eventos Especiales</h3>
            <p>Bodas, XV años, aniversarios y celebraciones importantes.</p>
            <ul>
              <li>Opción 1: 6 melodías</li>
              <li>Opción 2: 10 melodías</li>
              <li>Opción 3: 1 hora completa</li>
              <li>Traje charro completo</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaCalendarAlt size={40} />
            </div>
            <h3>Eventos Particulares</h3>
            <p>Cumpleaños, graduaciones, bautizos y cualquier evento personal.</p>
            <ul>
              <li>Opción 1: 6 melodías</li>
              <li>Opción 2: 10 melodías</li>
              <li>Opción 3: 1 hora completa</li>
              <li>Personalizable</li>
            </ul>
          </div>
        </div>
        
        <div className="service-note">
          <p>
            Servicios disponibles para todo tipo de eventos en Mérida y toda la península de Yucatán: Cumpleaños, Bodas, Pedido de Mano, XV años, Graduaciones, Bautizos, Convenciones, Conciertos, Acompañamiento de artistas y cualquier otro evento especial.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services