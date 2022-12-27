const db = require("mongoose");
const { mongouri } = require("./config");

db.Promise = global.Promise;

async function connectDB() {
  try {
    db.set("strictQuery", false);
    await db.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db conectada");
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectDB;
