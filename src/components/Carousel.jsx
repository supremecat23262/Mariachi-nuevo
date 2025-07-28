import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/Carousel.css'

// Importa las imágenes directamente
import mariachi1 from '../assets/images/mariachi1.jpg';
import mariachi2 from '../assets/images/mariachi2.jpg';
import mariachi3 from '../assets/images/mariachi3.jpg';
import mariachi4 from '../assets/images/mariachi4.jpg';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    cssEase: 'linear'
  };

  const images = [
    { id: 1, src: mariachi1, alt: 'Mariachi en evento' },
    { id: 2, src: mariachi2, alt: 'Presentación en boda' },
    { id: 3, src: mariachi3, alt: 'Serenata tradicional' },
    { id: 4, src: mariachi4, alt: 'Concierto de mariachi' }
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="slide">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="carousel-image"
              loading="lazy"
            />
            <div className="image-caption">{image.alt}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;