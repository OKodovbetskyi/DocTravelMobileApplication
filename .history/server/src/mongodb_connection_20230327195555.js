const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alexdeveloper:zwWMyo0cEMANfT0C@cluster0.zy3cbgh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url, { useUnifiedTopology: true });

const dbConnection = async()=>{
    try {
        await client.connect();
        console.log('Connected to MongoDB');
      } catch (err) {
        console.error(err);
      }
}

const getConnection = ()=>{
  return client.db(); 
}

module.exports = {
    dbConnection,
   getConnection,
};