import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit } from 'apollo-server-env';
import type { Affiliate, CreateAffiliateInput } from './affiliates.types';

class AffiliatesApi extends _OneHubApi {
  async createAffiliate(data: CreateAffiliateInput & { portalId: string }, options?: RequestInit): Promise<Affiliate> {
    return this.post('/affiliates', data, options);
  }

  async getAffiliateUsers(affiliateId: string): Promise<Affiliate['users']> {
    return this.get(`/affiliates/${affiliateId}/users`);
  }
}

export default AffiliatesApi;
