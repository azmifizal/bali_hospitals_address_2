export default `
    type User {
        name: String!
        email: String!
        permissionLevel: Int!
    }

    type Query{
        users: [User]!
    }
`;