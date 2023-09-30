import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/components/ui/select";
import { Table } from "@tanstack/react-table";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const paginationState = table.getState().pagination;

  return (
    <div className="tw-flex tw-items-center tw-justify-between tw-px-2">
      <div className="tw-flex-1 tw-text-sm tw-font-bold tw-text-slate-600 dark:tw-text-slate-400">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="tw-hidden tw-flex-1 tw-items-center tw-gap-x-2 lg:tw-flex">
        <span className="tw-text-sm tw-font-bold tw-text-slate-600 dark:tw-text-slate-400">
          Rows per page
        </span>
        <span>
          <Select
            value={`${paginationState.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={paginationState.pageSize} />
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 30, 40, 50].map((pageSize) => {
                return (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </span>
      </div>
      <div className="tw-flex tw-items-center tw-space-x-6 lg:tw-space-x-4">
        <div className="tw-hidden tw-w-[100px] tw-items-center tw-justify-center tw-text-sm tw-font-bold tw-text-slate-600 dark:tw-text-slate-400 sm:tw-flex">
          Page {paginationState.pageIndex + 1} of {table.getPageCount()}
        </div>

        <div className="tw-flex tw-items-center tw-space-x-1 tw-divide-x tw-divide-slate-400 tw-rounded  tw-border tw-border-slate-400 tw-text-2xl dark:tw-divide-slate-600  dark:tw-border-slate-600">
          <button
            className="tw-hidden disabled:tw-text-slate-400 dark:disabled:tw-text-slate-600 md:tw-flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="tw-sr-only">Go to first page</span>
            <BiChevronsLeft />
          </button>
          <button
            className="disabled:tw-text-slate-400 dark:disabled:tw-text-slate-600"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="tw-sr-only">Go to previous page</span>
            <BiChevronLeft />
          </button>
          <button
            className="disabled:tw-text-slate-400 dark:disabled:tw-text-slate-600"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="tw-sr-only">Go to next page</span>
            <BiChevronRight />
          </button>
          <button
            className="tw-hidden disabled:tw-text-slate-400 dark:disabled:tw-text-slate-600 md:tw-flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="tw-sr-only">Go to last page</span>
            <BiChevronsRight />
          </button>
        </div>
      </div>
    </div>
  );
}
