"use client";
import React, { useState, useContext, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import styled from "styled-components";
import { DataContext } from "@/app/contexts/post";
import { FaSpinner } from "react-icons/fa"; // Import the spinner icon from Font Awesome

interface FormData {
  id: number;
  nameEntreprise: string;
  namePersone: string;
  email: string;
  VotreFonction: string;
  Adress: string;
  codePostall: string;
  message: string;
  ville: string;
  etage: string;
  surfaceId: string;
  status: string;
  numberPhon: string;
}

const Container = styled.div`
  padding: 20px;
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
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

const Button = styled.button<{ loading?: boolean }>`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #00bfff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
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

// Flex container for displaying two inputs in a single row
const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HalfWidthInput = styled(Input)`
  width: 100%;
`;
const SurfaceSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;
const UpdateForm = () => {
  const { id } = useParams();
  const router = useRouter();
  const { devis ,surface} = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const selectedDevi = devis.find((item: any) => item.id === Number(id));

  const [formData, setFormData] = useState<FormData>({
    id: Number(id),
    nameEntreprise: selectedDevi?.nameEntreprise || "",
    namePersone: selectedDevi?.namePersone || "",
    email: selectedDevi?.email || "",
    VotreFonction: selectedDevi?.VotreFonction || "",
    Adress: selectedDevi?.Adress || "",
    codePostall: selectedDevi?.codePostall || "",
    message: selectedDevi?.message || "",
    ville: selectedDevi?.ville || "",
    etage: selectedDevi?.etage || "",
    surfaceId: selectedDevi?.surfaceId || "",
    status: selectedDevi?.status || "",
    numberPhon: selectedDevi?.numberPhon || "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDevi) {
      setFormData({
        ...formData,
        ...selectedDevi,
      });
    }
  }, [selectedDevi]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const numberFields = ["codePostall", "id", "surfaceId"];
  
    setFormData({
      ...formData,
      [name]: numberFields.includes(name) ? Number(value) : value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    const res = await fetch(`/api/Devis/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false); // Set loading to false after response

    if (res.ok) {
      setSuccessMessage("Form updated successfully!");
      setErrorMessage(null);
      setTimeout(() => {
        router.push('/dashboard/devis');
      }, 2000);
    } else {
      setSuccessMessage(null);
      setErrorMessage("Update failed. Please try again.");
    }
  };

  return (
    <FormContainer>
      <Container>
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

          <FlexContainer>
            <FormField>
              <Label htmlFor="namePersone">Name</Label>
              <HalfWidthInput
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
              <HalfWidthInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormField>
          </FlexContainer>

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

          <FlexContainer>
            <FormField>
              <Label htmlFor="Adress">Address</Label>
              <HalfWidthInput
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
              <HalfWidthInput
                type="number"
                id="codePostall"
                name="codePostall"
                value={formData.codePostall}
                onChange={handleChange}
                required
              />
            </FormField>
          </FlexContainer>

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

          <FlexContainer>
            <FormField>
              <Label htmlFor="etage">Floor</Label>
              <HalfWidthInput
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
              <SurfaceSelect
                id="surfaceId"
                name="surfaceId"
                value={formData.surfaceId}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Surface</option>
                {surface.map((surface:any) => (
                  <option key={surface.id} value={surface.id}>
                    {surface.valeur} {/* Assuming the surface has a name property */}
                  </option>
                ))}
              </SurfaceSelect>
            </FormField>
          </FlexContainer>

          <FlexContainer>
            <FormField>
              <Label htmlFor="ville">City</Label>
              <HalfWidthInput
                type="text"
                id="ville"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="numberPhon">Phone Number</Label>
              <HalfWidthInput
                type="text"
                id="numberPhon"
                name="numberPhon"
                value={formData.numberPhon}
                onChange={handleChange}
                required
              />
            </FormField>
          </FlexContainer>

          <Button type="submit" loading={loading} disabled={loading}>
            {loading ? (
              <Spinner>
                <FaSpinner className="spinner" style={{ fontSize: "20px", animation: "spin 1s linear infinite" }} />
              </Spinner>
            ) : (
              "Update"
            )}
          </Button>
        </form>

        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    </FormContainer>
  );
};

export default UpdateForm;
