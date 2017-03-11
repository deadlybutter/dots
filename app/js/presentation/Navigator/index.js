import React from 'react';
import Note from '../Note';

import './style.scss';

const Navigator = ({ categories }) => {
  return (
    <div className='row center-xs navigator'>
      <div className="col-xs-12 col-sm-10 navigator__categories">
        <Note text="filter by" />
        { categories }
      </div>
    </div>
  );
};

module.exports = Navigator;
