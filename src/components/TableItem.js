import React from "react";

const TableItem = (props) => {
  return (
    <tr>
      <td>{props.data.year}</td>
      <td>{props.data.savingsEndOfYear}</td>
      <td>{props.data.yearlyInterest}</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>{props.data.yearlyContribution}</td>
    </tr>
  );
};

export default TableItem;
