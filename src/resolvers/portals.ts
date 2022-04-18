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

const affiliate = async (parent: Portal, args: undefined, context: Context): Promise<Portal['affiliate']> => {
  const [affiliate] = await context.dataSources.portalsApi.getPortalAffiliates(parent.id);
  return affiliate;
};

export default {
  Query: { portals },
  Mutation: { createPortal },
  Portal: { affiliate },
};
