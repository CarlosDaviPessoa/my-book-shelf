const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Rota para criar um novo usuário
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Rota para obter todos os usuários
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
