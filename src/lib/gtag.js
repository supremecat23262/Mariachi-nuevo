// src/lib/gtag.js

export const GA_MEASUREMENT_ID = 'G-P2XC2GRB9T'; // tu ID real

// Inicializa GA (esto ya lo hiciste en el <head>, no repitas aquí)

// Función para eventos personalizados
export const gtagEvent = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
