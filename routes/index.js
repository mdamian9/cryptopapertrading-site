const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Test get endpoint.");
});

router.post("/test", (req, res) => {
    res.send("Test post endpoint.");
});

router.put("/test", (req, res) => {
    res.send("Test put endpoint.");
});

router.delete("/test", (req, res) => {
    res.send("Test delete endpoint.");
});

module.exports = router;
