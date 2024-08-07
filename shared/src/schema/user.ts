import { z } from 'zod';

export const userCreateSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email().describe('unique'),
  password: z.string(),
});

export const userLoginSchema = z.object({
  email: z.string().email().describe('unique'),
  password: z.string(),
});
