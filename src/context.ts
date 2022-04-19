import { v4 as uuid } from 'uuid';

import type { Config, ExpressContext } from 'apollo-server-express';

const getContext: Config<ExpressContext>['context'] = ({ req }) => {
  const traceId = req.headers['x-onehub-trace-id'] || uuid();
  return { traceId };
};

export default getContext;
