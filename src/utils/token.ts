import Cryptr from 'cryptr';

import type { Context } from 'server/context';
import logger from './logger';

const { TOKEN_SECRET } = process.env;

if (!TOKEN_SECRET) {
  throw new Error('Missing environment variable: TOKEN_SECRET');
}

const cryptr = new Cryptr(TOKEN_SECRET);

export const getToken = (context: Context) => {
  try {
    const contextToken = context.token;
    const bearerToken = context.req.headers.authorization?.split(' ')[1];
    const cookieToken = typeof context.req.cookies.token === 'string' ? cryptr.decrypt(context.req.cookies.token) : undefined;
    return contextToken ?? bearerToken ?? cookieToken;
  } catch (error) {
    logger.error({ message: 'Error getting token', error });
    return undefined;
  }
};

export const setToken = (token: string, context: Context) => {
  context.token = token;
  context.res.cookie('token', cryptr.encrypt(token), { httpOnly: true });
};
