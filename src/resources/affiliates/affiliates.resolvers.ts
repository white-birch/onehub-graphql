import type { Context } from 'server/context';
import type { MutationResolvers, QueryResolvers } from 'types/graphql';

const affiliates: QueryResolvers<Context>['affiliates'] = (parent, args, context) => {
  return context.dataSources.affiliatesApi.getAffiliates(args.organizationId);
};

const createAffiliate: MutationResolvers<Context>['createAffiliate'] = (parent, { input }, context) => {
  return context.dataSources.affiliatesApi.createAffiliate(input);
};

export default {
  Mutation: { createAffiliate },
  Query: { affiliates },
};
