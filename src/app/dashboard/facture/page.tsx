import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css'; // Ensure you have styles for the dialog
import { PlusIcon } from '@radix-ui/react-icons'; // Import the Plus icon
import Columns from './columns';
import Link from 'next/link';
function Page() {
    return (
      <>
      <Link href='/dashboard/insertfacture'>    
                    <button className="Button violet" >Insert Facture<PlusIcon/></button></Link>
        <Columns/>
        </>
    );
}

export default Page;