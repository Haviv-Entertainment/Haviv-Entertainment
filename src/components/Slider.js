import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ImageOne from '../images/slideshowImages/0852.jpg';
import ImageTwo from '../images/slideshowImages/5TownsProductions2.jpg';
import ImageThree from '../images/slideshowImages/Pic-1114.jpg';
import '../styling/slider.css';

const slideImages = [
  {
    image: ImageOne,
  },
  {
    image: ImageTwo,
  },
  {
    image: ImageThree,
  },
];

const ImgSlider = () => (
  <Slider
    onSlideChange={event => console.log(event.slideIndex)}
    className="slider"
    // autoplay="4000"
  >
    {slideImages.map((item, index) => (
      <div
        key={index}
        className="slider-content"
        style={{ background: `url('${item.image}') no-repeat center center` }}
      />
    ))}
  </Slider>
);

export default ImgSlider;
