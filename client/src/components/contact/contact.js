import React from 'react';
import './contact.css';

const Contact = () => (
  <form>
    <legend>Formulario de Contacto</legend>

    <div className="input-field">
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="name" id="name"/>
    </div>
    <div className="input-field">
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Tu email" id="email" />
    </div>
    <div className="input-field">
      <label htmlFor="message">Mensaje</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
    </div>
    <div className="input-field send">
      <input type="submit" value="send"/>
    </div>
  </form>
);

export default Contact;
