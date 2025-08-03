import React, { useState, useRef, useEffect } from 'react';
import { FaMusic, FaGlassCheers, FaCalendarAlt, FaGift, FaStar } from 'react-icons/fa';
import { supabase } from '../../supabaseClient';
import '../styles/Services.css';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', comment: '', rating: 5 });
  const [message, setMessage] = useState('');
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, comment, rating } = newTestimonial;
    setMessage('');

    if (!name || !comment) {
      setMessage('Por favor escribe tu nombre y comentario.');
      return;
    }

    const { error } = await supabase.from('testimonials').insert([{ name, comment, rating }]);

    if (error) {
      console.error(error);
      setMessage('Ocurrió un error al enviar tu comentario.');
    } else {
      setMessage('¡Gracias por tu comentario! 🎶');
      setNewTestimonial({ name: '', comment: '', rating: 5 });

      setTimeout(() => {
        setMessage('');
        setShowModal(false);
      }, 3000);
    }
  };

  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaCalendarAlt size={40} />
            </div>
            <h3>Serenatas y Momentos Especiales</h3>
            <p>
              Transforma cualquier noche en algo inolvidable. Nuestros mariachis llevan música mexicana para enamorar y celebrar con los siguientes paquetes.
            </p>
            <ul>
              <li><strong>Paquete 1:</strong> 6 canciones</li>
              <li><strong>Paquete 2:</strong> 10 canciones</li>
              <li><strong>Paquete 3:</strong> 1 hora completa</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaMusic size={40} />
            </div>
            <h3>Paquete Básico - Mariachi Tradicional (4 integrantes)</h3>
            <p>
              Una opción elegante para eventos íntimos, que combina autenticidad y profesionalismo musical en un formato reducido.
            </p>
            <ul>
              <li>Formación clásica: guitarrón, vihuela, violín y trompeta</li>
              <li>Repertorio tradicional adaptado a la ocasión</li>
              <li>Disponibilidad: <strong>Lunes a jueves (horario completo)</strong>, <strong>viernes (hasta las 14:00 hrs)</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaGlassCheers size={40} />
            </div>
            <h3>Paquete Completo - Mariachi Clásico (7 músicos)</h3>
            <p>
              La máxima expresión del mariachi profesional, ideal para eventos especiales que requieren solemnidad y brillo musical.
            </p>
            <ul>
              <li>Formación completa con sección de cuerdas y metales (guitarrón, vihuela, violín y trompeta) </li>
              <li>Disponibilidad inmediata todos los días del año</li>
              <li>Recomendado para bodas, XV años, aniversarios y eventos corporaticos</li>
            </ul>
          </div>

        </div>

        <div className="service-note">
          <p>
            Brindamos servicio en toda la península de Yucatán para: Cumpleaños, Bodas, Pedida de Mano, XV años, Graduaciones, Bautizos, Convenciones, Conciertos y más.
          </p>
        </div>

        <div className="promo-box">
          <FaGift size={28} />
          <p>
            🎁 <strong>¡Canción adicional GRATIS!</strong><br />
            Publica un comentario positivo y muéstralo el día del evento para ganar una canción extra.
          </p>
          <button className="btn-comment" onClick={() => setShowModal(true)}>
            Dejar mi comentario
          </button>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
              <form className="testimonial-form" onSubmit={handleSubmit}>
                <h3>Comparte tu experiencia</h3>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                />
                <textarea
                  placeholder="¿Qué te pareció nuestro servicio?"
                  value={newTestimonial.comment}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, comment: e.target.value })}
                />
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={newTestimonial.rating >= star ? 'active' : ''}
                      onClick={() => setNewTestimonial({ ...newTestimonial, rating: star })}
                    />
                  ))}
                </div>
                <div className="form-buttons">
                  <button className="btn-enviar-comment" type="submit"
                  >Enviar</button>
                  <button type="button" onClick={() => setShowModal(false)}>Cancelar</button>
                </div>
                {message && <p className="form-message">{message}</p>}
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;