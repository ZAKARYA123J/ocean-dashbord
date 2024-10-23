import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface UpdateProps {
  id: string | null; // ID of the item to update
  onClose: () => void; // Function to close the modal
}

const Update: React.FC<UpdateProps> = ({ id, onClose }) => {
  const [itemData, setItemData] = useState<any>(null); // Replace `any` with your data type

  useEffect(() => {
    if (id) {
      const fetchItemData = async () => {
        const response = await fetch(`http://localhost:3000/api/Devis/${id}`);
        const result = await response.json();
        setItemData(result);
      };

      fetchItemData();
    }
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Implement your update logic here
    // After updating, you might want to close the modal and refresh data
    onClose();
  };

  if (!itemData) {
    return null; // Optionally, you can show a loading state here
  }

  return (
    <Dialog.Root open={true} onOpenChange={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
      <Dialog.Content className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg">
        <Dialog.Title className="text-lg font-semibold">Update Item</Dialog.Title>
        <Dialog.Description className="mt-2 text-sm text-gray-600">
          Please fill out the form below to update the item.
        </Dialog.Description>
        <form onSubmit={handleSubmit} className="mt-4">
          <input 
            type="text" 
            value={itemData.nameEntreprise} 
            onChange={(e) => setItemData({ ...itemData, nameEntreprise: e.target.value })} 
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Entreprise Name"
          />
          {/* Add more fields as necessary */}
          
          <div className="mt-4 flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Update</button>
            <button type="button" onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Update;
