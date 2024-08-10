const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');



const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'User Management API',
            description: 'User Management API Information',
            version: '1.0.0',
        },
    },
    apis: ['index.js', './routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/user-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
    res.send('User Management Service');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
