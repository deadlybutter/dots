import React from 'react';

import './style.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <img src="logo.png" />
      <h2>connect the dots</h2>
    </div>
  );
};

module.exports = Header;
