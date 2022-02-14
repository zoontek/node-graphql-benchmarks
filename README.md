# GQL benchmarks

To run:

```bash
$ yarn install
$ yarn start
```

### Initial results (after fork + dependencies updates)

| Server                      | Requests/s | Latency | Throughput/Mb |
| --------------------------- | ---------- | ------- | ------------- |
| core-graphql-jit-str        | 5520.4     | 0.33    | 37.31         |
| core-graphql-jit-buf        | 5372.4     | 0.35    | 36.32         |
| core-graphql-jit-buf-fjs    | 5238.8     | 0.36    | 35.40         |
| fastify-REST                | 4782.0     | 0.40    | 41.02         |
| express-REST                | 2933.8     | 1.20    | 25.35         |
| fastify-express-graphql-jit | 2631.4     | 1.41    | 0.72          |
| express-graphql+graphql-jit | 2170.2     | 1.75    | 14.90         |
| express-graphql             | 1683.0     | 2.60    | 11.56         |
