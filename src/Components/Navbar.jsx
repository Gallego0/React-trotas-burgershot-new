import React, {useState} from 'react'; 
import {Link} from 'react-scroll'; 
import logo from '../images/logo-hamburgueserias-bueno.png';
import ubicacion from '../images/ubi2-removebg-preview.png';

function Navbar() {

    const[nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav (true);
        }
        else{
            setnav (false);
        }
            
    }

    window.addEventListener ('scroll', changeBackground);

    return(
        <nav cLassName={nav ? "nav active" :"nav"}>
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to="main" smooth={true} duration={900}>Inicio</Link></li>
                <li><Link to="productos" smooth={true} duration={900}>Productos</Link></li>
                <li><Link to="about" smooth={true} duration={900}>Sobre Nosotros</Link></li>
                <li><Link to="contact" smooth={true} duration={900}>Contacto</Link></li>
                <li><Link to="mapa" smooth={true} duration={900}><img src={ubicacion} alt="" /></Link></li>
            </ul>
        </nav>
    )
    
    
}

export default Navbar;