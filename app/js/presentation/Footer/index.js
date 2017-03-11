import React from 'react';

import './style.scss';

const Footer = (props) => {
  return (
    <footer className="footer row end-xs">
      <div className="col-xs-12">
        <p>created by <a href="https://twitter.com/itsjoekent" target="_blank">joe kent</a></p>
      </div>
    </footer>
  );
};

module.exports = Footer;
