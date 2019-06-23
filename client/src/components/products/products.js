import React, { Component } from 'react';
import Product from '../product/product';
import Search from '../search/search';
import './products.css';

class Products extends Component {

  state = {
    products: [],
    searchTerm: ''
  }

  componentDidMount(){
    this.queryAPI();
  }

  queryAPI = () => {
    console.log(this.props.auth.isAuthenticated());
  }

  youArelogin = () => {
    this.props.auth.login();
  }

  render(){
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="products">
        <h2>Nuestros Productos</h2>

        <Search /*search={searchProduct}*/ />

        {
          isAuthenticated() && (
            <ul className="products-list">
              <p>Estas logueado</p>
            </ul>
          )
        }

        <ul className="products-list">
          {
            !isAuthenticated() && (
              <div className="container-button">
                <p>Para ver el contenido debes estar logueado</p>
                <a onClick={this.youArelogin} className="button">Iniciar Sesión</a>
              </div>
            )
          }
        </ul>

      </div>
    );
  }
}

export default Products;

// render={(props) => {
//   let id_product = props.location.pathname.replace('/producto/', '');
//   return (
//     <SingleProduct
//       product={this.state.products[id_product]}
//       key={id_product}
//       auth={auth} {...props}
//     />
//   );
// }}

// ---- //
// <ul className="products-list">
//   // {
//   //   Object.keys(products).map((product) => (
//   //     <Product information={products[product]} key={product} />
//   //   ))
//   // }
// </ul>
