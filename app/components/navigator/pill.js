import React from 'react';
import { Link } from 'react-router-dom';
import container from '../container';
import { getProjectName, getProjectPill } from '../../helpers';
import './style.scss';

const Pill = ({
  icon,
  pathOverride,
  router,
  title,
}) => {
  const projectName = getProjectName(router.location);
  const path = pathOverride === null ? title.toLowerCase() : pathOverride;
  const highlighted = path === getProjectPill(router.location);

  return (
    <Link to={`/projects/${projectName}/${path}`}>
      <div className={`pill ${highlighted ? '-highlighted' : ''}`}>
        <p>{ title }</p>
        <div className='pill__icon'>
          { icon }
        </div>
      </div>
    </Link>
  );
};

Pill.defaultProps = {
  icon: '',
  pathOverride: null,
  title: '',
}

export default container(Pill);
