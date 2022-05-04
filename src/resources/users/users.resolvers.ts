import { decode, deleteToken, getToken, setToken } from '../../utils/token';

import type { Context } from 'server/context';
import type { MutationResolvers, QueryResolvers } from 'types/graphql';

const signIn: MutationResolvers<Context>['signIn'] = async (parent, { email, password }, context) => {
  const { token } = await context.dataSources.usersApi.signIn(email, password);
  setToken(token, context);
  return { token };
};

const signOut: MutationResolvers<Context>['signOut'] = (parent, args, context) => {
  deleteToken(context);
  return true;
};

const signUp: MutationResolvers<Context>['signUp'] = async (parent, { email, password, options }, context) => {
  if (options.inviteCode) {
    await context.dataSources.invitesApi.getInvite(options.inviteCode);
  }

  const { token } = await context.dataSources.usersApi.signUp(email, password);
  setToken(token, context);

  if (options.createOrganization) {
    await context.dataSources.organizationsApi.createOrganization();
  }

  if (options.inviteCode) {
    await context.dataSources.invitesApi.acceptInvite(options.inviteCode);
  }

  return { token };
};

const me: QueryResolvers<Context>['me'] = (parent, args, context) => {
  const token = getToken(context);
  if (!token) return null;

  const payload = decode<{ userId: string }>(token);
  return { token, ...payload };
};

export default {
  Mutation: { signIn, signOut, signUp },
  Query: { me },
};
