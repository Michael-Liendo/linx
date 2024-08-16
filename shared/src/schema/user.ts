import { z } from 'zod';

export const UserCreateSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email().describe('unique'),
  password: z.string(),
});

export const UserSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email().describe('unique'),
  password: z.string().optional(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export const UserLoginSchema = z.object({
  email: z.string().email().describe('unique'),
  password: z.string(),
});
