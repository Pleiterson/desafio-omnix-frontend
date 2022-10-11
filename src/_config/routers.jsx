import React from 'react';
import { BrowserRouter as Router,
          Routes,
          Route
        } from 'react-router-dom';
import Home from '../pages/Home';
import Offers from '../pages/Offers';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/offers" element={ <Offers /> } />
      </Routes>
    </Router>
  );
}

export default Routers;
