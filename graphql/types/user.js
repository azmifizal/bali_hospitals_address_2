export default `
    type User {
        name: String!
        email: String!
        permissionLevel: Int!
    }

    type Query {
        users: [User]!
        user(id: ID!): User!
    }

    input insertUser {
        name: String!
        email: String!
        password: String!
        permissionLevel: Int
    }

    input editUser {
        name: String
        email: String
    }

    type Mutation {
        addUser(data: insertUser): User!
        editUser(id: ID!, data: editUser): User!
        deleteUser(id: ID!): User
    }
`;