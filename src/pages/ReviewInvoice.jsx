import React, { useEffect, useState } from 'react';
import { useRossum } from '../utils/Rossum/Rossum.jsx';
import { PrimaryBtn } from '../components/Button/PrimaryBtn/PrimaryBtn.jsx';
import {Link} from "react-router-dom"

export const RevInvoice = () => {
  const result = useRossum().token;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.elis.rossum.ai/v1/queues/71919/export?format=json&status=to_review',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${result}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
      });
  }, [setData, result]);

  const getFileName = (item) => {
    const fileName = [item.document.file_name];
    return fileName;
  };

  const handleClick = (item) => {
    fetch(`${item.url}/start_embedded`, 
    {
      method: 'POST',
      return_url: <Link to="/dashboard"></Link>
      cancel_url: <Link to="/dashboard"></Link>
    })

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
