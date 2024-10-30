"use client";
import Insert from "./Insert";
import Link from "next/link";
import Columns from "./columns";
import { PlusIcon } from '@radix-ui/react-icons'; // Import the Plus icon
import styled from 'styled-components';

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

export default function Integrations() {
  return (
    <div className="tw-bg-stone-100 dark:tw-bg-slate-900">
      <div className="tw-ml-5 tw-space-y-4">
        <Link href="/dashboard/Insertdevis">
          <StyledButton>
            Insert Devi <PlusIcon />
          </StyledButton>
        </Link>
        <Columns />
      </div>
    </div>
  );
}
