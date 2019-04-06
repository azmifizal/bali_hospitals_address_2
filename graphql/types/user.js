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

    input dataInsert {
        name: String!
        email: String!
        password: String!
        permissionLevel: Int
    }

    input dataEdit {
        name: String
        email: String
    }

    type Mutation {
        addUser(data: dataInsert): User!
        editUser(id: ID!, data: dataEdit): User!
        deleteUser(id: ID!): User
    }
`;