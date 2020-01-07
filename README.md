# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance

# Explanation

For further details, please check out [this video](https://www.youtube.com/watch?v=JbV7MCeEPb8).

# Usage

```
git clone https://github.com/benawad/benchmarks
cd benchmarks
npm install
npm start
```

# Benchmarks

duration: 5.05s
connections: 5
pipelining: 1

| Server                                                                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                                               | --:        | :-:     | --:           |
| [fastify-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-REST.js)                                                         | 5486.8     | 0.35    | 43.88         |
| [fastify-gql+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-gql+graphql-jit.js)                                   | 5437.2     | 0.34    | 33.87         |
| [express-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-REST.js)                                                         | 4278.2     | 0.53    | 34.49         |
| [koa+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/koa+graphql-jit.js)                                                   | 2634.2     | 1.44    | 16.41         |
| [express-graphql+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit.js)                           | 2374.2     | 1.57    | 14.94         |
| [fastify-gql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-gql.js)                                                           | 2367.0     | 1.58    | 14.74         |
| [express-graphql+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit+type-graphql.js) | 2176.2     | 1.72    | 13.70         |
| [apollo-server-fastify+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify+graphql-jit.js)               | 1740.6     | 2.33    | 10.88         |
| [graphql-api-koa](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa.js)                                                   | 1726.8     | 2.50    | 10.76         |
| [express-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql.js)                                                   | 1564.0     | 2.79    | 9.84          |
| [apollo-schema+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-schema+async.js)                                           | 1555.8     | 2.79    | 9.79          |
| [express-graphql+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+type-graphql.js)                         | 1481.0     | 2.90    | 9.32          |
| [type-graphql+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async.js)                                             | 1455.8     | 2.93    | 9.16          |
| [type-graphql+middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+middleware.js)                                   | 1452.0     | 2.94    | 9.14          |
| [type-graphql+async-middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async-middleware.js)                       | 1409.4     | 3.01    | 8.87          |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)                                       | 1383.6     | 3.10    | 8.64          |
| [express-graphql-dd-trace-no-plugin](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace-no-plugin.js)             | 1311.0     | 3.28    | 8.25          |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)                                       | 1238.6     | 3.45    | 7.83          |
| [apollo-opentracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-opentracing.js)                                             | 913.8      | 4.92    | 5.78          |
| [apollo-server-express-tracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express-tracing.js)                       | 736.8      | 6.26    | 23.46         |
| [express-graphql-dd-trace](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace.js)                                 | 606.0      | 7.76    | 3.81          |
