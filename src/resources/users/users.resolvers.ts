import { decode, deleteToken, getToken, setToken } from '../../utils/token';

import type { Context } from 'server/context';

const signIn = async (parent: undefined, { email, password }: { email: string; password: string }, context: Context) => {
  const { token } = await context.dataSources.usersApi.signIn(email, password);
  setToken(token, context);
  return { token };
};

const signOut = (parent: undefined, args: undefined, context: Context) => {
  deleteToken(context);
  return true;
};

const me = (parent: undefined, args: undefined, context: Context) => {
  const token = getToken(context);
  return token ? { token, ...decode(token) } : undefined;
};

export default {
  Mutation: { signIn, signOut },
  Query: { me },
};
