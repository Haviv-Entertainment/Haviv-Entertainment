import React from 'react';
import Nav from './Nav';
import ImgSlider from './Slider';
import Logo from './Logo';
import '../styling/home.css';

const Home = () => {
  return (
    <div>
      <Logo />
      <Nav />
      <ImgSlider />
    </div>
  );
};

export default Home;
