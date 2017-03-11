import React from 'react';
import Header from '../Header';
import Label from '../Label';

import './style.scss';

const Sidebar = (props) => {
  return (
    <div className="sidebar col-xs-12 col-sm-4 col-lg-2">
      <Header />
      <div className="sidebar__meta">
        <h1>{props.graph.meta.title}</h1>
        <p>{props.graph.meta.description}</p>
      </div>
      <div className="sidebar__meta">
        {props.graph.categories.map((category) => {
          return <Label title={category.title} background={category.color} />
        })}
      </div>
    </div>
  );
};

module.exports = Sidebar;
