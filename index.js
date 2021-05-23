const server = require('./src/server');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MANGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch(e => console.error('Could not start server', e.message));
