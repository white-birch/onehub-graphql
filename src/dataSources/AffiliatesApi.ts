import { CreateAffiliateInput } from 'resolvers/affiliates.types';
import _OneHubApi from './_OneHubApi';

class AffiliatesApi extends _OneHubApi {
  async addAffiliateToPortal(affiliateId: string, portalId: string) {
    return this.put(`/affiliates/${affiliateId}/portal/${portalId}`);
  }

  async createAffiliate(data: CreateAffiliateInput) {
    return this.post('/affiliates', data);
  }

  async getAffiliate() {
    return this.get(`/affiliates`);
  }
}

export default AffiliatesApi;
