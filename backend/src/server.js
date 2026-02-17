const app = require('./app');
const { port } = require('./config/env');
const { connectMongo } = require('./config/mongo');

async function start() {
  await connectMongo();

  app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
  });
}

start().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});
