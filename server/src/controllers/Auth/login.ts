import validator from 'validator';
import { IUserForLogin } from '@linx/shared';
import { BadRequestError } from '../../utils/errorHandler';

import type { Reply } from '../../types';
import type { FastifyRequest } from 'fastify';
import Services from '../../services';

export default async function login(request: FastifyRequest, reply: Reply) {
  const { email, password } = request.body as IUserForLogin;

  if (!email || !password) {
    throw new BadRequestError('Please provide all required fields');
  }

  if (!validator.isEmail(email)) {
    throw new BadRequestError('Please provide a valid email address');
  }

  try {
    const user = await Services.auth.login({
      email,
      password,
    });

    return reply
      .code(201)
      .send({ message: 'User created', data: { token: user } });
  } catch (error) {
    return reply.code(error).send({
      message: 'Internal server error',
      error: error.message as string,
    });
  }
}
