import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit } from 'apollo-server-env';
import type { Affiliate, CreateAffiliateInput } from './affiliates.types';

class AffiliatesApi extends _OneHubApi {
  async addAffiliateToPortal(affiliateId: string, portalId: string): Promise<void> {
    return this.put(`/affiliates/${affiliateId}/portal/${portalId}`);
  }

  async createAffiliate(data: CreateAffiliateInput, portalId: string, options?: RequestInit): Promise<Affiliate> {
    const params = new URLSearchParams({ portalId });
    const path = `/affiliates?${params}`;
    return this.post(path, data, options);
  }

  async getAffiliateUsers(affiliateId: string): Promise<Affiliate['users']> {
    return this.get(`/affiliates/${affiliateId}/users`);
  }
}

export default AffiliatesApi;
