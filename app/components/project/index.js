import React from 'react';
import { Route } from 'react-router';
import container from '../container';
import Jumbo from '../jumbo';
import Navigator from '../navigator';
import { getProjectName } from '../../helpers';
import {
  Rolodex as RolodexIcon,
  Network as NetworkIcon,
  Timeline as TimelineIcon,
} from '../navigator/icons';
import './style.scss';

const items = [
  {
    title: 'Rolodex',
    icon: RolodexIcon,
  },
  {
    title: 'Network',
    pathOverride: '',
    icon: NetworkIcon
  },
  {
    title: 'Timeline',
    icon: TimelineIcon,
  },
];

const test = (props) => {
  return (<h1>it worked</h1>);
}

const Project = ({ dots, router }) => {
  const projectName = getProjectName(router.location);

  const buildPillUrl = (path) => `/projects/${projectName}${path}`;

  return (
    <article className="project">
      <Jumbo title={dots.meta.title} subtitle={dots.meta.subtitle} />
      <Navigator items={items} />
      <Route exact path={buildPillUrl('')} component={test} />
    </article>
  );
};

export default container(Project);
