import { z } from 'zod';

export const RedirectSchema = z.object({
	id: z.string(),
	link_id: z.string(),
	ip: z.string().ip(),
	user_agent: z.string().optional(),
	accept_language: z.string().optional(),
	sec_ch_ua_platform: z.string().optional(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export const RedirectForCreateSchema = z.object({
	link_id: z.string(),
	ip: z.string().ip(),
	sec_ch_ua_platform: z.string().optional(),
	user_agent: z.string().optional(),
	accept_language: z.string().optional(),
});
