import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { ApolloServer } from 'apollo-server-cloud-functions';
import path from 'path';
import context from './context';
import dataSources from './dataSources';

const resolversArray = loadFilesSync(path.join(__dirname, '/**/*.resolvers.*'));
const typesArray = loadFilesSync(path.join(__dirname, '/**/*.graphql'));

const server = new ApolloServer({
  context,
  dataSources,
  debug: false,
  resolvers: mergeResolvers(resolversArray),
  typeDefs: mergeTypeDefs(typesArray),
});

exports.onehub = server.createHandler();
