const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/order');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/orders', orderRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/order-processing', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
    res.send('Order Processing Service');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
