import React, { Fragment } from 'react';
// import Router from './components/router';
import { makeMainRoutes } from './components/routes';


const routes = makeMainRoutes();

function App() {
  return (
    <Fragment>
      { routes }
    </Fragment>
  );
}

export default App;
