import _OneHubApi from '../../utils/_OneHubApi';

import type { CreateUserInput, User } from './users.types';

class UsersApi extends _OneHubApi {
  async signUp(data: CreateUserInput): Promise<{ token: string; user: User }> {
    return this.post('/auth/sign-up', data);
  }
}

export default UsersApi;
