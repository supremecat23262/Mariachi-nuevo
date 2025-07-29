import React from 'react'
import Carousel from './Carousel'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h2 className="titulo-mexico">
          <span className="verde">Música mexicana</span>
          <span className="blanco">para todo</span>
          <span className="rojo">tipo de evento</span>
        </h2>
        <h1>Mariachi Reyes de México</h1>
        <p>Mariachis en Mérida, Yucatán a 30 minutos de ti</p>
        <div className="cta-buttons">
          <a href="tel:+529991490660" className="cta-button">
            Llama ahora
          </a>
          <a href="https://wa.me/529991490660" className="cta-button whatsapp">
            WhatsApp
          </a>
        </div>
      </div>
      
      <div className="stats-container">
        <div className="stats">
          <div className="stat-item">
            <span>+20</span>
            <p>Años de experiencia</p>
          </div>
          <div className="stat-item">
            <span>24/7</span>
            <p>Horas disponibles</p>
          </div>
          <div className="stat-item">
            <span>365</span>
            <p>Días del año</p>
          </div>
        </div>
      </div>
      
      <Carousel />
    </section>
  )
}

export default Hero