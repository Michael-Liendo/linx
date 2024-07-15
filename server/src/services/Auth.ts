import { User } from '../repository/User';
import { hashPassword } from '../utils/password';
import Repository from '../repository';
import { BadRequestError } from '../utils/errorHandler';

import type { IUserForLogin, IUserForRegister } from '@linx/shared';

export default class Auth {
  // biome-ignore lint/correctness/noUnusedVariables: todo: remove this
  static async login(data: IUserForLogin) {
    //  todo: implement login
  }

  static async register(data: IUserForRegister) {
    const { first_name, last_name, email, password } = data;

    const user = await User.getUserByEmail(email);

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

    return id;
  }
}
