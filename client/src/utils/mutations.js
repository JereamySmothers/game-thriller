import { gql } from "@apollo/client";

export const ADD_PLAYER = gql
`
mutation AddPlayer($playerName: String!, $email: String!, $password: String!) {
    addPlayer(playerName: $playerName, email: $email, password: $password) {
      token
      player {
        _id
        playerName
        email
        scores {
          _id
          value
          createdAt
          playerName
        }
      }
    }
  }
`

export const LOGIN = gql
`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      player {
        _id
        playerName
        email
        scores {
          _id
          value
          createdAt
          playerName
        }
      }
    }
  }
`