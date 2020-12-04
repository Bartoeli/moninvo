import React, { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { dtb } from '../../utils/Firebase/dtb';
import { HeaderDash } from '../../components/HeaderDash/HeaderDash.jsx';

import './addInvoice.css';
import { AddInvoiceInputText } from '../../components/AddInvoiceForm/InputText/AddInvoiceInputText.jsx';
import { AddInvoiceInputDate } from '../../components/AddInvoiceForm/InputDate/InputDate.jsx';

export const AddInvoice = () => {
  const [sender_name, setSenderName] = useState(' ');
  const [invoice_id, setInvoiceId] = useState('');
  const [amount_total_base, setAmountTotalBase] = useState('');
  const [amount_total, setAmountTotal] = useState('');
  const [currency, setCurrency] = useState('');
  const [date_issue, setDateIssue] = useState('');
  const [note, setNote] = useState('');

  const toastAiRef = useRef();

  return (
    <>
      <Toast ref={toastAiRef} />
      <HeaderDash />
      <form
        className="addInvoiceForm"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Odesláno!');

          dtb
            .collection('faktury')
            .add({
              sender_name: sender_name,
              invoice_id: invoice_id,
              amount_total_base: amount_total_base,
              amount_total: amount_total,
              currency: currency,
              date_issue: date_issue,
              Note: note,
            })
            .then(() => {
              setSenderName('');
              setInvoiceId('');
              setAmountTotalBase('');
              setAmountTotal('');
              setCurrency('');
              setDateIssue('');
              setNote('');
              toastAiRef.current.show({
                severity: 'success',
                summary: 'Vaše faktura byla úspěšně přidána.',
                detail:
                  'Jestli chcete vidět nová data zobrazena ve Vašem grafu, vraťte se zpět do Dashboardu.',
                life: 7000,
              });
            })
            .catch((error) => {
              toastAiRef.current.show({
                severity: 'error',
                summary: 'Něco se pokazilo.',
                detail:
                  'Zkuste prosím vložit data znovu. V případě přetrvávajícího neúspěchu nás kontaktujte.',
                life: 7000,
              });
              console.error('Error', error);
            });
        }}
      >
        <AddInvoiceInputText
          value={sender_name}
          label="Dodavatel"
          placeholder="Název firmy"
          setChanged={setSenderName}
        />
        <AddInvoiceInputText
          value={invoice_id}
          label="Číslo faktury"
          placeholder="1234567890"
          setChanged={setInvoiceId}
        />
        <AddInvoiceInputText
          value={amount_total_base}
          label="Částka bez DPH"
          placeholder="585"
          setChanged={setAmountTotalBase}
        />
        <AddInvoiceInputText
          value={amount_total}
          label="Částka s DPH"
          placeholder="Částka s DPH"
          setChanged={setAmountTotal}
        />
        <AddInvoiceInputText
          value={currency}
          label="Měna"
          placeholder="czk"
          setChanged={setCurrency}
        />
        <AddInvoiceInputDate
          value={date_issue}
          label="Vystaveno dne"
          min="2019-01-01"
          placeholder="2020-04-08"
          setChanged={setDateIssue}
        />
        <AddInvoiceInputText
          value={note}
          label="Poznámka"
          placeholder="poznámka"
          setChanged={setNote}
        />
        <button className="primary sendBtn" type="submit">
          Odeslat
        </button>
      </form>
    </>
  );
};
