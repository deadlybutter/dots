import React from 'react';

function getMachineName(title) {
  return title.toLowerCase().trim();
}

const DataSet = (props) => {
  if (!props.data) return null;

  props.data.pivot = {
    nodes: {},
    categories: {},
  };

  props.data.categories.forEach((category, index) => {
    category.machineName = getMachineName(category.title);
    category.refs = [];
    props.data.pivot.categories[category.machineName] = index;
  });

  props.data.nodes.forEach((node, index) => {
    node.machineName = getMachineName(node.title);
    props.data.pivot.nodes[node.machineName] = index;

    const categoryId = props.data.pivot.categories[getMachineName(node.category)];
    const category = props.data.categories[categoryId];
    category.refs.push(node);
    node.category = category;

    node.connections = [];
  });

  props.data.connections.forEach((connection, index) => {
    connection.nodes.forEach((nodeTitle, titleIndex) => {
      const machineName = getMachineName(nodeTitle);
      const nodeId = props.data.pivot.nodes[machineName];
      const node = props.data.nodes[nodeId];
      node.connections.push(connection);
      connection.nodes[titleIndex] = node;
    });
  });

  const children = React.Children.map(props.children,
    (child) => React.cloneElement(child, {
      graph: props.data,
    })
  );

  return (
    <div className="dataset row">
      { children }
    </div>
  );
};

module.exports = DataSet;
