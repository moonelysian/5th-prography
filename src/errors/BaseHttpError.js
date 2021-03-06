import { BaseError } from './BaseError';

export class BaseHttpError extends BaseError {
  constructor(message, httpCode) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, BaseHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
    this.message = message;
    this.httpCode = httpCode;
  }
}
