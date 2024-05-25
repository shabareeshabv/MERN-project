const express = require('express');
const app = express();
const mongoDB = require('./db');
mongoDB();
const port = 5000;

app.get('/', (req, res) => {
    res.send('HELLLLOoo');
});

app.get('/createUser', (req, res) => {
    res.send('ook creating user');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
