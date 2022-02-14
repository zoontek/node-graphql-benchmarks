"use strict";

const {
  getGraphQLParameters,
  processRequest,
  sendResult,
} = require("graphql-helix");
const fastify = require("fastify");
const { createSchema } = require("../lib/schema");

const app = fastify();
const schema = createSchema();

app.post("/graphql", async (req, res) => {
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
  });

  sendResult(result, res.raw);
});

app.listen(4001);
