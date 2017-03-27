import React from 'react';
import { getMachineName } from '../../helpers';

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
