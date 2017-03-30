import React from 'react';
import container from '../container';
import './style.scss';

const Header = (props) => {
  return (
    <header className="header row">
      <div className="col-xs-12">
        <a href="/">
          <span>d</span>
          <span>o</span>
          <span>t</span>
          <span>s</span>
        </a>
      </div>
    </header>
  );
};

export default container(Header);
