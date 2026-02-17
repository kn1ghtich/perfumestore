const mongoose = require('mongoose');
const { mongoUri } = require('./env');

async function connectMongo() {
  if (!mongoUri) {
    console.warn('MONGO_URI is not set. MongoDB integration is disabled.');
    return;
  }

  await mongoose.connect(mongoUri);
  console.log('MongoDB connected');
}

module.exports = { connectMongo };
