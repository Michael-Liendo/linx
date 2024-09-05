import { z } from 'zod';

export const LinkSchema = z.object({
	id: z.string(),
	url: z.string().url(),
	shorter_name: z.string().max(20),
	user_id: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export const LinkForCreateSchema = z.object({
	url: z.string().url(),
	shorter_name: z.string().max(20),
});

export const LinkForUpdateSchema = z.object({
	url: z.string().url(),
	shorter_name: z.string().max(20),
});

export const LinkForDeleteSchema = z.object({
	id: z.string(),
});
