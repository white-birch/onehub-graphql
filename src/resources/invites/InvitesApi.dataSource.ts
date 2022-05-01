import _OneHubApi from '../../utils/_OneHubApi';

import type { RequestInit, URLSearchParamsInit } from 'apollo-server-env';
import type { Invite } from 'types/graphql';

class InvitesApi extends _OneHubApi {
  async acceptInvite(code: string, body?: Body | undefined, init?: RequestInit | undefined): Promise<Invite> {
    return this.put(`/invites/${encodeURIComponent(code)}/accept`, body, init);
  }

  async getInvite(code: string, params?: URLSearchParamsInit | undefined, options?: RequestInit): Promise<Invite> {
    return this.get(`/invites/${encodeURIComponent(code)}`, params, options);
  }
}

export default InvitesApi;
