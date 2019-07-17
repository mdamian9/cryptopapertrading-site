const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db_Users = require('../models/UserModel');

router.post('/signup', (req, res, next) => {
    // res.status(200).json({ message: '/signup route POST' });
    db_Users.find({ email: req.body.email }).then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: 'User already exists'
            });
        } else {
            console.log('creating new user');
            // bcrypt.hash(req.body.password, 10, (err, hash) => {
            //     if (err) {
            //         res.status(500).json({
            //             message: 'Unable to create password',
            //             error: err
            //         });
            //     } else {

            //     }
            // });
        };
    });
});

module.exports = router;
