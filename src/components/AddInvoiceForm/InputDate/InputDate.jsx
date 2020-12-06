import React from 'react';

export const AddInvoiceInputDate = (props) => {
  return (
    <label className="labelInvoice">
      {props.popis}:
      <input
        className="inputInvoice"
        value={props.value}
        type="date"
        min={props.min}
        placeholder={props.placeholder}
        onChange={(e) => props.setChanged(e.target.value)}
      />
    </label>
  );
};
