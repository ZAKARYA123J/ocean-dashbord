"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styled from "styled-components";
import axios from "axios";

// Define the styled component
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
`;

// Define additional styles for displaying the data
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

// New styled component to display each data field with a label
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
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get(`/api/Devis/${id}`)
      .then(response => setData(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <PageContainer>
      <Title>Details {id}</Title>
      {data ? (
        <>
          <DataField>
            <Label>Company Name:</Label>
            <Value>{data.nameEntreprise}</Value>
          </DataField>
          <DataField>
            <Label>Person Name:</Label>
            <Value>{data.namePersone}</Value>
          </DataField>
          <DataField>
            <Label>Email:</Label>
            <Value>{data.email}</Value>
          </DataField>
          {/* <DataField>
            <Label>Function:</Label>
            <Value>{data.VotreFonction}</Value>
          </DataField> */}
          <DataField>
            <Label>Address:</Label>
            <Value>{data.Adress}</Value>
          </DataField>
          <DataField>
            <Label>Numero Phone:</Label>
            <Value>{data?.numberPhon}</Value>
          </DataField>
          <DataField>
            <Label>Message:</Label>
            <Value>{data.message}</Value>
          </DataField>
          <DataField>
            <Label>Floor:</Label>
            <Value>{data.etage}</Value>
          </DataField>
          <DataField>
            <Label>Status:</Label>
            <Value>{data.status}</Value>
          </DataField>
          <DataField>
            <Label>Surface Value:</Label>
            <Value>{data.surface?.valeur}</Value>
          </DataField>
          {/* Add other data fields as needed */}
        </>
      ) : (
        <Description>Loading...</Description>
      )}
    </PageContainer>
  );
}

export default Page;
