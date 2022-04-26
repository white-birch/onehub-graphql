import { ApolloError } from 'apollo-server-cloud-functions';

class InternalServerError extends ApolloError {
  errors?: string[];

  constructor(message: string) {
    super(message, 'INTERNAL_SERVER_ERROR');
    Object.defineProperty(this, 'name', { value: 'InternalServerError' });
    Error.captureStackTrace(this, this.constructor);
  }
}

export default InternalServerError;
