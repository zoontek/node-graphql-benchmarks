# TL;DR

- graphql-jit helps
- apollo-server adds overhead

# Usage

```
npm start [arguments (optional)]
```

#### Arguments

> You may also compare all test results, at once, in a single table; `npm run compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `npm run compare -p`

# Benchmarks

- **Machine:** My iMac
- **Method:** `autocannon -c 5 -d 10 localhost:4001/graphql` (two rounds; one to warm-up, one to measure).
- **Node:** `13.5.0`

duration: 5.05s
connections: 5
pipelining: 1

|                               | Requests/s | Latency | Throughput/Mb |
| :--                           | --:        | :-:     | --:           | --: | --: |
| apollo-opentracing            | 51.4       | 95.95   | 7.12          |
| apollo-server-express-tracing | 44.2       | 111.34  | 31.35         |
| apollo-server-express         | 97.6       | 50.49   | 13.51         |
| apollo-server-fastify         | 99.4       | 49.49   | 13.75         |
| express-REST                  | 765.0      | 5.97    | 130.42        |
| express-graphql+graphql-jit   | 496.6      | 9.59    | 68.71         |
| express-graphql               | 143.8      | 34.12   | 19.89         |
| fastify-gql                   | 154.8      | 31.70   | 21.40         |
| graphql-api-koa               | 138.2      | 35.56   | 19.07         |