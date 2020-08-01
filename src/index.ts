import "reflect-metadata";

// import { DependencyInjection as DI } from "./@agnes/core/DI/DI";

import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

// let dependecyInjected = DI.getInstance();

import * as express from "express";

import * as bodyParser from "body-parser";

const app = express();

import { Request, Response } from "express";

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
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(`/graphql`, graphqlExpress({ schema }));

app.use(`/graphiql`, graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000, () => console.log(`Server is listening: ${3000}`));

