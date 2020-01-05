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

| Server                                                                                                                                               | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                                  | --:        | :-:     | --:           |
| [express-REST](https://github.com/benawad/benchmarks/tree/master/benchmarks/express-REST.js)                                                         | 7987.2     | 0.08    | 58.14         |
| [fastify-gql](https://github.com/benawad/benchmarks/tree/master/benchmarks/fastify-gql.js)                                                           | 2433.8     | 1.53    | 15.16         |
| [express-graphql+graphql-jit](https://github.com/benawad/benchmarks/tree/master/benchmarks/express-graphql+graphql-jit.js)                           | 2397.4     | 1.55    | 15.09         |
| [express-graphql+graphql-jit+type-graphql](https://github.com/benawad/benchmarks/tree/master/benchmarks/express-graphql+graphql-jit+type-graphql.js) | 2178.0     | 1.72    | 13.71         |
| [graphql-api-koa](https://github.com/benawad/benchmarks/tree/master/benchmarks/graphql-api-koa.js)                                                   | 1742.8     | 2.46    | 10.86         |
| [express-graphql](https://github.com/benawad/benchmarks/tree/master/benchmarks/express-graphql.js)                                                   | 1598.6     | 2.75    | 10.06         |
| [express-graphql+type-graphql](https://github.com/benawad/benchmarks/tree/master/benchmarks/express-graphql+type-graphql.js)                         | 1531.4     | 2.80    | 9.64          |
| [apollo-schema+async](https://github.com/benawad/benchmarks/tree/master/benchmarks/apollo-schema+async.js)                                           | 1525.0     | 2.84    | 9.60          |
| [type-graphql+async](https://github.com/benawad/benchmarks/tree/master/benchmarks/type-graphql+async.js)                                             | 1464.2     | 2.91    | 9.22          |
| [type-graphql+middleware](https://github.com/benawad/benchmarks/tree/master/benchmarks/type-graphql+middleware.js)                                   | 1430.2     | 2.99    | 9.00          |
| [apollo-server-fastify](https://github.com/benawad/benchmarks/tree/master/benchmarks/apollo-server-fastify.js)                                       | 1381.2     | 3.10    | 8.63          |
| [type-graphql+async-middleware](https://github.com/benawad/benchmarks/tree/master/benchmarks/type-graphql+async-middleware.js)                       | 1366.8     | 3.12    | 8.60          |
| [express-graphql-dd-trace-no-plugin](https://github.com/benawad/benchmarks/tree/master/benchmarks/express-graphql-dd-trace-no-plugin.js)             | 1296.6     | 3.30    | 8.16          |
| [apollo-server-express](https://github.com/benawad/benchmarks/tree/master/benchmarks/apollo-server-express.js)                                       | 1265.2     | 3.38    | 8.00          |
| [apollo-opentracing](https://github.com/benawad/benchmarks/tree/master/benchmarks/apollo-opentracing.js)                                             | 908.4      | 4.96    | 5.75          |
| [apollo-server-express-tracing](https://github.com/benawad/benchmarks/tree/master/benchmarks/apollo-server-express-tracing.js)                       | 757.4      | 6.10    | 24.12         |
| [express-graphql-dd-trace](https://github.com/benawad/benchmarks/tree/master/benchmarks/express-graphql-dd-trace.js)                                 | 601.0      | 7.83    | 3.78          |
