"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface FormData {
  id: number;
  nameEntreprise: string;
  namePersone: string;
  email: string;
  VotreFonction: string;
  Adress: string;
  codePostall: number;
  message: string;
  etage: string;
  surfaceId: number;
  status: string;
}

const FormContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const UpdateForm = () => {
  const { id } = useParams();
  const router = useRouter();
  
  // State for form fields
  const [formData, setFormData] = useState<FormData>({
    id: Number(id),
    nameEntreprise: "",
    namePersone: "",
    email: "",
    VotreFonction: "",
    Adress: "",
    codePostall: 0,
    message: "",
    etage: "",
    surfaceId: 0,
    status: "",
  });
  
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Array of fields that should be treated as numbers
    const numberFields = ["codePostall", "id", "surfaceId"];

    if (numberFields.includes(name)) {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch(`/api/Devis/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    
    if (res.ok) {
      setSuccessMessage("Form updated successfully!");
      setErrorMessage(null); // Clear any previous error message
      setTimeout(() => {
        router.push('/dashboard/devis');
      }, 2000);
    } else {
      setSuccessMessage(null); // Clear any previous success message
      setErrorMessage("Update failed. Please try again.");
    }
  };

  return (
    <FormContainer>
      <FormTitle>Update Form</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="nameEntreprise">Company Name</Label>
          <Input
            type="text"
            id="nameEntreprise"
            name="nameEntreprise"
            value={formData.nameEntreprise}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="namePersone">Your Name</Label>
          <Input
            type="text"
            id="namePersone"
            name="namePersone"
            value={formData.namePersone}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="VotreFonction">Your Function</Label>
          <Input
            type="text"
            id="VotreFonction"
            name="VotreFonction"
            value={formData.VotreFonction}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="Adress">Address</Label>
          <Input
            type="text"
            id="Adress"
            name="Adress"
            value={formData.Adress}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="codePostall">Postal Code</Label>
          <Input
            type="number"
            id="codePostall"
            name="codePostall"
            value={formData.codePostall}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="etage">Floor</Label>
          <Input
            type="text"
            id="etage"
            name="etage"
            value={formData.etage}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="surfaceId">Surface ID</Label>
          <Input
            type="number"
            id="surfaceId"
            name="surfaceId"
            value={formData.surfaceId}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="status">Status</Label>
          <Input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </FormField>
        <Button type="submit">Update</Button>
      </form>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormContainer>
  );
};

export default UpdateForm;
