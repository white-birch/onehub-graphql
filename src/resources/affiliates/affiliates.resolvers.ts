import type { Context } from 'server/context';
import type { MutationResolvers, QueryResolvers } from 'types/graphql';

const affiliates: QueryResolvers<Context>['affiliates'] = (parent, { organizationId }, context) => {
  return context.dataSources.affiliatesApi.getAffiliates(organizationId);
};

const createAffiliate: MutationResolvers<Context>['createAffiliate'] = (parent, { input }, context) => {
  return context.dataSources.affiliatesApi.createAffiliate(input);
};

const deleteAffiliate: MutationResolvers<Context>['deleteAffiliate'] = async (parent, { affiliateId }, context) => {
  await context.dataSources.affiliatesApi.deleteAffiliate(affiliateId);
  return true;
};

const updateAffiliate: MutationResolvers<Context>['updateAffiliate'] = async (parent, { affiliateId, input }, context) => {
  return context.dataSources.affiliatesApi.updateAffiliate(affiliateId, input);
};

export default {
  Mutation: { createAffiliate, deleteAffiliate, updateAffiliate },
  Query: { affiliates },
};
