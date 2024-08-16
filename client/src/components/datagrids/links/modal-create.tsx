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
import { LinkForCreateSchema } from '@linx/shared';
import { Link1Icon } from '@radix-ui/react-icons';
import { useState } from 'react';

import type { FormEvent } from 'react';

export function LinkModalCreate() {
  const [shorterName, setShorterName] = useState('');
  const [url, setUrl] = useState('');
  const { create } = useLinks();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const dto = LinkForCreateSchema.parse({
      shorter_name: shorterName,
      url,
    });
    console.log;

    create(dto);
  }

  return (
    <Dialog>
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
              onValue={setShorterName}
              required
            />
            <TextField
              label="Redirect URL"
              type="url"
              id="url"
              name="url"
              placeholder="https://example.com/longlonglonglonglonglongurl"
              onValue={setUrl}
              required
            />
          </form>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button form="create-link" type="submit">
              Create Link
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
