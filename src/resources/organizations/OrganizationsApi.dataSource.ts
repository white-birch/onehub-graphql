import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit } from 'apollo-server-env';
import type { Organization } from 'types/graphql';

class OrganizationsApi extends _OneHubApi {
  async createOrganization(options?: RequestInit): Promise<Organization> {
    return this.post('/organizations', undefined, options);
  }
}

export default OrganizationsApi;
