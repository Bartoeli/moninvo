import React from 'react';
import './blob.css';

export const Blob = (props) => {
  return (
    <div
      className={props.className !== 'undefined' ? props.className : 'justBlob'}
    ></div>
  );
};
