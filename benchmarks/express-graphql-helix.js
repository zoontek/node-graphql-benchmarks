"use strict";

const {
  getGraphQLParameters,
  processRequest,
  sendResult,
} = require("graphql-helix");
const { graphqlUploadExpress } = require("graphql-upload");
const express = require("express");
const { createSchema } = require("../lib/schema");

const app = express();
const schema = createSchema();

app.use(express.json());

app.use("/graphql", graphqlUploadExpress(), async (req, res) => {
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

  sendResult(result, res);
});

app.listen(4001);
