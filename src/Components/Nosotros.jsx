import React from 'react';
import aboutimage from '../images/about1.png';

function Nosotros() {
  return (
    <div id="about">
        <div className='about-text'>
            <h1>SOBRE NOSOTROS</h1>
            <p>En 2006 abrió sus puertas el primer Home Burger Bar. Con aquel primer local queríamos demostrar que una hamburguesa sana y de calidad era algo que nada tenía que ver con el “Fast food”.</p>
            <button>Leer Mas..</button>
        </div>
        <div className='about-image'>
            <img src={aboutimage}alt=''/>
        </div>
       
    </div>
  );
}

export default Nosotros;