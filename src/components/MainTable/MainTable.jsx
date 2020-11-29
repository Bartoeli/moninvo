import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const MainTable = (props) => {
  return (
    <>
      <DataTable value={props.data} className="p-datatable-striped">
        <Column field="invoice_id" header="Číslo faktury"></Column>
        <Column field="amount_total" header="Částka s DPH"></Column>
        <Column field="currency" header="Měna"></Column>
      </DataTable>
    </>
  );
};
