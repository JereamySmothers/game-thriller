const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Player {
    _id: ID
    playerName: String
    email: String
    scores: [Score]
  }

  type Score {
    _id: ID
    value: String
    createdAt: String
    playerName: String
  }

  type Auth {
    token: ID!
    player: Player
  }

  type Query {
    me: Player
    player(playerName: String!): Player
    scores(playerName: String!): [Score]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addPlayer(playerName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
