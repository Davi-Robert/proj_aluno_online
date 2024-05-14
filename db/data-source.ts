require ("reflect-metadata")
require ("dotenv/config")

const { DataSource } = require ('typeorm')

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: ['entity/*.ts'],
  migrations: ['migration/*.ts']
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during data source initialization", err)
  })

  module.exports = {
    AppDataSource
  }