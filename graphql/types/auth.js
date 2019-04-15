module.exports = `
    type Auth {
        userId: ID!
        token: String!
        permissionLevel: Int!
    }

    input insertLogin {
        email: String!,
        password: String!
    }

    type Query {
        login(data: insertLogin): Auth!
    }
`;