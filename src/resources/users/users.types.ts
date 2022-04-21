import type { AffiliateRole } from 'types';

export interface CreateUserInput {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  affiliateUserRoles: AffiliateRole[];
}
