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

router.post('/login', (req, res, next) => {
    let dbQuery, userKey, secondaryKey;
    if (req.body.username) {
        dbQuery = { username: req.body.username }, userKey = 'username', secondaryKey = 'email';
    } else {
        dbQuery = { email: req.body.email }, userKey = 'email', secondaryKey = 'username';
    };
    User.findOne(dbQuery).then(user => {
        if (!user) {
            return res.status(404).json({
                message: `No user found using ${userKey}, try logging in with ${secondaryKey}`
            });
        };
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                return res.status(401).json({ message: 'Auth failed' });
            };
            if (result) {
                const token = jwt.sign(
                    {
                        email: user.email,
                        userId: user._id
                    },
                    process.env.JWT_KEY,
                    { expiresIn: '1hr' }
                );
                return res.status(200).json({
                    message: `Auth successful using ${userKey}`,
                    token: token
                });
            };
            res.status(401).json({ message: 'Auth failed' });
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;
