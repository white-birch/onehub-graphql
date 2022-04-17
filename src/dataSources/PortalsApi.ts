import _OneHubApi from './_OneHubApi';

class PortalsApi extends _OneHubApi {
  async createPortal() {
    return this.post('/portals');
  }

  async getPortals() {
    return this.get('/portals');
  }
}

export default PortalsApi;
