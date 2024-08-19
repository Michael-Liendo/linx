import type { ZodObject } from 'zod';
import type { Reply, Request } from '../types/index.js';

// biome-ignore lint/suspicious/noExplicitAny: That is any
const requestValidation = (schema: ZodObject<any>) => {
  return async (req: Request, reply: Reply) => {
    if (!schema) return;

    const result = schema.safeParse(req.body);

    if (!req.body) {
      return reply.status(400).send({
        success: false,
        message: 'Validation error',
        errors: [
          {
            code: 'MISSING_BODY',
            path: 'root',
            message: 'Request body is missing',
          },
        ],
      });
    }

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        code: issue.code,
        path: issue.path.length > 0 ? issue.path.join('.') : 'root',
        message: issue.message,
      }));
      reply.status(400).send({
        success: false,
        message: 'Validation error',
        errors,
      });
    } else {
      return;
    }
  };
};

export default requestValidation;
