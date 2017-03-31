import React from 'react';
import Block from '../block';
import './style.scss';

const Header = (props) => {
  return (
    <Block flexStyle={{justifyContent: 'center'}}>
      <header>
        <a href="/">
          <span>d</span>
          <span>o</span>
          <span>t</span>
          <span>s</span>
        </a>
      </header>
    </Block>
  );
};

export default Header;
