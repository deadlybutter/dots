import React from 'react';
import container from '../container';
import Block from '../block';
import Pill from './pill';
import './style.scss';

const Navigator = ({ items }) => {
  return (
    <Block flexStyle={{justifyContent: 'center'}}>
      <div className="navigator">
        {items.map((item, index) => {
          return (<Pill key={index} {...item} />);
        })}
      </div>
    </Block>
  );
};

export default container(Navigator);
