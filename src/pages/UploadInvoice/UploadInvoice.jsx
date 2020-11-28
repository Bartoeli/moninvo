import React, { useState } from 'react';

import { InputFile } from '../../components/InputFile/InputFile.jsx';
import './uploadinvoice.css';
import { PrimaryBtn } from '../../components/Button/PrimaryBtn/PrimaryBtn.jsx';

export const UploadInvoice = () => {
  const [file, setFile] = useState('');

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    fetch();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputFile
          text="Nahrát fakturu"
          onChange={handleUpload}
          accept=".pdf"
        />
        <div>
          <PrimaryBtn
            className="primary"
            type="submit"
            textBtn="nahrát fakturu"
          />
        </div>
      </form>
    </>
  );
};
