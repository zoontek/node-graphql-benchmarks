const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const uws = require("uWebSockets.js");
const {
  createAsyncTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");

const cache = {};

createAsyncTypeGraphQLSchema().then((schema) => {
  uws
    .App()
    .post("/graphql", (res) => {
      res.onAborted(() => {});
      res.onData((ab) => {
        const body = JSON.parse(Buffer.from(ab).toString());
        const { query } = body;
        let compiled = cache[query];
        if (!compiled) {
          const document = parse(query);
          compiled = cache[query] = compileQuery(schema, document);
        }
        compiled.query({}, {}, {}).then((ans) => {
          res.end(JSON.stringify(ans));
        });
      });
    })
    .listen(4001, () => {});
});
