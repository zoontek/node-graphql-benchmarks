const graphqlHTTP = require("express-graphql");
const {
  createAsyncMiddlewareTypeGraphQLSchema
} = require("../lib/schemas/createTypeGraphQLSchema");
const { graphqlUploadExpress } = require("graphql-upload");
const express = require("express");

const app = express();
createAsyncMiddlewareTypeGraphQLSchema().then(schema => {
  app.use(
    "/graphql",
    graphqlUploadExpress(),
    graphqlHTTP({
      schema
    })
  );
  app.listen(4001);
});
