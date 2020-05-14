import { graphql, GraphQLSchema, buildSchema } from "./deps.ts";

/** Schema */
var schema: GraphQLSchema = buildSchema(`
  type Query {
    hello: String
  }
`);
// Root element
var root = { hello: () => 'Hello world!' };


export function startServer(port: Number): void {
  return graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
  });
}
