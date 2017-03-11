import React from 'react';
import Node from '../presentation/Node';

const Table = (props) => {
  return (
    <div className="table col-xs-12 col-sm-8 col-lg-10">
      {props.graph.nodes.map((node, index) =>
        <Node
          key={index}
          data={node} />
      )}
    </div>
  );
};

module.exports = Table;
