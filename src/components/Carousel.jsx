import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/Carousel.css'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  }

  // Reemplaza con tus imágenes
  const images = [
    { id: 1, src: '/images/mariachi1.jpg', alt: 'Mariachi en evento' },
    { id: 2, src: '/images/mariachi2.jpg', alt: 'Presentación en boda' },
    { id: 3, src: '/images/mariachi3.jpg', alt: 'Serenata tradicional' },
    { id: 4, src: '/images/mariachi4.jpg', alt: 'Concierto de mariachi' }
  ]

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel