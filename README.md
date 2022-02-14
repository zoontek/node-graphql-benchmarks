# GQL benchmarks

To run:

```bash
$ yarn install
$ yarn start
```

### Results

_⚠️ Using caching plugins in benchmark is kind of cheating._

| Server                                   | JIT | Caching | Requests/s | Latency | Throughput/Mb |
| ---------------------------------------- | :-: | :-----: | ---------- | ------- | ------------- |
| core-graphql-jit                         | ✅  |   ❌    | 5103.6     | 0.39    | 34.49         |
| fastify-REST                             | ❌  |   ❌    | 4486.2     | 0.49    | 38.47         |
| express-graphql-helix-envelop-jit-caches | ✅  |   ✅    | 3607.4     | 0.83    | 24.57         |
| fastify-graphql-helix-envelop-jit-caches | ✅  |   ✅    | 3482.2     | 0.88    | 23.64         |
| express-REST                             | ❌  |   ❌    | 2779.0     | 1.31    | 24.01         |
| fastify-graphql-helix-envelop-jit        | ✅  |   ❌    | 2429.8     | 1.53    | 16.49         |
| express-graphql-jit                      | ✅  |   ❌    | 2065.8     | 1.88    | 14.19         |
| express-graphql-helix-envelop-jit        | ✅  |   ❌    | 1920.4     | 2.06    | 13.08         |
| core-graphql-helix                       | ❌  |   ❌    | 1853.8     | 2.14    | 12.59         |
| fastify-graphql-helix-envelop            | ❌  |   ❌    | 1782.4     | 2.32    | 12.10         |
| fastify-express-graphql-jit              | ✅  |   ❌    | 1644.0     | 2.56    | 0.45          |
| fastify-graphql-helix                    | ❌  |   ❌    | 1626.2     | 2.66    | 11.04         |
| express-graphql-helix                    | ❌  |   ❌    | 1548.4     | 2.79    | 10.55         |
| express-graphql-helix-envelop            | ❌  |   ❌    | 1513.2     | 2.84    | 10.31         |
| express-graphql                          | ❌  |   ❌    | 1494.8     | 2.88    | 10.26         |
