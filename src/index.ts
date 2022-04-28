import cookieParser from 'cookie-parser';
import express from 'express';
import apolloServer from './server';

const app = express();
app.use(cookieParser());
app.use(apolloServer.createHandler());

exports.onehub = app;
