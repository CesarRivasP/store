import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

class Navigation extends Component {

  startSession = () => {
    this.props.auth.login();
  }

  closeSession = () => {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    let result;
    console.log(isAuthenticated());
    if(isAuthenticated()){
      result = <a href="#!" onClick={this.closeSession}>Cerrar Sesión</a>;
    }
    else {
      result = <a href="#!" onClick={this.startSession}>Iniciar Sesión</a>;
    }

    return (
      <nav className="navigation">
        <NavLink to={'/nosotros'} activeClassName="active">Nosotros</NavLink>
        <NavLink to={'/productos'} activeClassName="active">Productos</NavLink>
        <NavLink to={'/contacto'} activeClassName="active">Contacto</NavLink>
        { result }
      </nav>
    );
  }
}

export default Navigation;
