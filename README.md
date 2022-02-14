# GQL benchmarks

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

### Result with express@next (5.0.0-alpha.8)

| Server                      | Requests/s | Latency | Throughput/Mb |
| --------------------------- | ---------- | ------- | ------------- |
| core-graphql-jit-str        | 5510.0     | 0.33    | 37.25         |
| core-graphql-jit-buf        | 5446.0     | 0.34    | 36.80         |
| core-graphql-jit-buf-fjs    | 5305.2     | 0.35    | 35.85         |
| fastify-REST                | 4750.0     | 0.41    | 40.74         |
| benzene-http                | 3033.4     | 1.31    | 20.65         |
| express-REST                | 2830.2     | 1.23    | 24.45         |
| fastify-express-graphql-jit | 2651.4     | 1.41    | 0.73          |
| express-gql                 | 2467.0     | 1.51    | 16.94         |
| express-graphql+graphql-jit | 1900.0     | 2.06    | 13.05         |
| express-graphql             | 1513.2     | 2.82    | 10.39         |
