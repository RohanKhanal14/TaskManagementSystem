const express = require("express");
const taskRouter = require("./routes/task.route");
const db_connection = require("./db/connect");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
// app.use(cors());

//more significant use of cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }) // allow all origins
);

db_connection();
app.use("/api", taskRouter); // route always must be below express.json()

module.exports = app;
