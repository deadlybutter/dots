import React, { Component } from 'react';

import DataSet from '../../components/DataSet';
import Sidebar from '../../presentation/Sidebar';
import Table from '../../components/Table';

import './style.scss';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('/api/v1/data/astronomy')
    .then(res => res.json())
    .then(data => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <section className="page__project">
        <DataSet data={this.state.data}>
          <Sidebar />
          <Table />
        </DataSet>
      </section>
    );
  }
}

module.exports = Project;
