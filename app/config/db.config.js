module.exports = {
  HOST:process.env.POSTGRES_HOST || "localhost",
  USER: process.env.POSTGRES_USER || "postgres",
  PASSWORD: process.env.POSTGRES_PASS ||"1234",
  DB: process.env.POSTGRES_DB || "testdb",
  dialect: process.env.POSTGRES_DIALECT ||  "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
