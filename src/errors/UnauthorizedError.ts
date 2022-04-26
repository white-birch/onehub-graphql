import { ApolloError } from 'apollo-server-cloud-functions';

class UnauthorizedError extends ApolloError {
  errors?: string[];

  constructor(message: string) {
    super(message, 'UNAUTHORIZED');
    Object.defineProperty(this, 'name', { value: 'UnauthorizedError' });
    Error.captureStackTrace(this, this.constructor);
  }
}

export default UnauthorizedError;
