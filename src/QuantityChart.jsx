import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function QuantityChart() {
  const [quantityData, setQuantityData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/quantity')
      .then(res => {
        console.log(res.data);
        setQuantityData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Quantity Chart</h2>
      <BarChart width={600} height={400} data={quantityData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="equipment_name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="loan_count" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default QuantityChart;
