import React from "react";
import EmployeeRow from "./EmployeeRow";

function Table(props){
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col" onClick={props.onFNameSort}>First</th>
      <th scope="col" onClick={props.onLNameSort}>Last</th>
      <th scope="col" onClick={props.onPhoneSort}>Phone</th>
      <th scope="col" onClick={props.onEmailSort}>Email</th>
      <th scope="col" onClick={props.onDOBSort}>DOB</th>
    </tr>
  </thead>
  <tbody>
    {props.employees.map((currEmployee, i) => <EmployeeRow key={i} employee={currEmployee} />)}
  </tbody>
</table>
    )
}

export default Table;