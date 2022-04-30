import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit } from 'apollo-server-env';
import type { Affiliate, Organization } from 'types/graphql';

class OrganizationsApi extends _OneHubApi {
  async createOrganization(options?: RequestInit): Promise<Organization> {
    return this.post('/organizations', undefined, options);
  }

  async getOrganizationAffiliates(organizationId: string): Promise<Affiliate[]> {
    return this.get(`/organizations/${organizationId}/affiliates`);
  }
}

export default OrganizationsApi;
