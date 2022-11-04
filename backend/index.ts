import "reflect-metadata";
import path from "path";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { CustomerResolver } from './src/resolvers/CustomerResolver';
import { OrderResolver } from "./src/resolvers/OrderResolver";
import { OrderDetailsResolver } from './src/resolvers/OrderDetailsResolver';
import { ProductResolver } from "./src/resolvers/ProductResolver";

async function main() {
    const schema = await buildSchema({
        resolvers: [
            CustomerResolver,
            OrderResolver,
            OrderDetailsResolver,
            ProductResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen();

    console.log(`Server is running, GraphQL Playground available at ${url}`);
}


main();