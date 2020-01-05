# TL;DR

- graphql-jit helps
- apollo-server adds overhead

# Usage

```
npm start [arguments (optional)]
```

#### Arguments

- `-h`: Help on how to use the tool.
- `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`

# Benchmarks

- **Machine:** My iMac
- **Method:** `autocannon -c 5 -d 10 localhost:4001/graphql` (two rounds; one to warm-up, one to measure).
- **Node:** `13.5.0`

|                               | Requests/s | Latency | Throughput/Mb |
| :---------------------------- | ---------: | :-----: | ------------: |
| apollo-server-express-tracing |       85.1 |  58.22  |         11.75 |
| apollo-server-express         |       80.6 |  61.45  |         11.14 |
| apollo-server-fastify         |       86.5 |  57.23  |         11.97 |
| express-REST                  |      730.7 |  6.31   |        124.63 |
| express-graphql+graphql-jit   |      498.6 |  9.53   |         68.97 |
| express-graphql               |      146.8 |  33.56  |         20.29 |
| fastify-gql                   |      154.3 |  31.90  |         21.32 |
| graphql-api-koa               |      138.1 |  35.70  |         19.06 |
