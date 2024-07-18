import { StatusCodes } from 'http-status-codes';

export abstract class ErrorWithDetails extends Error {
  constructor(message?: string, public details?: unknown) {
    super(message);
  }
  abstract statusCode: StatusCodes;
}

export class BadRequestError extends ErrorWithDetails {
  statusCode = StatusCodes.BAD_REQUEST;
  details = 'You need add';
}
export class ConflictError extends ErrorWithDetails {
  statusCode = StatusCodes.CONFLICT;
}
export class ForbiddenError extends ErrorWithDetails {
  statusCode = StatusCodes.FORBIDDEN;
}
export class NotFoundError extends ErrorWithDetails {
  statusCode = StatusCodes.NOT_FOUND;
}
export class UnauthorizedError extends ErrorWithDetails {
  statusCode = StatusCodes.UNAUTHORIZED;
}
