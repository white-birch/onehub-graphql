import type { Context } from '../types';

const affiliate = async (parent: undefined, args: Record<string, never>, context: Context) => {
  return { id: 1, name: 'foo' };
};

export default { Query: { affiliate } };
