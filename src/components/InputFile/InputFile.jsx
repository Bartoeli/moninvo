import React from 'react';

import './inputfile.css';

export const InputFile = (props) => {
  return (
    <>
      <label>
        {props.text}
        <input
          type="file"
          value={undefined}
          onChange={props.onChange}
          accept={props.accept}
        />
      </label>
    </>
  );
};
