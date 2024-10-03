// routes/userRoutes.js
const express = require('express');
const User = require('../models/user'); // Verifique se o caminho está correto

const router = express.Router();

// Criar um novo usuário
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ler todos os usuários
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualizar um usuário
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

        await user.update(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Excluir um usuário
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

        await user.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;