const express = require("express");
const router = express.Router();

let players = require("../dummyDatabase");

router.get("/list", async (req, res) => {
    try {
        res.status(200).json({
            data: players
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

router.get("/list/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
        let player = players.find(player => player._id === id);
        res.status(200).json({
            data: player
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

let listArr = [];

router.post("/list", async (req, res) => {
    list = req.body;
    console.log(list);
    listArr.push(list);
    res.send("item added!");
})

module.exports = router;