import React, { useState, useEffect } from 'react';
import { dtb } from '../../utils/Firebase/dtb';
import './addInvoice.css';

export const AddInvoice = () => {
  /* const [newInvoice, setNewInvoice] = useState([]);

  useEffect(() => {
    return dtb.collection('faktury').onSnapshot((query) => {
      setNewInvoice(
        query.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }),
      );
    });
  }, []); */

  const [sender_name, setSenderName] = useState(' ');
  const [invoice_id, setInvoiceId] = useState('');
  const [amount_total_base, setAmountTotalBase] = useState('');
  const [amount_total, setAmountTotal] = useState('');
  const [currency, setCurrency] = useState('');
  const [date_issue, setDateIssue] = useState('');
  const [Note, setNote] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        dtb.collection('faktury').add({
          /*           sender_name: senderName,
           */
        });
      }}
    >
      <label>
        Dodavatel
        <input
          value={sender_name}
          type="text"
          placeholder="ACTIVA s.r.o."
          onChange={(e) => setSenderName(e.target.value)}
        />
      </label>
      <label>
        Číslo faktury
        <input
          value={invoice_id}
          type="text"
          placeholder="5432167890"
          onChange={(e) => setInvoiceId(e.target.value)}
        />
      </label>
      <label>
        Částka bez DPH
        <input
          value={amount_total_base}
          type="text"
          placeholder="1234"
          onChange={(e) => setAmountTotalBase(e.target.value)}
        />
      </label>
      <label>
        Částka s DPH
        <input
          value={amount_total}
          type="text"
          placeholder="1328"
          onChange={(e) => setAmountTotal(e.target.value)}
        />
      </label>
      <label>
        Měna
        <input
          value={currency}
          type="text"
          placeholder="czk"
          onChange={(e) => setCurrency(e.target.value)}
        />
      </label>
      <label>
        Vystaveno
        <input
          value={date_issue}
          type="date"
          min="2019-01-01"
          placeholder="2020-04-08"
          onChange={(e) => setDateIssue(e.target.value)}
        />
      </label>
      <label>
        Poznámka
        <input
          value={Note}
          type="text"
          placeholder="poznámka"
          onChange={(e) => setNote(e.target.value)}
        />
      </label>
    </form>
  );
};
