import _OneHubApi from '../../utils/_OneHubApi';

import type { User } from 'types/graphql';

class UsersApi extends _OneHubApi {
  async signIn(email: string, password: string): Promise<{ token: string; user: User }> {
    return this.post('/auth/sign-in', { email, password });
  }

  async signUp(email: string, password: string): Promise<{ token: string; user: User }> {
    return this.post('/auth/sign-up', { email, password });
  }
}

export default UsersApi;
