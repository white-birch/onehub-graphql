import { v4 as uuid } from 'uuid';

import type { Config, ExpressContext } from 'apollo-server-express';

const getContext: Config<ExpressContext>['context'] = ({ req }) => ({
  traceId: req.headers['X-ONEHUB-TRACE-ID'] || uuid(),
});

export default getContext;
