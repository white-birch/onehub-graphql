import { setToken } from '../../utils/token';

import type { Context } from 'server/context';
import type { CreatePortalInput, CreatePortalOutput, Portal } from 'types/graphql';

// TODO: This should be moved to users.resolvers.ts as a "sign up" operation
const createPortal = async (parent: undefined, { input }: { input: CreatePortalInput }, context: Context): Promise<CreatePortalOutput> => {
  const { token } = await context.dataSources.usersApi.signUp(input.user);
  setToken(token, context);

  const portal = await context.dataSources.portalsApi.createPortal();
  await context.dataSources.affiliatesApi.createAffiliate({ ...input.affiliate, portalId: portal.id });

  return { portal, token };
};

const affiliates = async (parent: Portal, args: undefined, context: Context): Promise<Portal['affiliates']> => {
  return context.dataSources.portalsApi.getPortalAffiliates(parent.id);
};

export default {
  Mutation: { createPortal },
  Portal: { affiliates },
};
