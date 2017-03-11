import React, { Component } from 'react';
import Header from '../presentation/Header';

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
      </article>
    );
  }
}

module.exports = Page;
