"use strict";

const bodyParser = require("body-parser");
const { createGraphqlMiddleware } = require("express-gql");
const express = require("express");
const { graphqlUploadExpress } = require("graphql-upload");
const { createSchema } = require("../lib/schema");

const schema = createSchema();

const app = express();

app.post(
  "/graphql",
  graphqlUploadExpress(),
  bodyParser.json(),
  createGraphqlMiddleware({
    context: () => ({}),
    formatError: ({ error }) => error,
    schema,
  }),
);
app.listen(4001);
