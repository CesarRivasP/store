import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header/header';
import Navigation from './navigation/navigation';
import Products from './products/products';
import We from './we/we';
import Error from './error/error';
import SingleProduct from './single-product/single-product';
import Contact from './contact/contact';
// import infoProducts from '../data/data.json';

class Router extends Component {
  state = {
    products: [],
    searchTerm: ''
  }

  componentDidMount(){
    this.setState({
      products: infoProducts
    }, () => console.log(infoProducts))
  }


  searchProduct = (search) => {
    if(search.length > 3){
      this.setState({
        searchTerm: search
      })
    }
    else {
      this.setState({
        searchTerm: ''
      })
    }
  }

  render(){
    let products = [...this.state.products];
    let search = this.state.searchTerm;
    let result;

    if(search !== ''){
      result = products.filter((product) => (
        product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ))
    }
    else {
      result = products;
    }

    return (
      <BrowserRouter>
        <Header />
        <div className="container">
          <Navigation />

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Products products={result} searchProduct={this.searchProduct} />
              )}
            />

            <Route exact path="/nosotros" component={We} />

            <Route
              exact
              path="/productos"
              render={() => (
                <Products products={result} searchProduct={this.searchProduct} />
              )}
            />
            <Route
              exact
              path="/producto/:productId"
              render={(props) => {
                let id_product = props.location.pathname.replace('/producto/', '');
                return (
                  <SingleProduct product={this.state.products[id_product]} key={id_product} />
                );
              }}
            />
            <Route exact path="/contacto" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
