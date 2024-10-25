"use client";
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

// Fetch Devis data
export const fetchDevis = async (setDevis, setLoading, handleError) => {
  setLoading(true);
  try {
    const response = await axios.get('/api/Devis');
    setDevis(response.data);
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
};

// Fetch Facture data
export const fetchFacture = async (setFacture, handleError) => {
  try {
    const response = await axios.get('/api/facture');
    setFacture(response.data);
  } catch (error) {
    handleError(error);
  }
};

// Fetch Surface data
export const fetchSurface = async (setSurface, setLoading, handleError) => {
  setLoading(true);
  try {
    const response = await axios.get('/api/surface');
    setSurface(response.data);
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
};

// Error handling function
const handleError = (error, setError) => {
  if (error.response) {
    setError(`Failed to fetch data: ${error.response.statusText}`);
  } else if (error.request) {
    setError('No response received. Please try again later.');
  } else {
    setError('Failed to fetch data. Please try again later.');
  }
};

// DataProvider component
export const DataProvider = ({ children }) => {
  const [surface, setSurface] = useState([]);
  const [devis, setDevis] = useState([]);
  const [facture, setFacture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDevis(setDevis, setLoading, (error) => handleError(error, setError));
  }, []);

  useEffect(() => {
    fetchFacture(setFacture, (error) => handleError(error, setError));
  }, []);

  useEffect(() => {
    fetchSurface(setSurface, setLoading, (error) => handleError(error, setError));
  }, []);

  return (
    <DataContext.Provider
      value={{
        surface,
        devis,
        facture,
        loading,
        error,
        refetchDevis: () => fetchDevis(setDevis, setLoading, (error) => handleError(error, setError)),
        refetchFacture: () => fetchFacture(setFacture, (error) => handleError(error, setError)),
        refetchSurface: () => fetchSurface(setSurface, setLoading, (error) => handleError(error, setError)),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
