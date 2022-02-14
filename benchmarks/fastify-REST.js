"use strict";

const fastify = require("fastify");
const md5 = require("md5");
const { data } = require("../lib/data");

const app = fastify();

app.post("/graphql", (_, reply) => {
  reply.send(data.map((x) => ({ ...x, md5: md5(x.name) })));
});

app.listen(4001);
