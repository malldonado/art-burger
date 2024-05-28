import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Importe imagens ou dados dos slides
import slide1 from '../../assets/product.jpg';
import slide2 from '../../assets/product2.jpg';
import slide3 from '../../assets/product3.jpg';
import slide4 from '../../assets/product2.jpg';
import slide5 from '../../assets/product3.jpg';

const slideImages = [slide1, slide2, slide3, slide4, slide5];

const MenuFull = () => {
  return (
    <div className="w-full h-full bg-black text-white max-w-7xl mx-auto">
      <Slide
        slidesToShow={5}
        slidesToScroll={1}
        indicators={true}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {slideImages.map((slide, index) => (
          <div key={index} className="p-2">
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-md" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default MenuFull;
