import Repository from '../repository/index.js';
import { BadRequestError, UnauthorizedError } from '../utils/errorHandler.js';
import { comparePassword, hashPassword } from '../utils/password.js';

import type { IUser, IUserForLogin, IUserForRegister } from '@linx/shared';
import { Jwt } from '../utils/jwt.js';

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
