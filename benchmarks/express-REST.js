const express = require("express");
const { graphqlUploadExpress } = require("graphql-upload");
const { data } = require("../lib/data");

const app = express();
app.post("/graphql", graphqlUploadExpress(), (_, res) => {
  res.send(data);
});
app.listen(4001);
