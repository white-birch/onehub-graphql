import { Affiliate, CreateAffiliateInput } from './affiliates.types';
import { CreateUserInput, User } from './users.types';

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
  users: User[];
}
