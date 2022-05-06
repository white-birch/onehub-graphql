import { decode, deleteToken, getToken, setToken } from '../../utils/token';

import type { Context } from 'server/context';
import type { Me, MutationResolvers, QueryResolvers } from 'types/graphql';

const signIn: MutationResolvers<Context>['signIn'] = async (parent, { email, password, organizationId }, context) => {
  const { token } = await context.dataSources.usersApi.signIn(email, password, organizationId);
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

  await context.dataSources.usersApi.signUp(email, password);

  const organization = options.createOrganization ? await context.dataSources.organizationsApi.createOrganization() : undefined;

  if (options.inviteCode) {
    await context.dataSources.invitesApi.acceptInvite(options.inviteCode);
  }

  const { token } = await context.dataSources.usersApi.signIn(email, password, organization?.id);
  setToken(token, context);

  return { token };
};

const me: QueryResolvers<Context>['me'] = async (parent, args, context) => {
  try {
    const token = getToken(context);
    if (!token) return null;

    return await context.dataSources.usersApi.me();
  } catch (error) {
    deleteToken(context);
    throw error;
  }
};

export default {
  Mutation: { signIn, signOut, signUp },
  Query: { me },
};
