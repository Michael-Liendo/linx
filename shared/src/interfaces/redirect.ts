import type { z } from 'zod';
import type {
	RedirectForCreateSchema,
	RedirectSchema,
} from '../schema/redirect';

export interface IRedirect extends z.infer<typeof RedirectSchema> {}
export interface IRedirectForCreate
	extends z.infer<typeof RedirectForCreateSchema> {}
