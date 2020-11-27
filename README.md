# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance
- type-graphql adds overhead

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
duration: 5s
connections: 5
pipelining: 1

| Server                                                                                                                                                                  | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                                                     | --:        | :-:     | --:           |
| [core-graphql-jit-buf-fjs](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf-fjs.js)                                       | 6725.2     | 0.06    | 41.65         |
| [uWebSockets-graphql+jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit.js)                                         | 6654.8     | 0.05    | 40.96         |
| [core-graphql-jit-str](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-str.js)                                               | 6563.6     | 0.07    | 40.65         |
| [core-graphql-jit-buf](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf.js)                                               | 6514.8     | 0.06    | 40.35         |
| [fastify-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-REST.js)                                                               | 6347.6     | 0.06    | 50.75         |
| [benzene-server](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server.js)                                                           | 6086.0     | 0.11    | 37.98         |
| [benzene-server+express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+express.js)                                           | 5559.6     | 0.16    | 34.82         |
| [express-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-REST.js)                                                               | 5116.4     | 0.21    | 41.25         |
| [express-gql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-gql.js)                                                                 | 3992.0     | 1.06    | 25.16         |
| [graphql-api-koa+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa+graphql-jit.js)                                 | 3354.2     | 1.04    | 20.90         |
| [express-graphql+graphql-jit+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit+graphql-compose.js) | 3081.4     | 1.06    | 19.42         |
| [express-graphql+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit.js)                                 | 3011.0     | 1.08    | 18.97         |
| [fastify-express-graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-express-graphql-jit.js)                                 | 2959.4     | 1.11    | 0.75          |
| [mercurius+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-jit.js)                                             | 2950.2     | 1.11    | 18.40         |
| [mercurius](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius.js)                                                                     | 2947.0     | 1.11    | 18.39         |
| [mercurius+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-compose.js)                                     | 2938.6     | 1.09    | 18.33         |
| [fastify-express-graphql-typed-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-express-graphql-typed-jit.js)                     | 2864.6     | 1.09    | 0.72          |
| [mercurius+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-jit+type-graphql.js)                   | 2856.2     | 1.11    | 17.82         |
| [apollo-server-fastify+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify+graphql-jit.js)                     | 2784.6     | 1.19    | 17.45         |
| [express-graphql+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit+type-graphql.js)       | 2736.6     | 1.15    | 17.24         |
| [graphql-api-koa](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa.js)                                                         | 2102.6     | 2.06    | 13.10         |
| [express-graphql+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-compose.js)                         | 1993.6     | 2.09    | 12.56         |
| [apollo-server-koa+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-koa+graphql-jit+type-graphql.js)   | 1976.4     | 2.21    | 12.33         |
| [graphql-compose+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-compose+async.js)                                             | 1938.6     | 2.10    | 12.22         |
| [express-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql.js)                                                         | 1930.2     | 2.13    | 12.17         |
| [fastify-express-grapql-typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-express-grapql-typed.js)                               | 1916.2     | 2.10    | 0.48          |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)                                             | 1903.8     | 2.12    | 11.94         |
| [yoga-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/yoga-graphql.js)                                                               | 1843.8     | 2.22    | 11.57         |
| [express-graphql+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+type-graphql.js)                               | 1832.0     | 2.20    | 11.55         |
| [type-graphql+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async.js)                                                   | 1828.8     | 2.17    | 11.53         |
| [apollo-schema+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-schema+async.js)                                                 | 1806.6     | 2.25    | 11.39         |
| [type-graphql+middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+middleware.js)                                         | 1798.0     | 2.19    | 11.33         |
| [type-graphql+async-middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async-middleware.js)                             | 1757.2     | 2.25    | 11.08         |
| [express-graphql-dd-trace-no-plugin](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace-no-plugin.js)                   | 1608.6     | 2.48    | 10.14         |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)                                             | 1436.2     | 3.14    | 9.10          |
| [yoga-graphql-trace](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/yoga-graphql-trace.js)                                                   | 1088.8     | 4.06    | 34.61         |
| [apollo-opentracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-opentracing.js)                                                   | 990.2      | 4.64    | 6.27          |
| [express-graphql-dd-trace-less](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace-less.js)                             | 935.6      | 4.77    | 5.90          |
| [express-graphql-dd-trace](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace.js)                                       | 901.2      | 5.01    | 5.68          |
| [apollo-server-express-tracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express-tracing.js)                             | 799.4      | 5.72    | 25.46         |
