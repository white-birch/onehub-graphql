import _OneHubApi from '../../utils/_OneHubApi';

import type { Affiliate, CreateAffiliateInput, UpdateAffiliateInput } from 'types/graphql';

class AffiliatesApi extends _OneHubApi {
  async createAffiliate(input: CreateAffiliateInput) {
    return this.post('/affiliates', input);
  }

  async deleteAffiliate(affiliateId: string) {
    return this.delete(`/affiliates/${affiliateId}`);
  }

  async getAffiliates(organizationId: string): Promise<Affiliate[]> {
    return this.get('/affiliates', { organizationId });
  }

  async updateAffiliate(affiliateId: string, input: UpdateAffiliateInput) {
    return this.put(`/affiliates/${affiliateId}`, input);
  }
}

export default AffiliatesApi;
