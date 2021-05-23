module.exports = {
    HOST:process.env.PGHOST,
    port:process.env.PGPORT,
    USER:process.env.PGUSER,
    PASSWORD:process.env.PGPASSWORD,
    DB: process.env.PGDATABASE,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };