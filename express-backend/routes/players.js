const express = require("express");
const router = express.Router();

let players = require("../dummyDatabase");

router.get("/", async (req, res) => {
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

router.get("/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
        let player = players.find(player => player._id === id);
        res.status(200).json({
            data: player
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured.",
            err
        });
    }
});

router.post("/", async (req, res) => {
    const player = req.body;
    if (!player) {
        res.status(400).json({
            message: "Must provide a player."
        });
    }
    if (!player.name) {
        res.status(400).json({
            message: "Player must have a name"
        });
    }
    if (!player.runs) {
        res.status(400).json({
            message: "Player must have a run time."
        });
    }
    let playerIds = players.map((player) => player._id).sort((a, b) => a - b);
    const newPlayerId = playerIds[playerIds.length-1] + 1;
    player._id = newPlayerId;
    players.push(player);
    res.send("item added!");
});

module.exports = router;