// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {

  // const cars = {
  //   red: false,
  //   blue: false,
  //   yellow: false,
  // };

  const [state, setState] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });
  const contextValue = useContext(CarsContext);

  const moveCar = (car, side) => {
    setState({
        ...state,
        [car]: side,
    });
  }

  const context = {
    state,
    moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
