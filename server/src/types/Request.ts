import { IUser } from '@linx/shared';
import type { FastifyRequest } from 'fastify';

export interface Request extends FastifyRequest {
  user?: IUser;
}
