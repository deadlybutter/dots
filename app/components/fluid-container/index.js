import React from 'react';
import './style.scss';

const FluidContainer = ({ children }) => {
  return (
    <div className="fluid-container">
      { children }
    </div>
  );
};

FluidContainer.defaultProps = {
  children: null,
};

module.exports = FluidContainer;
