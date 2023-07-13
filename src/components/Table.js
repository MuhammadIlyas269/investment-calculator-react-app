import React from "react";
import styles from "../styles/Table.module.css";
import TableItem from "./TableItem";

const Table = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => {
          return <TableItem key={result.id} data={result} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
