import Cryptr from 'cryptr';
import jwt from 'jsonwebtoken';
import logger from './logger';

import type { Context } from 'server/context';

const { TOKEN_SECRET } = process.env;

if (!TOKEN_SECRET) {
  throw new Error('Missing environment variable: TOKEN_SECRET');
}

const COOKIE_OPTIONS = Object.freeze({ httpOnly: true, secure: process.env.NODE_ENV === 'production' });

const cryptr = new Cryptr(TOKEN_SECRET);

export const decode = <T>(token: string): T => jwt.decode(token) as T;

export const deleteToken = (context: Context) => {
  context.token = undefined;
  context.res.clearCookie('token', COOKIE_OPTIONS);
};

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
  context.res.cookie('token', cryptr.encrypt(token), COOKIE_OPTIONS);
};
