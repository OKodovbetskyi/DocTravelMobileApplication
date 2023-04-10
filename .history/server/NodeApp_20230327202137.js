const express = require('express');
const cors = require('cors');
const router = require('./router.js');
const path = require('path');
const IP = "";
const PORT= 3000;
const app = express();
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");
const db = require('./src/mongodb_connection.js')
const addNewPost = async ()=>{

  db.getConnection().collection('posts').insertOne({title:'My Story', user:'Alex_Kodovbetskyi', content: 'Very intereesting story about drones particularlly fpv drones. Has anybody started this hobby recently? How did you get into fpv'}, (err, result)=>{
    if (err){
      console.log(err);
      return;
    }
    console.log(result);
  })
}
const readallPosts = async () =>{
  const dbConn = await db.getConnection()
  dbConn.collection('posts').find({}).toArray((err,result)=>{
    if (err) {throw err};
    return result;
  })
}
console.log(readallPosts());
const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 100, 
  message: "Too many requests, please try again later",
});

// apply the rate limiter to all requests
app.use(limiter);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 // applying handler for API
 app.use("/", router);
 // Handling serving static files
 app.use(express.static(path.join(__dirname, '../client/build')));
 // Serving app on PORT we defined
 app.listen(PORT, () => {
   console.log(`Express is running on port ${PORT}`);
 });