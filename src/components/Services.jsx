import React, { useState } from 'react';
import { FaMusic, FaGlassCheers, FaCalendarAlt, FaGift, FaStar, FaImage } from 'react-icons/fa';
import { supabase } from '../../supabaseClient';
import '../styles/Services.css';

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    comment: '',
    rating: 5,
    photo: null
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const { name, comment, rating, photo } = newTestimonial;
    if (!name || !comment) {
      setMessage('Por favor escribe tu nombre y comentario.');
      return;
    }

    let photo_url = null;
    if (photo) {
      const fileExt = photo.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('photos')
        .upload(filePath, photo, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error(uploadError);
        setMessage('Error al subir la imagen.');
        return;
      }

      const { data: publicURL } = supabase.storage.from('photos').getPublicUrl(filePath);
      photo_url = publicURL?.publicUrl || null;
    }

    const { error } = await supabase.from('testimonials').insert([{
      name,
      comment,
      rating,
      photo_url
    }]);

    if (error) {
      console.error(error);
      setMessage('Ocurrió un error al enviar tu comentario.');
    } else {
      setMessage('¡Gracias por tu comentario! 🎶');
      setNewTestimonial({ name: '', comment: '', rating: 5, photo: null });

      // Ocultar formulario después de un tiempo
      setTimeout(() => {
        setMessage('');
        setShowForm(false);
      }, 3000); // 3 segundos
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
              <li><strong>Paquete 1:</strong> 1 hora completa</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaMusic size={40} />
            </div>
            <h3>Mariachi Económico (4 integrantes)</h3>
            <p>
              Una excelente opción económica para eventos íntimos. Ideal si deseas música en vivo sin comprometer la calidad.
            </p>
            <ul>
              <li>Incluye guitarrón, vihuela, violín y trompeta</li>
              <li>Repertorio versátil y profesional</li>
              <li>Disponibilidad: <strong>Lunes a Jueves todo el día</strong>, <strong>Viernes hasta el mediodía</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaGlassCheers size={40} />
            </div>
            <h3>Mariachi Completo (7 integrantes)</h3>
            <p>
              La experiencia más completa y majestuosa. Perfecto para grandes celebraciones donde se busca una presencia poderosa.
            </p>
            <ul>
              <li>Instrumentación completa con voces armónicas</li>
              <li>Disponible todos los días</li>
              <li>Ideal para bodas, aniversarios, XV años y más</li>
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
          <button className="btn-comment" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Ocultar formulario' : 'Dejar mi comentario'}
          </button>
        </div>

        {showForm && (
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
            <label className="photo-upload">
              <FaImage /> Subir foto (opcional)
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewTestimonial({ ...newTestimonial, photo: e.target.files[0] })}
              />
            </label>
            <button type="submit">Enviar</button>
            {message && <p className="form-message">{message}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default Services;
