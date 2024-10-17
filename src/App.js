import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Mapa from './Components/Mapa';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import BounceLoader from "react-spinners/BounceLoader";

// import { Analytics } from '@vercel/analytics/react';  // Se moverá dentro del useEffect para el consentimiento

import './App.css';

const Productos = lazy(() => import('./Components/Productos'));

library.add(fas);

function App() {
  const [loading, setLoading] = useState(true);
  const [consentGiven, setConsentGiven] = useState(false); // Estado para el consentimiento

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Simulación de chequeo de consentimiento (puedes reemplazar esto por tu lógica real)
    const userConsent = true; // Aquí puedes poner tu lógica para verificar el consentimiento
    setConsentGiven(userConsent);
    
    if (userConsent) {
      import('@vercel/analytics/react').then(({ Analytics }) => {
        // Esto añade las analytics dinámicamente cuando el consentimiento es dado
        const analyticsElement = document.createElement('div');
        analyticsElement.setAttribute('id', 'vercel-analytics');
        document.body.appendChild(analyticsElement);
        React.createElement(Analytics);
      });
    }
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="BounceLoader-container">
          <BounceLoader color={'#d6d6d6'} loading={loading} size={250} />
        </div>
      ) : (
        <>
          <Navbar />
          <Inicio />
          <Suspense fallback={<h1>Cargando...</h1>}>
            <Productos />
          </Suspense>
          <Nosotros />
          <Mapa />
          <ContactUs />
          <Footer />
          {/* Las analytics se cargan condicionalmente si el consentimiento ha sido dado */}
        </>
      )}
    </div>
  );
}

export default App;
