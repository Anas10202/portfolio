import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import slide_image_1 from '../assets/fitcheck.png';
import slide_image_2 from '../assets/bigbidness.png';
import slide_image_3 from '../assets/campusquest.png';
import slide_image_4 from '../assets/cariq.png';
import slide_image_5 from '../assets/Pokemon.png';
import slide_image_6 from '../assets/fraud.png';
import slide_image_7 from '../assets/serum.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideData = [
    { 
      image: slide_image_1, 
      title: 'Fitcheck', 
      description: 'AI-powered outfit recommendation app.', 
      link: 'https://github.com/Anas10202/FitCheck' 
    },
    { 
      image: slide_image_2, 
      title: 'Big-Bidness', 
      description: 'Marketplace web app for local businesses.', 
      link: 'https://github.com/Anas10202/big-bidness' 
    },
    { 
      image: slide_image_3, 
      title: 'Campus Quest', 
      description: 'Gamified college campus exploration app.', 
      link: 'https://github.com/jaynopponep/campus-quest-ctphacks-2024' 
    },
    { 
      image: slide_image_4, 
      title: 'Cariq', 
      description: 'Car tracking app.', 
      link: 'https://github.com/Anas10202/Car-IQ/tree/main' 
    },
    { 
      image: slide_image_5, 
      title: 'Pokemon', 
      description: 'iOS app displaying Pokémon info.', 
      link: 'https://github.com/Anas10202/PokemonApp' 
    },
    { 
      image: slide_image_6, 
      title: 'Credit Card Fraud Detection', 
      description: 'Machine learning model to detect fraud.', 
      link: 'https://github.com/Anas10202/mastercard_fraud_detection' 
    },
    { 
      image: slide_image_7, 
      title: 'Team Serum - Fair Dermatology AI', 
      description: 'Built an equitable AI model for skin condition diagnosis.', 
      link: 'https://github.com/Anas10202/btt_teamserum' 
    },
  ];

  const handleSlideClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center py-24">
      <h2 className="text-5xl font-bold text-yellow-700 retro-heading mb-12">Projects</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="w-4/5 lg:w-3/5"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative p-4 bg-white rounded-lg shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 cursor-pointer w-full h-80"
            onClick={() => handleSlideClick(slide.link)}
            style={{ transition: 'transform 0.3s' }}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold">{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;

