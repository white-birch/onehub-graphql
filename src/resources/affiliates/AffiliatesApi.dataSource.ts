import _OneHubApi from '../../utils/_OneHubApi';

import type { Affiliate } from 'types/graphql';

class AffiliatesApi extends _OneHubApi {
  async getAffiliates(organizationId: string): Promise<Affiliate[]> {
    return this.get('/affiliates', { organizationId });
  }
}

export default AffiliatesApi;
