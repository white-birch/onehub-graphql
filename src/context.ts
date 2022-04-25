import { v4 as uuid } from 'uuid';

import type { Config, ExpressContext } from 'apollo-server-express';

const getToken = (req: ExpressContext['req']): string | undefined => req.headers.authorization?.split(' ')[1];

const getContext: Config<ExpressContext>['context'] = ({ req }) => {
  const token = getToken(req);
  const traceId = req.headers['x-onehub-trace-id'] || uuid();
  return { token, traceId };
};

export default getContext;
