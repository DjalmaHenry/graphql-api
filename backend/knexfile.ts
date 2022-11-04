import { Knex } from "knex";

const { password } = require('./.env');

interface KnexConfig {
  [key: string]: Knex.Config;
}

const config: KnexConfig = {
  development: {
    client: "mysql2",
    connection: {
      database: "northwind",
      user: "root",
      password
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  }
};

export default config;