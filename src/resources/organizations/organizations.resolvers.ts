import type { Context } from 'server/context';
import type { OrganizationResolvers } from 'types/graphql';

const affiliates: OrganizationResolvers<Context>['affiliates'] = async (parent, args, context) => {
  return context.dataSources.organizationsApi.getOrganizationAffiliates(parent.id);
};

export default {
  Organization: { affiliates },
};
