import React from 'react';
import { Route, Router } from 'react-router-dom';
// Auth0
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';
// componentes propios
import Header from './header/header';
import Navigation from './navigation/navigation';
import Products from './products/products';
import We from './we/we';
import Error from './error/error';
import SingleProduct from './single-product/single-product';
import Contact from './contact/contact';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <Header />
        <div className="container">
          <Navigation />

          <Route
            exact
            path="/"
            render={(props) => (
              <Products /*products={result}*/ /*searchProduct={this.searchProduct}*/ auth={auth} {...props} />
            )}
          />

          <Route exact path="/nosotros" component={We} />

          <Route exact path="/contacto" component={Contact} />

          <Route component={Error} />

          <Route
            exact
            path="/productos"
            render={(props) => (
              <Products /*products={result}*/ /*searchProduct={this.searchProduct}*/ auth={auth} {...props} />
              // auth={auth} {...props} pasa las funciones de autenticacion al componente
            )}
          />

          <Route
            exact
            path="/producto/:productId"
            render={(props) => {
              let id_product = props.location.pathname.replace('/producto/', '');
              return (
                <SingleProduct
                  product={this.state.products[id_product]}
                  key={id_product}
                  auth={auth} {...props}
                />
              );
            }}
          />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}
