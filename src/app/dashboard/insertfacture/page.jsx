"use client";
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '@/app/contexts/post';

const FormContainer = styled.div`
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
    color: #333;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const SubmitButton = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const Message = styled.p`
    margin-top: 15px;
    color: ${({ success }) => (success ? 'green' : 'red')};
    font-size: 14px;
`;

function Insert() {
    const [formData, setFormData] = useState({
        dateReaserver: '',
        dateFacture: '',
        price: '',
        DevisId: '', // Initialize as an empty string
    });
    const [message, setMessage] = useState(null); // State for success/error messages
    const { devis, refetchFacture } = useContext(DataContext);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'price' || name === 'DevisId' ? Number(value) : value,
        });
    };

    const handleSubmit = async (e) => {
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
                throw new Error('Failed to submit data');
            }

            const data = await response.json();
            await refetchFacture();
            setMessage({ text: 'Form submitted successfully!', success: true });
            // Reset the form if needed
            setFormData({
                dateReaserver: '',
                dateFacture: '',
                price: '',
                DevisId: '',
            });
        } catch (error) {
            setMessage({ text: 'An error occurred. Please try again.', success: false });
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
                                .filter((item) => !item.Facture)
                                .map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.nameEntreprise} (ID: {item.id})
                                    </option>
                                ))}
                        </Select>
                    </Label>
                </FormGroup>
                <SubmitButton type="submit">Insert</SubmitButton>
            </StyledForm>
            {message && (
                <Message success={message.success}>{message.text}</Message>
            )}
        </FormContainer>
    );
}

export default Insert;
