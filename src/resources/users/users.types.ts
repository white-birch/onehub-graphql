import type { AffiliateRole, PortalRole } from 'types/graphql';

export interface CreateUserInput {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  affiliateUserRoles: AffiliateRole[];
  portalUserRoles: PortalRole[];
}
