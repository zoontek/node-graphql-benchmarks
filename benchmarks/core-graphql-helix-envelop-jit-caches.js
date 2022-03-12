"use strict";

const {
  getGraphQLParameters,
  processRequest,
  sendResult,
} = require("graphql-helix");
const { envelop, useSchema } = require("@envelop/core");
const { useGraphQlJit } = require("@envelop/graphql-jit");
const { useParserCache } = require("@envelop/parser-cache");
const { useResponseCache } = require("@envelop/response-cache");
const { useValidationCache } = require("@envelop/validation-cache");
const { createServer } = require("http");
const { URL, URLSearchParams } = require("url");
const { createSchema } = require("../lib/schema");

const schema = createSchema();

const getEnveloped = envelop({
  plugins: [
    useSchema(schema),
    useGraphQlJit(),
    useParserCache(),
    useResponseCache(),
    useValidationCache(),
  ],
});

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const searchParams = new URLSearchParams(url.search);

  const { parse, validate, contextFactory, execute, schema } = getEnveloped({
    req,
  });

  let payload = "";

  req.on("data", (chunk) => {
    payload += chunk.toString();
  });

  req.on("end", async () => {
    const request = {
      body: JSON.parse(payload || "{}"),
      headers: req.headers,
      method: req.method,
      query: Object.fromEntries(searchParams),
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

    sendResult(result, res);
  });
});

server.listen(4001);
