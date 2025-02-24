import React from 'react'
import Image1 from './assets/carousel1.jpg';
import Image2 from './assets/carousel2.jpg';
import Image3 from './assets/carousel3.jpg';
import Image4 from './assets/carousel4.jpg';
import Image5 from './assets/carousel5.jpg';

import Carousel from './Carousel.jsx';
import './Carousel.css'

function CarouselPage() {
  return (
    <>
    
        <div className="app">

          <Carousel>
        <img id="slideImg0" src={Image1} />
        <img id="slideImg1" src={Image2} />
        <img id="slideImg2" src={Image3} />
        <img id="slideImg3" src={Image4} />
        <img id="slideImg4" src={Image5} />
      </Carousel>
        </div>
     
     </>
  )
}

export default CarouselPage