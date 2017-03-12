import React, { Component } from 'react';
import { convertObjectToArray, getMachineName } from '../../helpers'

import JumboTitle from '../../presentation/JumboTitle';
import Navigator from '../../presentation/Navigator';
import Label from '../../presentation/Label';
import Feed from '../../presentation/Feed';
import Dot from '../../presentation/Dot';

import './style.scss';

class Project extends Component {
  constructor(props) {
    super(props);

    this.onFilter = this.onFilter.bind(this);
    this.mapCategories = this.mapCategories.bind(this);

    this.state = {
      filters: [],
    }
  }

  mapCategories(categories, onClick = null) {
    return convertObjectToArray(categories).map((category, index) =>
      <Label
        key={index}
        title={category.title}
        background={category.background}
        onClick={onClick}
        highlighted={this.state.filters.indexOf(getMachineName(category.title)) > -1} />);
  }

  getFeedDots() {
    let arr = convertObjectToArray(this.props.graph.dots);

    if (this.state.filters.length > 0) {
      arr = arr.filter((dot) => {
        const categories = [];
        dot.nodes.forEach((node) =>
          node.categories.forEach((category) =>
            categories.push(getMachineName(category.title))));

        return categories.some((category) => this.state.filters.indexOf(category) > -1);
      });
    }

    return arr.sort((a, b) => a._date > b._date)
      .map((dot, index) =>
        <Dot key={index} data={dot} mapCategories={this.mapCategories} />);
  }

  onFilter(filter) {
    const filters = this.state.filters;
    const index = filters.indexOf(filter);

    index > -1 ? filters.splice(index, 1) : filters.push(filter);

    this.setState({
      filters,
    });
  }

  render() {
    const graph = this.props.graph;
    const categories = this.mapCategories(graph.categories, this.onFilter);
    const dots = this.getFeedDots();

    return (
      <section className="page__project">
        <JumboTitle title={graph.meta.title} subtitle={graph.meta.subtitle} />
        <Navigator categories={categories} />
        <Feed dots={dots} />
      </section>
    );
  }
}

module.exports = Project;
