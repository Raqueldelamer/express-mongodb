const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

require('dotenv').config()
// console.log(process.env)
const mongoUrl = process.env.MONGO_URL

// Connect to MongoDB
mongoose
    .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
    console.log('Connected to MongoDB');
    })
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});