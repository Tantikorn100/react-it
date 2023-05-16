import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoanTable() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/Loan')
      .then(res => {
        console.log(res.data);
        setLoans(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Loan table</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Employee ID</th>
            <th>Equipment ID</th>
            <th>Loan date</th>
            <th>Return date</th>
          </tr>
        </thead>
        <tbody>
          {loans.map(loan => (
            <tr key={loan.loan_id}>
              <td>{loan.loan_id}</td>
              <td>{loan.employee_id}</td>
              <td>{loan.equipment_id}</td>
              <td>{loan.loan_date}</td>
              <td>{loan.return_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanTable;
