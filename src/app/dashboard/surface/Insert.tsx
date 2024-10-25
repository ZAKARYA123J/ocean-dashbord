"use client";
import React, { useState,useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles.css";
import { PlusIcon } from '@radix-ui/react-icons'; // Import the Plus icon
import { DataContext } from "@/app/contexts/post";
// Define the shape of your form data
interface FormData {
    valeur: string;

}

const Insert: React.FC = () => {
  const {refetchSurface}=useContext(DataContext)
    const [formData, setFormData] = useState<FormData>({
        valeur: "",
      });
    
      const [submitStatus, setSubmitStatus] = useState<string>(""); // To track submission status
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
    
        try {
          const response = await fetch("/api/surface", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            
          });
    
          if (response.ok) {
            console.log("Surface inserted successfully");
            setSubmitStatus("Surface inserted successfully!"); // Success message
            // Optionally reset the form
            setFormData({
              valeur: "",
            });
            await refetchSurface()
          } else {
            console.error("Failed to insert surface");
            setSubmitStatus("Failed to insert surface. Please try again."); // Error message
          }
        } catch (error) {
          console.error("Error inserting surface:", error);
          setSubmitStatus("Error inserting surface. Please check your network."); // Error message
        }
      };
    
  return (
    <div className="tw-mt-3">
    <Dialog.Root >
      <Dialog.Trigger asChild>
        <button className="Button violet">Insert Surface <PlusIcon/></button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Insert Devi</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Fill out the details below and click save to submit your Surface.
          </Dialog.Description>

          {/* Display submission status */}
          {submitStatus && <div className="status-message">{submitStatus}</div>}

          <form onSubmit={handleSubmit} >
            <div className="FormGrid" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              <fieldset className="Fieldset" style={{ flex: "1 1 calc(50% - 16px)" }}>
                <label className="Label" htmlFor="valeur">Surface </label>
                <input
                  className="Input"
                  id="valeur"
                  name="valeur"
                  value={formData.valeur}
                  onChange={handleChange}
                  required 
                />
              </fieldset>  
              {/* Submit button */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button type="submit" className="Button green">
                  Save 
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
