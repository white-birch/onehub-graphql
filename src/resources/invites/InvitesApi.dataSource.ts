import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit, URLSearchParamsInit } from 'apollo-server-env';
import type { Invite } from 'types/graphql';

class InvitesApi extends _OneHubApi {
  async getInvite(code: string, params?: URLSearchParamsInit | undefined, options?: RequestInit): Promise<Invite> {
    return this.get(`/invites/${encodeURIComponent(code)}`, params, options);
  }
}

export default InvitesApi;
