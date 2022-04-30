import type { Affiliate, CreateAffiliateInput, CreateUserInput } from 'types/graphql';

export interface CreateOrganizationInput {
  affiliate: CreateAffiliateInput;
  user: CreateUserInput;
}

export interface CreateOrganizationOutput {
  organization: Organization;
  token: string;
}

export interface Organization {
  id: string;
  affiliates: Affiliate[];
}
