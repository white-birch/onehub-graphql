import jwt from 'jsonwebtoken';
import { setToken } from '../../utils/token';

import type { Context } from 'server/context';

const signIn = async (parent: undefined, { email, password }: { email: string; password: string }, context: Context): Promise<string> => {
  const { token } = await context.dataSources.usersApi.signIn(email, password);
  setToken(token, context);
  return token;
};

const me = (parent: undefined, args: undefined, context: Context) => {
  return jwt.decode(context.token);
};

export default {
  Mutation: { signIn },
  Query: { me },
};
