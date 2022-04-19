import type { Context } from '../types';
import { Affiliate } from './affiliates.types';

const users = async (parent: Affiliate, args: undefined, context: Context): Promise<Affiliate['users']> => {
  return context.dataSources.affiliatesApi.getAffiliateUsers(parent.id);
};

export default {
  Affiliate: { users },
};
