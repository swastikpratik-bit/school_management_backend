const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/addSchool', async (req, res) => {
  
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || typeof latitude !== 'number' || typeof longitude !== 'number') {
        return res.status(400).json({ error: 'Invalid input data' });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
            [name, address, latitude, longitude]
        );
        res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
