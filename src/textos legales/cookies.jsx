import React from "react";
import "./textos_legales.css";
import { FiArrowLeft } from "react-icons/fi"; // Icono de "volver atrás"


const Cookies = () => {
  const handleGoBack = () => {
    window.history.back(); // Regresa a la página anterior
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Montserrat, sans-serif" }}>
      <p className="titulo">POLÍTICA DE COOKIES</p>
      
      <p className="texto">El objetivo de la presente Política es trasladar al usuario de manera transparente la existencia y el uso de cookies que realiza NOOS SOFTWARE SOLUTIONS, S.L. (en adelante, “NOOS”) en su página web, informando sobre su definición, la tipología de cookies utilizadas, identificando quién las utiliza, así como las opciones para gestionar su consentimiento o su rechazo al empleo de las mismas, el periodo de conservación de los datos y aportar información relevante en materia de protección de datos.</p>

      <p className="subtitulos">Información general</p>

      <p className="subtitulos">1. ¿Qué son las cookies?</p>
      <p className="texto">Las cookies son ficheros que se descargan en el dispositivo del usuario (como un teléfono móvil u ordenador) a través de los sitios web que un usuario visita. Las cookies se descargan mientras se navega por Internet y su finalidad principal es recabar datos de navegación del usuario para mejorar los servicios y el funcionamiento de la página web, elaborar información estadística y mostrarle contenido personalizado.</p>
      <p className="texto">Le informamos que en el transcurso de su navegación por este dominio de NOOS se utilizan cookies propias técnicas, que permiten el acceso a la navegación y a los servicios que se ofrecen en el sitio web; cookies propias de personalización que, si lo autoriza, recordarán sus preferencias mientras navega por el sitio web; y cookies propias gestionadas por terceros que, si lo autoriza, analizarán su navegación con fines estadísticos. Los usos concretos que hacemos de estas tecnologías se describen a continuación.</p>

      <p className="subtitulos">2. ¿Para qué utilizamos las cookies en este sitio web?</p>
      <p className="texto">En general, utilizamos las cookies para conocer la actividad de los visitantes a nuestra página web, en concreto para obtener información relacionada con la fecha y hora de visita, así como preferencias en sus hábitos de navegación, analizar sus hábitos de navegación para introducir cambios en el sitio web que mejoren su rendimiento o el acceso a productos en los que se haya mostrado mayor interés. También se utilizan para proporcionar información sobre la navegación de los usuarios a los propietarios de otros sitios web y sus colaboradores, con el fin de analizar el uso que realizan nuestra página web.</p>
      <p className="texto">Al navegar por nuestra página web se utilizan cookies que pueden clasificarse de la siguiente manera:</p>
      <p className="texto">Según el plazo de conservación en el dispositivo del usuario:</p>
      <p className="texto">- Las cookies de sesión: Son aquellas cuya persistencia en el dispositivo empleado por el usuario se limita al tiempo que el mismo esté navegando por el presente sitio web. Están diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión.</p>
      <p className="texto">- Las cookies persistentes: Son aquellas que se mantienen en el dispositivo del usuario más allá de la sesión de navegación. En particular, permiten que los datos sigan almacenados en el terminal y a los que se puede acceder y tratar durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</p>

      <p className="texto">Según la Entidad que las gestione:</p>
      <p className="texto">- Las cookies propias: Son aquellas creadas o gestionadas por el responsable de la página web, en este caso, NOOS, y que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por los usuarios. Utilizamos cookies propias persistentes con fines técnicos para controlar la visualización del banner informativo sobre cookies.</p>
      <p className="texto">- Las cookies de terceros: Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos a través de las cookies.</p>

      <p className="texto">Según la finalidad para la que se traten los datos obtenidos a través de las cookies:</p>
      <p className="texto">- Cookies técnicas (necesarias): Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan. Por ejemplo, las utilizamos, principalmente, para el mantenimiento de la sesión, el cálculo de tiempo de respuesta, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante tu navegación y habilitar contenidos dinámicos.</p>
      <p className="texto">- Cookies de personalización (preferencias): Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas, en función de una serie de criterios en el terminal del usuario (por ejemplo, el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.).</p>
      <p className="texto">- Cookies de análisis o de medición (estadísticas): Son aquellas que permiten el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</p>
      <p className="texto">- Cookies publicitarias (marketing): Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, se hayan incluido en una página web, aplicación o plataforma desde la que se presta el servicio solicitado, en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios. Incluye las Cookies de publicidad comportamental que almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</p>

      <p className="subtitulos">3. ¿Cómo puedo otorgar, denegar o revocar mi consentimiento?</p>
      <p className="texto">El empleo de cookies imprescindibles y estrictamente necesarias para el correcto funcionamiento del sitio web no se encuentra sujeto a aceptación por parte del usuario. Por este motivo, no podrá modificar su valor en el Panel de Configuración de Cookies. La instalación de cualquier otra tipología de cookies empleadas en este sitio web se encuentra sujeto a aceptación expresa y previa por parte del usuario mediante la aceptación o denegación de las mismas a través del panel de configuración mostrado al abrir la página. Le informamos que, en caso de no seleccionar ninguna opción del panel de configuración, equivaldría a un rechazo, de modo que no serán instaladas ni empleadas en su dispositivo cookies que no sean indispensables. Finalmente, le informamos que nosotros no controlamos la persistencia de las cookies de terceros, por lo que, si acepta su uso, deberá eliminarlas desde las opciones del navegador o desde el sistema ofrecido por el propio tercero.</p>

      <p className="subtitulos">Información sobre Protección de Datos relacionada con Cookies</p>
      <p className="texto">El empleo de cookies puede implicar la recopilación de datos personales de los usuarios de este sitio web. Por este motivo, en cumplimiento de la legislación vigente, ponemos en su conocimiento la siguiente información:</p>

      <p className="subtitulos">1. Responsable de tratamiento</p>
      <p className="texto">El Responsable del tratamiento de sus datos de navegación, obtenidos a través de las cookies en nuestra página web es NOOS SOFTWARE SOLUTIONS, S.L. (en adelante, “NOOS”) Datos de contacto del responsable: Calle Antonio López de los Mozos, 14, 13.200 - Manzanares (Ciudad Real). Datos de contacto del Delegado de Protección de Datos: noossolutions@gmail.com</p>

      <p className="subtitulos">2. Datos tratados</p>
      <p className="texto">La tipología de datos que se tratan a través de las cookies son datos identificativos, en concreto, los datos obtenidos de sus navegaciones por el sitio web y la navegación que realice en la misma: historial de navegación (páginas visitadas y clics en contenidos).</p>

      <p className="subtitulos">3. Finalidades del tratamiento y Legitimación</p>
      <p className="texto">Las finalidades del tratamiento están indicadas en el apartado 2 "¿Para qué utilizamos las cookies en este sitio web?". Aquellas cookies que sean necesarias para el funcionamiento de nuestra página web se instalarán en su dispositivo. Para todos los demás tipos de cookies necesitamos su consentimiento. En particular, si consiente las cookies de publicidad y de publicidad comportamental (marketing), podremos utilizar los datos que obtengamos de su navegación para almacenarlos y elaborar un perfil sobre usted, de manera que podamos ofrecerle publicidad que pueda ser de su interés.</p>

      <p className="subtitulos">4. Destinatarios de los datos</p>
      <p className="texto">Serán destinatarios de sus datos los terceros proveedores de Cookies que se encuentren instaladas en el presente sitio web.</p>

      <p className="subtitulos">5. Transferencias a terceros países</p>
      <p className="texto">El tratamiento de los datos se realiza, con carácter general, en el Espacio Económico Europeo o en países que han sido declarados con un nivel adecuado de protección.</p>

      <p className="subtitulos">6. Periodo de conservación de los datos</p>
      <p className="texto">Las Cookies se encontrarán instaladas por el tiempo necesario para cumplir con las finalidades que persiguen.</p>

      <p className="subtitulos">7. Derechos de los usuarios</p>
      <p className="texto">Como titular de los datos usted tiene derecho a acceder, actualizar, rectificar y suprimir los datos, así como otros derechos, o solicitar más información sobre el tratamiento que realizamos de las cookies dirigiéndose al correo electrónico noossolutions@gmail.com Tiene derecho a presentar cualquier reclamación ante la autoridad de control competente, considerando que la misma es, en España, la Agencia Española de Protección de Datos. Para poder ejercitar sus derechos en materia de protección de datos puede contactarnos a través de correo electrónico noossolutions@gmail.com.</p>
      
      <p className="subtitulos">Actualizaciones y cambios en la Política de Cookies</p>
      <p className="texto">NOOS realizará una revisión de la Política de cookies anualmente, salvo que existan exigencias normativas o de otra índole que hagan necesario adaptar la Política con una periodicidad inferior. Por tanto, se aconseja a los usuarios que consulten periódicamente su contenido, con el objetivo de estar informado adecuadamente sobre cómo y para qué utilizamos las cookies. Fecha de la última actualización: Junio de 2024.</p>
      
      {/* Botón para volver atrás */}
      <button className="go-back-btn" onClick={handleGoBack}>
        <FiArrowLeft size={20} style={{ marginRight: "8px" }} />
        Volver
      </button>
    </div>
  );
};

export default Cookies;