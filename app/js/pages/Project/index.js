import React, { Component } from 'react';
import { convertObjectToArray, getMachineName } from '../../helpers'

import JumboTitle from '../../presentation/JumboTitle';
import Navigator from '../../presentation/Navigator';
import Label from '../../presentation/Label';
import Feed from '../../presentation/Feed';
import Dot from '../../presentation/Dot';

import './style.scss';

function mapCategories(categories) {
  return convertObjectToArray(categories).map((category, index) =>
    <Label key={index} title={category.title} background={category.background} />);
}

function mapDots(dots) {
  return convertObjectToArray(dots).map((dot, index) =>
    <Dot key={index} data={dot} mapCategories={mapCategories} />);
}

const Project = ({ graph }) => {
  return (
    <section className="page__project">
      <JumboTitle title={graph.meta.title} subtitle={graph.meta.subtitle} />
      <Navigator categories={mapCategories(graph.categories)} />
      <Feed dots={mapDots(graph.dots)} />
    </section>
  );
}

module.exports = Project;
