import React, { Component, Fragment} from 'react';
import './contact.css';

class Contact extends Component {

  youArelogin = () => {
    this.props.auth.login();
  }

  render(){
    const { isAuthenticated } = this.props.auth;
    return (
      <Fragment>
        {
          isAuthenticated() && (
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
                <input type="submit" value="Enviar"/>
              </div>
            </form>
          )
        }
        {
          !isAuthenticated() && (
            <div className="container-button">
              <p>Para enviar un mensaje debes estar logueado</p>
              <a href="#!" onClick={this.youArelogin} className="button">Iniciar Sesión</a>
            </div>
          )
        }
      </Fragment>
    );
  }
}

export default Contact;
