const express = require("express");
const { Benzene, httpHandler } = require("@benzene/server");
const { graphqlUploadExpress } = require("graphql-upload");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const GQL = new Benzene({ schema });

const app = express();
app.post(
  "/graphql",
  graphqlUploadExpress(),
  httpHandler(GQL, {
    onNoMatch: (req, res, next) => next(),
  }),
);
app.listen(4001);
