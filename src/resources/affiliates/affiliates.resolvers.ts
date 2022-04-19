import { Affiliate } from './affiliates.types';

import type { Context } from '../../context.types';

const users = async (parent: Affiliate, args: undefined, context: Context): Promise<Affiliate['users']> => {
  return context.dataSources.affiliatesApi.getAffiliateUsers(parent.id);
};

export default {
  Affiliate: { users },
};
