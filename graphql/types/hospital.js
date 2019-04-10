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
        hospital(id: ID!): Hospital
        hospitalSearch(key: String!): [Hospital]
    }

    input locationHospital {
        address: String
        districts: String
        postal_code: Int
        email: String
        phone: String
        fax: String
    }

    input inputHospital {
        code: Int
        name: String
        type: String
        class: String
        owner: String
        location: locationHospital
        last_update: String
    }

    type Mutation {
        addHospital(input: inputHospital): Hospital
    }
`;  