import type { Context } from 'server/context';
import type { QueryResolvers } from 'types/graphql';

const affiliates: QueryResolvers<Context>['affiliates'] = (parent, args, context) => {
  return context.dataSources.affiliatesApi.getAffiliates(args.organizationId);
};

export default {
  Query: { affiliates },
};
