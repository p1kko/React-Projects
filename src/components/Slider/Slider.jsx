import React, { useState } from 'react';
import './Slider.scss'

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  }
  
  const handleNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  }

  return (
    <div className="slider">
 
      <div className="slider__image">
     
        <img  width={900} height={300} src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      </div>
      <div className="slider__controls">  
        <button   className='btn-prev' onClick={handlePrev}><img src="./img/Slider/next.svg" alt="Prev" /></button>
        <button className='btn-next' onClick={handleNext}><img src="./img/Slider/next.svg" alt="Next" /></button>
      </div>
    </div>
  );
};

export default Slider;