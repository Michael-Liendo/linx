import Repository from '../repository';
import { BadRequestError, UnauthorizedError } from '../utils/errorHandler';
import { comparePassword, hashPassword } from '../utils/password';

import type { IUser, IUserForLogin, IUserForRegister } from '@linx/shared';
import { Jwt } from '../utils/jwt';

export default class Auth {
  static async login(data: IUserForLogin) {
    const user = await Repository.user.getUserByEmail(data.email);

    if (!user) {
      throw new UnauthorizedError('UnauthorizedError');
    }

    const { password } = user as Required<IUser>;

    const isCorrectPassword = await comparePassword(data.password, password);

    if (!isCorrectPassword) {
      throw new UnauthorizedError('UnauthorizedError');
    }

    const jwt = await Jwt.createToken(user);
    return jwt;
  }

  static async register(data: IUserForRegister) {
    const { first_name, last_name, email, password } = data;

    const user = await Repository.user.getUserByEmail(email);

    if (user) {
      throw new BadRequestError('Select another email');
    }

    const hashedPassword = await hashPassword(password);

    const registeredUser = {
      first_name,
      last_name,
      email,
      password: hashedPassword,
    };

    const id = await Repository.user.createUser(registeredUser);

    const token = await Auth.login({
      email: data.email,
      password: data.password,
    });

    return { id, token };
  }
}
