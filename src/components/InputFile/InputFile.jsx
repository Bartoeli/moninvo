import React, { forwardRef } from 'react';

import './inputfile.css';

export const InputFile = forwardRef((props, ref) => {
  return (
    <>
      <label className="inpFileLabel">
        <input
          className="inpFile"
          type="file"
          value={undefined}
          onChange={props.onChange}
          accept={props.accept}
          ref={ref}
        />
      </label>
    </>
  );
});
