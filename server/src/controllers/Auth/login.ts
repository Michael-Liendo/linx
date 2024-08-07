import validator from 'validator';

import Services from '../../services';
import { BadRequestError } from '../../utils/errorHandler';

import type { IUserForLogin } from '@linx/shared';
import type { FastifyRequest } from 'fastify';
import type { Reply } from '../../types';

export default async function login(request: FastifyRequest, reply: Reply) {
  const { email, password } = request.body as IUserForLogin;

  if (!email || !password) {
    throw new BadRequestError('Please provide all required fields');
  }

  if (!validator.isEmail(email)) {
    throw new BadRequestError('Please provide a valid email address');
  }

  const user = await Services.auth.login({
    email,
    password,
  });

  return reply
    .code(201)
    .send({ success: true, message: 'User created', data: { token: user } });
}
