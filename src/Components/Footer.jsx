import React from "react";
import twitter from '../images/twitterimg.png';
import tiktok from '../images/tiktokimage.png';
import linkedin from '../images/linkedinimg.png';
import insta from '../images/instaimg.png';

function Footer() {


    
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Negocios</h4>
                        <a href="/employer">
                            <p>Empleado</p>
                        </a>
                        <a href="/healthplan">
                            <p>Salud</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div> 
                    <div className="sb__footer-links_div">
                        <h4>Recursos</h4>
                        <a href="/resorces">
                            <p>Nuestra Carta</p>
                        </a>
                        <a href="/healthplan">
                            <p>Restaurantes</p>
                        </a>
                        <a href="/individual">
                            <p>Reservas</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/resorces">
                            <a href="http://www.ebanisteriaycarpinteriagallego.com">Ebanisteria Gallego</a>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Compañia</h4>
                        <a href="/nosotros">
                            <p>Sobre nosotros</p>
                        </a>
                        <a href="/prensa">
                            <p>Prensa</p>
                        </a>
                        <a href="/carrera">
                            <p>Carrera</p>
                        </a>
                        <a href="/contacto">
                            <p>Contacto</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Redes Sociales</h4>
                        <div className="socialmedia">
                            <p><img src={tiktok} alt="TikTok"/></p>
                            <p><img src={twitter} alt="Twitter"/></p>
                            <p><img src={linkedin} alt="LinkedIn"/></p>
                            <p><img src={insta} alt="Instagram"/></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @2024  TROTA'S BURGERSHOT.  Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terminos & Condiciones</p></div></a>
                        <p> | </p>
                        <a href="/privacy"><div><p>Privacidad</p></div></a>
                        <p> | </p>
                        <a href="/security"><div><p>Seguridad</p></div></a>
                        <p> | </p>
                        <a href="/cookie"><div><p>Cookies</p></div></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;