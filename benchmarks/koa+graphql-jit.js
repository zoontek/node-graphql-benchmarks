const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { errorHandler, execute } = require("graphql-api-koa");
const { graphqlUploadKoa } = require("graphql-upload");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const cache = {};

const app = new Koa()
  .use(errorHandler())
  .use(graphqlUploadKoa())
  .use(bodyParser())
  .use((ctx, next) => {
    const query = ctx.request.body.query;
    if (!(query in cache)) {
      const document = parse(query);
      cache[query] = compileQuery(schema, document);
    }
    return execute({
      schema,
      execute: ({ rootValue, variableValues, contextValue }) =>
        cache[query].query(rootValue, contextValue, variableValues)
    })(ctx, next);
  });

app.listen(4001);
