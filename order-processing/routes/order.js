const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create Order
router.post('/', async (req, res) => {
    const { userId, products, total } = req.body;

    try {
        const order = new Order({ userId, products, total });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get Orders by User
router.get('/user/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
