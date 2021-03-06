import { v4 as uuid } from 'uuid';
import AffiliatesApi from 'resources/affiliates/AffiliatesApi.dataSource';
import InvitesApi from 'resources/invites/InvitesApi.dataSource';
import OrganizationsApi from '../resources/organizations/OrganizationsApi.dataSource';
import UsersApi from '../resources/users/UsersApi.dataSource';
import { getToken } from '../utils/token';

import type { Config, ExpressContext } from 'apollo-server-express';
import type { Request, Response } from 'express';

export interface Context {
  req: Request;
  res: Response;
  token?: string;
  traceId: string;
  dataSources: {
    affiliatesApi: AffiliatesApi;
    invitesApi: InvitesApi;
    organizationsApi: OrganizationsApi;
    usersApi: UsersApi;
  };
}

const getContext: Config<ExpressContext>['context'] = ({ req, res }) => {
  const token = getToken({ req } as Context);
  const traceId = req.headers['x-onehub-trace-id'] || uuid();
  return { token, traceId, req, res };
};

export default getContext;
