const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alexdeveloper:zwWMyo0cEMANfT0C@cluster0.zy3cbgh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri)
 // The database to use
 const dbName = "test";
                      
 module.exports = function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("people");

         // Construct a document                                                                                                                                            

        

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
