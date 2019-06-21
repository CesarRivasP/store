import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <NavLink to={'/nosotros'} activeClassName="active">Nosotros</NavLink>
    <NavLink to={'/productos'} activeClassName="active">Productos</NavLink>
    <NavLink to={'/contacto'} activeClassName="active">Contacto</NavLink>
  </nav>
);

export default Navigation;
