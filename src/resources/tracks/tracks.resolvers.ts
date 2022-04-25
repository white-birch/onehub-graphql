import type { Context } from '../../context.types';
import type { CreateTrackInput, Track } from './tracks.types';

const createTrack = async (parent: undefined, { input }: { input: CreateTrackInput }, context: Context): Promise<Track> => {
  return context.dataSources.tracksApi.createTrack(input);
};

export default {
  Mutation: { createTrack },
};
