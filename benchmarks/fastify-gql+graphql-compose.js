const Fastify = require('fastify');
const GQL = require('fastify-gql');
const { createGraphqlComposeSchema } = require('../lib/schemas/createGraphqlCompose');

const schema = createGraphqlComposeSchema();

const app = Fastify();

app.register(GQL, {
  schema
});

app.listen(4001);
