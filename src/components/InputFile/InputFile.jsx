import React from 'react';

import './inputfile.css';

export const InputFile = (props) => {
  return (
    <>
      <input
        className="inpFile"
        type="file"
        value={undefined}
        onChange={props.onChange}
        accept={props.accept}
        ref={props.reference}
      />
    </>
  );
};
