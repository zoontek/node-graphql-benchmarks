const { SchemaComposer } = require("graphql-compose");
const md5 = require("md5");
const { data } = require("../data");

const sc = new SchemaComposer();

sc.createObjectTC({
  name: "Author",
  fields: {
    id: "ID!",
    name: "String!",
    md5: {
      type: "String!",
      resolve: (parent) => md5(parent.name),
    },
    company: "String!",
    books: "[Book!]!",
  },
});

sc.createObjectTC({
  name: "Book",
  fields: {
    id: "ID!",
    name: "String!",
    numPages: "Int!",
  },
});

sc.Query.addFields({
  authors: {
    type: "[Author!]!",
    resolve: () => data,
  },
});

module.exports.createGraphqlComposeSchema = () => sc.buildSchema();

module.exports.createAsyncGraphqlComposeSchema = () => {
  // clone Schema and override resolve method for `Query.authors` field
  const sc2 = sc.clone();
  sc2.Query.extendField("authors", {
    resolve: async () => data,
  });

  return sc2.buildSchema();
};
