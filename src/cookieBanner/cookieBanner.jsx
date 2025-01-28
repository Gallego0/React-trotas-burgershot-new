import React, { useState, useEffect } from 'react';
import './cookieBanner.css';

export default function CookieBanner() {
    const [isVisible, setVisible] = useState(false);
    const [isHiding, setHiding] = useState(false);

    useEffect(() => {
        const cookiePreference = localStorage.getItem('cookiesAccepted');
        if (!cookiePreference) {
            setVisible(true);
        }
    }, []);

    const handleHideBanner = (decision) => {
        localStorage.setItem('cookiesAccepted', decision);
        setHiding(true); // Activa la animación
        setTimeout(() => setVisible(false), 500); // Esconde completamente después de la animación
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`cookie-banner ${isHiding ? 'hide' : ''}`}>
            <div className="cookie-banner-content">
                <p className="cookie-title">Este sitio utiliza cookies.</p>
                <p className="cookie-text">
                    Usamos cookies para mejorar la experiencia de usuario. ¿Aceptas el uso de cookies?
                </p>
                <div className="cookie-buttons">
                    <button className="cookie-btn aceptar" onClick={() => handleHideBanner('true')}>
                        Aceptar
                    </button>
                    <button className="cookie-btn rechazar" onClick={() => handleHideBanner('false')}>
                        Rechazar
                    </button>
                </div>
            </div>
        </div>
    );
}
