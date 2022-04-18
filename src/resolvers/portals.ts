import type { Context } from '../types';
import type { CreatePortalInput, Portal } from './portals.types';

const createPortal = async (parent: undefined, { input }: { input: CreatePortalInput }, context: Context): Promise<Portal> => {
  const [portal, affiliate, user] = await Promise.all([
    context.dataSources.portalsApi.createPortal(),
    context.dataSources.affiliatesApi.createAffiliate(input.affiliate),
    context.dataSources.usersApi.createUser(input.user),
  ]);

  await Promise.all([
    context.dataSources.affiliatesApi.addAffiliateToPortal(affiliate.id, portal.id),
    context.dataSources.usersApi.addUserToAffiliate(user.id, affiliate.id),
  ]);

  return portal;
};

const portals = async (parent: undefined, args: Record<string, never>, context: Context): Promise<Portal[]> => {
  return context.dataSources.portalsApi.getPortals();
};

const affiliates = async (parent: Portal, args: undefined, context: Context): Promise<Portal['affiliates']> => {
  return context.dataSources.portalsApi.getPortalAffiliates(parent.id);
};

const users = async (parent: Portal, args: undefined, context: Context): Promise<Portal['users']> => {
  return context.dataSources.portalsApi.getPortalUsers(parent.id);
};

export default {
  Query: { portals },
  Mutation: { createPortal },
  Portal: { affiliates, users },
};
