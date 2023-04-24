const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';

MongoClient.connect(uri, {
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB', err);
    return;
  }

  const db = client.db('Catalist'); // Cambia 'myDatabaseName' por el nombre de tu base de datos
  console.log('Connected to MongoDB');

  const {
    MongoClient
  } = require('mongodb');
  // or as an es module:
  // import { MongoClient } from 'mongodb'

  // Connection URL
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);

  // Database Name
  const dbName = 'Catalist';

  async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    // the following code examples can be pasted here...

    return 'done.';
  }

  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
});