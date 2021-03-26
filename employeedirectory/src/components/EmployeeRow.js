import React from 'react'

export default function EmployeeRow({employee}) {
    return (
        <tr>
            <td>
                <img src={employee.picture.medium} alt={employee.name.first} width="50" height="50" />
            </td>
        </tr>
    )
}
