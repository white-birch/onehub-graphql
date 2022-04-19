import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit } from 'apollo-server-env';
import type { Portal } from './portals.types';

class PortalsApi extends _OneHubApi {
  async createPortal(options?: RequestInit): Promise<Portal> {
    return this.post('/portals', undefined, options);
  }

  async getPortals(): Promise<Portal[]> {
    return this.get('/portals');
  }

  async getPortalAffiliates(portalId: string): Promise<Portal['affiliates']> {
    return this.get(`/portals/${portalId}/affiliates`);
  }
}

export default PortalsApi;
