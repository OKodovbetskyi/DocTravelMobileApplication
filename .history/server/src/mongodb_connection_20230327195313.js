const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alexdeveloper:zwWMyo0cEMANfT0C@cluster0.zy3cbgh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url, { useUnifiedTopology: true });


module.exports = client;