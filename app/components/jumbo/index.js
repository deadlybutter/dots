import React from 'react';
import Block from '../block';
import './style.scss';

const JumboTitle = ({ title, subtitle }) => {
  const titleMarkup = title ? (<h1>{ title }</h1>) : null;
  const subtitleMarkup = subtitle ? (<p>{ subtitle }</p>) : null;

  return (
    <Block flexStyle={{justifyContent: 'center'}}>
      <div className="jumbo">
        { titleMarkup }
        { subtitleMarkup }
      </div>
    </Block>
  );
};

JumboTitle.defaultProps = {
  title: null,
  subtitle: null,
};

export default JumboTitle;
