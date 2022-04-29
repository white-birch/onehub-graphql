import type { Context } from 'server/context';
import type { AffiliateResolvers } from 'types/graphql';

const users: AffiliateResolvers<Context>['users'] = async (parent, args, context) => {
  return context.dataSources.affiliatesApi.getAffiliateUsers(parent.id);
};

export default {
  Affiliate: { users },
};
