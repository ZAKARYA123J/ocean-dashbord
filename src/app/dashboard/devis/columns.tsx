"use client";
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { DataContext } from '@/app/contexts/post';
import { useRouter } from 'next/navigation';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiInformationFill } from "react-icons/ri";
const Container = styled.div`
  padding: 20px;

`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 12px;
  background-color: #f2f2f2;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 8px;
  transition: color 0.3s;

  &:hover {
    color: #0070f3; /* Change to your preferred hover color */
  }
`;

const Modal = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
`;

const Columns: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { devis, loading, error, refetchDevis } = useContext(DataContext);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/Devis/${id}`, {
        method: 'DELETE',
      });
      await refetchDevis();
    } catch {
      console.log('Error deleting the item');
    }
  };

  const handleUpdate = (id: string) => {
    router.push(`/dashboard/update-devi/${id}`);
  };
const handleDetaile=(id:string)=>{
  router.push(`/dashboard/detaildevi/${id}`)
}
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Company</TableHeader>
            <TableHeader>Person</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {devis.map((devi:any) => (
            <TableRow key={devi.id}>
              <TableCell>{devi.id}</TableCell>
              <TableCell>{devi.nameEntreprise}</TableCell>
              <TableCell>{devi.namePersone}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdate(devi.id)}>
                  <Pencil1Icon  style={{width:" 24px",height: "24px"}}/>
                </Button>
                <Button onClick={() => handleDelete(devi.id)}>
                  <TrashIcon  style={{width:" 24px",height: "24px",color:"#ff0000"}}/>
                </Button>
                <Button onClick={()=>handleDetaile(devi.id)}>
                  <RiInformationFill  style={{width:" 24px",height: "24px",color:"#00bfff"}}/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={isModalOpen}>
        <ModalContent>
          <h2>Confirmation</h2>
          <p>Are you sure you want to delete this item?</p>
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button onClick={() => {
            if (selectedId) handleDelete(selectedId);
            setIsModalOpen(false);
          }}>Confirm</Button>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Columns;
