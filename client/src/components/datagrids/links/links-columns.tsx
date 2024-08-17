import type { LinkSchema } from '@linx/shared';
import type { ColumnDef } from '@tanstack/react-table';

import type { z } from 'zod';

import { copyTextToClipboard } from '@/actions/copyTextToClipboard';
import { useToast } from '@/components/ui/use-toast';
import { Clipboard } from 'lucide-react';
import { Checkbox } from '../../ui/checkbox';
import { DataTableColumnHeader } from './links-table-column-header';
import { DataTableRowActions } from './linkx-table-row-actions';

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
      return (
        <div className="flex items-center space-x-2">
          <Clipboard
            className="w-4"
            onClick={() => {
              copyTextToClipboard(row.original.shorter_name);
              toast({ title: 'Copied to clipboard' });
            }}
          />
          <span
            title={row.original.shorter_name}
            className="max-w-[500px] truncate font-medium"
          >
            {row.original.shorter_name}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'shorter_url',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shorter URL" />
    ),
    cell: ({ row }) => {
      const { toast } = useToast();

      const shorter_url = `${import.meta.env.VITE_API_URL}/api/${row.original.shorter_name}`;
      return (
        <div className="flex items-center space-x-2">
          <Clipboard
            className="w-4"
            onClick={() => {
              copyTextToClipboard(shorter_url);
              toast({ title: 'Copied to clipboard' });
            }}
          />
          <span
            title={row.original.shorter_name}
            className="max-w-[500px] truncate font-medium"
          >
            <a className="underline text-blue-500" href={shorter_url}>
              {shorter_url}
            </a>
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'url',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Destination URL" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            <a className="underline text-blue-500" href={row.original.url}>
              {row.original.url}
            </a>
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
            {row.original.created_at.toLocaleString([], {
              month: '2-digit',
              day: '2-digit',
              year: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })}
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
            {row.original.updated_at.toLocaleString([], {
              month: '2-digit',
              day: '2-digit',
              year: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })}
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
