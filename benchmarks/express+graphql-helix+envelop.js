"use strict";

const {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  sendResult,
  shouldRenderGraphiQL,
} = require("graphql-helix");
const { envelop, useSchema } = require("@envelop/core");
const { graphqlUploadExpress } = require("graphql-upload");
const express = require("express");
const { createSchema } = require("../lib/schema");

const app = express();
const schema = createSchema();

app.use(express.json());

const getEnveloped = envelop({
  plugins: [useSchema(schema)],
});

app.use("/graphql", graphqlUploadExpress(), async (req, res) => {
  const { parse, validate, contextFactory, execute, schema } = getEnveloped({
    req,
  });

  const request = {
    body: req.body,
    headers: req.headers,
    method: req.method,
    query: req.query,
  };

  if (shouldRenderGraphiQL(request)) {
    res.type("text/html");
    res.send(renderGraphiQL());
  } else {
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

    sendResult(result, res);
  }
});

app.listen(4001);
