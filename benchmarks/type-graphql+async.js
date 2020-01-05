const graphqlHTTP = require("express-graphql");
const {
  createAsyncTypeGraphQLSchema
} = require("../lib/schemas/createTypeGraphQLSchema");
const { graphqlUploadExpress } = require("graphql-upload");
const express = require("express");

const app = express();
createAsyncTypeGraphQLSchema().then(schema => {
  app.use(
    "/graphql",
    graphqlUploadExpress(),
    graphqlHTTP({
      schema
    })
  );
  app.listen(4001);
});
