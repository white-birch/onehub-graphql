import type { Context } from 'types/context';

const signIn = async (parent: undefined, { email, password }: { email: string; password: string }, context: Context): Promise<string> => {
  const { token } = await context.dataSources.usersApi.signIn(email, password);
  context.token = token;
  return token;
};

export default {
  Mutation: { signIn },
};
