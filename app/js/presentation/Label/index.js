import React from 'react';

import './style.scss';

const Label = ({ background, title }) => {
  return (
    <span className='label' style={{ background: background }}>
      { title }
    </span>
  );
};

Label.defaultProps = {
  background: '#DDDDDD',
  title: '',
};

module.exports = Label;
