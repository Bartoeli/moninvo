import React, { useState, createRef, useRef } from 'react';
import { Toast } from 'primereact/toast';

import { ProgressBar } from 'primereact/progressbar';

import { InputFile } from '../../components/InputFile/InputFile.jsx';
import './uploadinvoice.css';
import { PrimaryBtn } from '../../components/Button/PrimaryBtn/PrimaryBtn.jsx';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';
import { RevInvoice } from '../../components/ReviewInvoice/ReviewInvoice.jsx';
import { HeaderDash } from '../../components/HeaderDash/HeaderDash.jsx';

export const UploadInvoice = () => {
  const [file, setFile] = useState('');
  const [load, setLoad] = useState(false);
  const rossumContext = useRossum();
  const toastUiRef = useRef(null);
  const formRef = createRef(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();

    formData.append('content', file);

    setLoad(true);
    fetch(
      `https://api.elis.rossum.ai/v1/queues/${rossumContext.queueId}/upload/${file.name}`,
      {
        method: 'POST',
        body: formData,
        headers: { Authorization: `Token ${rossumContext.token}` },
      }
    )
      .then((resp) => {
        resp.json();
        if (!resp.ok) {
          throw new Error();
        }
      })
      .then((result) => {
        setLoad(false);
        // TODO fix reference with forward Ref
        // formRef.current.value = '';
        toastUiRef.current.show({
          severity: 'success',
          summary: 'Vaše faktura byla úspěšně odeslána.',
          detail: 'Po pár sekundách se Vám zobrazí v seznamu ke kontrole.',
          life: 8000,
        });
        console.log('Success', result);
      })
      .catch((error) => {
        setLoad(false);
        toastUiRef.current.show({
          severity: 'error',
          summary: 'Něco se pokazilo.',
          detail:
            'Zkuste prosím nahrát fakturu znovu. V případě přetrvávajícího neúspěchu nás kontaktujte.',
          life: 8000,
        });
        console.error('Error', error);
      });
    e.preventDefault();
  };

  return (
    <>
      <Toast ref={toastUiRef} />
      <HeaderDash />
      <div className="uplPage">
        <div className="uplForm">
          <h2 className="upl_h2">Nahrát fakturu</h2>
          <form onSubmit={handleSubmit}>
            <InputFile onChange={handleUpload} accept=".pdf" ref={formRef} />
            <div className="formBtn">
              <PrimaryBtn
                className="primary"
                type="submit"
                textBtn="nahrát fakturu"
              />
            </div>
          </form>
        </div>
        <div className="progressBar">
          {load ? (
            <ProgressBar
              mode="indeterminate"
              style={{ height: '16px' }}
            ></ProgressBar>
          ) : (
            <span>Žádná faktura se nenahrává</span>
          )}
        </div>
        <div className="revInvoice">
          <h2 className="upl_h2">Faktury ke kontrole</h2>
          <RevInvoice />
        </div>
      </div>
    </>
  );
};
