require("dotenv").config();

const config = {
  host: process.env.HOST,
  port: process.env.PORT,
  allowedclient: process.env.ALLOWEDCLIENT,
  mongouri: process.env.MONGOURI,
};

module.exports = config;
