import React, { Component } from 'react';

import './style.scss';

class Page extends Component {
  render() {
    return (
      <article className="page">
        { this.props.children }
      </article>
    );
  }
}

module.exports = Page;
