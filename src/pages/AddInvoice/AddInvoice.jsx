import React, { useState } from 'react';
import { dtb } from '../../utils/Firebase/dtb';
import './addInvoice.css';

export const AddInvoice = () => {
  const [sender_name, setSenderName] = useState(' ');
  const [invoice_id, setInvoiceId] = useState('');
  const [amount_total_base, setAmountTotalBase] = useState('');
  const [amount_total, setAmountTotal] = useState('');
  const [currency, setCurrency] = useState('');
  const [date_issue, setDateIssue] = useState('');
  const [note, setNote] = useState('');

  return (
    <form
      className="addInvoiceForm"
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Odesláno!');

        dtb.collection('faktury').add({
          sender_name: sender_name,
          invoice_id: invoice_id,
          amount_total_base: amount_total_base,
          amount_total: amount_total,
          currency: currency,
          date_issue: date_issue,
          Note: note,
        });
        setSenderName('');
        setInvoiceId('');
        setAmountTotalBase('');
        setAmountTotal('');
        setCurrency('');
        setDateIssue('');
        setNote('');
      }}
    >
      <label className="labelInvoice">
        Dodavatel
        <input
          className="inputInvoice"
          value={sender_name}
          type="text"
          placeholder="ACTIVA s.r.o."
          onChange={(e) => setSenderName(e.target.value)}
        />
      </label>
      <label className="labelInvoice">
        Číslo faktury
        <input
          className="inputInvoice"
          value={invoice_id}
          type="text"
          placeholder="5432167890"
          onChange={(e) => setInvoiceId(e.target.value)}
        />
      </label>
      <label className="labelInvoice">
        Částka bez DPH
        <input
          className="inputInvoice"
          value={amount_total_base}
          type="text"
          placeholder="1234"
          onChange={(e) => setAmountTotalBase(e.target.value)}
        />
      </label>
      <label className="labelInvoice">
        Částka s DPH
        <input
          className="inputInvoice"
          value={amount_total}
          type="text"
          placeholder="1328"
          onChange={(e) => setAmountTotal(e.target.value)}
        />
      </label>
      <label className="labelInvoice">
        Měna
        <input
          className="inputInvoice"
          value={currency}
          type="text"
          placeholder="czk"
          onChange={(e) => setCurrency(e.target.value)}
        />
      </label>
      <label className="labelInvoice">
        Vystaveno
        <input
          className="inputInvoice"
          value={date_issue}
          type="date"
          min="2019-01-01"
          placeholder="2020-04-08"
          onChange={(e) => setDateIssue(e.target.value)}
        />
      </label>
      <label className="labelInvoice">
        Poznámka
        <input
          className="inputInvoice"
          value={note}
          type="text"
          placeholder="poznámka"
          onChange={(e) => setNote(e.target.value)}
        />
      </label>
      <button className="primary sendBtn" type="submit">
        Odeslat
      </button>
    </form>
  );
};
