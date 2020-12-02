import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import { PrimaryBtn } from '../Button/PrimaryBtn/PrimaryBtn.jsx';

export const ReviewTable = (props) => {
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );

  return (
    <>
      <DataTable
        value={props.data}
        className="p-datatable-striped p-datatable-responsive-demo"
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={10}
        rowsPerPageOptions={[10, 20, 50]}
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
        sortMode="multiple"
        header="Faktury ke kontrole"
        scrollable
        scrollHeight="400px"
      >
        <Column field={props.data} header="Faktura" sortable></Column>
        <Column
          field={
            <div>
              <PrimaryBtn
                className="secondary"
                textBtn="zkontrolovat"
                onClick={() => handleClick(item)}
              />
            </div>
          }
          header="Kontrola"
        ></Column>
      </DataTable>
    </>
  );
};
