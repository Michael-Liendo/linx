'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import type { Table } from '@tanstack/react-table';

import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { DataTableViewOptions } from './links-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter links.."
          value={
            (table.getColumn('shorter_name')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('shorter_name')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* 
        todo: for enums of data
         {table.getColumn('shorter_name') && (
          <DataTableFacetedFilter
            column={table.getColumn('shorter_name')}
            title="shorter_name"
            options={statuses}
          />
        )} */}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
