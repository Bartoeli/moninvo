const keyList = [
  'amount_total',
  'currency',
  'invoice_id',
  'date_issue',
  'sender_name',
  'notes',
  'amount_total_base',
  'file_name',
];

export const parseInvoiceData = (invoice) => {
  const contentInvoice = invoice.content.map((data) => {
    return data.children;
  });
  const flatInvoice = contentInvoice.flat();

  const filterInvoice = flatInvoice.filter((invoiceValue) => {
    const filterKeyList = keyList.filter(
      (key) => key === invoiceValue.schema_id,
    );
    return filterKeyList[0] === undefined ? false : true;
  });

  return filterInvoice.reduce(
    (acc, curr) => ({ ...acc, [curr.schema_id]: curr.value }),
    {},
  );
};
