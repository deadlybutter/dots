import React from 'react';

import './style.scss';

const JumboTitle = (props) => {
  return (
    <div className='row center-xs jumbo'>
      <div className="col-xs-12 col-sm-10 jumbo__content">
        <h1>{props.title}</h1>
      </div>
      <div className="col-xs-12 col-sm-10 jumbo__content">
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
};

JumboTitle.defaultProps = {
  title: '',
  subtitle: '',
};

module.exports = JumboTitle;
