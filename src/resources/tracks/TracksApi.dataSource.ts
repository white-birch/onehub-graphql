import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit } from 'apollo-server-env';
import type { Track, CreateTrackInput } from './tracks.types';

class TracksApi extends _OneHubApi {
  async createTrack(data: CreateTrackInput, options?: RequestInit): Promise<Track> {
    return this.post('/tracks', data, options);
  }
}

export default TracksApi;
