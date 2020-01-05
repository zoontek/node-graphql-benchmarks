# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance

# Usage

```
git clone https://github.com/benawad/benchmarks
cd benchmarks
npm install
npm start
```

# Benchmarks

- **Machine:** My iMac
- **Method:** `autocannon -c 5 -d 5 localhost:4001/graphql` (two rounds; one to warm-up, one to measure).
- **Node:** `13.5.0`

duration: 5.05s
connections: 100
pipelining: 1

| Server                                                                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                                               | --:        | :-:     | --:           |
| [express-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-REST.js)                                                         | 8093.2     | 11.84   | 58.92         |
| [fastify-gql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-gql.js)                                                           | 2452.6     | 40.23   | 15.28         |
| [express-graphql+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit.js)                           | 2427.0     | 40.60   | 15.27         |
| [express-graphql+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit+type-graphql.js) | 2214.8     | 44.51   | 13.94         |
| [graphql-api-koa](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa.js)                                                   | 1752.2     | 56.31   | 10.92         |
| [express-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql.js)                                                   | 1594.8     | 61.88   | 10.04         |
| [apollo-schema+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-schema+async.js)                                           | 1568.0     | 62.91   | 9.87          |
| [express-graphql+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+type-graphql.js)                         | 1542.2     | 64.03   | 9.71          |
| [type-graphql+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async.js)                                             | 1469.6     | 67.20   | 9.25          |
| [type-graphql+middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+middleware.js)                                   | 1464.6     | 67.41   | 9.22          |
| [type-graphql+async-middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async-middleware.js)                       | 1441.8     | 68.45   | 9.08          |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)                                       | 1390.8     | 70.95   | 8.69          |
| [express-graphql-dd-trace-no-plugin](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace-no-plugin.js)             | 1321.6     | 74.71   | 8.32          |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)                                       | 1243.6     | 79.39   | 7.87          |
| [apollo-opentracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-opentracing.js)                                             | 914.2      | 107.92  | 5.78          |
| [apollo-server-express-tracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express-tracing.js)                       | 740.4      | 133.06  | 23.58         |
| [express-graphql-dd-trace](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace.js)                                 | 583.2      | 168.42  | 3.67          |
