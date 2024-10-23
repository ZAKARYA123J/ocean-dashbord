"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/components/ui/table";
import { DataTablePagination } from "./data_table_pagination";
import { useState } from "react";
import { Input } from "@/shadcn/components/ui/input";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/shadcn/components/ui/dropdown-menu";
import { Button } from "@/shadcn/components/ui/button";

type FilterOptions = {
  placeholder: string;
  field: string;
};

type SortOptions = {
  sortBy: string;
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterOptions?: FilterOptions;
  sortOptions?: SortOptions;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterOptions,
  sortOptions,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>(
    sortOptions
      ? [
          {
            desc: true,
            id: sortOptions.sortBy,
          },
        ]
      : [],
  );
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const tableRows = table.getRowModel().rows;

  return (
    <div>
        <div className="tw-flex tw-items-center tw-py-2">
      {filterOptions && (
          <Input
            placeholder={filterOptions.placeholder}
            value={
              (table
                .getColumn(filterOptions.field)
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn(filterOptions.field)
                ?.setFilterValue(event.target.value)
            }
            className="tw-max-w-sm"
          />
            )}
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="tw-ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="tw-capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
    
      <div className="tw-text-jusitfy tw-grid tw-overflow-x-auto tw-rounded-md tw-border tw-border-slate-400 dark:tw-border-slate-600">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {tableRows?.length ? (
              tableRows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="tw-h-24 tw-text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="tw-border-t tw-border-t-slate-400 tw-bg-slate-200 tw-p-2 dark:tw-border-t-slate-600 dark:tw-bg-slate-950/60">
          <DataTablePagination table={table} />
        </div>
      </div>
    </div>
  );
}
