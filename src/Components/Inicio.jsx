import React from 'react';
import {Link} from 'react-scroll'; 

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import pimage1 from '../images/about-nuevo.png';
import pimage2 from '../images/banner-nuevo.png';
import pimage3 from '../images/SMASH-BURGERS.png';

function Inicio() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000, 
  };


  return (
    <div id="main">
      <Slider {...settings}>
          <div>
            <img className='.imagen-carrusel' src={pimage1}alt=''/>
          </div>
          <div>
            <img className='.imagen-carrusel' src={pimage2}alt=''/>
          </div>
          <div>
            <img className='.imagen-carrusel' src={pimage3}alt=''/>
          </div>
      </Slider>
      <div className='header-heading'>
        <h3>Menú diario  12,50€</h3>
        <h1><span>HAMBURGUESA</span><br/>DE LA CASA</h1>
        <p className='details'>Hamburguesa + patatas + bebida grande</p>
        <div className='header-btns'>
          <button className='header-btn'><Link to="productos" smooth={true} duration={900}>Ver Carta</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
