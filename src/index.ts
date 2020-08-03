import "reflect-metadata";

// import { DependencyInjection as DI } from "./@agnes/core/DI/DI";

import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

// let dependecyInjected = DI.getInstance();

import * as express from "express";

import * as bodyParser from "body-parser";

const app = express();

import { Request, Response } from "express";

const humans = [
  {
    "name": "Han Solo",
    "appearsIn": [
      "NEWHOPE",
      "EMPIRE",
      "JEDI"
    ],
    "starships": [
      {
        "name": "Millenium Falcon"
      },
      {
        "name": "Imperial shuttle"
      }
    ]
  }

];


const typeDefs = `
type Query {
  human(id: ID!) : Human
}
type Human {
  name: String, 
  appearsIn: [Episode],
  startships: [Starship]
} 
enum Episode {
  NEWHOPE,
  EMPIRE,
  JEDI 
}
type Starship {
  name: String
}
`;


const resolvers = {
  Query: {
    human(obj, args, context, info) {
      console.log(context)
      return humans;
    }
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

