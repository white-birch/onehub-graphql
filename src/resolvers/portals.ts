import type { CreatePortalInput, Portal } from './portals.types';

const createPortal = async (parent: undefined, { input }: { input: CreatePortalInput }, context: Context): Promise<Portal> => {
  const [portal, affiliate] = await Promise.all([
    context.dataSources.portalsApi.createPortal(),
    context.dataSources.affiliatesApi.createAffiliate(input.affiliate),
  ]);

  await context.dataSources.affiliatesApi.addAffiliateToPortal(affiliate.id, portal.id);

  return { ...portal, affiliate };
};

const portals = async (parent: undefined, args: Record<string, never>, context: Context) => {
  return context.dataSources.portalsApi.getPortals();
};

const Query = { portals };

const Mutation = { createPortal };

export default { Query, Mutation };
