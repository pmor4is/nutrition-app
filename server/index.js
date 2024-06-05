const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
const bodyparser = require("body-parser");
const config = require("./config");
const questionsRoute = require('./routes/questions');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

app.use("/questions", questionsRoute);


app.get("/" , (req, res) => {
    console.log("Response ok");
    res.send("Server connected");
});

app.listen(config.port, () => console.log("Server listening on port: " + config.port));
module.exports = app;