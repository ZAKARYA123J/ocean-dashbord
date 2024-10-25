"use client"
import React, { useEffect, useState,useContext } from 'react';
import './TableStyles.css'; // Import the CSS file
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { DataContext } from '@/app/contexts/post';
import { useRouter } from 'next/navigation';


const Columns: React.FC = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { devis, loading, error,refetchDevis} = useContext(DataContext);


  const handleDelete = async (id: string) => {
    // Implement your delete logic here
    try{
       await fetch(`/api/Devis/${id}`, {
      method: 'DELETE',
      
    });
    await refetchDevis()
    }catch{
      console.log('eror')
    }
   
    
    // Update the state to remove the deleted item
    
  };

  


  const router = useRouter(); // Initialize the useRouter hook
  const handleUpdate = (id: string) => {
    router.push(`/dashboard/update-devi/${id}`); // Redirect to the Update page with the selected ID
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Entreprise</th>
            <th>Person</th>
            <th>Email</th>
            <th>Fonction</th>
            <th>Address</th>
            <th>Code Postal</th>
            <th>Message</th>
            <th>Etage</th>
            <th>Surface</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {devis.map((item:any) => (
            <tr key={item.id}>
              <td>{item.nameEntreprise}</td>
              <td>{item.namePersone}</td>
              <td>{item.email}</td>
              <td>{item.VotreFonction}</td>
              <td>{item.Adress}</td>
              <td>{item.codePostall}</td>
              <td>{item.message}</td>
              <td>{item.etage}</td>
              <td>{item.surface?.valeur}</td>
              <td>{item.status}</td>
              <td>
              <button onClick={() => handleUpdate(item.id)} className="button button-update">
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