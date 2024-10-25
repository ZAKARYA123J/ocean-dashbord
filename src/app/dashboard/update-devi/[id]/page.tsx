"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import './styles.css'
import { useRouter } from "next/navigation";
interface FormData {
  id:number;
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
const UpdateForm = () => {
  const { id } = useParams();
  const router=useRouter()
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
  })
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State for success message
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    // Array of fields that should be treated as numbers
    const numberFields = ["codePostall", "id", "surfaceId"];
  
    // Check if the input's name is in the numberFields array
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
      body: JSON.stringify(formData)
    });
    
    if (res.ok) {
      setSuccessMessage("Form updated successfully!"); // Set success message
      setTimeout(() => {
        router.push('/dashboard/devis'); // Redirect after a short delay
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
      type="text"
      className="input"
      name="nameEntreprise"
      placeholder="Name of the Company"
      value={formData.nameEntreprise}
      onChange={handleChange}
    />
    <input
      type="text"
      className="input"
      name="namePersone"
      placeholder="Contact Person"
      value={formData.namePersone}
      onChange={handleChange}
    />
  </div>
  <input
    type="email"
    className="input"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
  />
  <input
    type="text"
    className="input"
    name="VotreFonction"
    placeholder="Your Role"
    value={formData.VotreFonction}
    onChange={handleChange}
  />
  <input
    type="text"
    className="input"
    name="Adress"
    placeholder="Address"
    value={formData.Adress}
    onChange={handleChange}
  />
  <input
    type="number"
    className="input"
    name="codePostall"
    placeholder="Postal Code"
    value={formData.codePostall}
    onChange={handleChange}
  />
  <div className="input-group">
    <input
      type="text"
      className="input"
      name="etage"
      placeholder="Floor"
      value={formData.etage}
      onChange={handleChange}
    />
    <input
      type="text"
      className="input"
      name="surfaceId"
      placeholder="Surface ID"
      value={formData.surfaceId}
      onChange={handleChange}
    />
  </div>
  <input
    type="text"
    className="input"
    name="status"
    placeholder="Status"
    value={formData.status}
    onChange={handleChange}
  />
  <textarea
    name="message"
    className="textarea"
    placeholder="Message"
    value={formData.message}
    onChange={handleChange}
  />
  <button className="button" type="submit" style={{backgroundColor:"violet"}}>Update</button>
</form>

    </div>
  );
};

export default UpdateForm;
