"use strict";

const {
  getGraphQLParameters,
  processRequest,
  sendResult,
} = require("graphql-helix");
const { envelop, useSchema } = require("@envelop/core");
const { useGraphQlJit } = require("@envelop/graphql-jit");
const fastify = require("fastify");
const { createSchema } = require("../lib/schema");

const app = fastify();
const schema = createSchema();

const getEnveloped = envelop({
  plugins: [useSchema(schema), useGraphQlJit()],
});

app.post("/graphql", async (req, res) => {
  const { parse, validate, contextFactory, execute, schema } = getEnveloped({
    req,
  });

  const request = {
    body: req.body,
    headers: req.headers,
    method: req.method,
    query: req.query,
  };

  const { operationName, query, variables } = getGraphQLParameters(request);

  const result = await processRequest({
    operationName,
    query,
    variables,
    request,
    schema,
    parse,
    validate,
    execute,
    contextFactory,
  });

  sendResult(result, res.raw);
});

app.listen(4001);
