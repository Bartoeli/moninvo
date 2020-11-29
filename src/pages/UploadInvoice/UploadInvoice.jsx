import React, { useState } from 'react';

import { InputFile } from '../../components/InputFile/InputFile.jsx';
import './uploadinvoice.css';
import { PrimaryBtn } from '../../components/Button/PrimaryBtn/PrimaryBtn.jsx';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';
import { RevInvoice } from '../../components/ReviewInvoice/ReviewInvoice.jsx';

export const UploadInvoice = () => {
  const [file, setFile] = useState('');
  const rossumContext = useRossum();

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();

    formData.append('content', file);

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
        console.log('Success', result);
      })
      .catch((error) => {
        console.error('Error', error);
      });

    e.preventDefault();
  };

  return (
    <>
      <div className="uplForm">
        <form onSubmit={handleSubmit}>
          <InputFile
            text="Nahrát fakturu"
            onChange={handleUpload}
            accept=".pdf"
          />
          <div className="formBtn">
            <PrimaryBtn
              className="primary"
              type="submit"
              textBtn="nahrát fakturu"
            />
          </div>
        </form>
      </div>
      <div className="revInvoice">
        <RevInvoice />
      </div>
    </>
  );
};
