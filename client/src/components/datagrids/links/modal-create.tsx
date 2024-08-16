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
import useLinks from '@/hooks/useLinks';
import { toFormikValidationSchema } from '@/utils/toFormikValidationSchema';
import { LinkForCreateSchema } from '@linx/shared';
import { Link1Icon } from '@radix-ui/react-icons';
import { useFormik } from 'formik';
import { useState } from 'react';

export function LinkModalCreate() {
  const [isOpen, setIsOpen] = useState(false);

  const { create } = useLinks();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { url: '', shorter_name: '' },
    validationSchema: toFormikValidationSchema(LinkForCreateSchema),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      const dto = LinkForCreateSchema.parse(values);

      create(dto);
      setIsOpen(false);
    },
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="ml-2 h-8 px-2 lg:px-3">
          <Link1Icon className="mr-2 h-4 w-4" />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create link</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div>
          <form id="create-link" className="space-y-4" onSubmit={handleSubmit}>
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
          <Button form="create-link" type="submit">
            Create Link
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
