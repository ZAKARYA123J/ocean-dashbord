"use client"

import { ColumnDef } from "@tanstack/react-table"
import { User } from "./user"
import { BiAt, BiHash, BiShield, BiUser } from "react-icons/bi"


export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: ({column}) => <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="tw-inline-flex tw-items-center tw-gap-2"><span className="tw-text-slate-500"><BiHash /></span>ID</button>,
    cell({row}) {
      const value = row.getValue("id") as string;
      return <h1 className="tw-text-slate-600 dark:tw-text-slate-400">{value}</h1>
    },
  },
  {
    accessorKey: "email",
    header: ({column}) => <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="tw-inline-flex tw-items-center tw-gap-2"><span className="tw-text-slate-500"><BiAt /></span>Email</button>,
  },
  {
    accessorKey: "username",
     header: ({column}) => <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="tw-inline-flex tw-items-center tw-gap-2"><span className="tw-text-slate-500"><BiUser /></span>Username</button>,
  },
  {
    accessorKey: "role",
     header: ({column}) => <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="tw-inline-flex tw-items-center tw-gap-2"><span className="tw-text-slate-500"><BiShield /></span>Role</button>,
    cell({row}) {
      const value = row.getValue("role") as string;
      return <h1 className="tw-font-bold dark:tw-text-slate-300 tw-text-slate-700">{value}</h1>
    },
    },
]
