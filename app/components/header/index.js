import React from 'react';
import { Link } from 'react-router-dom';
import Block from '../block';
import './style.scss';

const Header = (props) => {
  return (
    <Block flexStyle={{justifyContent: 'center'}}>
      <header>
        <Link to="/">
          <span>d</span>
          <span>o</span>
          <span>t</span>
          <span>s</span>
        </Link>
      </header>
    </Block>
  );
};

export default Header;
