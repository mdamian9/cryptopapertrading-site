const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User instance to read and write database records in MongoDB
const User = require('../models/UserModel');

router.post('/signup', (req, res, next) => {
    // First look up user email to make sure no duplicate users are created
    User.find({ email: req.body.email }).then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: 'User already exists'
            });
        } else {
            // First, try to create password by passing in the password, salt rounds, and callback to bcrypt.hash
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    res.status(500).json({
                        message: 'Unable to create password',
                        error: err
                    });
                } else {
                    const newUser = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        username: req.body.username,
                        password: hash
                    });
                    newUser.save().then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: 'Created new user successfully.'
                        });
                    }).catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });
                };
            });
        };
    });
});

module.exports = router;
