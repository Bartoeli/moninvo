import React, { forwardRef } from 'react';

import './inputfile.css';

export const InputFile = forwardRef((props, ref) => {
  return (
    <>
      <label className="inpFileLabel">
        {/* <div className="inpFileBtn">Vybrat fakturu</div> */}
        <input
          className="inpFile"
          type="file"
          value={undefined}
          onChange={props.onChange}
          accept={props.accept}
          ref={ref}
        />
        {/* {props.name} */}
      </label>
    </>
  );
});
