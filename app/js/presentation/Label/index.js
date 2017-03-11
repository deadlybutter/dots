import React from 'react';

import './style.scss';

const Label = (props) => {
  return (
    <div className='label' style={{background: props.background}}>
      <p>{props.title}</p>
    </div>
  );
};

Label.defaultProps = {
  background: '#DDDDDD',
  title: '',
};

module.exports = Label;
