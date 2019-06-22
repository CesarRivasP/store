import React from 'react';
import './list-prod.css';
import { Link } from 'react-router-dom';

function Product({information}){
  const { image, name, price, id } = information;

  return (
    <li className="list-prod">
      <img src={`/img/${image}.png`} alt={name} />
      <p>{ name } <span>${price}</span></p>
      <Link to={`/producto/${id}`}>Más Información</Link>
    </li>
  );
}

export default Product;
