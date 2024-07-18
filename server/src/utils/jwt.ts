import jwt, { type JwtPayload } from 'jsonwebtoken';
import { UnauthorizedError } from './errorHandler';

export class Jwt {
  static createToken(payload: object): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, process.env.JWT_PRIVATE_KEY, (error, token: string) => {
        if (error) {
          reject(error);
        } else {
          resolve(token);
        }
      });
    });
  }

  static verifyToken(token: string): JwtPayload {
    try {
      const userToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      return userToken as JwtPayload;
    } catch (_error) {
      throw new UnauthorizedError('INVALID_TOKEN');
    }
  }
}
