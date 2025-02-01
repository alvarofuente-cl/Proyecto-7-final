const { MongoClient, ServerApiVersion } = require('mongodb');

const connectDB = async () => {
  const uri = process.env.DB_URI;
  
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error(`Error al conectar a la base de datos: ${error.message}`);
    process.exit(1);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

module.exports = connectDB;
