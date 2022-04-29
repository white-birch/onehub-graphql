import type { Context } from 'server/context';
import type { PortalResolvers } from 'types/graphql';

const affiliates: PortalResolvers<Context>['affiliates'] = async (parent, args, context) => {
  return context.dataSources.portalsApi.getPortalAffiliates(parent.id);
};

export default {
  Portal: { affiliates },
};
