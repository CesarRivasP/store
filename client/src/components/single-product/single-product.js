import React from 'react';
import './single-product.css';

function SingleProduct({product}){
  const { image, name, price, description } = product;

  if(!product) return null;

  return (
    <div className="info-product">
      <div className="image">
        <img src={`/img/${image}.png`} alt={name}/>
      </div>

      <div className="info">
        <h2>{name}</h2>
        <p className="price"><strong>${price}</strong></p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
