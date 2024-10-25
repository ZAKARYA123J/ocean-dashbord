"use client";
import React, { useState,useContext } from 'react';
import './styles.css'; // Make sure to import your CSS file
import { DataContext } from '@/app/contexts/post';
interface FormData {
    dateReaserver: string;
    dateFacture: string;
    price: number;
    DevisId: number;
}

function Insert() {
    const [formData, setFormData] = useState<FormData>({
        dateReaserver: '',
        dateFacture: '',
        price: 0,
        DevisId: 0,
    });
    const {devis,refetchFacture}=useContext(DataContext)
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
            await refetchFacture()
            console.log('Success:', data);
            // Optionally reset the form or show a success message here
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="insert-form">
                <div className="form-group">
                    <label>
                        Date Reserved:
                        <input
                            type="date"
                            name="dateReaserver"
                            value={formData.dateReaserver}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Date Facture:
                        <input
                            type="date"
                            name="dateFacture"
                            value={formData.dateFacture}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                         Select Devis:
                        <select
                            name="DevisId"
                            value={formData.DevisId}
                            onChange={handleChange}
                            required
                            className="form-input"
                        >
                            <option value="" disabled>Select Devis</option>
                            {devis
                                .filter((item: { id: number, nameEntreprise: string, Facture: string }) => !item.Facture)
                                .map((item:any) => (
                                    <option key={item.id} value={item.id}>
                                        {item.nameEntreprise} (ID: {item.id})
                                    </option>
                                ))}
                        </select>
                    </label>
                </div>
                <button type="submit" className="submit-button">Insert</button>
            </form>
        </div>
    );
}

export default Insert;