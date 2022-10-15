const { __esModule } = require("knex/lib");
const db = require("../config/database");

module.exports = {
  Query: {
    async getCustomers() {
      return await db("customers");
    },

    async getCustomer(_, { id }) {
      return await db("customers").where({ id }).first();
    },
  },

  Mutation: {
    async createCustomer(_, { input }) {
      const result = await db("customers").insert({
        id: input.id,
        company: input.company,
        last_name: input.lastName,
        first_name: input.firstName,
        email_address: input.email,
        job_title: input.jobTitle,
        business_phone: input.businessPhone,
        home_phone: input.homePhone,
        mobile_phone: input.mobilePhone,
        fax_number: input.faxNumber,
        address: input.address,
        city: input.city,
        state_province: input.stateProvince,
        zip_postal_code: input.zipPostalCode,
        country_region: input.countryRegion,
        web_page: input.webPage,
        notes: input.notes,
        attachments: input.attachments,
      });

      const id = result[0];
      return await db("customers").where({ id }).first();
    },

    async updateCustomer(_, { id, input }) {
      await db("customers").where({ id }).update({
        id: input.id,
        company: input.company,
        last_name: input.last_name,
        first_name: input.first_name,
        email_address: input.email_address,
        job_title: input.job_title,
        business_phone: input.business_phone,
        home_phone: input.home_phone,
        mobile_phone: input.mobile_phone,
        fax_number: input.fax_number,
        address: input.address,
        city: input.city,
        state_province: input.state_province,
        zip_postal_code: input.zip_postal_code,
        country_region: input.country_region,
        web_page: input.web_page,
        notes: input.notes,
        attachments: input.attachments,
      });

      return await db("customers").where({ id }).first();
    },

    async deleteCustomer(_, { id }) {
      await db("customers").where({ id }).delete();
      return id;
    },
  },
};
