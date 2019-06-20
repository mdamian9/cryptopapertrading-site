const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    res.status(200).json({ message: '/signup route POST' });
});

module.exports = router;
