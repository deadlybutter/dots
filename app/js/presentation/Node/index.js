import React from 'react';
import Connection from '../Connection';

import './style.scss';

function getConnectionTitle(connection, machineName) {
  return connection.nodes.filter((connected) => connected.machineName !== machineName)
    .map(connected => connected.title).join();
}

const Node = (props) => {
  return (
    <div className="node">
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
      <div className="node__connections row">
        {props.data.connections.map((connection, index) =>
          <Connection
            key={index}
            title={getConnectionTitle(connection, props.data.machineName)}
            description={connection.description} />
        )}
      </div>
    </div>
  );
};

Node.defaultProps = {
  data: {
    title: '',
    description: '',
    connections: [],
    machineName: '',
  }
}

module.exports = Node;
