import type { Context } from 'server/context';
import type { MutationResolvers } from 'types/graphql';

const createTrack: MutationResolvers<Context>['createTrack'] = async (parent, { input }, context) => {
  return context.dataSources.tracksApi.createTrack(input);
};

export default {
  Mutation: { createTrack },
};
