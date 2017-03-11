import React, { Component } from 'react';

import DataSet from './DataSet';
import Project from '../pages/Project';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(`/api/v1/data/${this.props.params.project}`)
    .then(res => res.json())
    .then(data => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <DataSet data={this.state.data}>
        <Project />
      </DataSet>
    );
  }
}

module.exports = ProjectContainer;
