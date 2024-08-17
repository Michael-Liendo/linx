import type { LinkSchema } from '@linx/shared';
import type { ColumnDef } from '@tanstack/react-table';

import type { z } from 'zod';

import { Checkbox } from '../../ui/checkbox';
import { DataTableColumnHeader } from './links-table-column-header';
import { DataTableRowActions } from './linkx-table-row-actions';
import { copyTextToClipboard } from '@/actions/copyTextToClipboard';
import { useToast } from '@/components/ui/use-toast';
import { Clipboard } from 'lucide-react';

export const linksColumns: ColumnDef<z.infer<typeof LinkSchema>>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'shorter_name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shorter Name" />
    ),
    cell: ({ row }) => {
      const { toast } = useToast();
      const shorter_url = `${import.meta.env.VITE_API_URL}/api/${row.original.shorter_name}`;
      return (
        <div className="flex space-x-2 justify-between">
          <span
            title={row.original.shorter_name}
            className="max-w-[500px] truncate font-medium"
          >
            <a className="underline text-blue-500" href={shorter_url}>
              {row.original.shorter_name}
            </a>
          </span>
          <Clipboard
            onClick={() => {
              copyTextToClipboard(shorter_url);
              toast({ title: 'Copied to clipboard' });
            }}
          />
        </div>
      );
    },
  },
  {
    accessorKey: 'url',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="URL" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.original.url}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created at" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.original.created_at.toLocaleString()}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'updated_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Update date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.original.updated_at.toLocaleString()}
          </span>
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
