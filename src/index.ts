import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { ApolloServer } from 'apollo-server-cloud-functions';
import path from 'path';
import { v4 as uuid } from 'uuid';
import dataSources from './dataSources';

const resolversArray = loadFilesSync(path.join(__dirname, '/resolvers/**'));
const typesArray = loadFilesSync(path.join(__dirname, '/**/*.graphql'));

const server = new ApolloServer({
  context: ({ req }) => ({
    traceId: req.headers['X-ONEHUB-TRACE-ID'] || uuid(),
  }),
  dataSources,
  resolvers: mergeResolvers(resolversArray),
  typeDefs: mergeTypeDefs(typesArray),
});

exports.onehub = server.createHandler();
