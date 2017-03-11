import React, { Component } from 'react';
import Header from '../presentation/Header';
import Footer from '../presentation/Footer';

import './style.scss';

class Page extends Component {
  render() {
    return (
      <article className="page">
        <Header />
        <div className="row">
          <div className="col-xs-12">
            { this.props.children }
          </div>
        </div>
        <Footer />
      </article>
    );
  }
}

module.exports = Page;
