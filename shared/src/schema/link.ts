import { z } from 'zod';

export const LinkSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  shorter_name: z.string().max(20),
  user_id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const LinkForCreateSchema = z.object({
  url: z.string().url(),
  shorter_name: z.string().max(20),
});
