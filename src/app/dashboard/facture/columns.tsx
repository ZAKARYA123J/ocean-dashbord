"use client";
import React, { useEffect, useState, useContext } from 'react';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { DataContext } from '@/app/contexts/post';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

// Styled components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
 
`;

const TableHeader = styled.thead`
background-color: #f0f0f0;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ccc;
  font-weight: bold; 
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2; /* Light grey for even rows */
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ccc;
 
`;

const ActionsCell = styled(TableCell)`
  display: flex;
  gap: 8px; /* Spacing between icons */
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #0070f3; /* Icon color */
  width: 24px; // Set desired width
  height: 24px; // Set desired height
  &:hover {
    color: #005bb5; /* Darker blue on hover */
  }
`;

const Columns: React.FC = () => {
  const { facture, refetchFacture } = useContext(DataContext);
  const router = useRouter();

  const handleUpdate = (id: string) => {
    router.push(`/dashboard/update-facture/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/facture/${id}`, {
        method: 'DELETE',
      });
      await refetchFacture();
    } catch {
      console.log('Error deleting facture');
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>Date Réservé</TableCell>
            <TableCell>Date Facture</TableCell>
            <TableCell>Prix</TableCell>
            <TableCell>Actions</TableCell>
          </tr>
        </TableHeader>
        <tbody>
          {facture.map((item:any) => (
            <TableRow key={item.id}>
              <TableCell>{item.dateReaserver}</TableCell>
              <TableCell>{item.dateFacture}</TableCell>
              <TableCell>{item.price}</TableCell>
              <ActionsCell>
                <IconButton onClick={() => handleUpdate(item.id)}>
                  <Pencil1Icon style={{width:" 24px",height: "24px"}}/>
                </IconButton>
                <IconButton onClick={() => handleDelete(item.id)}>
                  <TrashIcon  style={{width:" 24px",height: "24px",color:"#ff0000"}}/>
                </IconButton>
              </ActionsCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Columns;
