import type { Context } from '../../context.types';
import type { CreatePortalInput, CreatePortalOutput, Portal } from './portals.types';

const createPortal = async (parent: undefined, { input }: { input: CreatePortalInput }, context: Context): Promise<CreatePortalOutput> => {
  const { token } = await context.dataSources.usersApi.signUp(input.user);
  context.token = token;

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
