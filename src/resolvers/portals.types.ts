import { CreateAffiliateInput } from './affiliates.types';

export interface CreatePortalInput {
  affiliate: CreateAffiliateInput;
}

export interface Portal {
  id: number;
  affiliate: {
    id: number;
    name: string;
    website?: string;
  };
}
