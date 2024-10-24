"use client"
import React, { useEffect, useState } from 'react';
import './TableStyles.css'; // Import the CSS file
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';

import { useRouter } from 'next/navigation';
interface Surface {
  valeur: string; // Adjust the type as necessary
}
interface DataItem {
  id: string; // Assuming each item has a unique ID
  nameEntreprise: string;
  namePersone: string;
  email: string;
  VotreFonction: string;
  Adress: string;
  codePostall: string;
  message: string;
  etage: string;
  surfaceId: string; 
  valeur:string;
  surface:Surface;
  status: string;  
}

const Columns: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/Devis');
      const result: DataItem[] = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    // Implement your delete logic here
    await fetch(`http://localhost:3000/api/Devis/${id}`, {
      method: 'DELETE',
    });
    // Update the state to remove the deleted item
    setData(data.filter(item => item.id !== id));
  };

  

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedId(null); // Reset the selected ID
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
          {data.map((item) => (
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