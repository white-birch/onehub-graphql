import type { Context } from 'types/context';
import type { CreateTrackInput, Track } from 'types/graphql';

const createTrack = async (parent: undefined, { input }: { input: CreateTrackInput }, context: Context): Promise<Track> => {
  return context.dataSources.tracksApi.createTrack(input);
};

export default {
  Mutation: { createTrack },
};
