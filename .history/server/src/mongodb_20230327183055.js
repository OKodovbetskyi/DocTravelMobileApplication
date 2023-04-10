const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://unidev:Ka090399$@cluster0.zy3cbgh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});