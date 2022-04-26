import { ApolloError } from 'apollo-server-cloud-functions';

class NotFoundError extends ApolloError {
  errors?: string[];

  constructor(message: string) {
    super(message, 'NOT_FOUND');
    Object.defineProperty(this, 'name', { value: 'NotFoundError' });
    Error.captureStackTrace(this, this.constructor);
  }
}

export default NotFoundError;
