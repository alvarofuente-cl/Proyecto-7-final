const { MongoClient, ServerApiVersion } = require('mongodb');

const connectDB = async () => {
  const uri = process.env.DB_URI;

  if (!uri) {
    console.error('La URI de la base de datos no está definida. Asegúrate de que DB_URI esté configurado en el archivo .env.');
    process.exit(1);
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error(`Error al conectar a la base de datos: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
