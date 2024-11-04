"use client";
import React, { useState, useContext } from "react";
import { useParams, useRouter } from "next/navigation";
import styled from "styled-components";
import { DataContext } from "@/app/contexts/post";

// Define styled components
const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #00bfff;
  color: white;
  cursor: pointer;
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
`;

interface FormData {
  id: number;
  dateReaserver: string;
  dateFacture: string;
  price: number;
  DevisId: number;
}
const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;
const UpdateForm = () => {
  const { id } = useParams();
  const router = useRouter();
  const { facture ,devis} = useContext(DataContext);
  const selectedfacture = facture.find((item: any) => item.id === Number(id));

  // Helper function to format dates
  const formatDate = (date: string | Date | undefined) =>
    date ? new Date(date).toISOString().split("T")[0] : "";

  const [formData, setFormData] = useState<FormData>({
    id: Number(id),
    dateReaserver: formatDate(selectedfacture?.dateReaserver),
    dateFacture: formatDate(selectedfacture?.dateFacture),
    price: selectedfacture?.price || 0,
    DevisId: 0,
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "DevisId" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/facture/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccessMessage("Form updated successfully!");
      setTimeout(() => {
        router.push("/dashboard/facture");
      }, 2000);
    } else {
      console.error("Update failed");
      setSuccessMessage("Update failed. Please try again.");
    }
  };

  return (
    <Container>
      <Title>Update Information for facture: {id}</Title>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="date"
            name="dateReaserver"
            value={formData.dateReaserver || ""}
            onChange={handleChange}
          />
          <Input
            type="date"
            name="dateFacture"
            value={formData.dateFacture || ""}
            onChange={handleChange}
          />
        </InputGroup>
        <Input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price || ""}
          onChange={handleChange}
        />
        <Select
          name="DevisId"
          value={formData.DevisId}
          onChange={handleChange}
        >
          <option value="">Select Devis</option>
          {devis.map((devisItem: any) => (
            <option key={devisItem.id} value={devisItem.id}>
              {devisItem.id} {devisItem.nameEntreprise}{/* Adjust `name` to match your data */}
            </option>
          ))}
        </Select>
        <Button type="submit">Update</Button>
      </Form>
    </Container>
  );
};

export default UpdateForm;
