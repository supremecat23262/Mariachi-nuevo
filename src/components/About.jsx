import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <h2>Más de 20 años llevando música mexicana hasta ti</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hace más de 20 años el Mariachi Sones de México inició su trayectoria como mariachis en Mérida, Yucatán con la finalidad de llevar la mejor calidad y repertorio posible haciendo tus eventos diferentes, únicos e inolvidables.
            </p>
            <p>
              Somos un mariachi muy alegre y profesional, que entiende que cada cliente y evento es diferente, debido a eso, éste mariachi se adapta a ti, a tu evento y hacemos de él, algo divertido e inigualable siempre manteniendo el respeto entre nosotros, el evento y el cliente.
            </p>
            <p>
              Contamos con un amplio repertorio musical de distintos géneros haciéndonos una opción viable para interpretar sones, boleros, rancheras, corridos, etc. Todos nuestros servicios incluimos guitarrón, vihuela, violín y trompeta.
            </p>
            <p>
              Contamos con el permiso de Arquidiócesis de Yucatán Dimensión Diocesana de Música Litúrgica para poder brindarles servicio musical en las Celebraciones Eucarísticas.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/about-mariachi.jpg" alt="Mariachi Sones de México" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About