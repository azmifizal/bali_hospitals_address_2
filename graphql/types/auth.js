export default `
    type Auth {
        userId: ID!
        token: String!
    }

    type Query {
        login(email: String!, password: String!): Auth!
    }
`;