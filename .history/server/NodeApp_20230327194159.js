const express = require('express');
const cors = require('cors');
const router = require('./router.js');
const path = require('path');
const IP = "";
const PORT= 3000;
const app = express();
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");


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