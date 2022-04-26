import type { Affiliate, CreateAffiliateInput, CreateUserInput } from 'types/graphql';

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
