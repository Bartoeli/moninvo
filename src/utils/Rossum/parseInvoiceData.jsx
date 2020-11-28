export const parseInvoiceData = (invoice, keyList) => {
  console.log(invoice);

  const contentInvoice = invoice.content.map((data) => {
    return data.children;
  });
  const flatInvoice = contentInvoice.flat();

  const filterInvoice = flatInvoice.filter(
    (invoiceValue) => invoiceValue.schema_id === key,
  );

  const value = filterInvoice[0].value;
  console.log(filterInvoice);

  return { [key]: value };
};

// {amount_total: VALUE}
