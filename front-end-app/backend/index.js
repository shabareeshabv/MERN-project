const express = require('express');
const app = express();
const mongoDB = require('./db');
const cors = require('cors');

mongoDB();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', require('./Routes/Auth'));
app.use('/api/students', require('./Routes/Students'));


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
