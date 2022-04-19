import type { Affiliate, CreateAffiliateInput } from '../affiliates/affiliates.types';
import type { CreateUserInput } from '../users/users.types';

export interface CreatePortalInput {
  affiliate: CreateAffiliateInput;
  user: CreateUserInput;
}

export interface CreatePortalOutput {
  portal: Portal;
  token: string;
}

export interface Portal {
  id: string;
  affiliates: Affiliate[];
}
