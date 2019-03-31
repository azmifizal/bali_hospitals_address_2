export default `
    type Location {
        address: String!
        districs: String!
        postal_code: Int!
        email: String!
        phone: String!
        fax: String!
    }

    type Hospital {
        code: Int!
        name: String!
        type: String!
        class: String!
        owner: String!
        location: Location!
        last_update: String!
    }

    type Query {
        hospitals: [Hospital!]!
    }
`;