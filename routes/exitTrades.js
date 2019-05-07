const express = require('express');
const router = express.Router();

router.get('/exit-trades', (req, res) => {
    res.send('exit GET');
});

router.post('/exit-trades', (req, res) => {
    res.send('exit POST');
});

router.put('/exit-trades', (req, res) => {
    res.send('exit PUT');
});

router.delete('/exit-trades', (req, res) => {
    res.send('exit DELETE');
});

module.exports = router;
