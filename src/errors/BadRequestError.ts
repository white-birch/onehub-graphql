import { ApolloError } from 'apollo-server-cloud-functions';

class BadRequestError extends ApolloError {
  errors?: string[];

  constructor(message: string, errors?: string[]) {
    super(message, 'BAD_REQUEST');
    this.errors = errors;
    Object.defineProperty(this, 'name', { value: 'BadRequestError' });
    Error.captureStackTrace(this, this.constructor);
  }
}

export default BadRequestError;
