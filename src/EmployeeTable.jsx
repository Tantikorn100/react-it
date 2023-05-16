import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/Employee')
      .then(res => {
        console.log(res.data);
        setEmployees(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Employee table</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.employee_id}>
              <td>{employee.employee_id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
