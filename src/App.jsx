import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './QuantityChart';
import './EmployeeTable';
import EmployeeTable from './EmployeeTable';
import EquipmentTable from './EquipmentTable';
import LoanTable from './LoanTable';
import QuantityChart from './QuantityChart';
import Header from './Header';

function App() {
  const [employee, setEmployee] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [loan, setLoan] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    axios.get(' https://giddy-shoe-elk.cyclic.app/Employee')
      .then(res => {
        console.log(res.data);
        setEmployee(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(' https://giddy-shoe-elk.cyclic.app/Equipment')
      .then(res => {
        console.log(res.data);
        setEquipment(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(' https://giddy-shoe-elk.cyclic.app/Loan')
      .then(res => {
        console.log(res.data);
        setLoan(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(' https://giddy-shoe-elk.cyclic.app/quantity')
      .then(res => {
        console.log(res.data);
        setQuantity(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <Header />
      <h2>ตารางในการยืมคืนอุปกรณ์ IT</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">-- Select an table --</option>
        <option value="option1">EmployeeTable</option>
        <option value="option2">EquipmentTable</option>
        <option value="option3">LoanTable</option>
      </select>
      {selectedOption === 'option1' && <EmployeeTable />}
      {selectedOption === 'option2' && <EquipmentTable />}
      {selectedOption === 'option3' && <LoanTable />}
      <QuantityChart />
    </div>
  );
}

export default App;
