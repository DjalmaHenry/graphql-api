const resolvers = require("./resolvers");
const { makeExecutableSchema } = require("graphql-tools");

const customerAttributes = `
    id: ID!
    company: String!
    last_name: String!
    first_name: String!
    email_address: String
    job_title: String!
    business_phone: String!
    home_phone: String
    mobile_phone: String
    fax_number: String!
    address: String!
    city: String!
    state_province: String!
    zip_postal_code: String!
    country_region: String!
    web_page: String
    notes: String
    attachments: String
`;

const typeDefs = `
    type Customer {
        ${customerAttributes}
    }

    type Query {
        getCustomers: [Customer]
        getCustomer(id: ID!): Customer
    }

    input CustomerInput {
        ${customerAttributes}
    }

    type Mutation {
        createCustomer(input: CustomerInput): Customer
        updateCustomer(id: ID!, input: CustomerInput): Customer
        deleteCustomer(id: ID!): ID
    }
    `;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
