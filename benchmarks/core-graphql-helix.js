"use strict";

const {
  getGraphQLParameters,
  processRequest,
  sendResult,
} = require("graphql-helix");
const { createServer } = require("http");
const { URL, URLSearchParams } = require("url");
const { createSchema } = require("../lib/schema");

const schema = createSchema();

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const searchParams = new URLSearchParams(url.search);

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
    });

    sendResult(result, res);
  });
});

server.listen(4001);
