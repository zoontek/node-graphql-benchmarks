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

duration: 5.04s
connections: 5
pipelining: 1

| Server                                                                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                                               | --:        | :-:     | --:           |
| [express-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-REST.js)                                                         | 7924.0     | 0.09    | 57.68         |
| [express-graphql+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit.js)                           | 2471.0     | 1.49    | 15.55         |
| [fastify-gql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-gql.js)                                                           | 2412.2     | 1.55    | 15.02         |
| [express-graphql+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit+type-graphql.js) | 2274.6     | 1.63    | 14.31         |
| [graphql-api-koa](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa.js)                                                   | 1753.2     | 2.48    | 10.92         |
| [apollo-schema+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-schema+async.js)                                           | 1596.2     | 2.73    | 10.05         |
| [express-graphql+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+type-graphql.js)                         | 1540.4     | 2.79    | 9.70          |
| [express-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql.js)                                                   | 1522.4     | 2.86    | 9.58          |
| [type-graphql+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async.js)                                             | 1510.2     | 2.80    | 9.51          |
| [type-graphql+middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+middleware.js)                                   | 1490.8     | 2.85    | 9.38          |
| [type-graphql+async-middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async-middleware.js)                       | 1464.0     | 2.88    | 9.21          |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)                                       | 1373.8     | 3.11    | 8.58          |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)                                       | 1296.8     | 3.27    | 8.20          |
| [express-graphql-dd-trace-no-plugin](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace-no-plugin.js)             | 1255.2     | 3.43    | 7.90          |
| [apollo-opentracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-opentracing.js)                                             | 819.4      | 5.56    | 5.18          |
| [apollo-server-express-tracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express-tracing.js)                       | 770.8      | 5.98    | 24.55         |
| [express-graphql-dd-trace](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace.js)                                 | 462.0      | 10.32   | 2.91          |
