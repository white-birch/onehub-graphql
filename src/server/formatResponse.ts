import { Config } from 'apollo-server-cloud-functions';
import { ExpressContext } from 'apollo-server-express';
import { GraphQLResponse } from 'apollo-server-types';
import { get } from 'lodash';
import logger from '../utils/logger';

const formatResponse: Config<ExpressContext>['formatResponse'] = (response) => {
  if (!response.errors) return response;

  const errors = response.errors.map((error) => {
    const code = error.extensions?.code || 'INTERNAL_SERVER_ERROR';
    const errors = get(error, 'extensions.exception.errors');
    return { code, errors };
  });

  logger.error({ message: 'Returning error(s) in response', errors: { raw: response.errors, normalized: errors } });

  return { ...response, errors } as unknown as GraphQLResponse;
};

export default formatResponse;
