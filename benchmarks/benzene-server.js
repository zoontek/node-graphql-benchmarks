const { createServer } = require("http");
const { Benzene, httpHandler } = require("@benzene/server");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const GQL = new Benzene({ schema });

const gqlHandle = httpHandler(GQL, { path: "/graphql" });

const server = createServer(gqlHandle);

server.listen(4001);
