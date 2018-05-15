import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ImageOne from '../images/slideshowImages/havivEntertainmentCrowd.jpg';
import ImageTwo from '../images/slideshowImages/havivEntertainment1310.jpg';
import ImageThree from '../images/slideshowImages/havivEntertainmentCrowd2.jpg';
import ImageFour from '../images/slideshowImages/brideGroomChairHavivEntertainment.jpg';
import ImageFive from '../images/slideshowImages/havivEntertainmentCrowd3-1310.jpg';
import ImageSix from '../images/slideshowImages/MichaelHavivDJ-v2.jpg';
import Indicators from './Indicators';
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
  {
    image: ImageFour,
  },
  {
    image: ImageFive,
  },
  {
    image: ImageSix,
  },
];

const ImgSlider = () => (
  <Slider
    onSlideChange={
      event => console.log(event.slideIndex)
    }
    className="slider"
    // autoplay="4000"
  >
    {
      slideImages.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          // style={{
          //   background: `url('${item.image}') no-repeat center center`,
          // }}
        >
          <img className="sliderImageStyle" src={item.image} alt="Haviv Entertainment Images" />
        </div>
      ))
    }
    <Indicators />
  </Slider>
);

export default ImgSlider;
