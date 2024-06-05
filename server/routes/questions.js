const express = require('express');
const router = express.Router();
const client = require('../database/database');

router.get("/", (req, res) => {
    try {
        console.log("Query GET executing");
        client.query("SELECT * FROM questions", function (error, result) {
            if (error) return console.error("Error executing SELECT ALL query from infrastructure. Error: ", error);
            res.send(result.rows[0]);
            console.log("Query GET executed successfully");
        })
    } catch (error) {
        console.error("GET query error. Error: ", error);
    }
});

router.post("/", (req, res) => {
    try {
        console.log("Query POST executing", req.body);
        const { answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10 } = req.body;
        client.query(
            "INSERT INTO questions ( answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10 ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING * ",
            [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10],
            function(error, result){
                if (error) return console.error("Error executing INSERT query. Error: " + error);
                const { id } = result.rows[0];
                res.setHeader ("id", "${id}");
                res.status(201).json(result.rows[0]);
                console.log("Query INSERT successfully.");
            }
        )
    } catch (error) {
        console.error("POST query error. Error: ", error);
    }
});

router.delete("/:id", (req,res) => {
    try {
        console.log("Query DELETE executing: ", req.params.id);
        const id = req.params.id;
        client.query(
            "DELETE FROM questions WHERE id = $1",
            [id],
            function (error, result) {
                if (error) return console.log("Error executing DELETE ${id} query. Error: " + error);
                else {
                    result.rowCount == 0 ? 
                    res.status(400).json({ info: "User not found" }) 
                    : res.status(200).json({ info: "User successfully deleted"});
                }
                console.log("Query DELETE sucessfully");
            }
        )

    } catch (error) {
        console.error("DELETE query error. Error: ", error);
    }
});

router.put("/:id", (req,res) => {
    try {
        console.log("Query PUT executing");
        const id = req.params.id;
        const { answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10 } = req.body;
        client.query(
            "UPDATE questions SET answer1=$1, answer2=$2, answer3=$3, answer4=$4, answer5=$5, answer6=$6, answer7=$7, answer8=$8, answer9=$9, answer10=$10",
            [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10],
            function (error, result) {
                if (error) return console.error("Error executing UPDATE query. Error: " + error);
                else {
                    res.setHeader("id", id);
                    res.status(202).json({identifier: id});
                    console.log("Query UPDATE successfully.");
                }
            }
        )
    } catch (error) {
        console.error("DELETE query error. Error: ", error);
    }
})

module.exports = router;