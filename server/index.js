const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
const bodyparser = require("body-parser");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

var conString = config.urlConnection;
var client = new Client(conString);

client.connect((error) => {
    if (error) {
        return console.error('Not able to connect. Error: ', error);
    }
    client.query('SELECT NOW()', (error, result) => {
        if (error) {
            return console.error('Not able to query. Error: ', error);
        }
        console.log(result.rows[0]);
    })
})

app.get("/" , (req, res) => {
    console.log("Response ok");
    res.send("Server connected");
});

app.listen(config.port, () => console.log("Server listening on port: " + config.port));