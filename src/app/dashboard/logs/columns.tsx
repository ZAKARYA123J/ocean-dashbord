"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Log } from "./log";
import { BiTime } from "react-icons/bi";
import {format } from "date-fns";
import { cn } from "@/shadcn/utils";

export const userColumns: ColumnDef<Log>[] = [
  {
    accessorKey: "time",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="tw-inline-flex tw-items-center tw-gap-2"
      >
        <span className="tw-text-slate-500">
          <BiTime />
        </span>
        Time
      </button>
    ),
    cell({ row }) {
      const value = row.getValue("time") as string;
      const formattedTime = format(value, "Pp")
      return <span  className="tw-font-bold">{formattedTime}</span>;
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="tw-inline-flex tw-items-center tw-gap-2"
      >
        Priority
      </button>
    ),
    cell({row}) {
        const value = row.getValue("priority") as string;
        var color: string = "";
        switch(value) {
          case "VERBOSE": color = "tw-bg-green-900"; break;
          case "INFO": color = "tw-bg-slate-500"; break;
          case "DEBUG": color = "tw-bg-sky-900"; break;
          case "WARNING": color = "tw-bg-yellow-900"; break;
          case "ERROR": color = "tw-bg-red-900"; break;
        }

        return <span className={cn(color, "tw-p-1 tw-rounded tw-text-slate-300 tw-font-semibold")}>{value}</span>
    },
  },
  {
    accessorKey: "source",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="tw-inline-flex tw-items-center tw-gap-2"
      >
        Source
      </button>
    ),
  },
  {
    accessorKey: "message",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="tw-inline-flex tw-items-center tw-gap-2"
      >
        Message
      </button>
    ),
  },
];
