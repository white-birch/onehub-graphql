import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit } from 'apollo-server-env';
import type { Role } from 'types';
import type { Affiliate, CreateAffiliateInput } from './affiliates.types';

interface AffinityUser {
  id: string;
  email: string;
  roles: {
    role: Role;
  }[];
}

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
    const users = (await this.get(`/affiliates/${affiliateId}/users`)) as AffinityUser[];

    return users.map((user) => ({
      id: user.id,
      email: user.email,
      roles: user.roles.map(({ role }) => role),
    }));
  }
}

export default AffiliatesApi;
