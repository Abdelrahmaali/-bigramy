import React from 'react'
import styles from './Mainslider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../Assets/Images/pic1.webp';
import slide2 from '../../Assets/Images/pic2.webp';
import slide3 from '../../Assets/Images/pic3.webp';

export default function Mainslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (


    
    <Slider {...settings}>
      <div>
        <img src={slide3} className=' img-fluid ' alt="" />
      </div>
      <div>
      <img src={slide3} className=' img-fluid ' alt="" />
      </div>
      <div>
      <img src={slide3} className=' img-fluid ' alt="" />
      </div>
      <div>
      <img src={slide3} className=' img-fluid ' alt="" />
      </div>
      <div>
      <img src={slide3} className=' img-fluid ' alt="" />
      </div>
      <div>
      <img src={slide3} className=' img-fluid ' alt="" />
      </div>
    </Slider>
  );
}
