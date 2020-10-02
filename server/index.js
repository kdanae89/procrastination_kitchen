
const express = require('express');
const bodyParser = require('body-parser');

const InitMongoServer = require('./config/db');
const user = require('./routes/user');

require('dotenv').config();
InitMongoServer();

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ message: "We up"});
});

app.use('/user', user);

app.listen({port}, () => {
  console.log(`server start on port ${port}`);
});
