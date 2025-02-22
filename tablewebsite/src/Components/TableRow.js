import React, { useState } from "react";
import "../App.css";
const TableRow = ({ row, onUpdateValue }) => {
    const [inputValue, setInputValue] = useState("");
    const [variance, setVariance] = useState(0);
  
    const handleAllocationPercentage = () => {
      const percentage = parseFloat(inputValue);
      if (!isNaN(percentage)) {
        const newValue = row.value + (row.value * (percentage / 100));
        updateRowValue(newValue);
      }
    };
  
    const handleAllocationValue = () => {
      const newValue = parseFloat(inputValue);
      if (!isNaN(newValue)) {
        updateRowValue(newValue);
      }
    };
  
    const updateRowValue = (newValue) => {
      const originalValue = row.value;
      const calculatedVariance = ((newValue - originalValue) / originalValue * 100).toFixed(2);
      setVariance(calculatedVariance);
      onUpdateValue(row.id, newValue);
    };
  
    return (
      <tr className={row.children ? "parent-row" : "child-row"}>
        <td>{row.label}</td>
        <td>{row.value}</td>
        <td>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </td>
        <td><button onClick={handleAllocationPercentage}>%</button></td>
        <td><button onClick={handleAllocationValue}>Val</button></td>
        <td>{variance}%</td>
      </tr>
    );
  };
  
  export default TableRow;
  