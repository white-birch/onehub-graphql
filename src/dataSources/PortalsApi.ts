import _OneHubApi from './_OneHubApi';

class PortalsApi extends _OneHubApi {
  async createPortal() {
    return this.post('/portals');
  }

  async getPortals() {
    return this.get('/portals');
  }

  async getPortalAffiliates(portalId: number) {
    return this.get(`/portals/${portalId}/affiliates`);
  }
}

export default PortalsApi;
