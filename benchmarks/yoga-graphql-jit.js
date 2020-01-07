const { GraphQLServer } = require("graphql-yoga");
const { compileQuery } = require("graphql-jit");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const cache = {};

const server = new GraphQLServer({
  schema,
  middlewares: [
    ({ source, context }) => {
      if (!(source in cache)) {
        const document = parse(source);
        cache[source] = compileQuery(schema, document);
      }
      return cache[source].query({}, context, {});
    }
  ]
});

server.start({ port: 4001, endpoint: "/graphql" });
