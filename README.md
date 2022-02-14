# GQL benchmarks

To run:

```bash
$ yarn install
$ yarn start
```

### Initial results (after fork + dependencies updates)

| Server                      | Requests/s | Latency | Throughput/Mb |
| --------------------------- | ---------- | ------- | ------------- |
| core-graphql-jit-str        | 5566.0     | 0.33    | 37.63         |
| core-graphql-jit-buf        | 5460.4     | 0.34    | 36.90         |
| core-graphql-jit-buf-fjs    | 5235.6     | 0.36    | 35.39         |
| fastify-REST                | 4814.0     | 0.40    | 41.30         |
| express-REST                | 2922.6     | 1.21    | 25.25         |
| benzene-http                | 2902.6     | 1.34    | 19.76         |
| fastify-express-graphql-jit | 2625.4     | 1.42    | 0.72          |
| express-gql                 | 2539.8     | 1.49    | 17.44         |
| express-graphql+graphql-jit | 2132.4     | 1.79    | 14.65         |
| express-graphql             | 1669.2     | 2.62    | 11.46         |
