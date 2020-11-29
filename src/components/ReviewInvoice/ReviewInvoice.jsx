import React, { useEffect, useState } from 'react';

import { useRossum } from '../../utils/Rossum/Rossum.jsx';
import { PrimaryBtn } from '../Button/PrimaryBtn/PrimaryBtn.jsx';

export const RevInvoice = () => {
  const rossumContext = useRossum();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.elis.rossum.ai/v1/queues/${rossumContext.queueId}/export?format=json&status=to_review`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${rossumContext.token}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
      });
  }, [setData, rossumContext]);

  const getFileName = (item) => {
    const fileName = [item.document.file_name];
    return fileName;
  };

  const handleClick = (item) => {
    fetch(`${item.url}/start_embedded`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${rossumContext.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        return_url: window.location.href,
        cancel_url: window.location.href,
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        window.location.href = json.url;
      });
  };

  return (
    <>
      <ul>
        {data.map((item) => {
          return (
            <li>
              {getFileName(item)}
              <div>
                <PrimaryBtn
                  className="secondary"
                  textBtn="zkontrolovat"
                  onClick={() => handleClick(item)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
