export default `
    type Auth {
        userId: ID!
        token: String!
        permissionLevel: Int!
    }

    type Query {
        login(email: String!, password: String!): Auth!
    }
`;