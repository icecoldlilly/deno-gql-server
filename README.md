# 🦕 deno-gql-server

Based on [Deno](https://deno.land) module starter repository.
As of 0.0.1, I am using the official [GraphQL](https://graphql.org) specs to build a demo server.
## Usage

```typescript
import { startServer } from "https://raw.githubusercontent.com/hilalh/deno-gql-server/{VERSION}/mod.ts";

const server = startServer(port: 3000);
```

## Test

```bash
# unit tests
deno ./test.ts
```

## Format code

```bash
deno fmt **/*.ts
```

## Resources

- [Deno Website](https://deno.land)
- [Deno Style Guide](https://deno.land/std/style_guide.md)
- [Deno Gitter](https://gitter.im/denolife/Lobby)