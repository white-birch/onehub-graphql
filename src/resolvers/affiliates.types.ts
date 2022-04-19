import { User } from './users.types';

export interface CreateAffiliateInput {
  name: string;
  website?: string;
}

export interface Affiliate {
  id: string;
  name: string;
  website?: string;
  users: User[];
}
