const express = require("express");
const { data } = require("../lib/data");

const app = express();
app.use("/graphql", (_, res) => {
  res.send(data);
});
app.listen(4001);
