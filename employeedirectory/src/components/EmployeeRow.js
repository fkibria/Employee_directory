import React from 'react'

export default function EmployeeRow({employee}) {
    const DOB = new Date(employee.dob.date);

    let DOBFormatted = `${DOB.getFullYear()}-${DOB.getMonth()}-${DOB.getDate()}`;

    return (
        <tr>
            <td>
                <img src={employee.picture.medium} alt={employee.name.first} width="50" height="50" />
            </td>
            <td>
                <p>{employee.name.first}</p>
            </td>
            <td>
                <p>{employee.name.last}</p>
            </td>
            <td>
                <p>{employee.cell}</p>
            </td>
            <td>
                <p>{employee.email}</p>
            </td>
            <td>
                <p>{DOBFormatted}</p>
            </td>
        </tr>
    )
}
