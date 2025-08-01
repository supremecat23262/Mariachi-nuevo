import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import '../styles/FAQ.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "¿Dónde están ubicados?",
      answer: "Nos ubicamos en la Calle 28 por 9 y 11 #309 Colonia Juan Pablo ll, en la ciudad de Mérida, Yucatán."
    },
    {
      question: "¿Qué incluye el servicio?",
      answer: "El número de canciones contratadas, traje tradicional de mariachi, vihuela, guitarrón, violín y trompeta."
    },
    {
      question: "¿A qué hora cierran?",
      answer: "Estamos disponibles las 24 horas los 7 días de la semana los 365 días del año."
    },
    {
      question: "¿Con cuánto tiempo se puede apartar un evento?",
      answer: "Llámanos, llegamos a cualquier parte de Mérida en 45 minutos."
    },
    {
      question: "¿Cuál es el precio de los mariachis?",
      answer: "El precio varía dependiendo del número de integrantes, la duración y la fecha solicitada (en caso de que sea festiva). Contáctanos para una cotización personalizada sin compromiso."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>Preguntas Frecuentes</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ