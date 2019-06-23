import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Product from '../product/product';
import Search from '../search/search';
import './products.css';

class Products extends Component {

  state = {
    products: [],
    searchTerm: ''
  }

  componentDidMount(){
    // this.props.auth.logout();

    this.queryAPI();
  }

  queryAPI = () => {
    const { getAccessToken } = this.props.auth;
    // headers de autorizacion
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`}; //nos permite ganar autorizacion con un token valido
    // En el servidor de express

    // Que url se va a utilizar
    const url = 'http://localhost:5000/productos';

    return axios.get(url, { headers })
      .then((response) => this.setState({
        products: response.data
      }, () => this.props.productsList(this.state.products)))
  }

  youArelogin = () => {
    this.props.auth.login();
  }

  searchProduct = (search) => {
    if(search.length > 3){ //si se tienen al menos 3 caracteres, realiza la busqueda, sino, hace otra llamado a la api para
      // tener todos los productos

      // obtener copia del state
      const products = [...this.state.products];

      // despues filtrar
      let result;

      result = products.filter((product) => (
        product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ));

      // enviar al state los productos filtrados y la busqueda
      this.setState({
        searchTerm: search,
        products: result
      })
    }
    else {
      this.setState({
        searchTerm: ''
      }, () => {
        this.queryAPI();
      })
    }
  }

  render(){
    const { isAuthenticated } = this.props.auth;
    const { products } = this.state;
    return (
      <div className="products">
        {
          isAuthenticated() && (
            <Fragment>
              <h2>Nuestros Productos</h2>

              <Search search={this.searchProduct} />
              <ul className="products-list">
                {
                  Object.keys(products).map((product) => (
                    <Product information={products[product]} key={product} />
                  ))
                }
              </ul>
            </Fragment>
          )
        }

        <ul className="products-list">
          {
            !isAuthenticated() && (
              <div className="container-button">
                <p>Para ver el contenido debes estar logueado</p>
                <a href="#!" onClick={this.youArelogin} className="button">Iniciar Sesión</a>
              </div>
            )
          }
        </ul>

      </div>
    );
  }
}

export default Products;
