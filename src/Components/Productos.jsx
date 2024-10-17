import React from 'react';
import Productbox from './Productbox';
import { faAllergies, faEgg, faBacon, faCheese} from '@fortawesome/free-solid-svg-icons';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
import pimage3 from '../images/smash-burger.png';
import pimage4 from '../images/hamburguesa.png';
import pimage5 from '../images/hamburguesa2.png';
import pimage6 from '../images/hamburguesa3.png';

function Productos() {
  return (
    <div id="productos">
      <h1>NUESTRA CARTA</h1>
      <p>Nuestra carta es distinguirnos por el uso de ingredientes de calidad y colaborar con proveedores locales</p>
      <div className='a-container'>
        <Productbox
          image={pimage2}
          title="Pulled Sweet"
          description="Deliciosa hamburguesa con cerdo desmenuzado, salsa barbacoa y ensalada fresca."
          allergens={[faAllergies, faBacon, faCheese]}
        />
        <Productbox
          image={pimage1}
          title="Oklahoma Crispy"
          description="Crujiente hamburguesa con pollo frito, queso cheddar y aderezo especial."
          allergens={[faAllergies, faEgg, faCheese]}
        />
        <Productbox
          image={pimage3}
          title="Caprichosa BBQ"
          description="Sabrosa hamburguesa con carne, bacon, queso, lechuga, tomate y salsa barbacoa."
          allergens={[faAllergies, faBacon, faCheese]}
        />
      </div>
      <div className='a-container'>
        <Productbox
          image={pimage5}
          title="Stacker Savage"
          description="¡Bienvenido al reino de la indulgencia con nuestra Stacker Savage! Esta majestuosa hamburguesa presenta cuatro suculentas hamburguesas, cada una adornada con cuatro generosas lonchas de queso fundido. Todo se asienta entre capas de pan de sésamo, brindando una experiencia gastronómica digna de la realeza. El toque crujiente del bacon se entrelaza con la extravagancia de nuestra salsa cheddar, y para coronar esta obra maestra, aros de cebolla rebozados se despliegan en la última capa, elevando el sabor a nuevas alturas. ¡Prepárate para conquistar cada bocado de la Stacker Savage!."
          allergens={[faAllergies, faBacon, faCheese]}
        />
        <Productbox
          image={pimage6}
          title="Triple Angus"
          description="¡Descubre nuestra espectacular Triple Smash! Una deliciosa creación que combina tres jugosas hamburguesas smash, cada una acompañada por tres irresistibles lonchas de queso derretido. Todo se une en un suave pan brioche que envuelve el sabor inigualable del bacon crujiente, la frescura de la cebolla con pepinillo y la suavidad de nuestra exquisita salsa mahonesa. ¡Una explosión de sabores que te hará desear otra mordida!."
          allergens={[faAllergies, faEgg, faCheese]}
        />
        <Productbox
          image={pimage4}
          title="Hollywood"
          description="¡Embárcate en un viaje culinario con nuestra 'Old Hollywood'! Esta hamburguesa de lujo presenta dos jugosas hamburguesas Angus, cada una vestida con dos irresistibles lonchas de queso fundido. El escenario se monta sobre un suave pan brioche, donde el bacon crujiente despierta tus sentidos y la cebolla caramelizada añade una dulce melodía de sabores. Para la gran actuación, una generosa dosis de salsa BBQ transforma cada bocado en un momento digno de la antigua Hollywood. ¡Disfruta de la elegancia y el sabor atemporal de la 'Old Hollywood'!."
          allergens={[faAllergies, faBacon, faCheese]}
        />
      </div>
    </div>
  );
}

export default Productos;

