import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit } from 'apollo-server-env';
import type { Affiliate, Portal } from 'types/graphql';

class PortalsApi extends _OneHubApi {
  async createPortal(options?: RequestInit): Promise<Portal> {
    return this.post('/portals', undefined, options);
  }

  async getPortalAffiliates(portalId: string): Promise<Affiliate[]> {
    return this.get(`/portals/${portalId}/affiliates`);
  }
}

export default PortalsApi;
