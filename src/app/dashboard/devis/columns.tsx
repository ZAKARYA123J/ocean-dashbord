import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { DataContext } from '@/app/contexts/post';
import { useRouter } from 'next/navigation';
import { RiInformationFill } from "react-icons/ri";
import { PlusIcon } from '@radix-ui/react-icons'; // Import the Plus icon
import Link from "next/link";
const Container = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ccc;
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
    color: #0070f3;
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
  const { devis, loading, error, refetchDevis, surface } = useContext(DataContext);
  const router = useRouter();

  const openDeleteModal = (id: string) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await fetch(`/api/Devis/${selectedId}`, {
        method: 'DELETE',
      });
      await refetchDevis();
      setSelectedId(null);
    } catch {
      console.log('Error deleting the item');
    }
  };

  const handleUpdate = (id: string) => {
    router.push(`/dashboard/update-devi/${id}`);
  };

  const handleDetail = (id: string) => {
    router.push(`/dashboard/detaildevi/${id}`);
  };

  useEffect(() => {
    console.log('Surface data:', surface);
  }, [surface]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const StyledButton = styled.button`
  background-color: #00bfff; /* Blue background */
  color: white;              /* White text */
  margin:10px;
  padding: 10px 20px;       /* Padding */
  border: none;             /* No border */
  border-radius: 5px;       /* Rounded corners */
  cursor: pointer;           /* Pointer cursor on hover */
  display: inline-flex;      /* Use inline-flex for inline behavior */
  align-items: center;       /* Center items vertically */
  gap: 8px;                  /* Space between text and icon */
  
  &:hover {
    background-color: #6495ed; /* Darker green on hover */
  }

  &:focus {
    outline: none;              /* Remove outline */
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.5); /* Shadow on focus */
  }
`;
  return (
    <>
     <Link href="/dashboard/Insertdevis">
          <StyledButton>
            Insert Devi <PlusIcon/>
          </StyledButton>
        </Link>
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
          {devis.map((devi: any) => (
            <TableRow key={devi.id}>
              <TableCell>{devi.id}</TableCell>
              <TableCell>{devi.nameEntreprise}</TableCell>
              <TableCell>{devi.namePersone}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdate(devi.id)}>
                  <Pencil1Icon style={{ width: "24px", height: "24px" }} />
                </Button>
                <Button onClick={() => openDeleteModal(devi.id)}>
                  <TrashIcon style={{ width: "24px", height: "24px", color: "#ff0000" }} />
                </Button>
                <Button onClick={() => handleDetail(devi.id)}>
                  <RiInformationFill style={{ width: "24px", height: "24px", color: "#00bfff" }} />
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
          <Button onClick={() => setIsModalOpen(false)} style={{  color: "#00bfff" }}>Cancel</Button>
          <Button style={{ width: "24px", height: "24px", color: "#ff0000" }} onClick={() => {
            handleDelete();
            setIsModalOpen(false);
            
          }}>Confirm</Button>
        </ModalContent>
      </Modal>
    </Container>
    </>
  );
};

export default Columns;
