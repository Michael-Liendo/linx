import { z } from 'zod';

export const UserCreateSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email().describe('unique'),
  password: z.string(),
});

export const UserLoginSchema = z.object({
  email: z.string().email().describe('unique'),
  password: z.string(),
});
