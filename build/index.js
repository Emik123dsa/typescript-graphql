"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// import { DependencyInjection as DI } from "./@agnes/core/DI/DI";
const apollo_server_express_1 = require("apollo-server-express");
const graphql_tools_1 = require("graphql-tools");
// let dependecyInjected = DI.getInstance();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const books = [
    {
        title: "vova",
        author: "vokvoia"
    }
];
const typeDefs = `
type Query { books: [Book] }, 
type Book { title : String , author: String}
`;
const resolvers = {
    Query: {
        books: () => books
    }
};
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(`/graphql`, apollo_server_express_1.graphqlExpress({ schema }));
app.use(`/graphiql`, apollo_server_express_1.graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(3000, () => console.log(`Server is listening: ${3000}`));
//# sourceMappingURL=index.js.map