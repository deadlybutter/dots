import React from 'react';

import './style.scss';

const Connection = (props) => {
  return (
    <div className="connection col-xs-12">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

Connection.defaultProps = {
  title: '',
  description: '',
};

module.exports = Connection;
