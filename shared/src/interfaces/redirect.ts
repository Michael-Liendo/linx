import type {
	RedirectForCreateSchema,
	RedirectSchema,
} from '../schema/redirect';
import type { z } from 'zod';

export interface IRedirect extends z.infer<typeof RedirectSchema> {}
export interface IRedirectForCreate
	extends z.infer<typeof RedirectForCreateSchema> {}
