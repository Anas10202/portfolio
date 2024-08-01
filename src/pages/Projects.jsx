import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules';
import SwiperCore from 'swiper/core';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import slide_image_1 from '../assets/retro.jpg';
import slide_image_2 from '../assets/retro.jpg';
import slide_image_3 from '../assets/retro.jpg';
import slide_image_4 from '../assets/retro.jpg';
import slide_image_5 from '../assets/retro.jpg';
import slide_image_6 from '../assets/retro.jpg';
import slide_image_7 from '../assets/retro.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideData = [
    { image: slide_image_1, title: 'Slide 1', description: 'Description for Slide 1' },
    { image: slide_image_2, title: 'Slide 2', description: 'Description for Slide 2' },
    { image: slide_image_3, title: 'Slide 3', description: 'Description for Slide 3' },
    { image: slide_image_4, title: 'Slide 4', description: 'Description for Slide 4' },
    { image: slide_image_5, title: 'Slide 5', description: 'Description for Slide 5' },
    { image: slide_image_6, title: 'Slide 6', description: 'Description for Slide 6' },
    { image: slide_image_7, title: 'Slide 7', description: 'Description for Slide 7' },
  ];

  const handleSlideClick = () => {
    window.open('https://github.com/your-github-username', '_blank');
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
            className="relative p-4 bg-white rounded-lg shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 cursor-pointer"
            onClick={handleSlideClick}
            style={{ transition: 'transform 0.3s' }}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
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

