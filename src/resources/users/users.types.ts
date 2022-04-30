import type { AffiliateRole, OrganizationRole } from 'types/graphql';

export interface CreateUserInput {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  affiliateUserRoles: AffiliateRole[];
  organizationUserRoles: OrganizationRole[];
}
