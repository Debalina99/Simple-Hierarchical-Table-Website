import React from "react";
import TableRow from "./TableRow";
import "../App.css";
const Table = ({ data, setData }) => {

    const updateValue = (id, newValue) => {
        const updateData = (items) => {
          return items.map(item => {
            if (item.id === id) {
              return { ...item, value: newValue };
            }
            if (item.children) {
              return { ...item, children: updateData(item.children) };
            }
            return item;
          });
        };
        
        const newData = updateData(data);
        setData(newData);
      };
      const calculateGrandTotal = () => {
        return data.reduce((sum, row) => sum + row.value, 0);
      };

      return (
        <table border="1">
          <thead>
            <tr>
              <th>Label</th>
              <th>Value</th>
              <th>Input</th>
              <th>Allocation %</th>
              <th>Allocation Val</th>
              <th>Variance %</th>
            </tr>
          </thead>
          <tbody>
          {data.map(row => (
          <React.Fragment key={row.id}>
            <TableRow row={row} onUpdateValue={updateValue} />
            {row.children && row.children.map(child => (
              <TableRow key={child.id} row={child} onUpdateValue={updateValue} />
            ))}
          </React.Fragment>
        ))}
            <tr>
          <td>Grand Total</td>
          <td>{calculateGrandTotal()}</td>
          <td colSpan="4"></td>
        </tr>
          </tbody>
        </table>
      );
};
export default Table;
