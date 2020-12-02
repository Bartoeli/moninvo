import React, { useState } from 'react';

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
      },
    )
      .then((resp) => resp.json())
      .then((result) => {
        setLoad(false);

        console.log('Success', result);
      })
      .catch((error) => {
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
      <HeaderDash />
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
