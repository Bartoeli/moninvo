import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

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
        className="p-datatable-striped p-datatable-responsive-demo"
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={5}
        rowsPerPageOptions={[5, 10, 20, 50]}
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
        sortMode="multiple"
        header="Moje nahrané faktury"
        scrollable
        scrollHeight="200px"
      >
        {/* <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            type="search"
            onInput={(e) => this.setState({ globalFilter: e.target.value })}
            placeholder="Global Search"
          />
        </span> */}
        <Column field="sender_name" header="Dodavatel" sortable></Column>
        <Column field="invoice_id" header="Číslo faktury" sortable></Column>
        <Column
          field="amount_total_base"
          header="Částka bez DPH"
          sortable
        ></Column>
        <Column field="amount_total" header="Částka s DPH" sortable></Column>
        <Column field="currency" header="Měna" sortable></Column>
        <Column field="date_issue" header="Vystaveno" sortable></Column>
        <Column field="Note" header="Poznámka" sortable></Column>
      </DataTable>
    </>
  );
};
