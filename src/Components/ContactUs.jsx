import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oijfsgj', 'template_jpbtx2q', form.current, 'iUa66s9P-2YTXBqFg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact">
    <h1>RESERVA YA</h1>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='Nombre'/>
      <input type="email" name="user_email" placeholder='Email' />
      <input type="date" name="date" placeholder="Fecha"></input>
    
      <select id="numero_personas" name="numero_personas">
          <option value="" disabled selected>Personas</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="4">5</option>
          <option value="4">6</option>
          <option value="4">7</option>
          <option value="4">8</option>
          <option value="4">9</option>
          <option value="4">10</option>
          <option value="4">11</option>
          <option value="4">12</option>
          <option value="4">13</option>
          <option value="4">14</option>
          <option value="4">15</option>
          <option value="4">15+</option>
      </select>
    
      <select id="Hora" name="Hora">
          <option value="" disabled selected>Hora</option>
          <option value="1">13:30</option>
          <option value="2">13:45</option>
          <option value="3">14:00</option>
          <option value="4">14:15</option>
          <option value="5">14:30</option>
          <option value="6">14:45</option>
          <option value="7">15:00</option>
          <option value="8">15:15</option>
          <option value="9">15:30</option>
          <option value="10">15:45</option>
          <option value="11">16:00</option>
          <option value="12">16:15</option>
          <option value="13">16:30</option>
          <option value="14">16:45</option>
          <option value="15">17:00</option>
          <option value="16">17:15</option>
          <option value="17">17:30</option>
          <option value="18">17:45</option>
          <option value="19">18:00</option>
          <option value="20">18:15</option>
          <option value="21">18:30</option>
          <option value="22">18:45</option>
          <option value="23">19:00</option>
          <option value="24">19:15</option>
          <option value="25">19:30</option>
          <option value="26">19:45</option>
          <option value="27">20:00</option>
          <option value="28">20:15</option>
          <option value="29">20:30</option>
          <option value="30">20:45</option>
          <option value="31">21:00</option>
          <option value="32">21:15</option>
          <option value="33">21:30</option>
          <option value="34">21:45</option>
          <option value="35">22:00</option>
          <option value="36">22:15</option>
          <option value="37">22:30</option>
          <option value="38">22:45</option>
          <option value="39">23:00</option>
          <option value="40">23:15</option>
          <option value="41">23:30</option>
          <option value="42">23:45</option>
      </select>
      <textarea  name="message"  placeholder='Escribe aqui...'></textarea>
      <input type='submit' value='RESERVAR'/>
    </form>
    </div>

  );
};


export default ContactUs;
