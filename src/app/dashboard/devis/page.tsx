"use client"
import Insert from "./Insert";
import Columns from "./columns";
export default function Integrations() {
  return (
    <div className=" tw-bg-stone-100 dark:tw-bg-slate-900">
      <h1 className="tw-p-4 tw-text-2xl tw-font-bold">Devis</h1>
   <div className="tw-ml-5 tw-space-y-4">
    <Insert />
    <Columns/>
    </div>
      
    
    </div>
  );
}


