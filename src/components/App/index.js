// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import
import Caroussel from 'src/components/Caroussel';
import NavBar from 'src/components/NavBar';
// import Orders from 'src/components/Orders';
import Page from 'src/containers/Page';

import Footer from 'src/components/Footer';

import './styles.css';

// == Composant
const App = ({ loadProduct, isLogged }) => {
  useEffect(() => {
    // on veut charger les recettes
    loadProduct();
  }, []);

  return (
    <div className="app">
      <Router>
        <NavBar />
        <h1>OnTheSpot</h1>
        {isLogged && <div> Connecté </div>}
        <Caroussel />
        <Page />

        {/* <Orders /> */}
        <Footer />

      </Router>
    </div>
  );
};

App.propTypes = {
//   // fonction qui permet de charger les recettes
//   // pas de paramètre
  loadProduct: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,


};
// == Export
export default App;
