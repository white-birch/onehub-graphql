import { Portal } from 'resolvers/portals.types';
import _OneHubApi from './_OneHubApi';

class PortalsApi extends _OneHubApi {
  async createPortal(): Promise<Portal> {
    return this.post('/portals');
  }

  async getPortals(): Promise<Portal[]> {
    return this.get('/portals');
  }

  async getPortalAffiliates(portalId: string): Promise<Portal['affiliates']> {
    return this.get(`/portals/${portalId}/affiliates`);
  }

  async getPortalUsers(portalId: string): Promise<Portal['users']> {
    return this.get(`/portals/${portalId}/users`);
  }
}

export default PortalsApi;
