"use client";
import React, { useState, useContext } from "react";
import { PlusIcon } from '@radix-ui/react-icons'; // Import the Plus icon
import { DataContext } from "@/app/contexts/post";
import styled from "styled-components";

// Define the shape of your form data
interface FormData {
  nameEntreprise: string;
  namePersone: string;
  email: string;
  VotreFonction: string;
  Adress: string;
  codePostall: number; // Keep this as a number
  message: string;
  etage: string;
  surfaceId: number;
  status: string;
}

// Styled Components
const FormContainer = styled.div`
  margin:60px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledSelect = styled.select`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #005bb5;
  }
`;

const Message = styled.p`
  margin-top: 15px;
  color: green;
`;

const ErrorMessage = styled.p`
  margin-top: 15px;
  color: red;
`;

const Insert: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nameEntreprise: "",
    namePersone: "",
    email: "",
    VotreFonction: "",
    Adress: "",
    codePostall: 80000,
    message: "",
    etage: "",
    surfaceId: 0,
    status: "",
  });
  
  const { surface, refetchDevis } = useContext(DataContext);
  const [submitStatus, setSubmitStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "codePostall" || name === "surfaceId" ? parseInt(value) || 0 : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/Devis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Devi inserted successfully");
        setSubmitStatus("Devi inserted successfully!");
        setFormData({
          nameEntreprise: "",
          namePersone: "",
          email: "",
          VotreFonction: "",
          Adress: "",
          codePostall: 80000,
          message: "",
          etage: "",
          surfaceId: 0,
          status: "",
        });
        await refetchDevis();
      } else {
        console.error("Failed to insert devi");
        setSubmitStatus("Failed to insert devi. Please try again.");
      }
    } catch (error) {
      console.error("Error inserting devi:", error);
      setSubmitStatus("Error inserting devi. Please check your network.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="nameEntreprise"
          placeholder="Name of Company"
          value={formData.nameEntreprise}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          name="namePersone"
          placeholder="Client Name"
          value={formData.namePersone}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          name="VotreFonction"
          placeholder="Function"
          value={formData.VotreFonction}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          name="Adress"
          placeholder="Address"
          value={formData.Adress}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="number"
          name="codePostall"
          placeholder="Postal Code"
          value={formData.codePostall}
          onChange={handleChange}
        />
        <StyledInput
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          name="etage"
          placeholder="Floor"
          value={formData.etage}
          onChange={handleChange}
        />
        <StyledSelect name="surfaceId" onChange={handleChange} value={formData.surfaceId}>
          <option value={0}>Select Surface</option>
          {surface && surface.map((item:any) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </StyledSelect>
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : <PlusIcon />}
          Submit
        </SubmitButton>
      </StyledForm>
      {submitStatus && (
        submitStatus.includes("successfully") ? (
          <Message>{submitStatus}</Message>
        ) : (
          <ErrorMessage>{submitStatus}</ErrorMessage>
        )
      )}
    </FormContainer>
  );
};

export default Insert;
