/* import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { parseInvoiceData } from '../../utils/Rossum/parseInvoiceData.jsx';
import { dtb } from '../../utils/Firebase/dtb';
import { MainTable } from '../../components/MainTable/MainTable.jsx';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';

export const LabelPage = () => {
  const [tableData, setTableData] = useState([]);
  const { fbId } = useParams();
  console.log(revDocId);

  useEffect(() => {
    return dtb.collection('faktury').onSnapshot(() => {
      setTableData(((doc) => {
          const data = doc.data();
          data.id = fbId;
          return data;
        }),
      );
    });
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dtb
            .collection('faktury')
            .add({ month: 'month', label: 'label', category: 'category' })
            .then((data) => console.log(data));
        }}
      >
        <label>
          Období
          <input type="month" />
        </label>
        <label>
          Štítek
          <select name="label" id="label">
            <option value="label1">Štítek 1</option>
            <option value="label2">Štítek 2</option>
            <option value="label3">Štítek 3</option>
          </select>
        </label>
        <label>
          Kategorie
          <select name="category" id="category">
            <option value="category1">Kategorie 1</option>
            <option value="category2">Kategorie 2</option>
            <option value="category3">Kategorie 3</option>
          </select>
        </label>
        <button type="submit">Potvrdit</button>
      </form>
      <MainTable data={tableData} />
    </>
  );
};
 */