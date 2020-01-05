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

| Server                                   | Requests/s | Latency | Throughput/Mb |
| :--                                      | --:        | :-:     | --:           |
| express-REST                             | 7987.2     | 0.08    | 58.14         |
| fastify-gql                              | 2433.8     | 1.53    | 15.16         |
| express-graphql+graphql-jit              | 2397.4     | 1.55    | 15.09         |
| express-graphql+graphql-jit+type-graphql | 2178.0     | 1.72    | 13.71         |
| graphql-api-koa                          | 1742.8     | 2.46    | 10.86         |
| express-graphql                          | 1598.6     | 2.75    | 10.06         |
| express-graphql+type-graphql             | 1531.4     | 2.80    | 9.64          |
| apollo-schema+async                      | 1525.0     | 2.84    | 9.60          |
| type-graphql+async                       | 1464.2     | 2.91    | 9.22          |
| type-graphql+middleware                  | 1430.2     | 2.99    | 9.00          |
| apollo-server-fastify                    | 1381.2     | 3.10    | 8.63          |
| type-graphql+async-middleware            | 1366.8     | 3.12    | 8.60          |
| express-graphql-dd-trace-no-plugin       | 1296.6     | 3.30    | 8.16          |
| apollo-server-express                    | 1265.2     | 3.38    | 8.00          |
| apollo-opentracing                       | 908.4      | 4.96    | 5.75          |
| apollo-server-express-tracing            | 757.4      | 6.10    | 24.12         |
| express-graphql-dd-trace                 | 601.0      | 7.83    | 3.78          |
