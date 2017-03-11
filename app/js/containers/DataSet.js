import React from 'react';
import { getMachineName } from '../helpers';

const DataSet = (props) => {
  if (!props.data) return null;

  const graph = {
    categories: {},
    nodes: {},
    dots: {},
    meta: {...props.data.meta},
  };

  props.data.categories.forEach((category, index) =>
    graph.categories[getMachineName(category.title)] = category);

  props.data.nodes.forEach((node, index) => {
    const categories = node.categories.map((categoryTitle) =>
      graph.categories[getMachineName(categoryTitle)]);

    graph.nodes[getMachineName(node.title)] = {
      ...node,
      categories,
    };
  });

  props.data.dots.forEach((dot, index) => {
    const nodes = dot.nodes.map((nodeTitle) =>
      graph.nodes[getMachineName(nodeTitle)]);

    graph.dots[getMachineName(dot.title)] = {
      ...dot,
      nodes,
      _date: new Date(dot.date),
    };
  });

  const children = React.Children.map(props.children,
    (child) => React.cloneElement(child, {
      graph,
    })
  );

  return (
    <div className="dataset">
      { children }
    </div>
  );
};

module.exports = DataSet;
