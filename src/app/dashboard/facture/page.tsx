"use client"
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css'; // Ensure you have styles for the dialog
import { PlusIcon } from '@radix-ui/react-icons'; // Import the Plus icon
import Columns from './columns';
import styled from 'styled-components';
import Link from 'next/link';
const StyledButton = styled.button`
  background-color: #00bfff; /* Blue background */
  color: white;              /* White text */
  margin:10px;
  padding: 10px 20px;       /* Padding */
  border: none;             /* No border */
  border-radius: 5px;       /* Rounded corners */
  cursor: pointer;           /* Pointer cursor on hover */
  display: inline-flex;      /* Use inline-flex for inline behavior */
  align-items: center;       /* Center items vertically */
  gap: 8px;                  /* Space between text and icon */
  
  &:hover {
    background-color: #6495ed; /* Darker green on hover */
  }

  &:focus {
    outline: none;              /* Remove outline */
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.5); /* Shadow on focus */
  }
`;
function Page() {
    return (
      <>
      <Link href='/dashboard/insertfacture'>    
                    <StyledButton>Insert Facture<PlusIcon/></StyledButton></Link>
        <Columns/>
        </>
    );
}

export default Page;