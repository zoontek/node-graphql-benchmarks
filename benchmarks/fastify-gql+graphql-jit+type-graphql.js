const Fastify = require("fastify");
const GQL = require("fastify-gql");
const {
  createTypeGraphQLSchema
} = require("../lib/schemas/createTypeGraphQLSchema");

const app = Fastify();

createTypeGraphQLSchema().then(schema => {
  app.register(GQL, {
    schema,
    jit: 1
  });
  app.listen(4001);
});