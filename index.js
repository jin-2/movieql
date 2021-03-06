import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
    typeDefs: "./graphql/schema.graphql", //  모든 type들에 대한 정의
    resolvers
});

server.start(()=>console.log("Server is running"));