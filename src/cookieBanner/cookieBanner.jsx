import React, { useState } from 'react';
import './cookieBanner.css';

export default function CookieBanner() {
    const [isVisible, setVisible] = useState(true);

    const aceptarCookies = () => {
        // Añadir clase para animación
        const banner = document.querySelector('.cookie-banner');
        banner.classList.add('hide');
        setTimeout(() => {
            setVisible(false); // Ocultar después de la animación
        }, 500); // Duración de la animación (coincide con el CSS)

        // Obtener la ubicación del usuario
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const locationCookie = `userLocation=${latitude},${longitude}; path=/; max-age=604800;`; // Expira en 7 días
                    document.cookie = locationCookie;
                    console.log("Ubicación almacenada como cookie:", locationCookie);
                },
                (error) => {
                    console.error("Error obteniendo la ubicación:", error.message);
                }
            );
        } else {
            console.warn("La geolocalización no está soportada por este navegador.");
        }
    };

    const rechazarCookies = () => {
        // Añadir clase para animación
        const banner = document.querySelector('.cookie-banner');
        banner.classList.add('hide');
        setTimeout(() => {
            setVisible(false); // Ocultar después de la animación
        }, 500); // Duración de la animación
        console.log("Cookies rechazadas.");
    };

    if (!isVisible) return null; // No renderizar el banner si está oculto

    return (
        <div className="cookie-banner">
            <div className="cookie-banner-content">
                <p className="cookie-title">Este sitio utiliza cookies.</p>
                <p className="cookie-text">
                    Usamos cookies para mejorar la experiencia de usuario. ¿Aceptas el uso de cookies?
                </p>
                <div className="cookie-buttons">
                    <button className="cookie-btn aceptar" onClick={aceptarCookies}>
                        Aceptar
                    </button>
                    <button className="cookie-btn rechazar" onClick={rechazarCookies}>
                        Rechazar
                    </button>
                </div>
            </div>
        </div>
    );
}
