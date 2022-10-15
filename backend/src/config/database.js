const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);

module.exports = knex;

knex('customers').select('*').then(customers => {
  console.log(customers);
});