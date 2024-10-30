"use client";
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '@/app/contexts/post';

interface FormData {
    dateReaserver: string;
    dateFacture: string;
    price: number;
    DevisId: number;
}

const FormContainer = styled.div`
    padding: 20px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-weight: bold;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Select = styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SubmitButton = styled.button`
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background-color: #218838;
    }
`;

function Insert() {
    const [formData, setFormData] = useState<FormData>({
        dateReaserver: '',
        dateFacture: '',
        price: 0,
        DevisId: 0,
    });
    const { devis, refetchFacture } = useContext(DataContext);
    
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'price' || name === 'DevisId' ? Number(value) : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/facture', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            await refetchFacture();
            console.log('Success:', data);
            // Optionally reset the form or show a success message here
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <FormContainer>
            <StyledForm onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>
                        Date Reserved:
                        <Input
                            type="date"
                            name="dateReaserver"
                            value={formData.dateReaserver}
                            onChange={handleChange}
                            required
                        />
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Date Facture:
                        <Input
                            type="date"
                            name="dateFacture"
                            value={formData.dateFacture}
                            onChange={handleChange}
                            required
                        />
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Price:
                        <Input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Select Devis:
                        <Select
                            name="DevisId"
                            value={formData.DevisId}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Devis</option>
                            {devis
                                .filter((item: { id: number; nameEntreprise: string; Facture: string }) => !item.Facture)
                                .map((item: any) => (
                                    <option key={item.id} value={item.id}>
                                        {item.nameEntreprise} (ID: {item.id})
                                    </option>
                                ))}
                        </Select>
                    </Label>
                </FormGroup>
                <SubmitButton type="submit">Insert</SubmitButton>
            </StyledForm>
        </FormContainer>
    );
}

export default Insert;
