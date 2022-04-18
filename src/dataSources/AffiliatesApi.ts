import { Affiliate, CreateAffiliateInput } from 'resolvers/affiliates.types';
import _OneHubApi from './_OneHubApi';

class AffiliatesApi extends _OneHubApi {
  async addAffiliateToPortal(affiliateId: string, portalId: string): Promise<void> {
    return this.put(`/affiliates/${affiliateId}/portal/${portalId}`);
  }

  async createAffiliate(data: CreateAffiliateInput): Promise<Affiliate> {
    return this.post('/affiliates', data);
  }

  async getAffiliate(): Promise<Affiliate> {
    return this.get(`/affiliates`);
  }
}

export default AffiliatesApi;
