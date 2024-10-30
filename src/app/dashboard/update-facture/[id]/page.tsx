"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import styled from "styled-components";

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
  background-color: #00bfff ;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: darkviolet;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
`;

interface FormData {
  id: number; // Assuming each item has a unique ID
  dateReaserver: string;
  dateFacture: string;
  price: number;
  DevisId: number;
}

const UpdateForm = () => {
  const { id } = useParams();
  const router = useRouter();

  // State for form fields
  const [formData, setFormData] = useState<FormData>({
    id: Number(id),
    dateReaserver: "",
    dateFacture: "",
    price: 0,
    DevisId: 0, // Set initial value for DevisId as 0
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State for success message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Array of fields that should be treated as numbers
    const numberFields = ["id", "price", "DevisId"];

    // Check if the input's name is in the numberFields array
    if (numberFields.includes(name)) {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/facture/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccessMessage("Form updated successfully!"); // Set success message
      setTimeout(() => {
        router.push("/dashboard/facture"); // Redirect after a short delay
      }, 2000); // Redirect after 2 seconds (2000 milliseconds)
    } else {
      console.error("Update failed");
      setSuccessMessage("Update failed. Please try again."); // Set error message if needed
    }
  };

  return (
    <Container>
      <Title>Update Information for ID: {id}</Title>
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
        <Input
          type="number"
          name="DevisId"
          placeholder="DevisId"
          value={formData.DevisId}
          onChange={handleChange}
        />
        <Button type="submit">Update</Button>
      </Form>
    </Container>
  );
};

export default UpdateForm;
