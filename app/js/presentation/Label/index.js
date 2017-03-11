import React from 'react';
import { getMachineName } from '../../helpers';

import './style.scss';

const Label = ({ background, title, onClick, highlighted }) => {
  const filter = () => {
    onClick(getMachineName(title));
  };

  return (
    <span
      className={`label ${highlighted ? '-highlighted' : ''}`}
      style={{ background: background }}
      onClick={filter}>
      { title }
    </span>
  );
};

Label.defaultProps = {
  background: '#DDDDDD',
  title: '',
  onClick: () => {},
  highlighted: false,
};

module.exports = Label;
