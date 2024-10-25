"use client"
import React, { useEffect, useState,useContext } from 'react';
import './Table.css'; // Import the CSS file
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { DataContext } from '@/app/contexts/post';
import { useRouter } from 'next/navigation';

// const { dateReaserver, dateFacture, price, DevisId } = await req.json();
const Columns: React.FC = () => {
  const [data, setData] = useState([]);
  const {facture,refetchFacture}=useContext(DataContext)
const router=useRouter()

const handleUpdate=(id:string)=>(
  router.push(`/dashboard/update-facture/${id}`)
)
  const handleDelete = async (id: string) => {
    try{
        await fetch(`/api/facture/${id}`, {
      method: 'DELETE',
    });
    await refetchFacture()
    }
  catch{
    console.log('error')
  }
    // Update the state to remove the deleted item
  };


  return (
    <div className="overflow-x-auto">
      <table className="table " style={{marginLeft:"110px"}}>
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
          {facture.map((item:any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.dateReaserver}</td>
              <td>{item.dateFacture}</td>
              <td>{item.price}</td>
              <td>{item.DevisId}</td>
              <td>
              <button className="button button-update" onClick={()=>handleUpdate(item.id)}>
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