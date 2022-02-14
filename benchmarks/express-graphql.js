"use strict";

const { graphqlHTTP } = require("express-graphql");
const express = require("express");
const { createSchema } = require("../lib/schema");

const app = express();
const schema = createSchema();

app.use("/graphql", graphqlHTTP({ schema }));
app.listen(4001);
