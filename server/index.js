
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const InitMongoServer = require('./config/db');
const user = require('./routes/user');

require('dotenv').config();
InitMongoServer();

const app = express();
const path = require('path');

const whiteList = process.env.LOCAL_URI;
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(cors(corsOptions));
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
