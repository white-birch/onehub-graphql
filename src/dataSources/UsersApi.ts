import { CreateUserInput, User } from 'resolvers/users.types';
import _OneHubApi from './_OneHubApi';

class UsersApi extends _OneHubApi {
  async addUserToAffiliate(userId: string, affiliateId: string): Promise<void> {
    return this.put(`/users/${userId}/affiliate/${affiliateId}`);
  }

  async createUser(data: CreateUserInput): Promise<User> {
    return this.post('/users', data);
  }
}

export default UsersApi;
