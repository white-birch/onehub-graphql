import type { Context } from '../types';
import type { CreatePortalInput, CreatePortalOutput, Portal } from './portals.types';

const createPortal = async (parent: undefined, { input }: { input: CreatePortalInput }, context: Context): Promise<CreatePortalOutput> => {
  const { token } = await context.dataSources.usersApi.signUp(input.user);
  context.token = token;

  const portal = await context.dataSources.portalsApi.createPortal();
  await context.dataSources.affiliatesApi.createAffiliate(input.affiliate, portal.id);

  return { portal, token };
};

const portals = async (parent: undefined, args: Record<string, never>, context: Context): Promise<Portal[]> => {
  return context.dataSources.portalsApi.getPortals();
};

const affiliates = async (parent: Portal, args: undefined, context: Context): Promise<Portal['affiliates']> => {
  return context.dataSources.portalsApi.getPortalAffiliates(parent.id);
};

export default {
  Query: { portals },
  Mutation: { createPortal },
  Portal: { affiliates },
};
