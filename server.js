const express = require("express");
const cors = require("cors");

const config = require("./config");
const connectDB = require("./db");
const Router = require("./routes");

const app = express();

const { host, port, allowedclient } = config;

// init DB connect
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all route app
Router(app);

app.listen(port, function () {
  console.log(`server listening on http://${host}:${port}/api/`);
});
