import type { Context } from 'server/context';
import type { Affiliate } from 'types/graphql';

const users = async (parent: Affiliate, args: undefined, context: Context): Promise<Affiliate['users']> => {
  return context.dataSources.affiliatesApi.getAffiliateUsers(parent.id);
};

export default {
  Affiliate: { users },
};
