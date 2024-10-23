"use client"
import React, { useEffect, useState } from 'react';
import './Table.css'; // Import the CSS file
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';

interface DataItem {
  id: string; // Assuming each item has a unique ID
  dateReaserver: string;
  dateFacture: string;
  price: string;
  DevisId: string;
}
// const { dateReaserver, dateFacture, price, DevisId } = await req.json();
const Columns: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/facture');
      const result: DataItem[] = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    // Implement your delete logic here
    await fetch(`http://localhost:3000/api/facture/${id}`, {
      method: 'DELETE',
    });
    // Update the state to remove the deleted item
    setData(data.filter(item => item.id !== id));
  };

  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>dateReaserver</th>
            <th>dateFacture</th>
            <th>price</th>
            <th>DevisId</th>
        
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.dateReaserver}</td>
              <td>{item.dateFacture}</td>
              <td>{item.price}</td>
              <td>{item.DevisId}</td>
              <td>
              <button className="button button-update">
                  <Pencil1Icon />
                </button>
    <button onClick={() => handleDelete(item.id)} className="button button-delete" >
    <TrashIcon />
    </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default Columns;