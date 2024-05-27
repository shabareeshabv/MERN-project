const express = require('express');
const app = express();
const mongoDB = require('./db');
mongoDB();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hii');
});

app.use(express.json())
app.use("/api",require("./Routes/CreateUser"))

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
