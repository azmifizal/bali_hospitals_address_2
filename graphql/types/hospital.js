module.exports = `
    type Location {
        id: ID
        address: String
        districts: String
        postal_code: Int
        email: String
        phone: String
        fax: String
    }

    type Hospital {
        id: ID!
        code: Int
        name: String
        type: String
        class: String
        owner: String
        location: Location
        last_update: String
    }

    type Query {
        hospitals: [Hospital]!
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
        createHospital(input: inputHospital): Hospital
        updateHospital(id: ID!, input: inputHospital): Hospital
        deleteHospital(id: ID!): Hospital
    }
`;  