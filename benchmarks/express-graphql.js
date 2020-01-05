const graphqlHTTP = require("express-graphql");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const express = require("express");

const app = express();
const schema = createApolloSchema();
app.use(
  "/graphql",
  graphqlHTTP({
    schema
  })
);
app.listen(4001);
