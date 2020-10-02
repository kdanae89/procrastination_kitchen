const mongoose = require('mongoose');

const DBURI = "mongodb://127.0.0.1:27017/pk";

const InitMongoServer = async () => {
  try {
    await mongoose.connect(DBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("DB connected");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitMongoServer;
