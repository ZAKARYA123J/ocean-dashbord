"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Log } from "./log";
import { BiTime } from "react-icons/bi";
import { format } from "date-fns";

export const priorityColors = {
  VERBOSE: "rgb(5 150 105)",
  INFO: "rgb(71 85 105)",
  DEBUG: "rgb(2 132 199)",
  WARNING: "rgb(202 138 4)",
  ERROR: "rgb(225 29 72)",
};

export const userColumns: ColumnDef<Log>[] = [
  {
    accessorKey: "time",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="tw-inline-flex tw-items-center tw-gap-2">
        <span className="tw-text-slate-500">
          <BiTime />
        </span>
        Time
      </button>
    ),
    cell({ row }) {
      const value = row.getValue("time") as string;
      const formattedTime = format(value, "Pp");
      return <span className="tw-font-bold">{formattedTime}</span>;
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
    cell({ row }) {
      const value: string = row.getValue("priority");
      // @ts-ignore
      var color: string = priorityColors[value];

      return (
        <span
          className="tw-rounded tw-p-1 tw-font-semibold tw-text-slate-200"
          style={{ backgroundColor: color }}
        >
          {value}
        </span>
      );
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
