'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import type { Row } from '@tanstack/react-table';

import { Button } from '../../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TextField } from '@/components/text-field';

import useLinks from '@/hooks/useLinks';
import { LinkForUpdateSchema, LinkSchema } from '@linx/shared';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from '@/utils/toFormikValidationSchema';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const link = LinkSchema.parse(row.original);

  const [isOpen, setIsOpen] = useState(false);

  const { update, deleteById } = useLinks();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      url: link.url,
      shorter_name: link.shorter_name,
      id: link.id,
    },
    validationSchema: toFormikValidationSchema(LinkForUpdateSchema),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      const dto = LinkForUpdateSchema.parse(values);

      update(dto);
      setIsOpen(false);
    },
  });

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <DotsHorizontalIcon className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DialogTrigger asChild>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => deleteById(link.id)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* dialog */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit link</DialogTitle>
          </DialogHeader>
          <div>
            <form id="edit-link" className="space-y-4" onSubmit={handleSubmit}>
              <TextField
                label="Shorter Name"
                type="text"
                id="shorter_name"
                name="shorter_name"
                placeholder="linx-short-url"
                autoComplete="off"
                value={values.shorter_name}
                error={errors.shorter_name}
                onChange={handleChange}
                required
              />
              <TextField
                label="Redirect URL"
                type="url"
                id="url"
                name="url"
                placeholder="https://example.com/longlonglonglonglonglongurl"
                value={values.url}
                error={errors.url}
                onChange={handleChange}
                required
              />
            </form>
          </div>
          <DialogFooter>
            <Button form="edit-link" type="submit">
              Edit Link
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
