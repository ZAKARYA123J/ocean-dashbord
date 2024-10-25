"use client";
import React, { useState,useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles.css";
import { PlusIcon } from '@radix-ui/react-icons'; // Import the Plus icon
import { DataContext } from "@/app/contexts/post";
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
const {surface,refetchDevis}=useContext(DataContext)
  const [submitStatus, setSubmitStatus] = useState<string>(""); // To track submission status
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle number inputs
    if (name === "codePostall" || name === "surfaceId") {
      setFormData({
        ...formData,
        [name]: parseInt(value) || 0, // Convert to number, fallback to 0 if NaN
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true); // Set loading to true on submit
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
        setSubmitStatus("Devi inserted successfully!"); // Success message
        // Optionally reset the form
        setFormData({
          nameEntreprise: "",
          namePersone: "",
          email: "",
          VotreFonction: "",
          Adress: "",
          codePostall: 80000, // Reset to initial number
          message: "",
          etage: "",
          surfaceId: 0,
          status: "",
        });
        await refetchDevis()
      } else {
        console.error("Failed to insert devi");
        setSubmitStatus("Failed to insert devi. Please try again."); // Error message
      }
    } catch (error) {
      console.error("Error inserting devi:", error);
      setSubmitStatus("Error inserting devi. Please check your network."); // Error message
      
    }finally{
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="tw-mt-3">
    <Dialog.Root >
      <Dialog.Trigger asChild>
        <button className="Button violet" style={{marginLeft:"110px"}}>Insert Devi <PlusIcon/></button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Insert Devi</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Fill out the details below and click save to submit your devi.
          </Dialog.Description>

          {/* Display submission status */}
          {submitStatus && <div className="status-message">{submitStatus}</div>}

          <form onSubmit={handleSubmit} >
            <div className="FormGrid" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              <fieldset className="Fieldset" style={{ flex: "1 1 calc(50% - 16px)" }}>
                <label className="Label" htmlFor="nameEntreprise">Company </label>
                <input
                  className="Input"
                  id="nameEntreprise"
                  name="nameEntreprise"
                  value={formData.nameEntreprise}
                  onChange={handleChange}
                  required 
                />
              </fieldset>

              <fieldset className="Fieldset" style={{ flex: "1 1 calc(50% - 16px)" }}>
                <label className="Label" htmlFor="namePersone"> Name</label>
                <input
                  className="Input"
                  id="namePersone"
                  name="namePersone"
                  value={formData.namePersone}
                  onChange={handleChange}
                  required // Make required if necessary
                />
              </fieldset>

              <fieldset className="Fieldset" style={{ flex: "1 1 100%" }}>
  <label className="Label" htmlFor="email">Email</label>
  <input
    className="Input"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required // Make required if necessary
  />
</fieldset>


              <fieldset className="Fieldset" style={{ flex: "1 1 calc(50% - 16px)" }}>
                <label className="Label" htmlFor="VotreFonction">Function</label>
                <input
                  className="Input"
                  id="VotreFonction"
                  name="VotreFonction"
                  value={formData.VotreFonction}
                  onChange={handleChange}
                />
              </fieldset>

              <fieldset className="Fieldset" style={{ flex: "1 1 calc(50% - 16px)" }}>
                <label className="Label" htmlFor="Adress">Address</label>
                <input
                  className="Input"
                  id="Adress"
                  name="Adress"
                  value={formData.Adress}
                  onChange={handleChange}
                  required // Make required if necessary
                />
              </fieldset>

              <fieldset className="Fieldset" style={{ flex: "1 1 calc(50% - 16px)" }}>
                <label className="Label" htmlFor="codePostall">Postal Code</label>
                <input
                  className="Input"
                  id="codePostall"
                  name="codePostall"
                  value={formData.codePostall}
                  onChange={handleChange}
                  required // Make required if necessary
                />
              </fieldset>

              <fieldset className="Fieldset" style={{ flex: "1 1 calc(50% - 16px)" }}>
                <label className="Label" htmlFor="message">Message</label>
                <input
                  className="Input"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </fieldset>

              <fieldset className="Fieldset" style={{ flex: "1 1 calc(50% - 16px)" }}>
                <label className="Label" htmlFor="etage">Floor</label>
                <input
                  className="Input"
                  id="etage"
                  name="etage"
                  value={formData.etage}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="Fieldset" style={{ flex: "1 1 calc(50% - 16px)" }}>
  <label className="Label" htmlFor="status">Status</label>
  <select
    className="Input"
    id="status"
    name="status"
    value={formData.status}
    onChange={handleChange}
    required
  >
    <option value="">Select </option>
    <option value="PENDING">PENDING</option>
    <option value="CONFIRMED">CONFIRMED</option>
    <option value="REJECTED">REJECTED</option>
    <option value="COMPLETED">COMPLETED</option>
  </select>
</fieldset>


              <fieldset className="Fieldset" style={{ flex: "1 1 calc(50% - 16px)" }}>
                  <label className="Label" htmlFor="surfaceId">Surface</label>
                  <select
                    className="Input"
                    id="surfaceId"
                    name="surfaceId"
                    value={formData.surfaceId}
                    onChange={handleChange}
                    required
                  >
                    <option value={0}>Select </option>
                    {surface.map((s: { id: number; valeur: string }) => (
                      <option key={s.id} value={s.id}>
                        {s.valeur}
                      </option>
                    ))}
                  </select>
                </fieldset>

          
              {/* Submit button */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button type="submit" className="Button green" disabled={isLoading}>
                    {isLoading ? "Saving..." : "Save"}
                  </button>
              </div>
            </div>
          </form>

          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">close</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>
  );
};

export default Insert;
