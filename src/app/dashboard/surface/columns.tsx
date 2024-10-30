"use client";
import React, { useContext } from 'react';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { DataContext } from '@/app/contexts/post';
import styled from 'styled-components';

interface DataItem {
  id: string; // Assuming each item has a unique ID
  valeur: string;
}

const TableContainer = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ccc;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ccc;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ff0000; // Red color for delete button
  display: flex;
  align-items: center; // Center the icon vertically
  &:hover {
    opacity: 0.7;
  }
`;

const Icon = styled(TrashIcon)`
  width: 24px; // Set desired width
  height: 24px; // Set desired height
`;

const Columns: React.FC = () => {
  const { surface, refetchSurface } = useContext(DataContext);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/surface/${id}`, {
        method: 'DELETE',
      });
      // Update the state to remove the deleted item
      await refetchSurface();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>Id</TableHeader>
            <TableHeader>Valeur</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {surface.map((item: DataItem) => (
            <tr key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.valeur}</TableCell>
              <TableCell>
                <ActionButton onClick={() => handleDelete(item.id)}>
                  <Icon />
                </ActionButton>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Columns;
