import React from 'react';
import './style.scss';

const Block = ({ children, flexStyle }) => {
  return (
    <div className="block" style={flexStyle}>
      <div className="block__component">
        { children }
      </div>
    </div>
  );
};

Block.defaultProps = {
  children: null,
  flexStyle: null,
};

module.exports = Block;
