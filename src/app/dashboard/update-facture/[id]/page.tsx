"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import './styles.css';

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
    const numberFields = [ "id", "price", "DevisId"];

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
    <div className="container">
      <h2 className="h2">Update Information for ID: {id}</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <input
            type="date"
            className="input"
            name="dateReaserver"
            placeholder="Name of the Company"
            value={formData.dateReaserver || ""}
            onChange={handleChange}
          />
          <input
            type="date"
            className="input"
            name="dateFacture"
            placeholder="Contact Person"
            value={formData.dateFacture || ""}
            onChange={handleChange}
          />
        </div>
        <input
          type="number"
          className="input"
          name="price"
          placeholder="price"
          value={formData.price || ""}
          onChange={handleChange}
        />
        <input
          type="number"
          className="input"
          name="DevisId"
          placeholder="DevisId"
          value={formData.DevisId }
          onChange={handleChange}
        />
        <button className="button" type="submit" style={{backgroundColor:'violet'}}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
