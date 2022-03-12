# GQL benchmarks

To run:

```bash
$ yarn install
$ yarn start
```

### Results

_⚠️ Using caching plugins in benchmark is kind of cheating._

| Server                                   | JIT | Caching | Requests/s | Latency | Throughput/Mb |
| ---------------------------------------- | :-: | :-----: | :--------: | :-----: | ------------- |
| core-graphql-helix-envelop-jit-caches    | ✅  |   ✅    |  14628.0   |  0.02   | 99.33         |
| fastify-graphql-helix-envelop-jit-caches | ✅  |   ✅    |  13900.0   |  0.02   | 94.38         |
| core-graphql-jit                         | ✅  |   ❌    |  11080.8   |  0.02   | 74.91         |
| express-graphql-helix-envelop-jit-caches | ✅  |   ✅    |  10245.6   |  0.04   | 69.79         |
| fastify-REST                             | ❌  |   ❌    |   9765.6   |  0.03   | 83.74         |
| express-REST                             | ❌  |   ❌    |   7182.8   |  0.25   | 62.07         |
| fastify-express-graphql-jit              | ✅  |   ❌    |   6976.4   |  0.26   | 1.92          |
| core-graphql-helix-envelop-jit           | ✅  |   ❌    |   6351.6   |  0.27   | 43.13         |
| fastify-graphql-helix-envelop-jit        | ✅  |   ❌    |   6202.8   |  0.27   | 42.12         |
| express-graphql-jit                      | ✅  |   ❌    |   6038.0   |  0.29   | 41.47         |
| express-graphql-helix-envelop-jit        | ✅  |   ❌    |   5246.8   |  0.32   | 35.74         |
| core-graphql-helix                       | ❌  |   ❌    |   4885.2   |  0.36   | 33.17         |
| core-graphql-helix-envelop               | ❌  |   ❌    |   4798.0   |  0.37   | 32.58         |
| fastify-graphql-helix                    | ❌  |   ❌    |   4782.8   |  0.37   | 32.47         |
| fastify-graphql-helix-envelop            | ❌  |   ❌    |   4739.6   |  0.38   | 32.18         |
| express-graphql                          | ❌  |   ❌    |   4590.0   |  0.41   | 31.53         |
| express-graphql-helix                    | ❌  |   ❌    |   4201.8   |  0.46   | 28.62         |
| express-graphql-helix-envelop            | ❌  |   ❌    |   4155.8   |  0.46   | 28.30         |
