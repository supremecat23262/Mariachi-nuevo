import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alejandra Sáenz",
      comment: "Es muy alegre y cantan bien. Hicieron de mi boda un momento inolvidable con su música.",
      rating: 5
    },
    {
      id: 2,
      name: "Cecilio M.",
      comment: "Calidad y precios justos. Contratamos para el cumpleaños de mi madre y quedó encantada.",
      rating: 5
    },
    {
      id: 3,
      name: "Gabriel Suárez",
      comment: "Excelente trato al cliente y puntualidad. Los recomiendo ampliamente para cualquier evento.",
      rating: 4
    },
    {
      id: 4,
      name: "Isabel L.",
      comment: "Buena calidad y muy alegre el mariachi. Perfectos para la fiesta de XV años de mi hija.",
      rating: 5
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  }

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Lo que dicen nuestros clientes</h2>
        
        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.comment}"</p>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <h4>- {testimonial.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials