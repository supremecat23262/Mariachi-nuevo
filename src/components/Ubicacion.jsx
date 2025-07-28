import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Ubicacion.css';

const Ubicacion = () => {
  return (
    <section id="ubicacion" className="ubicacion-section">
      <div className="ubicacion-container">
        <h2><FaMapMarkerAlt /> Ubicación</h2>
        <p>Estamos ubicados en Peek Park, Juan Pablo II, Mérida, Yucatán.</p>
        <div className="map-wrapper">
            
          <iframe
            title="Ubicación en Mérida"
            src="https://www.google.com/maps/embed?pb=!4v1753695184446!6m8!1m7!1saHRex3ZAoPKTLhassDEnTQ!2m2!1d20.97537725762432!2d-89.67936520942906!3f267.78814678133824!4f-21.491905153091565!5f0.7820865974627469"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
