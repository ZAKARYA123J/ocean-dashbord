"use client";
import React, { useEffect, useState,useContext } from 'react';
import './TableStyles.css'; // Import the CSS file
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { DataContext } from '@/app/contexts/post';
interface DataItem {
  id: string; // Assuming each item has a unique ID
  valeur: string;
}

const Columns: React.FC = () => {

  const {surface,refetchSurface}=useContext(DataContext)

 

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/surface/${id}`, {
        method: 'DELETE',
      });
      // Update the state to remove the deleted item
  await refetchSurface()
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };



  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Valeur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {surface.map((item:any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.valeur}</td>
              <td>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="button button-delete"
                >
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
