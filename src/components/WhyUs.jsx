import React from 'react'
import { FaMedal, FaClock, FaUserTie } from 'react-icons/fa'
import '../styles/WhyUs.css'

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <h2>¿Por qué elegirnos?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaMedal size={40} />
            </div>
            <h3>Calidad Garantizada</h3>
            <p>
              Contamos con una política interna de trabajo estricta con cada uno de nuestros integrantes para asegurarte la mejor calidad posible en cada presentación.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaClock size={40} />
            </div>
            <h3>Puntualidad</h3>
            <p>
              Entendemos el valor del tiempo, por lo cual nosotros llegamos con anticipación a tu evento para prepararnos y comenzar exactamente a la hora acordada.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaUserTie size={40} />
            </div>
            <h3>Profesionalismo</h3>
            <p>
              Cada uno de nuestros integrantes cuenta con amplia experiencia, comprendiendo que la calidad y el respeto son fundamentales para la satisfacción del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs