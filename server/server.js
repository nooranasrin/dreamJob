import app from './src/app.js';
import { client } from './db.js';

const PORT = 8000;

const server = await app.listen(PORT, () =>
  console.log(`server started listening on port ${PORT}`)
);

process.on('SIGINT', () => {
  server.close(() => {
    console.log('closing server');
    client.close();
  });
});
