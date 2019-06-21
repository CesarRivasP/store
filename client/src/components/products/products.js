import React from 'react';
import Product from '../product/product';
import Search from '../search/search';
import './products.css';

const Products = ({ products, searchProduct }) => (
  <div className="products">
    <h2>Nuestros Productos</h2>

    <Search search={searchProduct}/>

    <ul className="products-list">
      {
        Object.keys(products).map((product) => (
          <Product information={products[product]} key={product} />
        ))
      }
    </ul>
  </div>
);

export default Products;
