import React, { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';

import { ProgressBar } from 'primereact/progressbar';

import { InputFile } from '../../components/InputFile/InputFile.jsx';
import './uploadinvoice.css';
import { PrimaryBtn } from '../../components/Button/PrimaryBtn/PrimaryBtn.jsx';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';
import { RevInvoice } from '../../components/ReviewInvoice/ReviewInvoice.jsx';
import { HeaderDash } from '../../components/HeaderDash/HeaderDash.jsx';
import { NavBarDash } from '../../components/HeaderDash/headerComponentsDash/NavBarDash/NavBarDash.jsx';
import { NavBarDashside } from '../../components/HeaderDash/headerComponentsDash/NavBarDash/NavBarDashside.jsx';

export const UploadInvoice = () => {
  const [file, setFile] = useState('');
  const [load, setLoad] = useState(false);
  const rossumContext = useRossum();
  const toastUiRef = useRef();

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();

    formData.append('content', file);

    setLoad(true);
    fetch(
      `https://api.elis.rossm.ai/v1/queues/${rossumContext.queueId}/upload/${file.name}`,
      {
        method: 'POST',
        body: formData,
        headers: { Authorization: `Token ${rossumContext.token}` },
      },
    )
      .then((resp) => {
        resp.json();
        if (!resp.ok) {
          throw new Error();
        }
      })
      .then(() => {
        setLoad(false);
        toastUiRef.current.show({
          severity: 'success',
          summary: 'Vaše faktura byla úspěšně odeslána.',
          detail: 'Po pár sekundách se Vám zobrazí ke kontrole.',
          life: 8000,
        });
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

  // const loadBar = () => {
  //   load = setLoad(() => {
  //     load += Math.floor(Math.random() * 10) + 1;

  //     if (load >= 100) {
  //       Toast.show({
  //         severity: 'info',
  //         summary: 'Success',
  //         detail: 'Process Completed',
  //       });
  //       clearInterval(load);
  //     }
  //   }, 2000);
  // };

  return (
    <>
      <Toast ref={toastUiRef} />
      <HeaderDash />
      <NavBarDash />
      <NavBarDashside />
      <div className="uplPage">
        <div className="uplForm">
          <h2 className="upl_h2">Nahrát fakturu</h2>
          <form onSubmit={handleSubmit}>
            <InputFile onChange={handleUpload} accept=".pdf" />
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
