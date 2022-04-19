import _OneHubApi from './_OneHubApi';

import type { RequestInit } from 'apollo-server-env';
import type { Affiliate, CreateAffiliateInput } from 'resolvers/affiliates.types';

class AffiliatesApi extends _OneHubApi {
  async addAffiliateToPortal(affiliateId: string, portalId: string): Promise<void> {
    return this.put(`/affiliates/${affiliateId}/portal/${portalId}`);
  }

  async createAffiliate(data: CreateAffiliateInput, portalId: string, options?: RequestInit): Promise<Affiliate> {
    const params = new URLSearchParams({ portalId });
    const path = `/affiliates?${params}`;
    return this.post(path, data, options);
  }

  async getAffiliate(): Promise<Affiliate> {
    return this.get(`/affiliates`);
  }

  async getAffiliateUsers(affiliateId: string): Promise<Affiliate['users']> {
    return this.get(`/affiliates/${affiliateId}/users`);
  }
}

export default AffiliatesApi;
