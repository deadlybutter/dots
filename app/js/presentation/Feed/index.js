import React from 'react';

import './style.scss';

const Feed = ({ dots }) => {
  return (
    <div className='row center-xs feed'>
      <div className="col-xs-12 col-sm-10 feed_dots">
        { dots }
      </div>
    </div>
  );
};

module.exports = Feed;
