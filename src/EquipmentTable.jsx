import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EquipmentTable() {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    axios.get(' https://giddy-shoe-elk.cyclic.app/Equipment')
      .then(res => {
        console.log(res.data);
        setEquipments(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Equipment table</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Equipment ID</th>
            <th>Name</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map(equipment => (
            <tr key={equipment.equipment_id}>
              <td>{equipment.equipment_id}</td>
              <td>{equipment.name}</td>
              <td>{equipment.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EquipmentTable;
