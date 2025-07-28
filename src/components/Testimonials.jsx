import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { supabase } from '../../supabaseClient';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Lo que dicen nuestros clientes</h2>

        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              {t.photo_url && <img src={t.photo_url} alt={t.name} className="testimonial-photo" />}
              <p>"{t.comment}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
