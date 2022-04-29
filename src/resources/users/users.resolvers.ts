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
  const { token } = await context.dataSources.usersApi.signUp(email, password);
  setToken(token, context);

  if (options.createPortal) {
    await context.dataSources.portalsApi.createPortal();
  }

  if (options.inviteCode) {
    // ! Maybe this should be an "all-in-one" operation on the /invites api... an operation to "accept" an invite and get added to whatever the user needs to get added to...

    // TODO: convert invite code to portal/affiliate
    const invite = await context.dataSources.invitesApi.getInvite(options.inviteCode);

    // TODO: if invite.code === 'PORTAL'
    // ? Associate user to portal.
    // ? Associate user to all portal affiliates (with a member role).

    // TODO: if invite.code === 'AFFILIATE'
    // ? Associate user to affiliate (with member role).
    // ? Associate user to affiliate's portal.
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
