import React from "react";
import EmployeeRow from "./EmployeeRow";

function Table(props){
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
    {props.employees.map((currEmployee) => <EmployeeRow employee={currEmployee} />)}
  </tbody>
</table>
    )
}

export default Table;