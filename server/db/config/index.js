const mongoose = require('mongoose');

const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established!');
});