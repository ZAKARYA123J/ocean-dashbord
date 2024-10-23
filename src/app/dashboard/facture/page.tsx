import React from 'react';
import Insert from './Insert';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css'; // Ensure you have styles for the dialog
import { PlusIcon } from '@radix-ui/react-icons'; // Import the Plus icon
import Columns from './columns';
function Page() {
    return (
      <>
        <div>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button className="open-dialog-button">Insert Facture<PlusIcon/></button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="dialog-overlay" />
                    <Dialog.Content className="dialog-content">
                        <Dialog.Title className="dialog-title">Insert Data</Dialog.Title>
                        <Insert />
                        <Dialog.Close className="dialog-close">Close ✖</Dialog.Close> {/* Use an "X" symbol */}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
            
        </div>
        <Columns/>
        </>
    );
}

export default Page;