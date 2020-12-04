import React, { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

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
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
      });
  }, [setData, rossumContext]);

  const handleClick = (item) => {
    fetch(`${item.url}/start_embedded`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${rossumContext.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        return_url: `${window.location.origin}/#/Dashboard/`,
        cancel_url: window.location.href,
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        window.location.href = json.url;
      });
  };

  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );

  return (
    <DataTable
      value={data}
      className="p-datatable-striped p-datatable-responsive-demo"
      paginator
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      rows={10}
      rowsPerPageOptions={[10, 20, 50]}
      paginatorLeft={paginatorLeft}
      paginatorRight={paginatorRight}
      sortMode="multiple"
      scrollHeight="400px"
    >
      <Column
        field="document.file_name"
        header="Faktura"
        sortable
        style={({ maxWidth: '50%' }, { paddingLeft: '0px' })}
      ></Column>
      <Column
        style={({ maxWidth: '50%' }, { paddingRight: '0px' })}
        body={(item) => {
          return (
            <div>
              <PrimaryBtn
                className="secondary"
                textBtn="zkontrolovat"
                onClick={() => handleClick(item)}
              />
            </div>
          );
        }}
        header="Kontrola"
      ></Column>
    </DataTable>
  );
};
