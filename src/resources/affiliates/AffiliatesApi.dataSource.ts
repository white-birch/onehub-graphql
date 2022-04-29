import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit } from 'apollo-server-env';
import type { Affiliate, CreateAffiliateInput, User } from 'types/graphql';

class AffiliatesApi extends _OneHubApi {
  async createAffiliate(data: CreateAffiliateInput & { portalId: string }, options?: RequestInit): Promise<Affiliate> {
    return this.post('/affiliates', data, options);
  }

  async getAffiliateUsers(affiliateId: string): Promise<User[]> {
    return this.get(`/affiliates/${affiliateId}/users`);
  }
}

export default AffiliatesApi;
