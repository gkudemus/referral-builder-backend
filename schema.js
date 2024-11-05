const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Address {
    homeNameOrNumber: String
    street: String
    suburb: String
    state: String
    postcode: String
    country: String
  }

  type Referral {
    id: ID!
    givenName: String!
    surname: String!
    email: String!
    phone: String!
    address: Address!
  }

  input AddressInput {
    homeNameOrNumber: String
    street: String
    suburb: String
    state: String
    postcode: String
    country: String
  }

  input ReferralInput {
    givenName: String!
    surname: String!
    email: String!
    phone: String!
    address: AddressInput!
  }

  type Query {
    referrals: [Referral!]!
  }

  type Mutation {
    createReferral(input: ReferralInput!): Referral!
    updateReferral(id: ID!, input: ReferralInput!): Referral!
    deleteReferral(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
