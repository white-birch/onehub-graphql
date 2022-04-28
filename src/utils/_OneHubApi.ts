import { Response, RESTDataSource } from 'apollo-datasource-rest';
import { isObject } from 'lodash';
import { BadRequestError, InternalServerError, NotFoundError, UnauthorizedError } from '../errors';
import logger from './logger';
import { getToken } from './token';

import type { RequestOptions } from 'apollo-datasource-rest';

const { ONEHUB_API_BASE_URL } = process.env;

if (!ONEHUB_API_BASE_URL) {
  throw new Error('Missing environment variable: ONEHUB_API_BASE_URL');
}

class _OneHubApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = ONEHUB_API_BASE_URL;
  }

  protected willSendRequest(request: RequestOptions) {
    request.headers.set('x-onehub-trace-id', this.context.traceId);
    request.headers.set('content-type', 'application/json');

    const token = getToken(this.context);
    if (token && !request.headers.has('Authorization')) {
      request.headers.set('authorization', `Bearer ${token}`);
    }

    request.body = JSON.stringify(request.body);
  }

  protected async errorFromResponse(response: Response) {
    const { status } = response;
    const body = (await this.parseBody(response)) as string | { message: string; errors: string[] };

    const isObjectBody = isObject(body);
    const message = isObjectBody ? body.message : body;
    const errors = isObjectBody ? body.errors : undefined;

    const log = status < 500 ? logger.warn : logger.error;
    log({ message: 'Error calling OneHub API', status, body });

    switch (status) {
      case 400:
        return new BadRequestError(message, errors);
      case 401:
        return new UnauthorizedError(message);
      case 404:
        return new NotFoundError(message);
      default:
        return new InternalServerError(message);
    }
  }
}

export default _OneHubApi;
