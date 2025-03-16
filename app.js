const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Contact Book Application' });
});
module.exports = app;