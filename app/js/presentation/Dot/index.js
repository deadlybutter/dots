import React, { Component } from 'react';
import Note from '../Note';
import { getMachineName } from '../../helpers';

import './style.scss';

const Dot = ({ data, mapCategories }) => {
  const machineName = getMachineName(data.title);

  return (
    <div className='row dot'>
      <div className="col-xs-2 dot__date">
        <p>{ `${data._date.getMonth() + 1}/${data._date.getDate()}` }</p>
        <p>{ data._date.getFullYear() }</p>
      </div>
      <div className="col-xs-10 dot__content">
        <a href={`#${machineName}`}><h1 id={machineName}>{ data.title }</h1></a>
        <p>{ data.description }</p>
      </div>
      <div className="col-xs-offset-2 col-xs-10 dot__connections">
        {data.nodes.map((node, index) =>
          <div key={index} className="dot__connection">
            <h2>{ node.title }</h2>
            <p>{ node.description }</p>
            { mapCategories(node.categories) }
          </div>
        )}
      </div>
      <div className="col-xs-offset-2 col-xs-10 dot__sources">
        <Note text="sources" />
        <ul>
          {data.sources.map((source, index) =>
            <li>
              <a
                key={index}
                className="dot__source"
                href={source} target="_blank">{source}</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

module.exports = Dot;
