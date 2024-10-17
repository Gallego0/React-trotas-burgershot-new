import React from 'react';

function Mapa() {
  return (
    <div id="mapa">
        <div className='mapa-image'>
            <iframe title="Mapa de ubicación" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12402.43845734418!2d-3.3829608348934617!3d39.00140518236301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd69145dc4f9bb25%3A0xc4f1e6ec678403c5!2sHotel%20Menano!5e0!3m2!1ses!2ses!4v1705309388238!5m2!1ses!2ses" width="1510" height="610" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  );
}

export default Mapa;