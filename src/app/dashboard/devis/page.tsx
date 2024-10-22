// DevisTable.tsx
"use client";

import React, { useEffect, useState } from "react";

import { userColumns } from "./columns"; // Import the column configuration
 // Define the Devis type in a separate file if needed
interface Devis {
    id: string;
    email: string;
    username: string;
    role: string;
  }
const DevisTable = () => {
  const [data, setData] = useState<Devis[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/Devis")
      .then((response) => response.json())
      .then((data: Devis[]) => setData(data))
      .catch((error) => console.error("Error fetching Devis data:", error));
  }, []);
  return (
    <div>
     
    </div>
  );
};

export default DevisTable;
