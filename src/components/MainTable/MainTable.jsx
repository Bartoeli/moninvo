import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './mainTable.css';

export const MainTable = (props) => {
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
        className="p-datatable-striped p-datatable-responsive"
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={6}
        rowsPerPageOptions={[6, 10, 20, 50]}
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
        sortMode="multiple"
        scrollable
      >
        <Column
          className="sloupecFont"
          field="sender_name"
          header="Dodavatel"
          sortable
          headerStyle={{ width: '180px' }}
        ></Column>
        <Column
          field="invoice_id"
          header="Číslo faktury"
          sortable
          headerStyle={{ width: '180px' }}
        ></Column>
        <Column
          field="amount_total_base"
          header="Částka bez DPH"
          sortable
          headerStyle={{ width: '180px' }}
        ></Column>
        <Column
          field="amount_total"
          header="Částka s DPH"
          sortable
          headerStyle={{ width: '250px' }}
        ></Column>
        <Column
          field="currency"
          header="Měna"
          sortable
          headerStyle={{ width: '250px' }}
        ></Column>
        <Column
          field="date_issue"
          header="Vystaveno"
          sortable
          headerStyle={{ width: '250px' }}
        ></Column>
      </DataTable>
    </>
  );
};
