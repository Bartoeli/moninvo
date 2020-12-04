import React from 'react';

import './AddInvoiceInputText.css';

export const AddInvoiceInputText = (props) => {
  return (
    <label className="labelInvoice">
      {props.label}:
      <input
        className="inputInvoice"
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.setChanged(e.target.value)}
      />
    </label>
  );
};
