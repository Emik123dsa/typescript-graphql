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
            console.log(context);
            return humans;
        }
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