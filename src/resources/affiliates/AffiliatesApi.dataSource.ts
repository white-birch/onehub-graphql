import _OneHubApi from '../../utils/_OneHubApi';

import type { Affiliate, CreateAffiliateInput } from 'types/graphql';

class AffiliatesApi extends _OneHubApi {
  async createAffiliate(input: CreateAffiliateInput) {
    return this.post('/affiliates', input);
  }

  async getAffiliates(organizationId: string): Promise<Affiliate[]> {
    return this.get('/affiliates', { organizationId });
  }
}

export default AffiliatesApi;
