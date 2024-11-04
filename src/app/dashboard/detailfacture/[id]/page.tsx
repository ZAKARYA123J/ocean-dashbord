"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styled from "styled-components";
import axios from "axios";

interface Devis {
  nameEntreprise: string;
  namePersone: string;
  numberPhon: string;
  ville: string;
  email: string;
  VotreFonction: string;
  Adress: string;
  codePostall: string;
  message: string;
  etage: string;
  status: string;
}

interface InvoiceData {
  id: number;
  dateReaserver: string;
  dateFacture: string;
  price: number;
  Devis?: Devis;
}

// Define the styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0;
`;

const DataField = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 4px 0;
`;

const Label = styled.span`
  font-weight: bold;
  color: #333;
`;

const Value = styled.span`
  color: #666;
`;

function Page() {
  const { id } = useParams() as { id: string };
  const [data, setData] = useState<InvoiceData | null>(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios
      .get(`/api/facture/${id}`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div>
      <Title>Details Facture </Title>
      {data ? (
        <PageContainer key={data.id}>
          <DataField>
            <Label>id:</Label>
            <Value>{data.id}</Value>
          </DataField>
          <DataField>
            <Label>Date Reserved:</Label>
            <Value>{new Date(data.dateReaserver).toLocaleDateString()}</Value>
          </DataField>
          <DataField>
            <Label>Invoice Date:</Label>
            <Value>{new Date(data.dateFacture).toLocaleDateString()}</Value>
          </DataField>
          <DataField>
            <Label>Price:</Label>
            <Value>{data.price} DH</Value>
          </DataField>
          {data.Devis && (
            <>
              <DataField>
                <Label>Company Name:</Label>
                <Value>{data.Devis.nameEntreprise}</Value>
              </DataField>
              <DataField>
                <Label>Contact Person:</Label>
                <Value>{data.Devis.namePersone}</Value>
              </DataField>
              <DataField>
                <Label>Phone Number:</Label>
                <Value>{data.Devis.numberPhon}</Value>
              </DataField>
              <DataField>
                <Label>City:</Label>
                <Value>{data.Devis.ville}</Value>
              </DataField>
              <DataField>
                <Label>Email:</Label>
                <Value>{data.Devis.email}</Value>
              </DataField>
              <DataField>
                <Label>Address:</Label>
                <Value>{data.Devis.Adress}</Value>
              </DataField>
              <DataField>
                <Label>Postal Code:</Label>
                <Value>{data.Devis.codePostall}</Value>
              </DataField>
              <DataField>
                <Label>Message:</Label>
                <Value>{data.Devis.message}</Value>
              </DataField>
              <DataField>
                <Label>Floor:</Label>
                <Value>{data.Devis.etage}</Value>
              </DataField>
              <DataField>
                <Label>Status:</Label>
                <Value>{data.Devis.status}</Value>
              </DataField>
            </>
          )}
        </PageContainer>
      ) : (
        <Description>Loading...</Description>
      )}
    </div>
  );
}

export default Page;
