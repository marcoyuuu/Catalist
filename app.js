const express = require('express');
const cors = require('cors');
const {
  MongoClient,
  ServerApiVersion
} = require('mongodb');
const app = express();

console.log('Starting server...');

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://marcoyu:catalist@catalist.mkcnmul.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const db = client.db('Catalist');
    console.log('Connected to MongoDB');

    console.log('Setting up routes...');

    app.post('/clientes', async (req, res) => {
      const cliente = req.body;
      try {
        const collection = db.collection('clientes');
        await collection.insertOne(cliente);
        res.status(201).json({
          message: 'Cliente creado con éxito'
        });
      } catch (error) {
        console.error('Error al crear cliente', error);
        res.status(500).json({
          message: 'Error al crear cliente'
        });
      }
    });

    app.use(express.static('public'));

    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });

  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  } finally {
    // We don't close the client here, because it will close the connection to MongoDB
  }
}

run().catch(console.dir);