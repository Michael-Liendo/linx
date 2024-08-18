import { TextField } from '@/components/text-field';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import useLinks from '@/hooks/useLinks';
import { toFormikValidationSchema } from '@/utils/toFormikValidationSchema';
import { type ILink, LinkForUpdateSchema } from '@linx/shared';
import { Link1Icon } from '@radix-ui/react-icons';
import { useFormik } from 'formik';
import { useState } from 'react';

export function LinkDialogEdit({
  link,
  setIsOpen,
}: { link: ILink; setIsOpen: (isOpen: boolean) => void }) {
  const { update } = useLinks();
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
  );
}
