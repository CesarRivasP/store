import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to={'/'}>
      <img src="/img/logo.png" alt="Logo imagen"/>
    </Link>
  </header>
);

export default Header;
