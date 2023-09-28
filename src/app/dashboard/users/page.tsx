import { NextRequest } from "next/server";
import { DataTable } from "../components/data-table";
import { userColumns } from "./columns";
import { userData } from "./user";

export default function Users() {
  return (
    <div className="tw-bg-stone-100 dark:tw-bg-slate-900 tw-min-h-full-minus-header">
      <h1 className="tw-p-4 tw-text-2xl tw-font-bold">Users</h1>
      <div className="tw-p-4 ">
        <DataTable columns={userColumns} data={userData} />
      </div>
    </div>
  );
}
