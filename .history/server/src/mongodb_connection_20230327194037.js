const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alexdeveloper:zwWMyo0cEMANfT0C@cluster0.zy3cbgh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri)
                      
dbConnection = async()=> {
        try {
            await client.connect();
            console.log("Connected correctly to server");
    
        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }

module.exports = dbConnection;