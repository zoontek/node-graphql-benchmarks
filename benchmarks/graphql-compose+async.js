const graphqlHTTP = require('express-graphql');
const { createAsyncGraphqlComposeSchema } = require('../lib/schemas/createGraphqlCompose');
const { graphqlUploadExpress } = require('graphql-upload');
const express = require('express');

const app = express();
const schema = createAsyncGraphqlComposeSchema();
app.use(
  '/graphql',
  graphqlUploadExpress(),
  graphqlHTTP({
    schema
  })
);
app.listen(4001);
