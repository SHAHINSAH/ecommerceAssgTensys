const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [
        {
            productId: String,
            quantity: Number,
        },
    ],
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
    },
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
