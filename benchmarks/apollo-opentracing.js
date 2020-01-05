const OpentracingExtension = require("apollo-opentracing").default;
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const app = express();
const schema = createApolloSchema();
const server = new ApolloServer({
  schema,
  extensions: [
    () =>
      new OpentracingExtension({
        server: {
          startSpan: () => ({ finish: () => ({}) }),
          extract: () => ({}),
          finish: () => ({})
        },
        local: {
          startSpan: () => ({ finish: () => ({}) })
        }
      })
  ]
});
server.applyMiddleware({ app });
app.listen(4001);
