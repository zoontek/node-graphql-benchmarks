"use strict";

const { createServer } = require("http");
const { Benzene, makeHandler, parseGraphQLBody } = require("@benzene/http");
const { createSchema } = require("../lib/schema");

const rawBody = (req, done) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => done(body));
};

const schema = createSchema();

const GQL = new Benzene({ schema });

const graphqlHTTP = makeHandler(GQL);

const server = createServer((req, res) => {
  rawBody(req, (rawBody) =>
    graphqlHTTP({
      method: req.method,
      headers: req.headers,
      body: parseGraphQLBody(rawBody, req.headers["content-type"]),
    }).then((result) => {
      res.writeHead(result.status, result.headers);
      res.end(JSON.stringify(result.payload));
    }),
  );
});

server.listen(4001);
