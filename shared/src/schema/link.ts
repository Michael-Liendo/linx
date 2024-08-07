import { z } from 'zod';

export const linkSchema = z.object({
  url: z.string().url(),
  shorter_name: z.string().max(20),
});
