<div align="center">
<img src="https://github.com/fastify/graphics/raw/master/full-logo.png" width="650" height="auto"/>
</div>

<div align="center">

[![Build Status](https://travis-ci.org/fastify/fastify.svg?branch=master)](https://travis-ci.org/fastify/fastify)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/fastify)

</div>
<br />

# TL;DR

- [Fastify](https://github.com/fastify/fastify) is, fast and low overhead web framework for Node.js
- This package shows how fast it is comparatively.

# Installing

```
npm i -g fastify-benchmarks
```

# Usage

```
benchmark [arguments (optional)]
```

#### Arguments

- `-h`: Help on how to use the tool.
- `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`

# Benchmarks

- **Machine:** CPU-optimized server (Ubuntu 18.04.2 x64 | 8 vCPUs | 32GB | Node 10.15).
- **Method:** `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
- **Node:** `10.15.2`

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
