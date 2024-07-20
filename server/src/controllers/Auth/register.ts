import validator from 'validator';

import Services from '../../services';
import { BadRequestError } from '../../utils/errorHandler';

import type { IUserForRegister } from '@linx/shared';
import type { Reply, Request } from '../../types';

export default async function register(request: Request, reply: Reply) {
  const { first_name, last_name, email, password } =
    request.body as IUserForRegister;

  if (!first_name || !last_name || !email || !password) {
    throw new BadRequestError('Please provide all required fields');
  }

  if (!validator.isEmail(email)) {
    throw new BadRequestError('Please provide a valid email address');
  }

  if (password.length < 4) {
    throw new BadRequestError('Password must be at least 4 characters long');
  }

  const user = await Services.auth.register({
    first_name,
    last_name,
    email,
    password,
  });

  return reply.code(201).send({ message: 'User created', data: { ...user } });
}
