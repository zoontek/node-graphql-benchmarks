const graphqlHTTP = require('express-graphql');
const { createGraphqlComposeSchema } = require('../lib/schemas/createGraphqlCompose');
const { graphqlUploadExpress } = require('graphql-upload');
const express = require('express');

const app = express();
const schema = createGraphqlComposeSchema();
app.use(
  '/graphql',
  graphqlUploadExpress(),
  graphqlHTTP({
    schema
  })
);
app.listen(4001);
