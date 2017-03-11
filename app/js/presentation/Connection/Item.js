import React from 'react';

import './style.scss';

const ConnectionItem = (props) => {
  return (
    <div className="connection col-xs-12">
      <h2>{props.title}</h2>
      <p>{props.category}</p>
    </div>
  );
};

Connection.defaultProps = {
  title: '',
  category: '',
};

module.exports = Connection;
