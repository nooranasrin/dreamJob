import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { readFile } from 'fs/promises';
import resolvers from './resolvers.js';

const typeDefs = await readFile('./src/schema.graphql', 'utf8');

const app = express();

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
apolloServer.applyMiddleware({ app, path: '/graphql' });

export default app;
