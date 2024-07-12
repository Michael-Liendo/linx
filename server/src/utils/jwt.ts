import jwt from 'jsonwebtoken';
import { UnauthorizedError } from './errorHandler';

export class Jwt {
  static createToken(payload: string) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, process.env.JWT_PRIVATE_KEY, (error, token) => {
        if (error) {
          reject('error when creating token');
        } else {
          resolve(token);
        }
      });
    });
  }

  static verifyToken(token: string) {
    try {
      const userToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      return userToken;
    } catch (_error) {
      throw new UnauthorizedError('INVALID_TOKEN');
    }
  }
}
