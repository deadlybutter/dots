import React from 'react';
import { Route } from 'react-router';
import container from '../container';
import Jumbo from '../jumbo';
import Navigator from '../navigator';
import { getProjectName } from '../../helpers';
import './style.scss';

const items = [
  {
    title: 'Essay',
    pathOverride: '',
  },
  {
    title: 'Rolodex',
  },
  {
    title: 'Network',
  },
  {
    title: 'Timeline',
  },
];

const test = (props) => {
  return (<h1>it worked</h1>);
}

const Project = ({ dots, router }) => {
  const projectName = getProjectName(router.location);

  const buildPillUrl = (path) => `/projects/${projectName}/${path}`;

  return (
    <article className="project">
      <Jumbo title={dots.meta.title} subtitle={dots.meta.subtitle} />
      <Navigator items={items} />
      <Route path={buildPillUrl('network')} component={test} />
    </article>
  );
};

export default container(Project);
