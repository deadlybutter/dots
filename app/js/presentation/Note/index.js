import React from 'react';

import './style.scss';

const Note = ({ text }) => {
  return (
    <p className="note">{ text }</p>
  );
};

Note.defaultProps = {
  text: '',
};

module.exports = Note;
