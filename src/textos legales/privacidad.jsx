import React from "react";
import "./textos_legales.css";
import { FiArrowLeft } from "react-icons/fi"; // Icono de "volver atrás"


const LegalNotice = () => {
  const handleGoBack = () => {
    window.history.back(); // Regresa a la página anterior
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Montserrat, sans-serif" }}>
      <p className="titulo">POLÍTICA DE PROTECCIÓN DE DATOS DE USUARIOS WEB</p>
      
      <p className="subtitulos">1.Responsable del Tratamiento ¿Quién es el responsable del tratamiento de tus datos?</p>
      <p className="texto">1.1. NOOS SOFTWARE SOLUTIONS, S.L. (en adelante, “NOOS”), con CIF B55392039 y domicilio en domicilio en Calle Antonio López de los Mozos, 14, 13.200 - Manzanares (Ciudad Real). Contáctanos por el correo electrónico de atención al cliente noossolutions@gmail.com.</p>
      <p className="texto">1.2. El Delegado de Protección de Datos (en adelante DPD) es la persona encargada de salvaguardar su privacidad en nuestra Entidad. Si precisa contactar con él, puede hacerlo en noossolutions@gmail.comm o mediante carta remitida a la dirección de la Entidad, incluyendo la referencia “Delegado de Protección de Datos”.</p>

      <p className="subtitulos">2. Alcance ¿A quién aplica esta Información?</p>
      <p className="texto">2.1. La presente información en materia de Protección de Datos aplica exclusivamente a los tratamientos que se realizan de los datos recabados a través de los formularios habilitados en las páginas web del responsable del tratamiento.</p>

      <p className="subtitulos">3. Procedencia y categoría de datos ¿Cuál es el origen y que categorías de datos tratamos?</p>
      <p className="texto">3.1. Los datos personales que se gestionan a través de la presente página web serán exclusivamente los que nos facilite a través de los formularios habilitados. No se obtienen datos personales procedentes de otras fuentes.</p>
      <p className="texto">3.2. Las categorías de datos tratados, en los tratamientos de datos que se exponen en el apartado 4 de la presente Información, son datos identificativos y de contacto: nombre, apellidos y email, así como cualquier otro dato de carácter personal que usted incluya en el cuerpo del mensaje.</p>

      <p className="subtitulos">4. Finalidad ¿Con qué finalidad tratamos sus datos personales?</p>
      <p className="texto">4.1. El Responsable tratará los datos identificativos y de contacto para ponernos en contacto usted y atender las consultas y solicitudes de información que nos remita a través de formularios habilitados en nuestra página web.</p>
      <p className="texto">4.2. En el caso de que lo autorice expresamente, y siempre que no sea cliente de NOOS, emplearemos tus datos de contacto para remitirle comunicaciones comerciales de productos y servicios comercializados por NOOS. Adicionalmente, en el caso de que nos facilite su número de teléfono en el formulario web, trataremos su dato de teléfono para contactarte y proporcionarle información comercial de nuestros productos y servicios. Asimismo, si nos facilita datos identificativos y de contacto durante la llamada serán utilizados con la finalidad de llevar un seguimiento del servicio ofertado durante la misma.</p>
      <p className="texto">4.3. No se prevé la realización de transferencias internacionales de datos, ni la elaboración de perfiles o decisiones automatizadas para los tratamientos identificados.</p>

      <p className="subtitulos">5. Legitimación ¿Cuál es la legitimación para el tratamiento de tus datos?</p>
      <p className="texto">5.1. La legitimación para el tratamiento de tus datos personales para la finalidad enumerada en el apartado 4.1 es el consentimiento expreso y libre prestado por usted al marcar la casilla “He leído y acepto la Política de Protección de Datos”, así como la ejecución de medidas precontractuales a solicitud del interesado, en caso de que en su consulta se interese por los productos y servicios ofrecidos por NOOS.</p>
      <p className="texto">5.2. La finalidad para el tratamiento de tus datos personales para la finalidad enumerada en el apartado 4.2 es el consentimiento expreso y libre prestado por usted a través de la casilla “Deseo recibir comunicaciones comerciales de productos y servicios ofrecidos por NOOS”</p>

      <p className="subtitulos">6. Conservación ¿Cuánto tiempo conservaremos tus datos?</p>
      <p className="texto">6.1. Los datos recabados a través de los formularios habilitados en nuestras páginas web se conservarán durante el plazo de un año. Trascurrido ese plazo los datos se eliminarán.</p>
      
      <p className="subtitulos">7. Destinatarios ¿A qué destinatarios se comunicarán tus datos.</p>
      <p className="texto">7.1. Los datos se tratarán por el responsable del tratamiento, así como por los agentes y proveedores con los que NOOS contrate la prestación de algún servicio, en caso de que resulte necesario. Ello se hará siempre con contratos y garantías sujetos a los modelos aprobados por las autoridades en materia de protección de datos.</p>

      <p className="subtitulos">8. Derechos ¿Cuáles son tus derechos?</p>
      <p className="texto">8.1. Derecho de acceso: Derecho a conocer qué tipo de datos estamos tratando y las características de los tratamientos que estamos llevando a cabo, de acuerdo con lo establecido en el artículo 15 del Reglamento General de Protección de Datos (RGPD, en adelante).</p>
      <p className="texto">8.2. Derecho de rectificación: Derecho a solicitar la modificación de tus datos personales por ser éstos inexactos, no veraces o desactualizados.</p>
      <p className="texto">8.3. Derecho de oposición: Derecho a solicitar que no se traten tus datos personales para determinadas finalidades. Así, cuando el tratamiento esté basado en tu consentimiento, tienes derecho a retirar tal consentimiento en cualquier momento. Igualmente podrás oponerse al tratamiento de tus datos. Todo ello de acuerdo con el artículo 21 del RGPD.</p>
      <p className="texto">8.4. Derecho de cancelación o supresión: Derecho a solicitar la supresión de tus datos personales cuando el tratamiento ya no resulte necesario.</p>
      <p className="texto">8.5. Derecho limitación al tratamiento: Derecho a solicitar la limitación del tratamiento de tus datos, en cuyo caso únicamente se conservarán para el ejercicio o la defensa de reclamaciones, atención a requerimientos judiciales o a exigencias legales.</p>
      <p className="texto">8.6. Portabilidad. Derecho a solicitar la portabilidad de los datos que nos hayas facilitado, para recibirlos en un formato estructurado, de uso común y lectura mecánica, y a que se transmitan a otro responsable, de acuerdo con lo establecido en el artículo 20 del RGPD.</p>
      <p className="texto">8.7. Revocación del consentimiento. En cualquier momento puedes revocar el consentimiento que hayas prestado, sin ningún tipo de detrimento o perjuicio.</p>
      <p className="texto">8.8. Presentación de una reclamación. En cualquier momento puedes presentar reclamación ante la autoridad de control competente, considerando que la misma es, en España, la Agencia Española de Protección de Datos, sin perjuicio de las competencias que en su caso ostenten otras entidades autonómicas o supranacionales, de acuerdo con el Reglamento de Protección de Datos y la normativa nacional.</p>

      <p className="texto">También puedes acudir a nuestro Delegado de Protección de Datos a través de correo electrónico noossolutions@gmail.com.</p>
      <p className="texto">Para el ejercicio de cualquiera de los derechos enunciados, puedes dirigir tu solicitud mediante escrito dirigido a NOOS en la dirección de correo electrónico noossolutions@gmail.com, adjuntando copia de su DNI u otro documento oficial identificativo.</p>

      {/* Botón para volver atrás */}
      <button className="go-back-btn" onClick={handleGoBack}>
        <FiArrowLeft size={20} style={{ marginRight: "8px" }} />
        Volver
      </button>
    </div>
  );
};

export default LegalNotice;